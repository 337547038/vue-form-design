export function evil(fn) {
  const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn('return ' + fn)()
}

export function jsonStringify(obj) {
  return JSON.stringify(obj, function (key, val) {
    if (typeof val === 'function') {
      return val + ''
    }
    return val
  })
}

export function jsonParse(string) {
  return JSON.parse(string, function (k, v) {
    if (v.indexOf && v.indexOf('function') > -1) {
      return evil('(function(){return ' + v + ' })()')
    }
    return v
  })
}

export function obj2string(o) {
  var r = []
  if (typeof o === 'string') {
    return '"' + o.replace(/([\\'\\"\\])/g, '\\$1').replace(/(\n)/g, '\\n').replace(/(\r)/g, '\\r').replace(/(\t)/g, '\\t') + '"'
  }
  if (typeof o === 'object') {
    if (!o.sort) {
      for (let i in o) {
        r.push(i + ':' + obj2string(o[i]))
      }
      if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
        r.push('toString:' + o.toString.toString())
      }
      r = '{' + r.join() + '}'
    } else {
      for (let i = 0; i < o.length; i++) {
        r.push(obj2string(o[i]))
      }
      r = '[' + r.join() + ']'
    }
    return r
  }
  return o && o.toString()
}
