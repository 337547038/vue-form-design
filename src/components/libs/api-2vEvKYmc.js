/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { Fragment as e, Transition as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, getCurrentInstance as u, getCurrentScope as d, inject as f, isRef as p, isVNode as m, mergeProps as h, nextTick as g, normalizeClass as _, normalizeStyle as ee, onMounted as v, onScopeDispose as te, openBlock as y, provide as b, readonly as x, ref as S, render as C, renderSlot as w, resolveDynamicComponent as ne, shallowReactive as T, toDisplayString as re, unref as E, vShow as ie, warn as ae, watch as oe, withCtx as se, withDirectives as ce, withModifiers as le } from "vue";
import { defineStore as ue } from "pinia";
//#region \0rolldown/runtime.js
var de = Object.create, fe = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, me = Object.getOwnPropertyNames, he = Object.getPrototypeOf, ge = Object.prototype.hasOwnProperty, _e = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ve = (e, t) => {
	let n = {};
	for (var r in e) fe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || fe(n, Symbol.toStringTag, { value: "Module" }), n;
}, ye = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = me(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ge.call(e, s) && s !== n && fe(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = pe(t, s)) || r.enumerable
	});
	return e;
}, be = (e, t, n) => (n = e == null ? {} : de(he(e)), ye(t || !e || !e.__esModule ? fe(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), xe = typeof global == "object" && global && global.Object === Object && global, Se = typeof self == "object" && self && self.Object === Object && self, D = xe || Se || Function("return this")(), O = D.Symbol, Ce = Object.prototype, we = Ce.hasOwnProperty, Te = Ce.toString, Ee = O ? O.toStringTag : void 0;
function De(e) {
	var t = we.call(e, Ee), n = e[Ee];
	try {
		e[Ee] = void 0;
		var r = !0;
	} catch {}
	var i = Te.call(e);
	return r && (t ? e[Ee] = n : delete e[Ee]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var Oe = Object.prototype.toString;
function ke(e) {
	return Oe.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var Ae = "[object Null]", je = "[object Undefined]", Me = O ? O.toStringTag : void 0;
function Ne(e) {
	return e == null ? e === void 0 ? je : Ae : Me && Me in Object(e) ? De(e) : ke(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function Pe(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var Fe = "[object Symbol]";
function Ie(e) {
	return typeof e == "symbol" || Pe(e) && Ne(e) == Fe;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function Le(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var Re = Array.isArray, ze = Infinity, Be = O ? O.prototype : void 0, Ve = Be ? Be.toString : void 0;
function He(e) {
	if (typeof e == "string") return e;
	if (Re(e)) return Le(e, He) + "";
	if (Ie(e)) return Ve ? Ve.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -ze ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function Ue(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var We = "[object AsyncFunction]", Ge = "[object Function]", Ke = "[object GeneratorFunction]", qe = "[object Proxy]";
function Je(e) {
	if (!Ue(e)) return !1;
	var t = Ne(e);
	return t == Ge || t == Ke || t == We || t == qe;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Ye = D["__core-js_shared__"], Xe = function() {
	var e = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Ze(e) {
	return !!Xe && Xe in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var Qe = Function.prototype.toString;
function $e(e) {
	if (e != null) {
		try {
			return Qe.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var et = /[\\^$.*+?()[\]{}|]/g, tt = /^\[object .+?Constructor\]$/, nt = Function.prototype, rt = Object.prototype, it = nt.toString, at = rt.hasOwnProperty, ot = RegExp("^" + it.call(at).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function st(e) {
	return !Ue(e) || Ze(e) ? !1 : (Je(e) ? ot : tt).test($e(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function ct(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function lt(e, t) {
	var n = ct(e, t);
	return st(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var ut = function() {
	try {
		var e = lt(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function dt(e, t, n) {
	t == "__proto__" && ut ? ut(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function ft(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function pt(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
var mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ht = /^\w*$/;
function gt(e, t) {
	if (Re(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || Ie(e) ? !0 : ht.test(e) || !mt.test(e) || t != null && e in Object(t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var _t = lt(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function vt() {
	this.__data__ = _t ? _t(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function yt(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var bt = "__lodash_hash_undefined__", xt = Object.prototype.hasOwnProperty;
function St(e) {
	var t = this.__data__;
	if (_t) {
		var n = t[e];
		return n === bt ? void 0 : n;
	}
	return xt.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Ct = Object.prototype.hasOwnProperty;
function wt(e) {
	var t = this.__data__;
	return _t ? t[e] !== void 0 : Ct.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var Tt = "__lodash_hash_undefined__";
function Et(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = _t && t === void 0 ? Tt : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function k(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
k.prototype.clear = vt, k.prototype.delete = yt, k.prototype.get = St, k.prototype.has = wt, k.prototype.set = Et;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function Dt() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function Ot(e, t) {
	for (var n = e.length; n--;) if (ft(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var kt = Array.prototype.splice;
function At(e) {
	var t = this.__data__, n = Ot(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : kt.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function jt(e) {
	var t = this.__data__, n = Ot(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function Mt(e) {
	return Ot(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function Nt(e, t) {
	var n = this.__data__, r = Ot(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function A(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
A.prototype.clear = Dt, A.prototype.delete = At, A.prototype.get = jt, A.prototype.has = Mt, A.prototype.set = Nt;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Pt = lt(D, "Map");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function Ft() {
	this.size = 0, this.__data__ = {
		hash: new k(),
		map: new (Pt || A)(),
		string: new k()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function It(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function Lt(e, t) {
	var n = e.__data__;
	return It(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function Rt(e) {
	var t = Lt(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function zt(e) {
	return Lt(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function Bt(e) {
	return Lt(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function Vt(e, t) {
	var n = Lt(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function j(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
j.prototype.clear = Ft, j.prototype.delete = Rt, j.prototype.get = zt, j.prototype.has = Bt, j.prototype.set = Vt;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var Ht = "Expected a function";
function Ut(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Ht);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Ut.Cache || j)(), n;
}
Ut.Cache = j;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var Wt = 500;
function Gt(e) {
	var t = Ut(e, function(e) {
		return n.size === Wt && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Kt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qt = /\\(\\)?/g, Jt = Gt(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Kt, function(e, n, r, i) {
		t.push(r ? i.replace(qt, "$1") : n || e);
	}), t;
});
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function Yt(e) {
	return e == null ? "" : He(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
function Xt(e, t) {
	return Re(e) ? e : gt(e, t) ? [e] : Jt(Yt(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
var Zt = Infinity;
function Qt(e) {
	if (typeof e == "string" || Ie(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Zt ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
function $t(e, t) {
	t = Xt(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[Qt(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/get.js
function en(e, t, n) {
	var r = e == null ? void 0 : $t(e, t);
	return r === void 0 ? n : r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var tn = pt(Object.getPrototypeOf, Object), nn = "[object Object]", rn = Function.prototype, an = Object.prototype, on = rn.toString, sn = an.hasOwnProperty, cn = on.call(Object);
function ln(e) {
	if (!Pe(e) || Ne(e) != nn) return !1;
	var t = tn(e);
	if (t === null) return !0;
	var n = sn.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && on.call(n) == cn;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/fromPairs.js
function un(e) {
	for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
		var i = e[t];
		dt(r, i[0], i[1]);
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/constants/aria.mjs
var dn = {
	tab: "Tab",
	enter: "Enter",
	space: "Space",
	left: "ArrowLeft",
	up: "ArrowUp",
	right: "ArrowRight",
	down: "ArrowDown",
	esc: "Escape",
	delete: "Delete",
	backspace: "Backspace",
	numpadEnter: "NumpadEnter",
	pageUp: "PageUp",
	pageDown: "PageDown",
	home: "Home",
	end: "End"
}, fn = [
	"",
	"default",
	"small",
	"large"
];
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@12.0.0_typescript@6.0.3/node_modules/@vueuse/shared/index.mjs
function pn(e) {
	return d() ? (te(e), !0) : !1;
}
function mn(e) {
	return typeof e == "function" ? e() : E(e);
}
var M = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var hn = Object.prototype.toString, gn = (e) => hn.call(e) === "[object Object]", _n = () => {};
function vn(e, t, n = {}) {
	let { immediate: r = !0 } = n, i = S(!1), a = null;
	function o() {
		a &&= (clearTimeout(a), null);
	}
	function s() {
		i.value = !1, o();
	}
	function c(...n) {
		o(), i.value = !0, a = setTimeout(() => {
			i.value = !1, a = null, e(...n);
		}, mn(t));
	}
	return r && (i.value = !0, M && c()), pn(s), {
		isPending: x(i),
		start: c,
		stop: s
	};
}
//#endregion
//#region node_modules/.pnpm/@vueuse+core@12.0.0_typescript@6.0.3/node_modules/@vueuse/core/index.mjs
var yn = M ? window : void 0;
M && window.document, M && window.navigator, M && window.location;
function bn(e) {
	let t = mn(e);
	return t?.$el ?? t;
}
function xn(...e) {
	let t, n, r, i;
	if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, i] = e, t = yn) : [t, n, r, i] = e, !t) return _n;
	Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
	let a = [], o = () => {
		a.forEach((e) => e()), a.length = 0;
	}, s = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), c = oe(() => [bn(t), mn(i)], ([e, t]) => {
		if (o(), !e) return;
		let i = gn(t) ? { ...t } : t;
		a.push(...n.flatMap((t) => r.map((n) => s(e, t, n, i))));
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => {
		c(), o();
	};
	return pn(l), l;
}
function Sn() {
	let e = S(!1), t = u();
	return t && v(() => {
		e.value = !0;
	}, t), e;
}
function Cn(e) {
	let t = Sn();
	return n(() => (t.value, !!e()));
}
function wn(e, t, r = {}) {
	let { window: i = yn, ...a } = r, o, s = Cn(() => i && "ResizeObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = oe(n(() => {
		let t = mn(e);
		return Array.isArray(t) ? t.map((e) => bn(e)) : [bn(t)];
	}), (e) => {
		if (c(), s.value && i) {
			o = new ResizeObserver(t);
			for (let t of e) t && o.observe(t, a);
		}
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => {
		c(), l();
	};
	return pn(u), {
		isSupported: s,
		stop: u
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/utils/browser.mjs
var Tn = () => M && /android/i.test(window.navigator.userAgent);
process.env.NODE_ENV === "production" || Object.freeze({}), process.env.NODE_ENV === "production" || Object.freeze([]);
var En = Object.prototype.hasOwnProperty, Dn = (e, t) => En.call(e, t), On = Array.isArray, kn = (e) => typeof e == "function", N = (e) => typeof e == "string", An = (e) => typeof e == "object" && !!e, jn = (e) => typeof e == "boolean", P = (e) => typeof e == "number", Mn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Nn = (e) => N(e) ? !Number.isNaN(Number(e)) : !1, Pn = (e) => {
	if (e.code && e.code !== "Unidentified") return e.code;
	let t = Fn(e);
	if (t) {
		if (Object.values(dn).includes(t)) return t;
		switch (t) {
			case " ": return dn.space;
			default: return "";
		}
	}
	return "";
}, Fn = (e) => {
	let t = e.key && e.key !== "Unidentified" ? e.key : "";
	if (!t && e.type === "keyup" && Tn()) {
		let n = e.target;
		t = n.value.charAt(n.selectionStart - 1);
	}
	return t;
}, In = (e) => Object.keys(e), Ln = "__epPropKey", F = (e) => e, Rn = (e) => An(e) && !!e.__epPropKey, zn = (e, t) => {
	if (!An(e) || Rn(e)) return e;
	let { values: n, required: r, default: i, type: a, validator: o } = e, s = {
		type: a,
		required: !!r,
		validator: n || o ? (r) => {
			let a = !1, s = [];
			if (n && (s = Array.from(n), Dn(e, "default") && s.push(i), a ||= s.includes(r)), o && (a ||= o(r)), !a && s.length > 0) {
				let e = [...new Set(s)].map((e) => JSON.stringify(e)).join(", ");
				ae(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${e}], got value ${JSON.stringify(r)}.`);
			}
			return a;
		} : void 0,
		[Ln]: !0
	};
	return Dn(e, "default") && (s.default = i), s;
}, Bn = (e) => un(Object.entries(e).map(([e, t]) => [e, zn(t, e)])), Vn = class extends Error {
	constructor(e) {
		super(e), this.name = "ElementPlusError";
	}
};
function Hn(e, t) {
	{
		let n = N(e) ? new Vn(`[${e}] ${t}`) : e;
		console.warn(n);
	}
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/utils/dom/style.mjs
var Un = "utils/dom/style";
function Wn(e, t = "px") {
	if (!e && e !== 0) return "";
	if (P(e) || Nn(e)) return `${e}${t}`;
	if (N(e)) return e;
	Hn(Un, "binding value must be a string or number");
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/locale/lang/en.mjs
var Gn = {
	name: "en",
	el: {
		breadcrumb: { label: "Breadcrumb" },
		colorpicker: {
			confirm: "OK",
			clear: "Clear",
			defaultLabel: "color picker",
			description: "current color is {color}. press enter to select a new color.",
			alphaLabel: "pick alpha value",
			alphaDescription: "alpha {alpha}, current color is {color}",
			hueLabel: "pick hue value",
			hueDescription: "hue {hue}, current color is {color}",
			svLabel: "pick saturation and brightness value",
			svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
			predefineDescription: "select {value} as the color"
		},
		datepicker: {
			now: "Now",
			today: "Today",
			cancel: "Cancel",
			clear: "Clear",
			confirm: "OK",
			dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
			monthTablePrompt: "Use the arrow keys and enter to select the month",
			yearTablePrompt: "Use the arrow keys and enter to select the year",
			selectedDate: "Selected date",
			selectDate: "Select date",
			selectTime: "Select time",
			startDate: "Start Date",
			startTime: "Start Time",
			endDate: "End Date",
			endTime: "End Time",
			prevYear: "Previous Year",
			nextYear: "Next Year",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			year: "",
			month1: "January",
			month2: "February",
			month3: "March",
			month4: "April",
			month5: "May",
			month6: "June",
			month7: "July",
			month8: "August",
			month9: "September",
			month10: "October",
			month11: "November",
			month12: "December",
			weeks: {
				sun: "Sun",
				mon: "Mon",
				tue: "Tue",
				wed: "Wed",
				thu: "Thu",
				fri: "Fri",
				sat: "Sat"
			},
			weeksFull: {
				sun: "Sunday",
				mon: "Monday",
				tue: "Tuesday",
				wed: "Wednesday",
				thu: "Thursday",
				fri: "Friday",
				sat: "Saturday"
			},
			months: {
				jan: "Jan",
				feb: "Feb",
				mar: "Mar",
				apr: "Apr",
				may: "May",
				jun: "Jun",
				jul: "Jul",
				aug: "Aug",
				sep: "Sep",
				oct: "Oct",
				nov: "Nov",
				dec: "Dec"
			}
		},
		inputNumber: {
			decrease: "decrease number",
			increase: "increase number"
		},
		select: {
			loading: "Loading",
			noMatch: "No matching data",
			noData: "No data",
			placeholder: "Select"
		},
		mention: { loading: "Loading" },
		dropdown: { toggleDropdown: "Toggle Dropdown" },
		cascader: {
			noMatch: "No matching data",
			loading: "Loading",
			placeholder: "Select",
			noData: "No data"
		},
		pagination: {
			goto: "Go to",
			pagesize: "/page",
			total: "Total {total}",
			pageClassifier: "",
			page: "Page",
			prev: "Go to previous page",
			next: "Go to next page",
			currentPage: "page {pager}",
			prevPages: "Previous {pager} pages",
			nextPages: "Next {pager} pages",
			deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
		},
		dialog: { close: "Close this dialog" },
		drawer: { close: "Close this dialog" },
		messagebox: {
			title: "Message",
			confirm: "OK",
			cancel: "Cancel",
			error: "Illegal input",
			close: "Close this dialog"
		},
		upload: {
			deleteTip: "press delete to remove",
			delete: "Delete",
			preview: "Preview",
			continue: "Continue"
		},
		slider: {
			defaultLabel: "slider between {min} and {max}",
			defaultRangeStartLabel: "pick start value",
			defaultRangeEndLabel: "pick end value"
		},
		table: {
			emptyText: "No Data",
			confirmFilter: "Confirm",
			resetFilter: "Reset",
			clearFilter: "All",
			sumText: "Sum",
			selectAllLabel: "Select all rows",
			selectRowLabel: "Select this row",
			expandRowLabel: "Expand this row",
			collapseRowLabel: "Collapse this row",
			sortLabel: "Sort by {column}",
			filterLabel: "Filter by {column}"
		},
		tag: { close: "Close this tag" },
		tour: {
			next: "Next",
			previous: "Previous",
			finish: "Finish",
			close: "Close this dialog"
		},
		tree: { emptyText: "No Data" },
		transfer: {
			noMatch: "No matching data",
			noData: "No data",
			titles: ["List 1", "List 2"],
			filterPlaceholder: "Enter keyword",
			noCheckedFormat: "{total} items",
			hasCheckedFormat: "{checked}/{total} checked"
		},
		image: { error: "FAILED" },
		pageHeader: { title: "Back" },
		popconfirm: {
			confirmButtonText: "Yes",
			cancelButtonText: "No"
		},
		carousel: {
			leftArrow: "Carousel arrow left",
			rightArrow: "Carousel arrow right",
			indicator: "Carousel switch to index {index}"
		}
	}
}, Kn = (e) => (t, n) => qn(t, n, E(e)), qn = (e, t, n) => en(n, e, e).replace(/\{(\w+)\}/g, (e, n) => `${t?.[n] ?? `{${n}}`}`), Jn = (e) => ({
	lang: n(() => E(e).name),
	locale: p(e) ? e : S(e),
	t: Kn(e)
}), Yn = Symbol("localeContextKey"), Xn = (e) => {
	let t = e || f(Yn, S());
	return Jn(n(() => t.value || Gn));
}, Zn = "is-", I = (e, t, n, r, i) => {
	let a = `${e}-${t}`;
	return n && (a += `-${n}`), r && (a += `__${r}`), i && (a += `--${i}`), a;
}, Qn = Symbol("namespaceContextKey"), $n = (e) => {
	let t = e || (u() ? f(Qn, S("el")) : S("el"));
	return n(() => E(t) || "el");
}, er = (e, t) => {
	let n = $n(t);
	return {
		namespace: n,
		b: (t = "") => I(n.value, e, t, "", ""),
		e: (t) => t ? I(n.value, e, "", t, "") : "",
		m: (t) => t ? I(n.value, e, "", "", t) : "",
		be: (t, r) => t && r ? I(n.value, e, t, r, "") : "",
		em: (t, r) => t && r ? I(n.value, e, "", t, r) : "",
		bm: (t, r) => t && r ? I(n.value, e, t, "", r) : "",
		bem: (t, r, i) => t && r && i ? I(n.value, e, t, r, i) : "",
		is: (e, ...t) => {
			let n = t.length >= 1 ? t[0] : !0;
			return e && n ? `${Zn}${e}` : "";
		},
		cssVar: (e) => {
			let t = {};
			for (let r in e) e[r] && (t[`--${n.value}-${r}`] = e[r]);
			return t;
		},
		cssVarName: (e) => `--${n.value}-${e}`,
		cssVarBlock: (t) => {
			let r = {};
			for (let i in t) t[i] && (r[`--${n.value}-${e}-${i}`] = t[i]);
			return r;
		},
		cssVarBlockName: (t) => `--${n.value}-${e}-${t}`
	};
}, tr = { current: 0 }, nr = S(0), rr = 2e3, ir = Symbol("elZIndexContextKey"), ar = Symbol("zIndexContextKey"), or = (e) => {
	let t = u() ? f(ir, tr) : tr, r = e || (u() ? f(ar, void 0) : void 0), i = n(() => {
		let e = E(r);
		return P(e) ? e : rr;
	}), a = n(() => i.value + nr.value);
	return !M && !f(ir) && Hn("ZIndexInjection", "Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed\nusage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })"), {
		initialZIndex: i,
		currentZIndex: a,
		nextZIndex: () => (t.current++, nr.value = t.current, a.value)
	};
}, sr = zn({
	type: String,
	values: fn,
	required: !1
}), cr = Symbol("size"), lr = Symbol("emptyValuesContextKey"), ur = Bn({
	emptyValues: Array,
	valueOnClear: {
		type: F([
			String,
			Number,
			Boolean,
			Function
		]),
		default: void 0,
		validator: (e) => (e = kn(e) ? e() : e, On(e) ? e.every((e) => !e) : !e)
	}
}), dr = (e) => {
	let t = e.props, n = On(t) ? un(t.map((e) => [e, {}])) : t;
	e.setPropsDefaults = (t) => {
		if (n) {
			for (let [e, r] of Object.entries(t)) {
				let t = n[e];
				if (Dn(n, e)) {
					if (ln(t)) {
						n[e] = {
							...t,
							default: r
						};
						continue;
					}
					n[e] = {
						type: t,
						default: r
					};
				}
			}
			e.props = n;
		}
	};
}, fr = (e, t) => {
	if (e.install = (n) => {
		for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
	}, t) for (let [n, r] of Object.entries(t)) e[n] = r;
	return dr(e), e;
}, pr = (e, t) => (e.install = (n) => {
	e._context = n._context, n.config.globalProperties[t] = e;
}, e), mr = /* @__PURE__ */ l({
	name: "CircleCloseFilled",
	__name: "circle-close-filled",
	setup(e) {
		return (e, t) => (y(), a("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [o("path", {
			fill: "currentColor",
			d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
		})]));
	}
}), hr = /* @__PURE__ */ l({
	name: "Close",
	__name: "close",
	setup(e) {
		return (e, t) => (y(), a("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [o("path", {
			fill: "currentColor",
			d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
		})]));
	}
}), gr = /* @__PURE__ */ l({
	name: "InfoFilled",
	__name: "info-filled",
	setup(e) {
		return (e, t) => (y(), a("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [o("path", {
			fill: "currentColor",
			d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
		})]));
	}
}), _r = /* @__PURE__ */ l({
	name: "SuccessFilled",
	__name: "success-filled",
	setup(e) {
		return (e, t) => (y(), a("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [o("path", {
			fill: "currentColor",
			d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
		})]));
	}
}), vr = /* @__PURE__ */ l({
	name: "WarningFilled",
	__name: "warning-filled",
	setup(e) {
		return (e, t) => (y(), a("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [o("path", {
			fill: "currentColor",
			d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
		})]));
	}
}), yr = F([
	String,
	Object,
	Function
]), br = {
	Close: hr,
	SuccessFilled: _r,
	InfoFilled: gr,
	WarningFilled: vr,
	CircleCloseFilled: mr
}, xr = {
	primary: gr,
	success: _r,
	warning: vr,
	error: mr,
	info: gr
}, Sr = fr(/* @__PURE__ */ l({
	name: "ElIcon",
	inheritAttrs: !1,
	__name: "icon",
	props: Bn({
		size: { type: F([Number, String]) },
		color: { type: String }
	}),
	setup(e) {
		let t = e, r = er("icon"), i = n(() => {
			let { size: e, color: n } = t, r = Wn(e);
			return !r && !n ? {} : {
				fontSize: r,
				"--color": n
			};
		});
		return (e, t) => (y(), a("i", h({
			class: E(r).b(),
			style: i.value
		}, e.$attrs), [w(e.$slots, "default")], 16));
	}
})), Cr = (e) => e, wr = fr(/* @__PURE__ */ l({
	name: "ElBadge",
	__name: "badge",
	props: Bn({
		value: {
			type: [String, Number],
			default: ""
		},
		max: {
			type: Number,
			default: 99
		},
		isDot: Boolean,
		hidden: Boolean,
		type: {
			type: String,
			values: [
				"primary",
				"success",
				"warning",
				"info",
				"danger"
			],
			default: "danger"
		},
		showZero: {
			type: Boolean,
			default: !0
		},
		color: String,
		badgeStyle: { type: F([
			String,
			Object,
			Array
		]) },
		offset: {
			type: F(Array),
			default: () => [0, 0]
		},
		badgeClass: { type: String }
	}),
	setup(e, { expose: r }) {
		let o = e, l = er("badge"), u = n(() => o.isDot ? "" : P(o.value) && P(o.max) && o.max < o.value ? `${o.max}+` : `${o.value}`), d = n(() => [{
			backgroundColor: o.color,
			marginRight: Wn(-o.offset[0]),
			marginTop: Wn(o.offset[1])
		}, o.badgeStyle ?? {}]);
		return r({ content: u }), (n, r) => (y(), a("div", { class: _(E(l).b()) }, [w(n.$slots, "default"), c(t, { name: `${E(l).namespace.value}-zoom-in-center` }, {
			default: se(() => [!e.hidden && (u.value || e.isDot || n.$slots.content) ? (y(), a("sup", {
				key: 0,
				class: _([
					E(l).e("content"),
					E(l).em("content", e.type),
					E(l).is("fixed", !!n.$slots.default),
					E(l).is("dot", e.isDot),
					E(l).is("hide-zero", !e.showZero && e.value === 0),
					e.badgeClass
				]),
				style: ee(d.value)
			}, [w(n.$slots, "content", { value: u.value }, () => [s(re(u.value), 1)])], 6)) : i("v-if", !0)]),
			_: 3
		}, 8, ["name"])], 2));
	}
})), Tr = Symbol(), Er = S();
function Dr(e, t = void 0) {
	let r = u() ? f(Tr, Er) : Er;
	return e ? n(() => r.value?.[e] ?? t) : r;
}
function Or(e, t) {
	let r = Dr(), i = er(e, n(() => r.value?.namespace || "el")), a = Xn(n(() => r.value?.locale)), o = or(n(() => r.value?.zIndex || 2e3)), s = n(() => E(t) || r.value?.size || "");
	return kr(n(() => E(r) || {})), {
		ns: i,
		locale: a,
		zIndex: o,
		size: s
	};
}
var kr = (e, t, r = !1) => {
	let i = !!u(), a = i ? Dr() : void 0, o = t?.provide ?? (i ? b : void 0);
	if (!o) {
		Hn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
		return;
	}
	let s = n(() => {
		let t = E(e);
		return a?.value ? Ar(a.value, t) : t;
	});
	return o(Tr, s), o(Yn, n(() => s.value.locale)), o(Qn, n(() => s.value.namespace)), o(ar, n(() => s.value.zIndex)), o(cr, { size: n(() => s.value.size || "") }), o(lr, n(() => ({
		emptyValues: s.value.emptyValues,
		valueOnClear: s.value.valueOnClear
	}))), (r || !Er.value) && (Er.value = s.value), s;
}, Ar = (e, t) => {
	let n = [...new Set([...In(e), ...In(t)])], r = {};
	for (let i of n) r[i] = t[i] === void 0 ? e[i] : t[i];
	return r;
}, jr = Bn({
	a11y: {
		type: Boolean,
		default: !0
	},
	locale: { type: F(Object) },
	size: sr,
	button: { type: F(Object) },
	card: { type: F(Object) },
	dialog: { type: F(Object) },
	link: { type: F(Object) },
	experimentalFeatures: { type: F(Object) },
	keyboardNavigation: {
		type: Boolean,
		default: !0
	},
	message: { type: F(Object) },
	zIndex: Number,
	namespace: {
		type: String,
		default: "el"
	},
	table: { type: F(Object) },
	...ur
}), L = { placement: "top" };
l({
	name: "ElConfigProvider",
	props: jr,
	setup(e, { slots: t }) {
		let n = kr(e);
		return oe(() => e.message, (e) => {
			Object.assign(L, n?.value?.message ?? {}, e ?? {});
		}, {
			immediate: !0,
			deep: !0
		}), () => w(t, "default", { config: n?.value });
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/components/message/src/message.mjs
var Mr = [
	"primary",
	"success",
	"info",
	"warning",
	"error"
], Nr = [
	"top",
	"top-left",
	"top-right",
	"bottom",
	"bottom-left",
	"bottom-right"
], R = Cr({
	customClass: "",
	dangerouslyUseHTMLString: !1,
	duration: 3e3,
	icon: void 0,
	id: "",
	message: "",
	onClose: void 0,
	showClose: !1,
	type: "info",
	plain: !1,
	offset: 16,
	placement: void 0,
	zIndex: 0,
	grouping: !1,
	repeatNum: 1,
	appendTo: M ? document.body : void 0
}), Pr = Bn({
	customClass: {
		type: String,
		default: R.customClass
	},
	dangerouslyUseHTMLString: {
		type: Boolean,
		default: R.dangerouslyUseHTMLString
	},
	duration: {
		type: Number,
		default: R.duration
	},
	icon: {
		type: yr,
		default: R.icon
	},
	id: {
		type: String,
		default: R.id
	},
	message: {
		type: F([
			String,
			Object,
			Function
		]),
		default: R.message
	},
	onClose: {
		type: F(Function),
		default: R.onClose
	},
	showClose: {
		type: Boolean,
		default: R.showClose
	},
	type: {
		type: String,
		values: Mr,
		default: R.type
	},
	plain: {
		type: Boolean,
		default: R.plain
	},
	offset: {
		type: Number,
		default: R.offset
	},
	placement: {
		type: String,
		values: Nr,
		default: R.placement
	},
	zIndex: {
		type: Number,
		default: R.zIndex
	},
	grouping: {
		type: Boolean,
		default: R.grouping
	},
	repeatNum: {
		type: Number,
		default: R.repeatNum
	}
}), Fr = { destroy: () => !0 }, z = T({}), Ir = (e) => (z[e] || (z[e] = T([])), z[e]), Lr = (e, t) => {
	let n = z[t] || [], r = n.findIndex((t) => t.id === e), i = n[r], a;
	return r > 0 && (a = n[r - 1]), {
		current: i,
		prev: a
	};
}, Rr = (e, t) => {
	let { prev: n } = Lr(e, t);
	return n ? n.vm.exposed.bottom.value : 0;
}, zr = (e, t, n) => (z[n] || []).findIndex((t) => t.id === e) > 0 ? 16 : t, Br = ["id"], Vr = ["innerHTML"], Hr = /* @__PURE__ */ l({
	name: "ElMessage",
	__name: "message",
	props: Pr,
	emits: Fr,
	setup(s, { expose: l, emit: u }) {
		let { Close: d } = br, f = s, p = u, m = S(!1), { ns: h, zIndex: te } = Or("message"), { currentZIndex: b, nextZIndex: x } = te, C = S(), T = S(!1), ae = S(0), ue, de = n(() => f.type ? f.type === "error" ? "danger" : f.type : "info"), fe = n(() => {
			let e = f.type;
			return { [h.bm("icon", e)]: e && xr[e] };
		}), pe = n(() => f.icon || xr[f.type] || ""), me = n(() => f.placement || "top"), he = n(() => Rr(f.id, me.value)), ge = n(() => Math.max(zr(f.id, f.offset, me.value) + he.value, f.offset)), _e = n(() => ae.value + ge.value), ve = n(() => me.value.includes("left") ? h.is("left") : me.value.includes("right") ? h.is("right") : h.is("center")), ye = n(() => me.value.startsWith("top") ? "top" : "bottom"), be = n(() => ({
			[ye.value]: `${ge.value}px`,
			zIndex: b.value
		}));
		function xe() {
			f.duration !== 0 && ({stop: ue} = vn(() => {
				D();
			}, f.duration));
		}
		function Se() {
			ue?.();
		}
		function D() {
			T.value = !1, g(() => {
				m.value || (f.onClose?.(), p("destroy"));
			});
		}
		function O(e) {
			Pn(e) === dn.esc && D();
		}
		return v(() => {
			xe(), x(), T.value = !0;
		}), oe(() => f.repeatNum, () => {
			Se(), xe();
		}), xn(document, "keydown", O), wn(C, () => {
			ae.value = C.value.getBoundingClientRect().height;
		}), l({
			visible: T,
			bottom: _e,
			close: D
		}), (n, l) => (y(), r(t, {
			name: E(h).b("fade"),
			onBeforeEnter: l[0] ||= (e) => m.value = !0,
			onBeforeLeave: s.onClose,
			onAfterLeave: l[1] ||= (e) => n.$emit("destroy"),
			persisted: ""
		}, {
			default: se(() => [ce(o("div", {
				id: s.id,
				ref_key: "messageRef",
				ref: C,
				class: _([
					E(h).b(),
					{ [E(h).m(s.type)]: s.type },
					E(h).is("closable", s.showClose),
					E(h).is("plain", s.plain),
					E(h).is("bottom", ye.value === "bottom"),
					ve.value,
					s.customClass
				]),
				style: ee(be.value),
				role: "alert",
				onMouseenter: Se,
				onMouseleave: xe
			}, [
				s.repeatNum > 1 ? (y(), r(E(wr), {
					key: 0,
					value: s.repeatNum,
					type: de.value,
					class: _(E(h).e("badge"))
				}, null, 8, [
					"value",
					"type",
					"class"
				])) : i("v-if", !0),
				pe.value ? (y(), r(E(Sr), {
					key: 1,
					class: _([E(h).e("icon"), fe.value])
				}, {
					default: se(() => [(y(), r(ne(pe.value)))]),
					_: 1
				}, 8, ["class"])) : i("v-if", !0),
				w(n.$slots, "default", {}, () => [s.dangerouslyUseHTMLString ? (y(), a(e, { key: 1 }, [i(" Caution here, message could've been compromised, never use user's input as message "), o("p", {
					class: _(E(h).e("content")),
					innerHTML: s.message
				}, null, 10, Vr)], 2112)) : (y(), a("p", {
					key: 0,
					class: _(E(h).e("content"))
				}, re(s.message), 3))]),
				s.showClose ? (y(), r(E(Sr), {
					key: 2,
					class: _(E(h).e("closeBtn")),
					onClick: le(D, ["stop"])
				}, {
					default: se(() => [c(E(d))]),
					_: 1
				}, 8, ["class"])) : i("v-if", !0)
			], 46, Br), [[ie, T.value]])]),
			_: 3
		}, 8, ["name", "onBeforeLeave"]));
	}
}), Ur = 1, Wr = (e) => {
	if (!e.appendTo) e.appendTo = document.body;
	else if (N(e.appendTo)) {
		let t = document.querySelector(e.appendTo);
		Mn(t) || (Hn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body), e.appendTo = t;
	}
}, Gr = (e) => {
	!e.placement && N(L.placement) && L.placement && (e.placement = L.placement), e.placement ||= "top", Nr.includes(e.placement) || (Hn("ElMessage", `Invalid placement: ${e.placement}. Falling back to 'top'.`), e.placement = "top");
}, Kr = (e) => {
	let t = !e || N(e) || m(e) || kn(e) ? { message: e } : e, n = {
		...R,
		...t
	};
	return Wr(n), Gr(n), jn(L.grouping) && !n.grouping && (n.grouping = L.grouping), P(L.duration) && n.duration === 3e3 && (n.duration = L.duration), P(L.offset) && n.offset === 16 && (n.offset = L.offset), jn(L.showClose) && !n.showClose && (n.showClose = L.showClose), jn(L.plain) && !n.plain && (n.plain = L.plain), n;
}, qr = (e) => {
	let t = z[e.props.placement || "top"], n = t.indexOf(e);
	if (n === -1) return;
	t.splice(n, 1);
	let { handler: r } = e;
	r.close();
}, Jr = ({ appendTo: e, ...t }, n) => {
	let r = `message_${Ur++}`, i = t.onClose, a = document.createElement("div"), o = {
		...t,
		id: r,
		onClose: () => {
			i?.(), qr(u);
		},
		onDestroy: () => {
			C(null, a);
		}
	}, s = c(Hr, o, kn(o.message) || m(o.message) ? { default: kn(o.message) ? o.message : () => o.message } : null);
	s.appContext = n || B._context, C(s, a), e.appendChild(a.firstElementChild);
	let l = s.component, u = {
		id: r,
		vnode: s,
		vm: l,
		handler: { close: () => {
			l.exposed.close();
		} },
		props: s.component.props
	};
	return u;
}, B = (e = {}, t) => {
	if (!M) return { close: () => void 0 };
	let n = Kr(e), r = Ir(n.placement || "top");
	if (n.grouping && r.length) {
		let e = r.find(({ vnode: e }) => e.props?.message === n.message);
		if (e) return e.props.repeatNum += 1, e.props.type = n.type, e.handler;
	}
	if (P(L.max) && r.length >= L.max) return { close: () => void 0 };
	let i = Jr(n, t);
	return r.push(i), i.handler;
};
Mr.forEach((e) => {
	B[e] = (t = {}, n) => B({
		...Kr(t),
		type: e
	}, n);
});
function Yr(e) {
	for (let t in z) if (Dn(z, t)) {
		let n = [...z[t]];
		for (let t of n) (!e || e === t.props.type) && t.handler.close();
	}
}
function Xr(e) {
	z[e] && [...z[e]].forEach((e) => e.handler.close());
}
B.closeAll = Yr, B.closeAllByPlacement = Xr, B._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.13.7_typescr_36adac4e620ec19a62ca3a09accb14c8/node_modules/element-plus/es/components/message/index.mjs
var Zr = pr(B, "$message");
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/bind.js
function Qr(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/utils.js
var { toString: $r } = Object.prototype, { getPrototypeOf: ei } = Object, { iterator: ti, toStringTag: ni } = Symbol, ri = ((e) => (t) => {
	let n = $r.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), V = (e) => (e = e.toLowerCase(), (t) => ri(t) === e), ii = (e) => (t) => typeof t === e, { isArray: ai } = Array, oi = ii("undefined");
function si(e) {
	return e !== null && !oi(e) && e.constructor !== null && !oi(e.constructor) && H(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var ci = V("ArrayBuffer");
function li(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && ci(e.buffer), t;
}
var ui = ii("string"), H = ii("function"), di = ii("number"), fi = (e) => typeof e == "object" && !!e, pi = (e) => e === !0 || e === !1, mi = (e) => {
	if (ri(e) !== "object") return !1;
	let t = ei(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ni in e) && !(ti in e);
}, hi = (e) => {
	if (!fi(e) || si(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, gi = V("Date"), _i = V("File"), vi = (e) => !!(e && e.uri !== void 0), yi = (e) => e && e.getParts !== void 0, bi = V("Blob"), xi = V("FileList"), Si = (e) => fi(e) && H(e.pipe);
function Ci() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var wi = Ci(), Ti = wi.FormData === void 0 ? void 0 : wi.FormData, Ei = (e) => {
	let t;
	return e && (Ti && e instanceof Ti || H(e.append) && ((t = ri(e)) === "formdata" || t === "object" && H(e.toString) && e.toString() === "[object FormData]"));
}, Di = V("URLSearchParams"), [Oi, ki, Ai, ji] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(V), Mi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ni(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), ai(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (si(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function Pi(e, t) {
	if (si(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Fi = (e) => !oi(e) && e !== U;
function Ii() {
	let { caseless: e, skipUndefined: t } = Fi(this) && this || {}, n = {}, r = (r, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = e && Pi(n, i) || i;
		mi(n[a]) && mi(r) ? n[a] = Ii(n[a], r) : mi(r) ? n[a] = Ii({}, r) : ai(r) ? n[a] = r.slice() : (!t || !oi(r)) && (n[a] = r);
	};
	for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && Ni(arguments[e], r);
	return n;
}
var Li = (e, t, n, { allOwnKeys: r } = {}) => (Ni(t, (t, r) => {
	n && H(t) ? Object.defineProperty(e, r, {
		value: Qr(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), Ri = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zi = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n);
}, Bi = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && ei(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, Vi = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, Hi = (e) => {
	if (!e) return null;
	if (ai(e)) return e;
	let t = e.length;
	if (!di(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, Ui = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ei(Uint8Array)), Wi = (e, t) => {
	let n = (e && e[ti]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Gi = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Ki = V("HTMLFormElement"), qi = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), Ji = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Yi = V("RegExp"), Xi = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	Ni(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Zi = (e) => {
	Xi(e, (t, n) => {
		if (H(e) && [
			"arguments",
			"caller",
			"callee"
		].indexOf(n) !== -1) return !1;
		let r = e[n];
		if (H(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Qi = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return ai(e) ? r(e) : r(String(e).split(t)), n;
}, $i = () => {}, ea = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ta(e) {
	return !!(e && H(e.append) && e[ni] === "FormData" && e[ti]);
}
var na = (e) => {
	let t = Array(10), n = (e, r) => {
		if (fi(e)) {
			if (t.indexOf(e) >= 0) return;
			if (si(e)) return e;
			if (!("toJSON" in e)) {
				t[r] = e;
				let i = ai(e) ? [] : {};
				return Ni(e, (e, t) => {
					let a = n(e, r + 1);
					!oi(a) && (i[t] = a);
				}), t[r] = void 0, i;
			}
		}
		return e;
	};
	return n(e, 0);
}, ra = V("AsyncFunction"), ia = (e) => e && (fi(e) || H(e)) && H(e.then) && H(e.catch), aa = ((e, t) => e ? setImmediate : t ? ((e, t) => (U.addEventListener("message", ({ source: n, data: r }) => {
	n === U && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), U.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", H(U.postMessage)), W = {
	isArray: ai,
	isArrayBuffer: ci,
	isBuffer: si,
	isFormData: Ei,
	isArrayBufferView: li,
	isString: ui,
	isNumber: di,
	isBoolean: pi,
	isObject: fi,
	isPlainObject: mi,
	isEmptyObject: hi,
	isReadableStream: Oi,
	isRequest: ki,
	isResponse: Ai,
	isHeaders: ji,
	isUndefined: oi,
	isDate: gi,
	isFile: _i,
	isReactNativeBlob: vi,
	isReactNative: yi,
	isBlob: bi,
	isRegExp: Yi,
	isFunction: H,
	isStream: Si,
	isURLSearchParams: Di,
	isTypedArray: Ui,
	isFileList: xi,
	forEach: Ni,
	merge: Ii,
	extend: Li,
	trim: Mi,
	stripBOM: Ri,
	inherits: zi,
	toFlatObject: Bi,
	kindOf: ri,
	kindOfTest: V,
	endsWith: Vi,
	toArray: Hi,
	forEachEntry: Wi,
	matchAll: Gi,
	isHTMLForm: Ki,
	hasOwnProperty: Ji,
	hasOwnProp: Ji,
	reduceDescriptors: Xi,
	freezeMethods: Zi,
	toObjectSet: Qi,
	toCamelCase: qi,
	noop: $i,
	toFiniteNumber: ea,
	findKey: Pi,
	global: U,
	isContextDefined: Fi,
	isSpecCompliantForm: ta,
	toJSONObject: na,
	isAsyncFn: ra,
	isThenable: ia,
	setImmediate: aa,
	asap: typeof queueMicrotask < "u" ? queueMicrotask.bind(U) : typeof process < "u" && process.nextTick || aa,
	isIterable: (e) => e != null && H(e[ti])
}, G = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = new e(t.message, n || t.code, r, i, a);
		return s.cause = t, s.name = t.name, t.status != null && s.status == null && (s.status = t.status), o && Object.assign(s, o), s;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: W.toJSONObject(this.config),
			code: this.code,
			status: this.status
		};
	}
};
G.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", G.ERR_BAD_OPTION = "ERR_BAD_OPTION", G.ECONNABORTED = "ECONNABORTED", G.ETIMEDOUT = "ETIMEDOUT", G.ERR_NETWORK = "ERR_NETWORK", G.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", G.ERR_DEPRECATED = "ERR_DEPRECATED", G.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", G.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", G.ERR_CANCELED = "ERR_CANCELED", G.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", G.ERR_INVALID_URL = "ERR_INVALID_URL";
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/toFormData.js
function oa(e) {
	return W.isPlainObject(e) || W.isArray(e);
}
function sa(e) {
	return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ca(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = sa(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function la(e) {
	return W.isArray(e) && !e.some(oa);
}
var ua = W.toFlatObject(W, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function da(e, t, n) {
	if (!W.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData(), n = W.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(e, t) {
		return !W.isUndefined(t[e]);
	});
	let r = n.metaTokens, i = n.visitor || l, a = n.dots, o = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(t);
	if (!W.isFunction(i)) throw TypeError("visitor must be a function");
	function c(e) {
		if (e === null) return "";
		if (W.isDate(e)) return e.toISOString();
		if (W.isBoolean(e)) return e.toString();
		if (!s && W.isBlob(e)) throw new G("Blob is not supported. Use a Buffer instead.");
		return W.isArrayBuffer(e) || W.isTypedArray(e) ? s && typeof Blob == "function" ? new Blob([e]) : Buffer.from(e) : e;
	}
	function l(e, n, i) {
		let s = e;
		if (W.isReactNative(t) && W.isReactNativeBlob(e)) return t.append(ca(i, n, a), c(e)), !1;
		if (e && !i && typeof e == "object") {
			if (W.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
			else if (W.isArray(e) && la(e) || (W.isFileList(e) || W.endsWith(n, "[]")) && (s = W.toArray(e))) return n = sa(n), s.forEach(function(e, r) {
				!(W.isUndefined(e) || e === null) && t.append(o === !0 ? ca([n], r, a) : o === null ? n : n + "[]", c(e));
			}), !1;
		}
		return oa(e) ? !0 : (t.append(ca(i, n, a), c(e)), !1);
	}
	let u = [], d = Object.assign(ua, {
		defaultVisitor: l,
		convertValue: c,
		isVisitable: oa
	});
	function f(e, n) {
		if (!W.isUndefined(e)) {
			if (u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			u.push(e), W.forEach(e, function(e, r) {
				(!(W.isUndefined(e) || e === null) && i.call(t, e, W.isString(r) ? r.trim() : r, n, d)) === !0 && f(e, n ? n.concat(r) : [r]);
			}), u.pop();
		}
	}
	if (!W.isObject(e)) throw TypeError("data must be an object");
	return f(e), t;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function fa(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
		return t[e];
	});
}
function pa(e, t) {
	this._pairs = [], e && da(e, this, t);
}
var ma = pa.prototype;
ma.append = function(e, t) {
	this._pairs.push([e, t]);
}, ma.toString = function(e) {
	let t = e ? function(t) {
		return e.call(this, t, fa);
	} : fa;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/buildURL.js
function ha(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ga(e, t, n) {
	if (!t) return e;
	let r = n && n.encode || ha, i = W.isFunction(n) ? { serialize: n } : n, a = i && i.serialize, o;
	if (o = a ? a(t, i) : W.isURLSearchParams(t) ? t.toString() : new pa(t, i).toString(r), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/InterceptorManager.js
var _a = class {
	constructor() {
		this.handlers = [];
	}
	use(e, t, n) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}), this.handlers.length - 1;
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers &&= [];
	}
	forEach(e) {
		W.forEach(this.handlers, function(t) {
			t !== null && e(t);
		});
	}
}, va = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0
}, ya = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : pa,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, ba = /* @__PURE__ */ ve({
	hasBrowserEnv: () => xa,
	hasStandardBrowserEnv: () => Ca,
	hasStandardBrowserWebWorkerEnv: () => wa,
	navigator: () => Sa,
	origin: () => Ta
}), xa = typeof window < "u" && typeof document < "u", Sa = typeof navigator == "object" && navigator || void 0, Ca = xa && (!Sa || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Sa.product) < 0), wa = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ta = xa && window.location.href || "http://localhost", K = {
	...ba,
	...ya
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/toURLEncodedForm.js
function Ea(e, t) {
	return da(e, new K.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return K.isNode && W.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/formDataToJSON.js
function Da(e) {
	return W.matchAll(/\w+|\[(\w*)]/g, e).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Oa(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function ka(e) {
	function t(e, n, r, i) {
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && W.isArray(r) ? r.length : a, s ? (W.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !o) : ((!r[a] || !W.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && W.isArray(r[a]) && (r[a] = Oa(r[a])), !o);
	}
	if (W.isFormData(e) && W.isFunction(e.entries)) {
		let n = {};
		return W.forEachEntry(e, (e, r) => {
			t(Da(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/defaults/index.js
function Aa(e, t, n) {
	if (W.isString(e)) try {
		return (t || JSON.parse)(e), W.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var ja = {
	transitional: va,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = W.isObject(e);
		if (i && W.isHTMLForm(e) && (e = new FormData(e)), W.isFormData(e)) return r ? JSON.stringify(ka(e)) : e;
		if (W.isArrayBuffer(e) || W.isBuffer(e) || W.isStream(e) || W.isFile(e) || W.isBlob(e) || W.isReadableStream(e)) return e;
		if (W.isArrayBufferView(e)) return e.buffer;
		if (W.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Ea(e, this.formSerializer).toString();
			if ((a = W.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let t = this.env && this.env.FormData;
				return da(a ? { "files[]": e } : e, t && new t(), this.formSerializer);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Aa(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = this.transitional || ja.transitional, n = t && t.forcedJSONParsing, r = this.responseType === "json";
		if (W.isResponse(e) || W.isReadableStream(e)) return e;
		if (e && W.isString(e) && (n && !this.responseType || r)) {
			let n = !(t && t.silentJSONParsing) && r;
			try {
				return JSON.parse(e, this.parseReviver);
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? G.from(e, G.ERR_BAD_RESPONSE, this, null, this.response) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: K.classes.FormData,
		Blob: K.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
W.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch"
], (e) => {
	ja.headers[e] = {};
});
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/parseHeaders.js
var Ma = W.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]), Na = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !(!n || t[n] && Ma[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
	}), t;
}, Pa = Symbol("internals"), Fa = (e) => !/[\r\n]/.test(e);
function Ia(e, t) {
	if (!(e === !1 || e == null)) {
		if (W.isArray(e)) {
			e.forEach((e) => Ia(e, t));
			return;
		}
		if (!Fa(String(e))) throw Error(`Invalid character in header content ["${t}"]`);
	}
}
function La(e) {
	return e && String(e).trim().toLowerCase();
}
function Ra(e) {
	let t = e.length;
	for (; t > 0;) {
		let n = e.charCodeAt(t - 1);
		if (n !== 10 && n !== 13) break;
		--t;
	}
	return t === e.length ? e : e.slice(0, t);
}
function za(e) {
	return e === !1 || e == null ? e : W.isArray(e) ? e.map(za) : Ra(String(e));
}
function Ba(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Va = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ha(e, t, n, r, i) {
	if (W.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), W.isString(t)) {
		if (W.isString(r)) return t.indexOf(r) !== -1;
		if (W.isRegExp(r)) return r.test(t);
	}
}
function Ua(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Wa(e, t) {
	let n = W.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var q = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = La(t);
			if (!i) throw Error("header name must be a non-empty string");
			let a = W.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (Ia(e, t), r[a || t] = za(e));
		}
		let a = (e, t) => W.forEach(e, (e, n) => i(e, n, t));
		if (W.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (W.isString(e) && (e = e.trim()) && !Va(e)) a(Na(e), t);
		else if (W.isObject(e) && W.isIterable(e)) {
			let n = {}, r, i;
			for (let t of e) {
				if (!W.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				n[i = t[0]] = (r = n[i]) ? W.isArray(r) ? [...r, t[1]] : [r, t[1]] : t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = La(e), e) {
			let n = W.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Ba(e);
				if (W.isFunction(t)) return t.call(this, e, n);
				if (W.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = La(e), e) {
			let n = W.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || Ha(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = La(e), e) {
				let i = W.findKey(n, e);
				i && (!t || Ha(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return W.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || Ha(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return W.forEach(this, (r, i) => {
			let a = W.findKey(n, i);
			if (a) {
				t[a] = za(r), delete t[i];
				return;
			}
			let o = e ? Ua(i) : String(i).trim();
			o !== i && delete t[i], t[o] = za(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return W.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && W.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		return this.get("set-cookie") || [];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Pa] = this[Pa] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = La(e);
			t[r] || (Wa(n, e), t[r] = !0);
		}
		return W.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
q.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), W.reduceDescriptors(q.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), W.freezeMethods(q);
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/transformData.js
function Ga(e, t) {
	let n = this || ja, r = t || n, i = q.from(r.headers), a = r.data;
	return W.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/cancel/isCancel.js
function Ka(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/cancel/CanceledError.js
var qa = class extends G {
	constructor(e, t, n) {
		super(e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/settle.js
function Ja(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new G("Request failed with status code " + n.status, [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/parseProtocol.js
function Ya(e) {
	let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/speedometer.js
function Xa(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/throttle.js
function Za(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [(...e) => {
		let t = Date.now(), s = t - n;
		s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
			a = null, o(i);
		}, r - s));
	}, () => i && o(i)];
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/progressEventReducer.js
var Qa = (e, t, n = 3) => {
	let r = 0, i = Xa(50, 250);
	return Za((n) => {
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = a - r, c = i(s), l = a <= o;
		r = a, e({
			loaded: a,
			total: o,
			progress: o ? a / o : void 0,
			bytes: s,
			rate: c || void 0,
			estimated: c && o && l ? (o - a) / c : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, $a = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, eo = (e) => (...t) => W.asap(() => e(...t)), to = K.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, K.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(K.origin), K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)) : () => !0, no = K.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		W.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), W.isString(r) && s.push(`path=${r}`), W.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), W.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.match(RegExp("(?:^|; )" + e + "=([^;]*)"));
		return t ? decodeURIComponent(t[1]) : null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/isAbsoluteURL.js
function ro(e) {
	return typeof e == "string" ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/combineURLs.js
function io(e, t) {
	return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/buildFullPath.js
function ao(e, t, n) {
	let r = !ro(t);
	return e && (r || n == 0) ? io(e, t) : t;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/mergeConfig.js
var oo = (e) => e instanceof q ? { ...e } : e;
function J(e, t) {
	t ||= {};
	let n = {};
	function r(e, t, n, r) {
		return W.isPlainObject(e) && W.isPlainObject(t) ? W.merge.call({ caseless: r }, e, t) : W.isPlainObject(t) ? W.merge({}, t) : W.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!W.isUndefined(t)) return r(e, t, n, i);
		if (!W.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!W.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!W.isUndefined(t)) return r(void 0, t);
		if (!W.isUndefined(e)) return r(void 0, e);
	}
	function s(n, i, a) {
		if (a in t) return r(n, i);
		if (a in e) return r(void 0, n);
	}
	let c = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		responseEncoding: o,
		validateStatus: s,
		headers: (e, t, n) => i(oo(e), oo(t), n, !0)
	};
	return W.forEach(Object.keys({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = W.hasOwnProp(c, r) ? c[r] : i, o = a(e[r], t[r], r);
		W.isUndefined(o) && a !== s || (n[r] = o);
	}), n;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/resolveConfig.js
var so = (e) => {
	let t = J({}, e), { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = t;
	if (t.headers = o = q.from(o), t.url = ga(ao(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), W.isFormData(n)) {
		if (K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
		else if (W.isFunction(n.getHeaders)) {
			let e = n.getHeaders(), t = ["content-type", "content-length"];
			Object.entries(e).forEach(([e, n]) => {
				t.includes(e.toLowerCase()) && o.set(e, n);
			});
		}
	}
	if (K.hasStandardBrowserEnv && (r && W.isFunction(r) && (r = r(t)), r || r !== !1 && to(t.url))) {
		let e = i && a && no.read(a);
		e && o.set(i, e);
	}
	return t;
}, co = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = so(e), i = r.data, a = q.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p;
		function m() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let h = new XMLHttpRequest();
		h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout;
		function g() {
			if (!h) return;
			let r = q.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
			Ja(function(e) {
				t(e), m();
			}, function(e) {
				n(e), m();
			}, {
				data: !o || o === "text" || o === "json" ? h.responseText : h.response,
				status: h.status,
				statusText: h.statusText,
				headers: r,
				config: e,
				request: h
			}), h = null;
		}
		"onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
			!h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(g);
		}, h.onabort = function() {
			h &&= (n(new G("Request aborted", G.ECONNABORTED, e, h)), null);
		}, h.onerror = function(t) {
			let r = new G(t && t.message ? t.message : "Network Error", G.ERR_NETWORK, e, h);
			r.event = t || null, n(r), h = null;
		}, h.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || va;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new G(t, i.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED, e, h)), h = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && W.forEach(a.toJSON(), function(e, t) {
			h.setRequestHeader(t, e);
		}), W.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = Qa(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = Qa(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			h &&= (n(!t || t.type ? new qa(null, e, h) : t), h.abort(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let _ = Ya(r.url);
		if (_ && K.protocols.indexOf(_) === -1) {
			n(new G("Unsupported protocol " + _ + ":", G.ERR_BAD_REQUEST, e));
			return;
		}
		h.send(i || null);
	});
}, lo = (e, t) => {
	let { length: n } = e = e ? e.filter(Boolean) : [];
	if (t || n) {
		let n = new AbortController(), r, i = function(e) {
			if (!r) {
				r = !0, o();
				let t = e instanceof Error ? e : this.reason;
				n.abort(t instanceof G ? t : new qa(t instanceof Error ? t.message : t));
			}
		}, a = t && setTimeout(() => {
			a = null, i(new G(`timeout of ${t}ms exceeded`, G.ETIMEDOUT));
		}, t), o = () => {
			e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
				e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
			}), null);
		};
		e.forEach((e) => e.addEventListener("abort", i));
		let { signal: s } = n;
		return s.unsubscribe = () => W.asap(o), s;
	}
}, uo = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, fo = async function* (e, t) {
	for await (let n of po(e)) yield* uo(n, t);
}, po = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, mo = (e, t, n, r) => {
	let i = fo(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, ho = 64 * 1024, { isFunction: go } = W, _o = (({ Request: e, Response: t }) => ({
	Request: e,
	Response: t
}))(W.global), { ReadableStream: vo, TextEncoder: yo } = W.global, bo = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, xo = (e) => {
	e = W.merge.call({ skipUndefined: !0 }, _o, e);
	let { fetch: t, Request: n, Response: r } = e, i = t ? go(t) : typeof fetch == "function", a = go(n), o = go(r);
	if (!i) return !1;
	let s = i && go(vo), c = i && (typeof yo == "function" ? ((e) => (t) => e.encode(t))(new yo()) : async (e) => new Uint8Array(await new n(e).arrayBuffer())), l = a && s && bo(() => {
		let e = !1, t = new vo(), r = new n(K.origin, {
			body: t,
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}).headers.has("Content-Type");
		return t.cancel(), e && !r;
	}), u = o && s && bo(() => W.isReadableStream(new r("").body)), d = { stream: u && ((e) => e.body) };
	i && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!d[e] && (d[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new G(`Response type '${e}' is not supported`, G.ERR_NOT_SUPPORT, n);
		});
	});
	let f = async (e) => {
		if (e == null) return 0;
		if (W.isBlob(e)) return e.size;
		if (W.isSpecCompliantForm(e)) return (await new n(K.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (W.isArrayBufferView(e) || W.isArrayBuffer(e)) return e.byteLength;
		if (W.isURLSearchParams(e) && (e += ""), W.isString(e)) return (await c(e)).byteLength;
	}, p = async (e, t) => W.toFiniteNumber(e.getContentLength()) ?? f(t);
	return async (e) => {
		let { url: i, method: o, data: s, signal: c, cancelToken: f, timeout: m, onDownloadProgress: h, onUploadProgress: g, responseType: _, headers: ee, withCredentials: v = "same-origin", fetchOptions: te } = so(e), y = t || fetch;
		_ = _ ? (_ + "").toLowerCase() : "text";
		let b = lo([c, f && f.toAbortSignal()], m), x = null, S = b && b.unsubscribe && (() => {
			b.unsubscribe();
		}), C;
		try {
			if (g && l && o !== "get" && o !== "head" && (C = await p(ee, s)) !== 0) {
				let e = new n(i, {
					method: "POST",
					body: s,
					duplex: "half"
				}), t;
				if (W.isFormData(s) && (t = e.headers.get("content-type")) && ee.setContentType(t), e.body) {
					let [t, n] = $a(C, Qa(eo(g)));
					s = mo(e.body, ho, t, n);
				}
			}
			W.isString(v) || (v = v ? "include" : "omit");
			let t = a && "credentials" in n.prototype, c = {
				...te,
				signal: b,
				method: o.toUpperCase(),
				headers: ee.normalize().toJSON(),
				body: s,
				duplex: "half",
				credentials: t ? v : void 0
			};
			x = a && new n(i, c);
			let f = await (a ? y(x, te) : y(i, c)), m = u && (_ === "stream" || _ === "response");
			if (u && (h || m && S)) {
				let e = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((t) => {
					e[t] = f[t];
				});
				let t = W.toFiniteNumber(f.headers.get("content-length")), [n, i] = h && $a(t, Qa(eo(h), !0)) || [];
				f = new r(mo(f.body, ho, n, () => {
					i && i(), S && S();
				}), e);
			}
			_ ||= "text";
			let w = await d[W.findKey(d, _) || "text"](f, e);
			return !m && S && S(), await new Promise((t, n) => {
				Ja(t, n, {
					data: w,
					headers: q.from(f.headers),
					status: f.status,
					statusText: f.statusText,
					config: e,
					request: x
				});
			});
		} catch (t) {
			throw S && S(), t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message) ? Object.assign(new G("Network Error", G.ERR_NETWORK, e, x, t && t.response), { cause: t.cause || t }) : G.from(t, t && t.code, e, x, t && t.response);
		}
	};
}, So = /* @__PURE__ */ new Map(), Co = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = So;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : xo(t)), l = c;
	return c;
};
Co();
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/adapters/adapters.js
var wo = {
	http: null,
	xhr: co,
	fetch: { get: Co }
};
W.forEach(wo, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
var To = (e) => `- ${e}`, Eo = (e) => W.isFunction(e) || e === null || e === !1;
function Do(e, t) {
	e = W.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Eo(r) && (i = wo[(n = String(r)).toLowerCase()], i === void 0)) throw new G(`Unknown adapter '${n}'`);
		if (i && (W.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new G("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(To).join("\n") : " " + To(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
	}
	return i;
}
var Oo = {
	getAdapter: Do,
	adapters: wo
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/core/dispatchRequest.js
function ko(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new qa(null, e);
}
function Ao(e) {
	return ko(e), e.headers = q.from(e.headers), e.data = Ga.call(e, e.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Oo.getAdapter(e.adapter || ja.adapter, e)(e).then(function(t) {
		return ko(e), t.data = Ga.call(e, e.transformResponse, t), t.headers = q.from(t.headers), t;
	}, function(t) {
		return Ka(t) || (ko(e), t && t.response && (t.response.data = Ga.call(e, e.transformResponse, t.response), t.response.headers = q.from(t.response.headers))), Promise.reject(t);
	});
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/env/data.js
var jo = "1.15.0", Mo = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Mo[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var No = {};
Mo.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + jo + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new G(r(i, " has been removed" + (t ? " in " + t : "")), G.ERR_DEPRECATED);
		return t && !No[i] && (No[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(n, i, a) : !0;
	};
}, Mo.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Po(e, t, n) {
	if (typeof e != "object") throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = t[a];
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new G("option " + a + " must be " + n, G.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new G("Unknown option " + a, G.ERR_BAD_OPTION);
	}
}
var Fo = {
	assertOptions: Po,
	validators: Mo
}, Y = Fo.validators, X = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new _a(),
			response: new _a()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = (() => {
					if (!t.stack) return "";
					let e = t.stack.indexOf("\n");
					return e === -1 ? "" : t.stack.slice(e + 1);
				})();
				try {
					if (!e.stack) e.stack = n;
					else if (n) {
						let t = n.indexOf("\n"), r = t === -1 ? -1 : n.indexOf("\n", t + 1), i = r === -1 ? "" : n.slice(r + 1);
						String(e.stack).endsWith(i) || (e.stack += "\n" + n);
					}
				} catch {}
			}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = J(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Fo.assertOptions(n, {
			silentJSONParsing: Y.transitional(Y.boolean),
			forcedJSONParsing: Y.transitional(Y.boolean),
			clarifyTimeoutError: Y.transitional(Y.boolean),
			legacyInterceptorReqResOrdering: Y.transitional(Y.boolean)
		}, !1), r != null && (W.isFunction(r) ? t.paramsSerializer = { serialize: r } : Fo.assertOptions(r, {
			encode: Y.function,
			serialize: Y.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Fo.assertOptions(t, {
			baseUrl: Y.spelling("baseURL"),
			withXsrfToken: Y.spelling("withXSRFToken")
		}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
		let a = i && W.merge(i.common, i[t.method]);
		i && W.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"common"
		], (e) => {
			delete i[e];
		}), t.headers = q.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || va;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Ao.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e(f);
			} catch (e) {
				t.call(this, e);
				break;
			}
		}
		try {
			l = Ao.call(this, f);
		} catch (e) {
			return Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = J(this.defaults, e), ga(ao(e.baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer);
	}
};
W.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	X.prototype[e] = function(t, n) {
		return this.request(J(n || {}, {
			method: e,
			url: t,
			data: (n || {}).data
		}));
	};
}), W.forEach([
	"post",
	"put",
	"patch"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(J(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	X.prototype[e] = t(), X.prototype[e + "Form"] = t(!0);
});
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/cancel/CancelToken.js
var Io = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new qa(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/spread.js
function Lo(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/isAxiosError.js
function Ro(e) {
	return W.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/helpers/HttpStatusCode.js
var zo = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(zo).forEach(([e, t]) => {
	zo[t] = e;
});
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/lib/axios.js
function Bo(e) {
	let t = new X(e), n = Qr(X.prototype.request, t);
	return W.extend(n, X.prototype, t, { allOwnKeys: !0 }), W.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return Bo(J(e, t));
	}, n;
}
var Z = Bo(ja);
Z.Axios = X, Z.CanceledError = qa, Z.CancelToken = Io, Z.isCancel = Ka, Z.VERSION = jo, Z.toFormData = da, Z.AxiosError = G, Z.Cancel = Z.CanceledError, Z.all = function(e) {
	return Promise.all(e);
}, Z.spread = Lo, Z.isAxiosError = Ro, Z.mergeConfig = J, Z.AxiosHeaders = q, Z.formToJSON = (e) => ka(W.isHTMLForm(e) ? new FormData(e) : e), Z.getAdapter = Oo.getAdapter, Z.HttpStatusCode = zo, Z.default = Z;
//#endregion
//#region node_modules/.pnpm/axios@1.15.0/node_modules/axios/index.js
var { Axios: Vo, AxiosError: Ho, CanceledError: Uo, isCancel: Wo, CancelToken: Go, VERSION: Ko, all: qo, Cancel: Jo, isAxiosError: Yo, spread: Xo, toFormData: Zo, AxiosHeaders: Qo, HttpStatusCode: $o, formToJSON: es, getAdapter: ts, mergeConfig: ns } = Z;
//#endregion
//#region src/utils/index.ts
function rs(e, t = 500, n) {
	let r;
	return function(...i) {
		if (r && clearTimeout(r), n) {
			let n = !r;
			r = setTimeout(() => {
				r = null;
			}, t), n && e.apply(this, i);
		} else r = setTimeout(() => {
			e.apply(this, i);
		}, t);
	};
}
var is = (e, t) => {
	let n;
	return function(...r) {
		n ||= setTimeout(() => {
			e.apply(this, r), n = null;
		}, t);
	};
}, as = (e, t) => {
	let n = t || "{y}-{m}-{d} {h}:{i}:{s}", r = e;
	/^\d+?$/.test(e) && (r = parseInt(e));
	let i = typeof e == "object" ? e : new Date(r), a = {
		y: i.getFullYear(),
		m: i.getMonth() + 1,
		d: i.getDate(),
		h: i.getHours(),
		i: i.getMinutes(),
		s: i.getSeconds(),
		w: i.getDay()
	};
	return n.replace(/{(y|m|d|h|i|s|w)+}/g, (e, t) => {
		let n = a[t];
		return t === "w" ? [
			"日",
			"一",
			"二",
			"三",
			"四",
			"五",
			"六"
		][n] : (e.length > 0 && n < 10 && (n = "0" + n), n || 0);
	});
};
function os(e) {
	let t = document.getElementById(e);
	t && t.parentNode === document.head && document.head.removeChild(t);
}
function Q(e, t, n) {
	let r = t;
	if (typeof t == "object" && (r = JSON.stringify(t)), n === 0) window.localStorage.setItem(e, r);
	else if (n && n > 0) {
		let r = /* @__PURE__ */ new Date(), i = JSON.stringify({
			__value: t,
			__time: r.setSeconds(r.getSeconds() + n * 3600)
		});
		window.localStorage.setItem(e, i);
	} else window.sessionStorage.setItem(e, r);
}
var ss = (e, t) => {
	let n;
	if (t) {
		n = window.localStorage.getItem(e);
		try {
			n = JSON.parse(n), typeof n == "object" && n.__time && (n.__value || (n = void 0), n = (/* @__PURE__ */ new Date()).getTime() < n.__time ? n.__value : !1);
		} catch {
			n = void 0;
		}
	} else n = window.sessionStorage.getItem(e);
	try {
		return JSON.parse(n);
	} catch {
		return n;
	}
}, $ = (e, t) => {
	t ? window.localStorage.removeItem(e) : window.sessionStorage.removeItem(e);
}, cs = (e) => Object.prototype.toString.call(e) === "[object Array]", ls = ss("tagViews"), us = ue("layout", {
	state: () => ({
		breadcrumb: [],
		tabs: ls,
		reloadFlag: !0,
		collapseMenu: ss("collapseMenu", !0) || !1
	}),
	actions: {
		changeBreadcrumb(e) {
			this.breadcrumb = e;
		},
		setTabsViews(e) {
			this.tabs = e, Q("tagViews", e);
		},
		setReloadRouter() {
			this.reloadFlag = !1, g(() => {
				this.reloadFlag = !0;
			});
		},
		setCollapseMenu(e) {
			this.collapseMenu = e, Q("collapseMenu", e, 0);
		},
		logout(e) {
			$("resources", !0), $("formMenuList", !0), $("refreshToken", !0), $("token", !0), $("akAllDict"), $("userInfo", !0), e && e.push({ path: "/login" });
		},
		setLoginInfo(e = {}, t) {
			let n = e.expire_time, r = 24;
			n && (r = parseInt(n) / 1e3 / 3600), Q("token", e.token, r), Q("refreshToken", e.refreshToken, r * 2), t && Q("userInfo", e, 0);
		},
		getDict(e = !1) {
			let t = ss("akAllDict");
			!e && t || bs("dictList", { query: { status: 1 } }).then((e) => {
				let t = e.data?.list, n = {};
				t?.length && (t.forEach((e) => {
					let t = e.children;
					if (t) {
						let r = JSON.parse(t), i = {};
						r.forEach((e) => {
							i[e.value] = e.label;
						}), n[e.type] = i;
					}
				}), Q("akAllDict", n));
			});
		}
	}
}), ds = "production", fs = {
	development: "",
	production: "",
	preRelease: ""
}, ps = Z.create({
	baseURL: fs[ds],
	headers: {}
}), ms = !1, hs = [];
function gs(e) {
	hs.push(e);
}
function _s(e) {
	hs.map((t) => t(e));
}
function vs(e) {
	let t = us(), n = { refreshToken: e };
	Z.post(fs[ds] + "/api/system/user/refreshToken", n).then((e) => {
		if (e.data.code === 1) {
			let n = e.data.data;
			t.setLoginInfo(n), _s(n.token), ms = !1;
		} else t.logout(), ms = !1;
	}).catch(() => {
		t.logout(), ms = !1;
	});
}
ps.interceptors.request.use((e) => {
	e.method.toUpperCase() === "GET" && Object.keys(e.params || {}).length === 0 && (e.params = e.data);
	let t = ss("token", !0);
	t && (e.headers.Authorization = t);
	let n = ss("refreshToken", !0);
	return !t && n ? (ms || vs(n), ms = !0, new Promise((t) => {
		gs((n) => {
			e.headers.Authorization = n, t(e);
		});
	})) : e;
}, (e) => {
	Promise.reject(e);
}), ps.interceptors.response.use((e) => {
	let t = e.data.code, n = e.data.message;
	if (["blob", "arraybuffer"].includes(e.request.responseType)) return e;
	switch (t) {
		case 1: return e.data;
		case 401:
			Zr({
				message: n,
				type: "error"
			}), setTimeout(() => {
				window.location.href = "/login";
			}, 2e3);
			break;
		default: return n && Zr({
			message: n,
			type: "error"
		}), Promise.reject(e.data);
	}
}, (e) => (Zr({
	message: e.response?.data.message || e.message,
	type: "error"
}), Promise.reject(e)));
//#endregion
//#region src/api/index.ts
var ys = Object.assign({
	designSave: "design/save",
	designEdit: "design/edit",
	designList: "design/list",
	designDelete: "design/delete",
	designById: "design/get",
	sourceList: "datasource/list",
	sourceDelete: "datasource/delete",
	sourceCreat: "datasource/creat",
	sourceEdit: "datasource/edit",
	sourceById: "datasource/get",
	saveFormContent: "content/save",
	editFormContent: "content/edit",
	getContentList: "content/list",
	delFormContent: "content/delete",
	getFormContent: "content/get",
	upload: "upload/single",
	exportExcel: "content/exportExcel",
	chunkUploadAddGroup: "upload/group/save",
	chunkUploadEditGroup: "upload/group/edit",
	chunkUploadDelGroup: "upload/group/delete",
	chunkUploadGroupList: "upload/group/list",
	chunkUploadFileList: "upload/files/list",
	chunkUpload: "upload/split",
	chunkUploadDel: "upload/files/delete"
}, {
	dictSave: "system/dict/save",
	dictList: "system/dict/list",
	dictDelete: "system/dict/delete",
	dictEdit: "system/dict/edit",
	deptSave: "system/dept/save",
	deptEdit: "system/dept/edit",
	deptList: "system/dept/list",
	deptDelete: "system/dept/delete",
	menuSave: "system/menu/save",
	menuEdit: "system/menu/edit",
	menuList: "system/menu/list",
	menuDelete: "system/menu/delete",
	roleSave: "system/role/save",
	roleEdit: "system/role/edit",
	roleList: "system/role/list",
	roleDelete: "system/role/delete",
	userSave: "system/user/save",
	userEdit: "system/user/edit",
	userList: "system/user/list",
	userById: "system/user/get",
	userDelete: "system/user/delete",
	userMenuList: "system/menu/listByUser",
	getCaptcha: "captcha/get",
	loginSubmit: "system/user/login",
	loginLogList: "system/loginLog/list",
	loginLogDelete: "system/loginLog/delete",
	postList: "system/post/list",
	postSave: "system/post/save",
	postEdit: "system/post/edit",
	postDel: "system/post/del",
	postDetail: "system/post/get"
}, {
	saveFlow: "flow/save",
	getMy: "flow/my",
	getCancel: "flow/cancel",
	getFlowById: "flow/get",
	getFlowRecord: "flowRecord/list",
	getTodoFlow: "flow/todo",
	getDoneFlow: "flowRecord/done",
	getCopyFlow: "flowRecord/copy",
	getRecordById: "flowRecord/get",
	submitApproval: "flow/approval"
}), bs = (e, t = {}, n = {}) => {
	let r = ys[e] || e;
	if (Object.keys(n.apiKey || {}).length) for (let e in n.apiKey) r = r.replace(e, n.apiKey[e]);
	let i = "POST";
	r.indexOf("|") !== -1 && (i = r.split("|")[0], r = r.replace(/.*\|/, "")), r.startsWith("/") || r.startsWith("http") || (r = "api/" + r);
	let a = Object.assign({
		url: r,
		method: i,
		data: t
	}, n), o = window.location.host;
	if (o.indexOf("localhost0") !== -1 || o.indexOf("github") !== -1) {
		let { query: e = {}, id: i = "", formId: o = "", extend: s = {} } = t, c = [];
		e.type && c.push(e.type), i && c.push(i), e.flowId && c.push(e.flowId), o && c.push(o), s.formId && c.push(s.formId);
		let l = ".json";
		r.includes("static/") && (l = ""), n.method && delete n.method, r = r.replace("api/", "mock/"), a = Object.assign({
			url: `${r}${c.join("-")}${l}`,
			method: "get",
			data: t
		}, n);
	}
	return ps(a);
};
"" + ys.upload;
//#endregion
export { st as A, Ne as B, A as C, dt as D, ft as E, He as F, be as G, D as H, Re as I, Le as L, Ye as M, Je as N, ut as O, Ue as P, Ie as R, Pt as S, pt as T, xe as U, O as V, _e as W, Xt as _, cs as a, Ut as b, is as c, un as d, ln as f, Qt as g, $t as h, ss as i, $e as j, lt as k, Go as l, en as m, as as n, os as o, tn as p, rs as r, Q as s, bs as t, Zr as u, Yt as v, gt as w, j as x, Jt as y, Pe as z };
