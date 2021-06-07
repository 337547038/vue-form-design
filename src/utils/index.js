export function evil(fn) {
  const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn('return ' + fn)()
}

// json对象转换成字符串
/*
var str = JSON.stringify(json, function(key, val) {
  if (typeof val === 'function') {
    return val + '';
  }
  return val;
});
// json字符串转换成对象
var json = JSON.parse(str,function(k,v){
  if(v.indexOf && v.indexOf('function') > -1){
    return eval("(function(){return "+v+" })()")
  }
  return v;

————————————————
版权声明：本文为CSDN博主「ao123056」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/ao123056/article/details/98728814 */
