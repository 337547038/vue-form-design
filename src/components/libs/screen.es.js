/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { u as e } from "./api-2vEvKYmc.js";
import { a as t, s as n } from "./design-ZYUl2LQ4.js";
import { a as r, c as i, i as a, l as o, n as s, o as c, r as l, s as u } from "./utils-BnLYVmED.js";
import { Fragment as d, TransitionGroup as f, computed as p, createBlock as m, createCommentVNode as h, createElementBlock as g, createElementVNode as _, createVNode as v, defineComponent as y, h as b, inject as x, mergeModels as S, mergeProps as ee, nextTick as C, normalizeClass as w, normalizeStyle as T, onMounted as te, onUnmounted as E, openBlock as D, reactive as O, ref as k, renderList as ne, resolveComponent as re, resolveDynamicComponent as ie, toDisplayString as ae, unref as A, useModel as oe, vShow as se, watch as ce, withCtx as le, withDirectives as ue, withModifiers as de } from "vue";
//#region src/components/screen/ruler.vue?vue&type=script&setup=true&lang.ts
var fe = { class: "ruler-box" }, pe = /* @__PURE__ */ y({
	__name: "ruler",
	props: {
		direction: { default: "h" },
		size: {}
	},
	setup(e) {
		let t = e, n = o(), r = p(() => ({ width: parseInt(t.size) * n.scale / 100 + "px" })), i = p(() => {
			let e = parseInt(t.size) + 100, n = [];
			for (let t = 0; t < e; t += 100) n.push(t);
			return n;
		});
		return (t, a) => ue((D(), g("div", {
			class: w(["screen-ruler", `ruler-${e.direction}`]),
			style: T(r.value)
		}, [_("div", fe, [(D(!0), g(d, null, ne(i.value, (e) => (D(), g("span", {
			key: e,
			style: T({ width: `${A(n).scale}px` })
		}, ae(e), 5))), 128))])], 6)), [[se, A(n).isShowRuler]]);
	}
});
//#endregion
//#region node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js
function me(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function j(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? me(Object(n), !0).forEach(function(t) {
			ge(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function he(e) {
	"@babel/helpers - typeof";
	return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, he(e);
}
function ge(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _e() {
	return _e = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _e.apply(this, arguments);
}
function ve(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function ye(e, t) {
	if (e == null) return {};
	var n = ve(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var be = "1.14.0";
function xe(e) {
	if (typeof window < "u" && window.navigator) return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Se = xe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ce = xe(/Edge/i), we = xe(/firefox/i), Te = xe(/safari/i) && !xe(/chrome/i) && !xe(/android/i), Ee = xe(/iP(ad|od|hone)/i), De = xe(/chrome/i) && xe(/android/i), Oe = {
	capture: !1,
	passive: !1
};
function M(e, t, n) {
	e.addEventListener(t, n, !Se && Oe);
}
function N(e, t, n) {
	e.removeEventListener(t, n, !Se && Oe);
}
function ke(e, t) {
	if (t) {
		if (t[0] === ">" && (t = t.substring(1)), e) try {
			if (e.matches) return e.matches(t);
			if (e.msMatchesSelector) return e.msMatchesSelector(t);
			if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
		} catch {
			return !1;
		}
		return !1;
	}
}
function Ae(e) {
	return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function P(e, t, n, r) {
	if (e) {
		n ||= document;
		do {
			if (t != null && (t[0] === ">" ? e.parentNode === n && ke(e, t) : ke(e, t)) || r && e === n) return e;
			if (e === n) break;
		} while (e = Ae(e));
	}
	return null;
}
var je = /\s+/g;
function F(e, t, n) {
	e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : e.className = ((" " + e.className + " ").replace(je, " ").replace(" " + t + " ", " ") + (n ? " " + t : "")).replace(je, " "));
}
function I(e, t, n) {
	var r = e && e.style;
	if (r) {
		if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
		!(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
	}
}
function Me(e, t) {
	var n = "";
	if (typeof e == "string") n = e;
	else do {
		var r = I(e, "transform");
		r && r !== "none" && (n = r + " " + n);
	} while (!t && (e = e.parentNode));
	var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return i && new i(n);
}
function Ne(e, t, n) {
	if (e) {
		var r = e.getElementsByTagName(t), i = 0, a = r.length;
		if (n) for (; i < a; i++) n(r[i], i);
		return r;
	}
	return [];
}
function L() {
	return document.scrollingElement || document.documentElement;
}
function R(e, t, n, r, i) {
	if (!(!e.getBoundingClientRect && e !== window)) {
		var a, o, s, c, l, u, d;
		if (e !== window && e.parentNode && e !== L() ? (a = e.getBoundingClientRect(), o = a.top, s = a.left, c = a.bottom, l = a.right, u = a.height, d = a.width) : (o = 0, s = 0, c = window.innerHeight, l = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (i ||= e.parentNode, !Se)) do
			if (i && i.getBoundingClientRect && (I(i, "transform") !== "none" || n && I(i, "position") !== "static")) {
				var f = i.getBoundingClientRect();
				o -= f.top + parseInt(I(i, "border-top-width")), s -= f.left + parseInt(I(i, "border-left-width")), c = o + a.height, l = s + a.width;
				break;
			}
		while (i = i.parentNode);
		if (r && e !== window) {
			var p = Me(i || e), m = p && p.a, h = p && p.d;
			p && (o /= h, s /= m, d /= m, u /= h, c = o + u, l = s + d);
		}
		return {
			top: o,
			left: s,
			bottom: c,
			right: l,
			width: d,
			height: u
		};
	}
}
function Pe(e, t, n) {
	for (var r = ze(e, !0), i = R(e)[t]; r;) {
		var a = R(r)[n], o = void 0;
		if (o = n === "top" || n === "left" ? i >= a : i <= a, !o) return r;
		if (r === L()) break;
		r = ze(r, !1);
	}
	return !1;
}
function Fe(e, t, n, r) {
	for (var i = 0, a = 0, o = e.children; a < o.length;) {
		if (o[a].style.display !== "none" && o[a] !== Q.ghost && (r || o[a] !== Q.dragged) && P(o[a], n.draggable, e, !1)) {
			if (i === t) return o[a];
			i++;
		}
		a++;
	}
	return null;
}
function Ie(e, t) {
	for (var n = e.lastElementChild; n && (n === Q.ghost || I(n, "display") === "none" || t && !ke(n, t));) n = n.previousElementSibling;
	return n || null;
}
function z(e, t) {
	var n = 0;
	if (!e || !e.parentNode) return -1;
	for (; e = e.previousElementSibling;) e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Q.clone && (!t || ke(e, t)) && n++;
	return n;
}
function Le(e) {
	var t = 0, n = 0, r = L();
	if (e) do {
		var i = Me(e), a = i.a, o = i.d;
		t += e.scrollLeft * a, n += e.scrollTop * o;
	} while (e !== r && (e = e.parentNode));
	return [t, n];
}
function Re(e, t) {
	for (var n in e) if (e.hasOwnProperty(n)) {
		for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
	}
	return -1;
}
function ze(e, t) {
	if (!e || !e.getBoundingClientRect) return L();
	var n = e, r = !1;
	do
		if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
			var i = I(n);
			if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
				if (!n.getBoundingClientRect || n === document.body) return L();
				if (r || t) return n;
				r = !0;
			}
		}
	while (n = n.parentNode);
	return L();
}
function Be(e, t) {
	if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
function Ve(e, t) {
	return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var He;
function Ue(e, t) {
	return function() {
		if (!He) {
			var n = arguments, r = this;
			n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), He = setTimeout(function() {
				He = void 0;
			}, t);
		}
	};
}
function We() {
	clearTimeout(He), He = void 0;
}
function Ge(e, t, n) {
	e.scrollLeft += t, e.scrollTop += n;
}
function Ke(e) {
	var t = window.Polymer, n = window.jQuery || window.Zepto;
	return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var B = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function qe() {
	var e = [], t;
	return {
		captureAnimationState: function() {
			e = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
				if (!(I(t, "display") === "none" || t === Q.ghost)) {
					e.push({
						target: t,
						rect: R(t)
					});
					var n = j({}, e[e.length - 1].rect);
					if (t.thisAnimationDuration) {
						var r = Me(t, !0);
						r && (n.top -= r.f, n.left -= r.e);
					}
					t.fromRect = n;
				}
			});
		},
		addAnimationState: function(t) {
			e.push(t);
		},
		removeAnimationState: function(t) {
			e.splice(Re(e, { target: t }), 1);
		},
		animateAll: function(n) {
			var r = this;
			if (!this.options.animation) {
				clearTimeout(t), typeof n == "function" && n();
				return;
			}
			var i = !1, a = 0;
			e.forEach(function(e) {
				var t = 0, n = e.target, o = n.fromRect, s = R(n), c = n.prevFromRect, l = n.prevToRect, u = e.rect, d = Me(n, !0);
				d && (s.top -= d.f, s.left -= d.e), n.toRect = s, n.thisAnimationDuration && Ve(c, s) && !Ve(o, s) && (u.top - s.top) / (u.left - s.left) === (o.top - s.top) / (o.left - s.left) && (t = Ye(u, c, l, r.options)), Ve(s, o) || (n.prevFromRect = o, n.prevToRect = s, t ||= r.options.animation, r.animate(n, u, s, t)), t && (i = !0, a = Math.max(a, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
					n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null;
				}, t), n.thisAnimationDuration = t);
			}), clearTimeout(t), i ? t = setTimeout(function() {
				typeof n == "function" && n();
			}, a) : typeof n == "function" && n(), e = [];
		},
		animate: function(e, t, n, r) {
			if (r) {
				I(e, "transition", ""), I(e, "transform", "");
				var i = Me(this.el), a = i && i.a, o = i && i.d, s = (t.left - n.left) / (a || 1), c = (t.top - n.top) / (o || 1);
				e.animatingX = !!s, e.animatingY = !!c, I(e, "transform", "translate3d(" + s + "px," + c + "px,0)"), this.forRepaintDummy = Je(e), I(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), I(e, "transform", "translate3d(0,0,0)"), typeof e.animated == "number" && clearTimeout(e.animated), e.animated = setTimeout(function() {
					I(e, "transition", ""), I(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1;
				}, r);
			}
		}
	};
}
function Je(e) {
	return e.offsetWidth;
}
function Ye(e, t, n, r) {
	return Math.sqrt((t.top - e.top) ** 2 + (t.left - e.left) ** 2) / Math.sqrt((t.top - n.top) ** 2 + (t.left - n.left) ** 2) * r.animation;
}
var Xe = [], Ze = { initializeByDefault: !0 }, Qe = {
	mount: function(e) {
		for (var t in Ze) Ze.hasOwnProperty(t) && !(t in e) && (e[t] = Ze[t]);
		Xe.forEach(function(t) {
			if (t.pluginName === e.pluginName) throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
		}), Xe.push(e);
	},
	pluginEvent: function(e, t, n) {
		var r = this;
		this.eventCanceled = !1, n.cancel = function() {
			r.eventCanceled = !0;
		};
		var i = e + "Global";
		Xe.forEach(function(r) {
			t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](j({ sortable: t }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](j({ sortable: t }, n)));
		});
	},
	initializePlugins: function(e, t, n, r) {
		for (var i in Xe.forEach(function(r) {
			var i = r.pluginName;
			if (!(!e.options[i] && !r.initializeByDefault)) {
				var a = new r(e, t, e.options);
				a.sortable = e, a.options = e.options, e[i] = a, _e(n, a.defaults);
			}
		}), e.options) if (e.options.hasOwnProperty(i)) {
			var a = this.modifyOption(e, i, e.options[i]);
			a !== void 0 && (e.options[i] = a);
		}
	},
	getEventProperties: function(e, t) {
		var n = {};
		return Xe.forEach(function(r) {
			typeof r.eventProperties == "function" && _e(n, r.eventProperties.call(t[r.pluginName], e));
		}), n;
	},
	modifyOption: function(e, t, n) {
		var r;
		return Xe.forEach(function(i) {
			e[i.pluginName] && i.optionListeners && typeof i.optionListeners[t] == "function" && (r = i.optionListeners[t].call(e[i.pluginName], n));
		}), r;
	}
};
function $e(e) {
	var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, a = e.cloneEl, o = e.toEl, s = e.fromEl, c = e.oldIndex, l = e.newIndex, u = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, m = e.extraEventProperties;
	if (t ||= n && n[B], t) {
		var h, g = t.options, _ = "on" + r.charAt(0).toUpperCase() + r.substr(1);
		window.CustomEvent && !Se && !Ce ? h = new CustomEvent(r, {
			bubbles: !0,
			cancelable: !0
		}) : (h = document.createEvent("Event"), h.initEvent(r, !0, !0)), h.to = o || n, h.from = s || n, h.item = i || n, h.clone = a, h.oldIndex = c, h.newIndex = l, h.oldDraggableIndex = u, h.newDraggableIndex = d, h.originalEvent = f, h.pullMode = p ? p.lastPutMode : void 0;
		var v = j(j({}, m), Qe.getEventProperties(r, t));
		for (var y in v) h[y] = v[y];
		n && n.dispatchEvent(h), g[_] && g[_].call(t, h);
	}
}
var et = ["evt"], V = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.evt, i = ye(n, et);
	Qe.pluginEvent.bind(Q)(e, t, j({
		dragEl: U,
		parentEl: W,
		ghostEl: G,
		rootEl: K,
		nextEl: tt,
		lastDownEl: nt,
		cloneEl: q,
		cloneHidden: rt,
		dragStarted: gt,
		putSortable: Y,
		activeSortable: Q.active,
		originalEvent: r,
		oldIndex: it,
		oldDraggableIndex: at,
		newIndex: J,
		newDraggableIndex: ot,
		hideGhostForTarget: Pt,
		unhideGhostForTarget: Ft,
		cloneNowHidden: function() {
			rt = !0;
		},
		cloneNowShown: function() {
			rt = !1;
		},
		dispatchSortableEvent: function(e) {
			H({
				sortable: t,
				name: e,
				originalEvent: r
			});
		}
	}, i));
};
function H(e) {
	$e(j({
		putSortable: Y,
		cloneEl: q,
		targetEl: U,
		rootEl: K,
		oldIndex: it,
		oldDraggableIndex: at,
		newIndex: J,
		newDraggableIndex: ot
	}, e));
}
var U, W, G, K, tt, nt, q, rt, it, J, at, ot, st, Y, ct = !1, lt = !1, ut = [], dt, X, ft, pt, mt, ht, gt, _t, vt, yt = !1, bt = !1, xt, Z, St = [], Ct = !1, wt = [], Tt = typeof document < "u", Et = Ee, Dt = Ce || Se ? "cssFloat" : "float", Ot = Tt && !De && !Ee && "draggable" in document.createElement("div"), kt = function() {
	if (Tt) {
		if (Se) return !1;
		var e = document.createElement("x");
		return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
	}
}(), At = function(e, t) {
	var n = I(e), r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = Fe(e, 0, t), a = Fe(e, 1, t), o = i && I(i), s = a && I(a), c = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + R(i).width, l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + R(a).width;
	if (n.display === "flex") return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
	if (n.display === "grid") return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
	if (i && o.float && o.float !== "none") {
		var u = o.float === "left" ? "left" : "right";
		return a && (s.clear === "both" || s.clear === u) ? "vertical" : "horizontal";
	}
	return i && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || c >= r && n[Dt] === "none" || a && n[Dt] === "none" && c + l > r) ? "vertical" : "horizontal";
}, jt = function(e, t, n) {
	var r = n ? e.left : e.top, i = n ? e.right : e.bottom, a = n ? e.width : e.height, o = n ? t.left : t.top, s = n ? t.right : t.bottom, c = n ? t.width : t.height;
	return r === o || i === s || r + a / 2 === o + c / 2;
}, Mt = function(e, t) {
	var n;
	return ut.some(function(r) {
		var i = r[B].options.emptyInsertThreshold;
		if (!(!i || Ie(r))) {
			var a = R(r), o = e >= a.left - i && e <= a.right + i, s = t >= a.top - i && t <= a.bottom + i;
			if (o && s) return n = r;
		}
	}), n;
}, Nt = function(e) {
	function t(e, n) {
		return function(r, i, a, o) {
			var s = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
			if (e == null && (n || s)) return !0;
			if (e == null || e === !1) return !1;
			if (n && e === "clone") return e;
			if (typeof e == "function") return t(e(r, i, a, o), n)(r, i, a, o);
			var c = (n ? r : i).options.group.name;
			return e === !0 || typeof e == "string" && e === c || e.join && e.indexOf(c) > -1;
		};
	}
	var n = {}, r = e.group;
	(!r || he(r) != "object") && (r = { name: r }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n;
}, Pt = function() {
	!kt && G && I(G, "display", "none");
}, Ft = function() {
	!kt && G && I(G, "display", "");
};
Tt && document.addEventListener("click", function(e) {
	if (lt) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), lt = !1, !1;
}, !0);
var It = function(e) {
	if (U) {
		e = e.touches ? e.touches[0] : e;
		var t = Mt(e.clientX, e.clientY);
		if (t) {
			var n = {};
			for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[B]._onDragOver(n);
		}
	}
}, Lt = function(e) {
	U && U.parentNode[B]._isOutsideThisEl(e.target);
};
function Q(e, t) {
	if (!(e && e.nodeType && e.nodeType === 1)) throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;
	this.el = e, this.options = t = _e({}, t), e[B] = this;
	var n = {
		group: null,
		sort: !0,
		disabled: !1,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
		swapThreshold: 1,
		invertSwap: !1,
		invertedSwapThreshold: null,
		removeCloneOnHide: !0,
		direction: function() {
			return At(e, this.options);
		},
		ghostClass: "sortable-ghost",
		chosenClass: "sortable-chosen",
		dragClass: "sortable-drag",
		ignore: "a, img",
		filter: null,
		preventOnFilter: !0,
		animation: 0,
		easing: null,
		setData: function(e, t) {
			e.setData("Text", t.textContent);
		},
		dropBubble: !1,
		dragoverBubble: !1,
		dataIdAttr: "data-id",
		delay: 0,
		delayOnTouchOnly: !1,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: !1,
		fallbackClass: "sortable-fallback",
		fallbackOnBody: !1,
		fallbackTolerance: 0,
		fallbackOffset: {
			x: 0,
			y: 0
		},
		supportPointer: Q.supportPointer !== !1 && "PointerEvent" in window && !Te,
		emptyInsertThreshold: 5
	};
	for (var r in Qe.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
	for (var i in Nt(t), this) i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
	this.nativeDraggable = t.forceFallback ? !1 : Ot, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? M(e, "pointerdown", this._onTapStart) : (M(e, "mousedown", this._onTapStart), M(e, "touchstart", this._onTapStart)), this.nativeDraggable && (M(e, "dragover", this), M(e, "dragenter", this)), ut.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), _e(this, qe());
}
Q.prototype = {
	constructor: Q,
	_isOutsideThisEl: function(e) {
		!this.el.contains(e) && e !== this.el && (_t = null);
	},
	_getDirection: function(e, t) {
		return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, U) : this.options.direction;
	},
	_onTapStart: function(e) {
		if (e.cancelable) {
			var t = this, n = this.el, r = this.options, i = r.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (o || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, l = r.filter;
			if (qt(n), !U && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Te && s && s.tagName.toUpperCase() === "SELECT") && (s = P(s, r.draggable, n, !1), !(s && s.animated) && nt !== s)) {
				if (it = z(s), at = z(s, r.draggable), typeof l == "function") {
					if (l.call(this, e, s, this)) {
						H({
							sortable: t,
							rootEl: c,
							name: "filter",
							targetEl: s,
							toEl: n,
							fromEl: n
						}), V("filter", t, { evt: e }), i && e.cancelable && e.preventDefault();
						return;
					}
				} else if (l && (l = l.split(",").some(function(r) {
					if (r = P(c, r.trim(), n, !1), r) return H({
						sortable: t,
						rootEl: r,
						name: "filter",
						targetEl: s,
						fromEl: n,
						toEl: n
					}), V("filter", t, { evt: e }), !0;
				}), l)) {
					i && e.cancelable && e.preventDefault();
					return;
				}
				r.handle && !P(c, r.handle, n, !1) || this._prepareDragStart(e, o, s);
			}
		}
	},
	_prepareDragStart: function(e, t, n) {
		var r = this, i = r.el, a = r.options, o = i.ownerDocument, s;
		if (n && !U && n.parentNode === i) {
			var c = R(n);
			if (K = i, U = n, W = U.parentNode, tt = U.nextSibling, nt = n, st = a.group, Q.dragged = U, dt = {
				target: U,
				clientX: (t || e).clientX,
				clientY: (t || e).clientY
			}, mt = dt.clientX - c.left, ht = dt.clientY - c.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, U.style["will-change"] = "all", s = function() {
				if (V("delayEnded", r, { evt: e }), Q.eventCanceled) {
					r._onDrop();
					return;
				}
				r._disableDelayedDragEvents(), !we && r.nativeDraggable && (U.draggable = !0), r._triggerDragStart(e, t), H({
					sortable: r,
					name: "choose",
					originalEvent: e
				}), F(U, a.chosenClass, !0);
			}, a.ignore.split(",").forEach(function(e) {
				Ne(U, e.trim(), Bt);
			}), M(o, "dragover", It), M(o, "mousemove", It), M(o, "touchmove", It), M(o, "mouseup", r._onDrop), M(o, "touchend", r._onDrop), M(o, "touchcancel", r._onDrop), we && this.nativeDraggable && (this.options.touchStartThreshold = 4, U.draggable = !0), V("delayStart", this, { evt: e }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Ce || Se))) {
				if (Q.eventCanceled) {
					this._onDrop();
					return;
				}
				M(o, "mouseup", r._disableDelayedDrag), M(o, "touchend", r._disableDelayedDrag), M(o, "touchcancel", r._disableDelayedDrag), M(o, "mousemove", r._delayedDragTouchMoveHandler), M(o, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && M(o, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
			} else s();
		}
	},
	_delayedDragTouchMoveHandler: function(e) {
		var t = e.touches ? e.touches[0] : e;
		Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
	},
	_disableDelayedDrag: function() {
		U && Bt(U), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._disableDelayedDrag), N(e, "touchend", this._disableDelayedDrag), N(e, "touchcancel", this._disableDelayedDrag), N(e, "mousemove", this._delayedDragTouchMoveHandler), N(e, "touchmove", this._delayedDragTouchMoveHandler), N(e, "pointermove", this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function(e, t) {
		t ||= e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? M(document, "pointermove", this._onTouchMove) : t ? M(document, "touchmove", this._onTouchMove) : M(document, "mousemove", this._onTouchMove) : (M(U, "dragend", this), M(K, "dragstart", this._onDragStart));
		try {
			document.selection ? Jt(function() {
				document.selection.empty();
			}) : window.getSelection().removeAllRanges();
		} catch {}
	},
	_dragStarted: function(e, t) {
		if (ct = !1, K && U) {
			V("dragStarted", this, { evt: t }), this.nativeDraggable && M(document, "dragover", Lt);
			var n = this.options;
			!e && F(U, n.dragClass, !1), F(U, n.ghostClass, !0), Q.active = this, e && this._appendGhost(), H({
				sortable: this,
				name: "start",
				originalEvent: t
			});
		} else this._nulling();
	},
	_emulateDragOver: function() {
		if (X) {
			this._lastX = X.clientX, this._lastY = X.clientY, Pt();
			for (var e = document.elementFromPoint(X.clientX, X.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(X.clientX, X.clientY), e !== t);) t = e;
			if (U.parentNode[B]._isOutsideThisEl(e), t) do {
				if (t[B]) {
					var n = void 0;
					if (n = t[B]._onDragOver({
						clientX: X.clientX,
						clientY: X.clientY,
						target: e,
						rootEl: t
					}), n && !this.options.dragoverBubble) break;
				}
				e = t;
			} while (t = t.parentNode);
			Ft();
		}
	},
	_onTouchMove: function(e) {
		if (dt) {
			var t = this.options, n = t.fallbackTolerance, r = t.fallbackOffset, i = e.touches ? e.touches[0] : e, a = G && Me(G, !0), o = G && a && a.a, s = G && a && a.d, c = Et && Z && Le(Z), l = (i.clientX - dt.clientX + r.x) / (o || 1) + (c ? c[0] - St[0] : 0) / (o || 1), u = (i.clientY - dt.clientY + r.y) / (s || 1) + (c ? c[1] - St[1] : 0) / (s || 1);
			if (!Q.active && !ct) {
				if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
				this._onDragStart(e, !0);
			}
			if (G) {
				a ? (a.e += l - (ft || 0), a.f += u - (pt || 0)) : a = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: l,
					f: u
				};
				var d = `matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;
				I(G, "webkitTransform", d), I(G, "mozTransform", d), I(G, "msTransform", d), I(G, "transform", d), ft = l, pt = u, X = i;
			}
			e.cancelable && e.preventDefault();
		}
	},
	_appendGhost: function() {
		if (!G) {
			var e = this.options.fallbackOnBody ? document.body : K, t = R(U, !0, Et, !0, e), n = this.options;
			if (Et) {
				for (Z = e; I(Z, "position") === "static" && I(Z, "transform") === "none" && Z !== document;) Z = Z.parentNode;
				Z !== document.body && Z !== document.documentElement ? (Z === document && (Z = L()), t.top += Z.scrollTop, t.left += Z.scrollLeft) : Z = L(), St = Le(Z);
			}
			G = U.cloneNode(!0), F(G, n.ghostClass, !1), F(G, n.fallbackClass, !0), F(G, n.dragClass, !0), I(G, "transition", ""), I(G, "transform", ""), I(G, "box-sizing", "border-box"), I(G, "margin", 0), I(G, "top", t.top), I(G, "left", t.left), I(G, "width", t.width), I(G, "height", t.height), I(G, "opacity", "0.8"), I(G, "position", Et ? "absolute" : "fixed"), I(G, "zIndex", "100000"), I(G, "pointerEvents", "none"), Q.ghost = G, e.appendChild(G), I(G, "transform-origin", mt / parseInt(G.style.width) * 100 + "% " + ht / parseInt(G.style.height) * 100 + "%");
		}
	},
	_onDragStart: function(e, t) {
		var n = this, r = e.dataTransfer, i = n.options;
		if (V("dragStart", this, { evt: e }), Q.eventCanceled) {
			this._onDrop();
			return;
		}
		V("setupClone", this), Q.eventCanceled || (q = Ke(U), q.draggable = !1, q.style["will-change"] = "", this._hideClone(), F(q, this.options.chosenClass, !1), Q.clone = q), n.cloneId = Jt(function() {
			V("clone", n), !Q.eventCanceled && (n.options.removeCloneOnHide || K.insertBefore(q, U), n._hideClone(), H({
				sortable: n,
				name: "clone"
			}));
		}), !t && F(U, i.dragClass, !0), t ? (lt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (N(document, "mouseup", n._onDrop), N(document, "touchend", n._onDrop), N(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, U)), M(document, "drop", n), I(U, "transform", "translateZ(0)")), ct = !0, n._dragStartId = Jt(n._dragStarted.bind(n, t, e)), M(document, "selectstart", n), gt = !0, Te && I(document.body, "user-select", "none");
	},
	_onDragOver: function(e) {
		var t = this.el, n = e.target, r, i, a, o = this.options, s = o.group, c = Q.active, l = st === s, u = o.sort, d = Y || c, f, p = this, m = !1;
		if (Ct) return;
		function h(o, s) {
			V(o, p, j({
				evt: e,
				isOwner: l,
				axis: f ? "vertical" : "horizontal",
				revert: a,
				dragRect: r,
				targetRect: i,
				canSort: u,
				fromSortable: d,
				target: n,
				completed: _,
				onMove: function(n, i) {
					return zt(K, t, U, r, n, R(n), e, i);
				},
				changed: v
			}, s));
		}
		function g() {
			h("dragOverAnimationCapture"), p.captureAnimationState(), p !== d && d.captureAnimationState();
		}
		function _(r) {
			return h("dragOverCompleted", { insertion: r }), r && (l ? c._hideClone() : c._showClone(p), p !== d && (F(U, Y ? Y.options.ghostClass : c.options.ghostClass, !1), F(U, o.ghostClass, !0)), Y !== p && p !== Q.active ? Y = p : p === Q.active && Y && (Y = null), d === p && (p._ignoreWhileAnimating = n), p.animateAll(function() {
				h("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
			}), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (n === U && !U.animated || n === t && !n.animated) && (_t = null), !o.dragoverBubble && !e.rootEl && n !== document && (U.parentNode[B]._isOutsideThisEl(e.target), !r && It(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
		}
		function v() {
			J = z(U), ot = z(U, o.draggable), H({
				sortable: p,
				name: "change",
				toEl: t,
				newIndex: J,
				newDraggableIndex: ot,
				originalEvent: e
			});
		}
		if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = P(n, o.draggable, t, !0), h("dragOver"), Q.eventCanceled) return m;
		if (U.contains(e.target) || n.animated && n.animatingX && n.animatingY || p._ignoreWhileAnimating === n) return _(!1);
		if (lt = !1, c && !o.disabled && (l ? u || (a = W !== K) : Y === this || (this.lastPutMode = st.checkPull(this, c, U, e)) && s.checkPut(this, c, U, e))) {
			if (f = this._getDirection(e, n) === "vertical", r = R(U), h("dragOverValid"), Q.eventCanceled) return m;
			if (a) return W = K, g(), this._hideClone(), h("revert"), Q.eventCanceled || (tt ? K.insertBefore(U, tt) : K.appendChild(U)), _(!0);
			var y = Ie(t, o.draggable);
			if (!y || Ut(e, f, this) && !y.animated) {
				if (y === U) return _(!1);
				if (y && t === e.target && (n = y), n && (i = R(n)), zt(K, t, U, r, n, i, e, !!n) !== !1) return g(), t.appendChild(U), W = t, v(), _(!0);
			} else if (y && Ht(e, f, this)) {
				var b = Fe(t, 0, o, !0);
				if (b === U) return _(!1);
				if (n = b, i = R(n), zt(K, t, U, r, n, i, e, !1) !== !1) return g(), t.insertBefore(U, b), W = t, v(), _(!0);
			} else if (n.parentNode === t) {
				i = R(n);
				var x = 0, S, ee = U.parentNode !== t, C = !jt(U.animated && U.toRect || r, n.animated && n.toRect || i, f), w = f ? "top" : "left", T = Pe(n, "top", "top") || Pe(U, "top", "top"), te = T ? T.scrollTop : void 0;
				_t !== n && (S = i[w], yt = !1, bt = !C && o.invertSwap || ee), x = Wt(e, n, i, f, C ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, bt, _t === n);
				var E;
				if (x !== 0) {
					var D = z(U);
					do
						D -= x, E = W.children[D];
					while (E && (I(E, "display") === "none" || E === G));
				}
				if (x === 0 || E === n) return _(!1);
				_t = n, vt = x;
				var O = n.nextElementSibling, k = !1;
				k = x === 1;
				var ne = zt(K, t, U, r, n, i, e, k);
				if (ne !== !1) return (ne === 1 || ne === -1) && (k = ne === 1), Ct = !0, setTimeout(Vt, 30), g(), k && !O ? t.appendChild(U) : n.parentNode.insertBefore(U, k ? O : n), T && Ge(T, 0, te - T.scrollTop), W = U.parentNode, S !== void 0 && !bt && (xt = Math.abs(S - R(n)[w])), v(), _(!0);
			}
			if (t.contains(U)) return _(!1);
		}
		return !1;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function() {
		N(document, "mousemove", this._onTouchMove), N(document, "touchmove", this._onTouchMove), N(document, "pointermove", this._onTouchMove), N(document, "dragover", It), N(document, "mousemove", It), N(document, "touchmove", It);
	},
	_offUpEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._onDrop), N(e, "touchend", this._onDrop), N(e, "pointerup", this._onDrop), N(e, "touchcancel", this._onDrop), N(document, "selectstart", this);
	},
	_onDrop: function(e) {
		var t = this.el, n = this.options;
		if (J = z(U), ot = z(U, n.draggable), V("drop", this, { evt: e }), W = U && U.parentNode, J = z(U), ot = z(U, n.draggable), Q.eventCanceled) {
			this._nulling();
			return;
		}
		ct = !1, bt = !1, yt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Yt(this.cloneId), Yt(this._dragStartId), this.nativeDraggable && (N(document, "drop", this), N(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Te && I(document.body, "user-select", ""), I(U, "transform", ""), e && (gt && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), G && G.parentNode && G.parentNode.removeChild(G), (K === W || Y && Y.lastPutMode !== "clone") && q && q.parentNode && q.parentNode.removeChild(q), U && (this.nativeDraggable && N(U, "dragend", this), Bt(U), U.style["will-change"] = "", gt && !ct && F(U, Y ? Y.options.ghostClass : this.options.ghostClass, !1), F(U, this.options.chosenClass, !1), H({
			sortable: this,
			name: "unchoose",
			toEl: W,
			newIndex: null,
			newDraggableIndex: null,
			originalEvent: e
		}), K === W ? J !== it && J >= 0 && (H({
			sortable: this,
			name: "update",
			toEl: W,
			originalEvent: e
		}), H({
			sortable: this,
			name: "sort",
			toEl: W,
			originalEvent: e
		})) : (J >= 0 && (H({
			rootEl: W,
			name: "add",
			toEl: W,
			fromEl: K,
			originalEvent: e
		}), H({
			sortable: this,
			name: "remove",
			toEl: W,
			originalEvent: e
		}), H({
			rootEl: W,
			name: "sort",
			toEl: W,
			fromEl: K,
			originalEvent: e
		}), H({
			sortable: this,
			name: "sort",
			toEl: W,
			originalEvent: e
		})), Y && Y.save()), Q.active && ((J == null || J === -1) && (J = it, ot = at), H({
			sortable: this,
			name: "end",
			toEl: W,
			originalEvent: e
		}), this.save()))), this._nulling();
	},
	_nulling: function() {
		V("nulling", this), K = U = W = G = tt = q = nt = rt = dt = X = gt = J = ot = it = at = _t = vt = Y = st = Q.dragged = Q.ghost = Q.clone = Q.active = null, wt.forEach(function(e) {
			e.checked = !0;
		}), wt.length = ft = pt = 0;
	},
	handleEvent: function(e) {
		switch (e.type) {
			case "drop":
			case "dragend":
				this._onDrop(e);
				break;
			case "dragenter":
			case "dragover":
				U && (this._onDragOver(e), Rt(e));
				break;
			case "selectstart":
				e.preventDefault();
				break;
		}
	},
	toArray: function() {
		for (var e = [], t, n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++) t = n[r], P(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || Kt(t));
		return e;
	},
	sort: function(e, t) {
		var n = {}, r = this.el;
		this.toArray().forEach(function(e, t) {
			var i = r.children[t];
			P(i, this.options.draggable, r, !1) && (n[e] = i);
		}, this), t && this.captureAnimationState(), e.forEach(function(e) {
			n[e] && (r.removeChild(n[e]), r.appendChild(n[e]));
		}), t && this.animateAll();
	},
	save: function() {
		var e = this.options.store;
		e && e.set && e.set(this);
	},
	closest: function(e, t) {
		return P(e, t || this.options.draggable, this.el, !1);
	},
	option: function(e, t) {
		var n = this.options;
		if (t === void 0) return n[e];
		var r = Qe.modifyOption(this, e, t);
		r === void 0 ? n[e] = t : n[e] = r, e === "group" && Nt(n);
	},
	destroy: function() {
		V("destroy", this);
		var e = this.el;
		e[B] = null, N(e, "mousedown", this._onTapStart), N(e, "touchstart", this._onTapStart), N(e, "pointerdown", this._onTapStart), this.nativeDraggable && (N(e, "dragover", this), N(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
			e.removeAttribute("draggable");
		}), this._onDrop(), this._disableDelayedDragEvents(), ut.splice(ut.indexOf(this.el), 1), this.el = e = null;
	},
	_hideClone: function() {
		if (!rt) {
			if (V("hideClone", this), Q.eventCanceled) return;
			I(q, "display", "none"), this.options.removeCloneOnHide && q.parentNode && q.parentNode.removeChild(q), rt = !0;
		}
	},
	_showClone: function(e) {
		if (e.lastPutMode !== "clone") {
			this._hideClone();
			return;
		}
		if (rt) {
			if (V("showClone", this), Q.eventCanceled) return;
			U.parentNode == K && !this.options.group.revertClone ? K.insertBefore(q, U) : tt ? K.insertBefore(q, tt) : K.appendChild(q), this.options.group.revertClone && this.animate(U, q), I(q, "display", ""), rt = !1;
		}
	}
};
function Rt(e) {
	e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function zt(e, t, n, r, i, a, o, s) {
	var c, l = e[B], u = l.options.onMove, d;
	return window.CustomEvent && !Se && !Ce ? c = new CustomEvent("move", {
		bubbles: !0,
		cancelable: !0
	}) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = e, c.dragged = n, c.draggedRect = r, c.related = i || t, c.relatedRect = a || R(t), c.willInsertAfter = s, c.originalEvent = o, e.dispatchEvent(c), u && (d = u.call(l, c, o)), d;
}
function Bt(e) {
	e.draggable = !1;
}
function Vt() {
	Ct = !1;
}
function Ht(e, t, n) {
	var r = R(Fe(n.el, 0, n.options, !0)), i = 10;
	return t ? e.clientX < r.left - i || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - i || e.clientY < r.bottom && e.clientX < r.left;
}
function Ut(e, t, n) {
	var r = R(Ie(n.el, n.options.draggable)), i = 10;
	return t ? e.clientX > r.right + i || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + i;
}
function Wt(e, t, n, r, i, a, o, s) {
	var c = r ? e.clientY : e.clientX, l = r ? n.height : n.width, u = r ? n.top : n.left, d = r ? n.bottom : n.right, f = !1;
	if (!o) {
		if (s && xt < l * i) {
			if (!yt && (vt === 1 ? c > u + l * a / 2 : c < d - l * a / 2) && (yt = !0), yt) f = !0;
			else if (vt === 1 ? c < u + xt : c > d - xt) return -vt;
		} else if (c > u + l * (1 - i) / 2 && c < d - l * (1 - i) / 2) return Gt(t);
	}
	return f ||= o, f && (c < u + l * a / 2 || c > d - l * a / 2) ? c > u + l / 2 ? 1 : -1 : 0;
}
function Gt(e) {
	return z(U) < z(e) ? 1 : -1;
}
function Kt(e) {
	for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
	return r.toString(36);
}
function qt(e) {
	wt.length = 0;
	for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
		var r = t[n];
		r.checked && wt.push(r);
	}
}
function Jt(e) {
	return setTimeout(e, 0);
}
function Yt(e) {
	return clearTimeout(e);
}
Tt && M(document, "touchmove", function(e) {
	(Q.active || ct) && e.cancelable && e.preventDefault();
}), Q.utils = {
	on: M,
	off: N,
	css: I,
	find: Ne,
	is: function(e, t) {
		return !!P(e, t, e, !1);
	},
	extend: Be,
	throttle: Ue,
	closest: P,
	toggleClass: F,
	clone: Ke,
	index: z,
	nextTick: Jt,
	cancelNextTick: Yt,
	detectDirection: At,
	getChild: Fe
}, Q.get = function(e) {
	return e[B];
}, Q.mount = function() {
	var e = [...arguments];
	e[0].constructor === Array && (e = e[0]), e.forEach(function(e) {
		if (!e.prototype || !e.prototype.constructor) throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;
		e.utils && (Q.utils = j(j({}, Q.utils), e.utils)), Qe.mount(e);
	});
}, Q.create = function(e, t) {
	return new Q(e, t);
}, Q.version = be;
var $ = [], Xt, Zt, Qt = !1, $t, en, tn, nn;
function rn() {
	function e() {
		for (var e in this.defaults = {
			scroll: !0,
			forceAutoScrollFallback: !1,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: !0
		}, this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
	}
	return e.prototype = {
		dragStarted: function(e) {
			var t = e.originalEvent;
			this.sortable.nativeDraggable ? M(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? M(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? M(document, "touchmove", this._handleFallbackAutoScroll) : M(document, "mousemove", this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function(e) {
			var t = e.originalEvent;
			!this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
		},
		drop: function() {
			this.sortable.nativeDraggable ? N(document, "dragover", this._handleAutoScroll) : (N(document, "pointermove", this._handleFallbackAutoScroll), N(document, "touchmove", this._handleFallbackAutoScroll), N(document, "mousemove", this._handleFallbackAutoScroll)), on(), an(), We();
		},
		nulling: function() {
			tn = Zt = Xt = Qt = nn = $t = en = null, $.length = 0;
		},
		_handleFallbackAutoScroll: function(e) {
			this._handleAutoScroll(e, !0);
		},
		_handleAutoScroll: function(e, t) {
			var n = this, r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(r, i);
			if (tn = e, t || this.options.forceAutoScrollFallback || Ce || Se || Te) {
				sn(e, this.options, a, t);
				var o = ze(a, !0);
				Qt && (!nn || r !== $t || i !== en) && (nn && on(), nn = setInterval(function() {
					var a = ze(document.elementFromPoint(r, i), !0);
					a !== o && (o = a, an()), sn(e, n.options, a, t);
				}, 10), $t = r, en = i);
			} else {
				if (!this.options.bubbleScroll || ze(a, !0) === L()) {
					an();
					return;
				}
				sn(e, this.options, ze(a, !1), !1);
			}
		}
	}, _e(e, {
		pluginName: "scroll",
		initializeByDefault: !0
	});
}
function an() {
	$.forEach(function(e) {
		clearInterval(e.pid);
	}), $ = [];
}
function on() {
	clearInterval(nn);
}
var sn = Ue(function(e, t, n, r) {
	if (t.scroll) {
		var i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, c = L(), l = !1, u;
		Zt !== n && (Zt = n, an(), Xt = t.scroll, u = t.scrollFn, Xt === !0 && (Xt = ze(n, !0)));
		var d = 0, f = Xt;
		do {
			var p = f, m = R(p), h = m.top, g = m.bottom, _ = m.left, v = m.right, y = m.width, b = m.height, x = void 0, S = void 0, ee = p.scrollWidth, C = p.scrollHeight, w = I(p), T = p.scrollLeft, te = p.scrollTop;
			p === c ? (x = y < ee && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible"), S = b < C && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")) : (x = y < ee && (w.overflowX === "auto" || w.overflowX === "scroll"), S = b < C && (w.overflowY === "auto" || w.overflowY === "scroll"));
			var E = x && (Math.abs(v - i) <= o && T + y < ee) - (Math.abs(_ - i) <= o && !!T), D = S && (Math.abs(g - a) <= o && te + b < C) - (Math.abs(h - a) <= o && !!te);
			if (!$[d]) for (var O = 0; O <= d; O++) $[O] || ($[O] = {});
			($[d].vx != E || $[d].vy != D || $[d].el !== p) && ($[d].el = p, $[d].vx = E, $[d].vy = D, clearInterval($[d].pid), (E != 0 || D != 0) && (l = !0, $[d].pid = setInterval(function() {
				r && this.layer === 0 && Q.active._onTouchMove(tn);
				var t = $[this.layer].vy ? $[this.layer].vy * s : 0, n = $[this.layer].vx ? $[this.layer].vx * s : 0;
				typeof u == "function" && u.call(Q.dragged.parentNode[B], n, t, e, tn, $[this.layer].el) !== "continue" || Ge($[this.layer].el, n, t);
			}.bind({ layer: d }), 24))), d++;
		} while (t.bubbleScroll && f !== c && (f = ze(f, !1)));
		Qt = l;
	}
}, 30), cn = function(e) {
	var t = e.originalEvent, n = e.putSortable, r = e.dragEl, i = e.activeSortable, a = e.dispatchSortableEvent, o = e.hideGhostForTarget, s = e.unhideGhostForTarget;
	if (t) {
		var c = n || i;
		o();
		var l = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, u = document.elementFromPoint(l.clientX, l.clientY);
		s(), c && !c.el.contains(u) && (a("spill"), this.onSpill({
			dragEl: r,
			putSortable: n
		}));
	}
};
function ln() {}
ln.prototype = {
	startIndex: null,
	dragStart: function(e) {
		this.startIndex = e.oldDraggableIndex;
	},
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable;
		this.sortable.captureAnimationState(), n && n.captureAnimationState();
		var r = Fe(this.sortable.el, this.startIndex, this.options);
		r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
	},
	drop: cn
}, _e(ln, { pluginName: "revertOnSpill" });
function un() {}
un.prototype = {
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable || this.sortable;
		n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll();
	},
	drop: cn
}, _e(un, { pluginName: "removeOnSpill" }), Q.mount(new rn()), Q.mount(un, ln);
//#endregion
//#region node_modules/.pnpm/vuedraggable-es@4.1.1_vue@3.5.31_typescript@6.0.3_/node_modules/vuedraggable-es/dist/index.es.js
var dn = Object.defineProperty, fn = Object.defineProperties, pn = Object.getOwnPropertyDescriptors, mn = Object.getOwnPropertySymbols, hn = Object.prototype.hasOwnProperty, gn = Object.prototype.propertyIsEnumerable, _n = (e, t, n) => t in e ? dn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, vn = (e, t) => {
	for (var n in t ||= {}) hn.call(t, n) && _n(e, n, t[n]);
	if (mn) for (var n of mn(t)) gn.call(t, n) && _n(e, n, t[n]);
	return e;
}, yn = (e, t) => fn(e, pn(t));
function bn(e) {
	e.parentElement !== null && e.parentElement.removeChild(e);
}
function xn(e, t, n) {
	let r = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
	e.insertBefore(t, r);
}
function Sn() {
	return typeof window < "u" ? window.console : global.console;
}
var Cn = Sn();
function wn(e) {
	let t = /* @__PURE__ */ Object.create(null);
	return function(n) {
		return t[n] || (t[n] = e(n));
	};
}
var Tn = /-(\w)/g, En = wn((e) => e.replace(Tn, (e, t) => t.toUpperCase())), Dn = [
	"Start",
	"Add",
	"Remove",
	"Update",
	"End"
], On = [
	"Choose",
	"Unchoose",
	"Sort",
	"Filter",
	"Clone"
], kn = ["Move"], An = [
	kn,
	Dn,
	On
].flatMap((e) => e).map((e) => `on${e}`), jn = {
	manage: kn,
	manageAndEmit: Dn,
	emit: On
};
function Mn(e) {
	return An.indexOf(e) !== -1;
}
var Nn = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.link.main.map.mark.math.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rb.rp.rt.rtc.ruby.s.samp.script.section.select.slot.small.source.span.strong.style.sub.summary.sup.svg.table.tbody.td.template.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr".split(".");
function Pn(e) {
	return Nn.includes(e);
}
function Fn(e) {
	return ["transition-group", "TransitionGroup"].includes(e);
}
function In(e) {
	return [
		"id",
		"class",
		"role",
		"style"
	].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on");
}
function Ln(e) {
	return e.reduce((e, [t, n]) => (e[t] = n, e), {});
}
function Rn({ $attrs: e, componentData: t = {} }) {
	return vn(vn({}, Ln(Object.entries(e).filter(([e, t]) => In(e)))), t);
}
function zn({ $attrs: e, callBackBuilder: t }) {
	let n = Ln(Bn(e));
	Object.entries(t).forEach(([e, t]) => {
		jn[e].forEach((e) => {
			n[`on${e}`] = t(e);
		});
	});
	let r = `[data-draggable]${n.draggable || ""}`;
	return yn(vn({}, n), { draggable: r });
}
function Bn(e) {
	return Object.entries(e).filter(([e, t]) => !In(e)).map(([e, t]) => [En(e), t]).filter(([e, t]) => !Mn(e));
}
var Vn = (e) => {
	let t = e.el || Array.isArray(e.children) && e.children[0].el.parentNode;
	return t || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), t || {};
}, Hn = (e, t) => e.__draggable_context = t, Un = (e) => e.__draggable_context, Wn = class {
	constructor({ nodes: { header: e, default: t, footer: n }, root: r, realList: i }) {
		this.defaultNodes = t, this.children = [
			...e,
			...t,
			...n
		], this.externalComponent = r.externalComponent, this.rootTransition = r.transition, this.tag = r.tag, this.realList = i;
	}
	get _isRootComponent() {
		return this.externalComponent || this.rootTransition;
	}
	render(e, t) {
		let { tag: n, children: r, _isRootComponent: i } = this;
		return e(n, t, i ? { default: () => r } : r);
	}
	updated() {
		let { defaultNodes: e, realList: t } = this;
		e.forEach((e, n) => {
			Hn(Vn(e), {
				element: t[n],
				index: n
			});
		});
	}
	getUnderlyingVm(e) {
		return Un(e);
	}
	getVmIndexFromDomIndex(e, t) {
		let { defaultNodes: n } = this, { length: r } = n, i = t.children, a = i.item(e);
		if (a === null) return r;
		let o = Un(a);
		if (o) return o.index;
		if (r === 0) return 0;
		let s = Vn(n[0]);
		return e < [...i].findIndex((e) => e === s) ? 0 : r;
	}
};
function Gn(e, t) {
	let n = e[t];
	return n ? n() : [];
}
function Kn({ $slots: e, realList: t, getKey: n }) {
	let r = t || [], [i, a] = ["header", "footer"].map((t) => Gn(e, t)), { item: o } = e;
	if (!o) throw Error("draggable element must have an item slot");
	let s = r.flatMap((e, t) => o({
		element: e,
		index: t
	}).map((t) => (t.key = n(e), t.props = yn(vn({}, t.props || {}), { "data-draggable": !0 }), t)));
	if (s.length !== r.length) throw Error("Item slot must have only one child");
	return {
		header: i,
		footer: a,
		default: s
	};
}
function qn(e) {
	let t = Fn(e), n = !Pn(e) && !t;
	return {
		transition: t,
		externalComponent: n,
		tag: n ? re(e) : t ? f : e
	};
}
function Jn({ $slots: e, tag: t, realList: n, getKey: r }) {
	return new Wn({
		nodes: Kn({
			$slots: e,
			realList: n,
			getKey: r
		}),
		root: qn(t),
		realList: n
	});
}
function Yn(e, t) {
	C(() => this.$emit(e.toLowerCase(), t));
}
function Xn(e) {
	return (t, n) => {
		if (this.realList !== null) return this[`onDrag${e}`](t, n);
	};
}
function Zn(e) {
	let t = Xn.call(this, e);
	return (n, r) => {
		t.call(this, n, r), Yn.call(this, e, n);
	};
}
var Qn = null, $n = y({
	name: "draggable",
	inheritAttrs: !1,
	props: {
		list: {
			type: Array,
			required: !1,
			default: null
		},
		modelValue: {
			type: Array,
			required: !1,
			default: null
		},
		itemKey: {
			type: [String, Function],
			required: !0
		},
		clone: {
			type: Function,
			default: (e) => e
		},
		tag: {
			type: String,
			default: "div"
		},
		move: {
			type: Function,
			default: null
		},
		componentData: {
			type: Object,
			required: !1,
			default: null
		}
	},
	emits: [
		"update:modelValue",
		"change",
		...[...jn.manageAndEmit, ...jn.emit].map((e) => e.toLowerCase())
	],
	data() {
		return { error: !1 };
	},
	render() {
		try {
			this.error = !1;
			let { $slots: e, $attrs: t, tag: n, componentData: r, realList: i, getKey: a } = this, o = Jn({
				$slots: e,
				tag: n,
				realList: i,
				getKey: a
			});
			this.componentStructure = o;
			let s = Rn({
				$attrs: t,
				componentData: r
			});
			return o.render(b, s);
		} catch (e) {
			return this.error = !0, b("pre", { style: { color: "red" } }, e.stack);
		}
	},
	created() {
		this.list !== null && this.modelValue !== null && Cn.error("modelValue and list props are mutually exclusive! Please set one or another.");
	},
	mounted() {
		if (this.error) return;
		let { $attrs: e, $el: t, componentStructure: n } = this;
		n.updated();
		let r = zn({
			$attrs: e,
			callBackBuilder: {
				manageAndEmit: (e) => Zn.call(this, e),
				emit: (e) => Yn.bind(this, e),
				manage: (e) => Xn.call(this, e)
			}
		}), i = t.nodeType === 1 ? t : t.parentElement;
		this._sortable = new Q(i, r), this.targetDomElement = i, i.__draggable_component__ = this;
	},
	updated() {
		this.componentStructure.updated();
	},
	beforeUnmount() {
		this._sortable !== void 0 && this._sortable.destroy();
	},
	computed: {
		realList() {
			let { list: e } = this;
			return e || this.modelValue;
		},
		getKey() {
			let { itemKey: e } = this;
			return typeof e == "function" ? e : (t) => t[e];
		}
	},
	watch: { $attrs: {
		handler(e) {
			let { _sortable: t } = this;
			t && Bn(e).forEach(([e, n]) => {
				t.option(e, n);
			});
		},
		deep: !0
	} },
	methods: {
		getUnderlyingVm(e) {
			return this.componentStructure.getUnderlyingVm(e) || null;
		},
		getUnderlyingPotencialDraggableComponent(e) {
			return e.__draggable_component__;
		},
		emitChanges(e) {
			C(() => this.$emit("change", e));
		},
		alterList(e) {
			if (this.list) {
				e(this.list);
				return;
			}
			let t = [...this.modelValue];
			e(t), this.$emit("update:modelValue", t);
		},
		spliceList() {
			this.alterList((e) => e.splice(...arguments));
		},
		updatePosition(e, t) {
			this.alterList((n) => n.splice(t, 0, n.splice(e, 1)[0]));
		},
		getRelatedContextFromMoveEvent({ to: e, related: t }) {
			let n = this.getUnderlyingPotencialDraggableComponent(e);
			if (!n) return { component: n };
			let r = n.realList, i = {
				list: r,
				component: n
			};
			return e !== t && r ? vn(vn({}, n.getUnderlyingVm(t) || {}), i) : i;
		},
		getVmIndexFromDomIndex(e) {
			return this.componentStructure.getVmIndexFromDomIndex(e, this.targetDomElement);
		},
		onDragStart(e) {
			this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), Qn = e.item;
		},
		onDragAdd(e) {
			let t = e.item._underlying_vm_;
			if (t === void 0) return;
			bn(e.item);
			let n = this.getVmIndexFromDomIndex(e.newIndex);
			this.spliceList(n, 0, t);
			let r = {
				element: t,
				newIndex: n
			};
			this.emitChanges({ added: r });
		},
		onDragRemove(e) {
			if (xn(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
				bn(e.clone);
				return;
			}
			let { index: t, element: n } = this.context;
			this.spliceList(t, 1);
			let r = {
				element: n,
				oldIndex: t
			};
			this.emitChanges({ removed: r });
		},
		onDragUpdate(e) {
			bn(e.item), xn(e.from, e.item, e.oldIndex);
			let t = this.context.index, n = this.getVmIndexFromDomIndex(e.newIndex);
			this.updatePosition(t, n);
			let r = {
				element: this.context.element,
				oldIndex: t,
				newIndex: n
			};
			this.emitChanges({ moved: r });
		},
		computeFutureIndex(e, t) {
			if (!e.element) return 0;
			let n = [...t.to.children].filter((e) => e.style.display !== "none"), r = n.indexOf(t.related), i = e.component.getVmIndexFromDomIndex(r);
			return n.indexOf(Qn) !== -1 || !t.willInsertAfter ? i : i + 1;
		},
		onDragMove(e, t) {
			let { move: n, realList: r } = this;
			if (!n || !r) return !0;
			let i = this.getRelatedContextFromMoveEvent(e), a = this.computeFutureIndex(i, e), o = yn(vn({}, this.context), { futureIndex: a });
			return n(yn(vn({}, e), {
				relatedContext: i,
				draggedContext: o
			}), t);
		},
		onDragEnd() {
			Qn = null;
		}
	}
}), er = l, tr = ["onContextmenu", "onMousedown"], nr = { class: "resize-box" }, rr = ["onMousedown"], ir = { class: "position-tips" }, ar = 1, or = /* @__PURE__ */ y({
	__name: "design",
	props: {
		modelValue: {},
		modelModifiers: {}
	},
	emits: /* @__PURE__ */ S(["contextmenuEvent", "clickFocus"], ["update:modelValue"]),
	setup(t, { emit: n }) {
		let s = n, l = o(), f = oe(t, "modelValue"), h = p(() => l.selectedComp.map((e) => e.id)), v = k({
			resizeFlag: !1,
			dragFlag: !1,
			hasMove: !1,
			index: -1,
			startX: 0,
			startY: 0,
			startWidth: 0,
			startHeight: 0,
			startXPos: 0,
			startYPos: 0,
			obj: {},
			groupPos: {}
		}), y = JSON.stringify(v.value), b = (e, t, n) => {
			e.preventDefault(), e.stopPropagation();
			let { width: r, height: a, x: o, y: s } = t || {};
			v.value = {
				resizeFlag: !0,
				startX: e.clientX,
				startY: e.clientY,
				startWidth: i(r),
				startHeight: i(a),
				startXPos: i(o),
				startYPos: i(s),
				index: n,
				obj: t
			};
		}, x = (e) => {
			let { resizeFlag: t, index: n, startX: r, startY: i, startWidth: a, startHeight: o, startXPos: s, startYPos: c, obj: l } = v.value;
			if (!t) return;
			let u = e.clientX - r, d = e.clientY - i, f = a, p = o, m = s, h = c;
			switch (n) {
				case 1:
					f = a - u, p = o - d, m = s + u, h = c + d;
					break;
				case 2:
					p = o - d, h = c + d;
					break;
				case 3:
					f = a + u, p = o - d, h = c + d;
					break;
				case 4:
					f = a - u, m = s + u;
					break;
				case 5:
					f = a + u;
					break;
				case 6:
					f = a - u, p = o + d, m = s + u;
					break;
				case 7:
					p = o + d;
					break;
				case 8:
					f = a + u, p = o + d;
					break;
			}
			f = Math.max(f, ar), p = Math.max(p, ar), l.width = f, l.height = p, l.x = m, l.y = h, a !== f && o !== p && (v.value.hasMove = !0);
		}, S = (e, t) => {
			if (s("clickFocus"), t.locked) return;
			if (!a(t)) return l.setSelectedComp(t), !1;
			e.preventDefault(), s("contextmenuEvent", { close: !0 });
			let { x: n, y: r } = t || {};
			v.value = {
				dragFlag: !0,
				hasMove: !1,
				startX: e.clientX,
				startY: e.clientY,
				startXPos: i(n),
				startYPos: i(r),
				obj: t
			}, t.type === "rect" && (v.value.groupPos = l.selectedComp.map((e) => [e.x, e.y]));
			let o = l.ctrlPress;
			t.type !== "rect" && (l.setSelectedComp(t, o), o || l.deleteRect()), o && l.selectedComp.length > 1 && (v.value.obj = u(c())), l.setControlTip("可使用键盘调整位置或按下delete键可删除");
		}, C = (e) => {
			let { startX: t, startY: n, startXPos: r, startYPos: a, dragFlag: o, obj: s, groupPos: c } = v.value;
			if (!o) return;
			let u = e.clientX - t, d = e.clientY - n, f = r + u, p = a + d;
			s.x = f, s.y = p, s.type === "rect" && l.selectedComp.forEach((e, t) => {
				e.x = i(c[t][0]) + u, e.y = i(c[t][1]) + d;
			}), u !== 0 && d !== 0 && (v.value.hasMove = !0), l.setControlTip(`${f}:${p}`);
		}, O = () => {
			let { startXPos: e, startYPos: t, dragFlag: n, obj: r, groupPos: a, hasMove: o, resizeFlag: s, startWidth: c, startHeight: u } = v.value;
			if (o) {
				let o = [r], d = [{
					x: e,
					y: t
				}];
				n && r.type === "rect" && l.selectedComp.forEach((e, t) => {
					o.push(e), d.push({
						x: i(a[t][0]),
						y: a[t][1]
					});
				}), s && (d = [{
					x: e,
					y: t,
					width: c,
					height: u
				}]), l.updateComponentHistory(o, d, !0);
			}
			v.value = JSON.parse(y);
		}, ie = (t) => {
			let n = t.newIndex, r = f.value[n];
			if ((t.target && t.target.getAttribute("data-type")) === "div" && r.type === "div") {
				f.value.splice(n, 1), e.warning("不能嵌套div标签");
				return;
			}
			let { offsetX: i, offsetY: a } = t.originalEvent;
			r.id = r.type + (/* @__PURE__ */ new Date()).getTime(), r.x = i, r.y = a, l.setSelectedComp(r), l.deleteRect(), l.setHistory({
				execute: () => {
					l.setDesignData(r, !0);
				},
				undo: () => {
					l.setDeleteDesignData(r.id);
				}
			});
		}, ce = (e, t) => {
			t.preventDefault(), s("contextmenuEvent", {
				x: t.clientX,
				y: t.clientY,
				component: e
			});
		};
		return te(() => {
			window.addEventListener("mousemove", (e) => {
				C(e), x(e);
			}), window.addEventListener("mouseup", O);
		}), E(() => {
			window.removeEventListener("mousemove", (e) => {
				C(e), x(e);
			}), window.removeEventListener("mouseup", O);
		}), (e, t) => {
			let n = re("design", !0);
			return D(), m(A($n), ee({
				group: "screen",
				animation: 200,
				handle: ".none"
			}, {
				list: f.value,
				class: "drag",
				"item-key": "id",
				name: "fade",
				"ghost-class": "ghost",
				onAdd: ie
			}), {
				item: le(({ element: e }) => [_("div", {
					class: w(["component-wrapper", {
						["group-" + e.type]: !0,
						[e.class]: e.class,
						active: h.value?.includes(e.id)
					}]),
					style: T(A(r)(e)),
					onContextmenu: de((t) => ce(e, t), ["stop", "prevent"]),
					onMousedown: de((t) => S(t, e), ["left", "stop"])
				}, [ue(_("div", nr, [(D(), g(d, null, ne(8, (t) => _("span", {
					key: t,
					class: w(`rs${t}`),
					onMousedown: de((n) => b(n, e, t), ["stop"])
				}, null, 42, rr)), 64)), _("div", ir, ae(A(r)(e)), 1)], 512), [[se, h.value?.includes(e.id) && A(a)(e)]]), ["container", "div"].includes(e.type) ? (D(), m(n, {
					key: 0,
					modelValue: e.children,
					"onUpdate:modelValue": (t) => e.children = t,
					"data-type": "div"
				}, null, 8, ["modelValue", "onUpdate:modelValue"])) : (D(), m(er, {
					key: 1,
					data: e
				}, null, 8, ["data"]))], 46, tr)]),
				_: 1
			}, 16, ["list"]);
		};
	}
}), sr = /* @__PURE__ */ y({
	__name: "index",
	props: {
		name: {},
		size: { default: "" },
		color: { default: "" }
	},
	setup(e) {
		let t = e, n = p(() => {
			if (!t.name) return !1;
			if (typeof t.name == "string") {
				let e = t.name;
				return !(e.startsWith("icon") || e.startsWith("fa"));
			}
			return !0;
		});
		return (t, r) => {
			let i = re("el-icon");
			return n.value ? (D(), m(i, {
				key: 0,
				size: e.size,
				color: e.color
			}, {
				default: le(() => [(D(), m(ie(e.name)))]),
				_: 1
			}, 8, ["size", "color"])) : ue((D(), g("i", {
				key: 1,
				class: w([e.name]),
				style: T({ fontSize: e.size })
			}, null, 6)), [[se, e.name]]);
		};
	}
}), cr = ["onClick"], lr = /* @__PURE__ */ y({
	__name: "contextMenu",
	setup(r, { expose: i }) {
		let a = o(), c = k(!1), l = k({}), u = k({}), f = k([]), v = (e) => {
			let { type: t, locked: n } = e, r = [];
			if (t === "rect" && a.selectedComp.length > 1 || r.push("link"), t !== "container" && r.push("split"), n) {
				let e = y.value.filter((e) => e.key !== "unlock").map((e) => e.key);
				r.push(...e);
			} else r.push("unlock");
			f.value = r;
		}, y = p(() => [
			{
				key: "copy",
				label: "复制",
				icon: "DocumentCopy"
			},
			{
				key: "del",
				label: "删除",
				icon: "Delete"
			},
			{
				key: "divider",
				label: ""
			},
			{
				key: "link",
				label: "组合",
				icon: "Link"
			},
			{
				key: "split",
				label: "拆分",
				icon: "icon-split"
			},
			{
				key: "divider",
				label: ""
			},
			{
				key: "unlock",
				label: "解锁",
				icon: "Unlock"
			},
			{
				key: "lock",
				label: "锁定",
				icon: "Lock"
			},
			{
				key: "divider",
				label: ""
			},
			{
				key: "left",
				label: "左对齐",
				icon: "icon-left-align"
			},
			{
				key: "right",
				label: "右对齐",
				icon: "icon-right-align"
			},
			{
				key: "top",
				label: "顶部对齐",
				icon: "icon-top-align"
			},
			{
				key: "bottom",
				label: "底部对齐",
				icon: "icon-bottom-align"
			},
			{
				key: "horizontally",
				label: "水平居中",
				icon: "icon-horizontal"
			},
			{
				key: "verticalCenter",
				label: "垂直居中",
				icon: "icon-vertical"
			}
		]), b = (r) => {
			if (f.value.includes(r)) return;
			let { width: i, height: o } = a.designConfig, l = a.selectedComp, d = u.value, p = d.type === "rect" && l.length > 1, m = (e) => {
				l.forEach(e);
			}, h = p ? [...l] : [d], g = [];
			switch (r) {
				case "copy":
					let c = p ? l : [d], u = [];
					c.forEach((e) => {
						let r = n(t(e));
						r.id += "_copy", u.push(r);
					}), a.setDesignData(u, !0, !0), e.success("复制成功");
					break;
				case "del":
					let f = p ? l.map((e) => e.id) : d.id;
					a.setDeleteDesignData(f, !0), e.success("删除成功");
					break;
				case "link": {
					if (!p) return;
					let t = l.map((e) => ({
						x: s(e.x),
						y: s(e.y),
						w: s(e.width),
						h: s(e.height)
					})), n = Math.min(...t.map((e) => e.x)), r = Math.min(...t.map((e) => e.y)), i = Math.max(...t.map((e) => e.x + e.w)), o = Math.max(...t.map((e) => e.y + e.h)), c = {
						id: "container_" + Date.now(),
						type: "container",
						label: "组合容器",
						x: n,
						y: r,
						width: i - n,
						height: o - r,
						children: l.map((e) => ({
							...e,
							x: s(e.x) - n,
							y: s(e.y) - r
						}))
					}, u = [...l], d = {
						execute: () => {
							a.setDeleteDesignData(l.map((e) => e.id)), a.setDesignData(c, !0);
						},
						undo: () => {
							a.setDeleteDesignData(c.id), a.setDesignData(u, !0);
						}
					};
					a.setHistory(d), d.execute(), a.deleteRect(), a.setSelectedComp(c), e.success("组合成功");
					break;
				}
				case "split": {
					if (d.type !== "container") return;
					let t = d.children.map((e) => ({
						...e,
						x: s(e.x) + s(d.x),
						y: s(e.y) + s(d.y)
					})), n = [d], r = d.children.map((e) => e.id), i = {
						execute: () => {
							a.setDesignData(t, !0), a.setDeleteDesignData(d.id);
						},
						undo: () => {
							a.setDesignData(n, !0), a.setDeleteDesignData(r);
						}
					};
					a.setHistory(i), i.execute(), e.success("已拆分");
					break;
				}
				case "left":
					if (p) {
						let e = l.map((e) => s(e.x)), t = Math.min(...e);
						m(() => g.push({ x: t }));
					} else g.push({ x: 0 });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "right":
					if (p) {
						let e = l.map((e) => s(e.x) + s(e.width)), t = Math.max(...e);
						m((e) => {
							g.push({ x: t - s(e.width) });
						});
					} else g.push({ x: s(i) - s(d.width) });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "top":
					if (p) {
						let e = l.map((e) => s(e.y)), t = Math.min(...e);
						m(() => {
							g.push({ y: t });
						});
					} else g.push({ y: 0 });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "bottom":
					if (p) {
						let e = l.map((e) => s(e.y) + s(e.height)), t = Math.max(...e);
						m((e) => {
							g.push({ y: t - s(e.height) });
						});
					} else g.push({ y: s(o) - s(d.height) });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "horizontally":
					if (p) {
						let e = l[0], t = s(e.x) + s(e.width) / 2;
						m((e) => {
							g.push({ x: t - s(e.width) / 2 });
						});
					} else g.push({ x: (s(o) - s(d.width)) / 2 });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "verticalCenter":
					if (p) {
						let e = l[0], t = s(e.y) + s(e.height) / 2;
						m((e) => {
							g.push({ y: t - s(e.height) / 2 });
						});
					} else g.push({ y: (s(o) - s(d.height)) / 2 });
					a.updateComponentHistory(h, g), a.setSelectedComp([]);
					break;
				case "lock":
				case "unlock":
					let _ = r === "lock";
					p ? m((e) => e.locked = _) : d.locked = _;
					break;
			}
			a.deleteRect(), c.value = !1;
		};
		return i({ open: (e) => {
			if (e.close) {
				c.value = !1;
				return;
			}
			c.value = !0, e.x && e.y && (l.value = {
				left: `${e.x + 5}px`,
				top: `${e.y + 5}px`
			}), e.component && v(e.component), u.value = e.component;
		} }), (e, t) => ue((D(), g("div", {
			class: "context-menu",
			style: T(l.value),
			onMousedown: t[0] ||= de(() => {}, ["stop"])
		}, [(D(!0), g(d, null, ne(y.value, (e) => (D(), g("div", {
			key: e.key,
			class: w(["menu-item", {
				divider: e.key === "divider",
				disabled: f.value.includes(e.key)
			}]),
			onClick: de((t) => b(e.key), ["stop"])
		}, [e.icon ? (D(), m(sr, {
			key: 0,
			name: e.icon,
			size: "18px"
		}, null, 8, ["name"])) : h("", !0), _("span", null, ae(e.label), 1)], 10, cr))), 128))], 36)), [[se, c.value]]);
	}
}), ur = {
	key: 0,
	class: "show-grid"
}, dr = {
	key: 0,
	class: "no-date"
}, fr = /* @__PURE__ */ y({
	__name: "designArea",
	setup(e) {
		let t = x("akScreenStore", {}), n = k(), r = k(), o = p(() => t.designFilterData?.length), s = p(() => t.designConfig), l = O({
			moveFlag: !1,
			startX: 0,
			startY: 0,
			currentComponent: null
		}), d = (e) => {
			let t = n.value.getBoundingClientRect();
			return e ? t[e] : t;
		}, f = () => {
			C(() => {
				let e = n.value.offsetWidth, r = parseInt(s.value?.width);
				if (e && r) {
					let n = parseInt(`${e / r * 100}`);
					t.setAutoScale(n), t.setScale(parseInt(t.scale) || n);
				}
			});
		}, m = p(() => {
			let { width: e, height: n, background: r, primary: i } = s.value || {};
			return {
				width: e,
				height: n,
				background: r,
				transform: `scale(${t.scale / 100})`,
				color: i
			};
		});
		ce([() => t.showComponentPanel, () => t.showPropertyPanel], () => {
			setTimeout(() => {
				f();
			}, 500);
		});
		let y = (e, r) => ({
			x: (e - (d("left") + 20) + n.value.scrollLeft) / t.scale * 100,
			y: (r - (d("top") + 20) + n.value.scrollTop) / t.scale * 100
		}), b = (e) => {
			ne({ close: !0 }), t.setSelectedComp([]);
			let n = {
				x: y(e.clientX, e.clientY).x,
				y: y(e.clientX, e.clientY).y
			};
			l.startX = n.x, l.startY = n.y, l.currentComponent = u(n), l.moveFlag = !0, t.setControlTip("");
		}, S = (e) => {
			if (!l.moveFlag) return;
			let t = y(e.clientX, e.clientY).x, n = y(e.clientX, e.clientY).y;
			Object.assign(l.currentComponent, {
				x: Math.min(l.startX, t),
				y: Math.min(l.startY, n),
				width: Math.abs(t - l.startX),
				height: Math.abs(n - l.startY),
				display: ""
			});
		}, ee = () => {
			if (!l.moveFlag) return;
			l.moveFlag = !1;
			let { width: e, height: n, x: r, y: o } = l.currentComponent;
			if (e < 30 || n < 30) {
				l.currentComponent.display = !0, l.currentComponent.class = "", l.currentComponent = null;
				return;
			}
			let s = {
				x: r,
				y: o,
				w: e,
				h: n
			};
			t.designFilterData?.forEach((e) => {
				a(e) && w(s, {
					x: i(e.x),
					y: i(e.y),
					w: i(e.width),
					h: i(e.height)
				}) && t.setSelectedComp(e, !0);
			}), t.selectedComp.length > 1 ? Object.assign(l.currentComponent, c()) : (l.currentComponent.display = !0, l.currentComponent.class = "", t.deleteRect()), l.currentComponent = null;
		}, w = (e, t) => !(e.x + e.w < t.x || e.x > t.x + t.w || e.y + e.h < t.y || e.y > t.y + t.h), ne = (e) => {
			e.x && e.y && (e.x = y(e.x, e.y).x, e.y = y(e.x, e.y).y), r.value.open(e);
		}, re = k(!1), ie = (e) => {
			[
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown"
			].includes(e.key) && (e.preventDefault(), ae(e.key));
		}, ae = (e) => {
			let { selectedComp: n, designData: r } = t, a = n.length > 1 ? r.find((e) => e.type === "rect" && !e.display) : void 0, o = (e, t) => {
				n.forEach((n) => {
					n.x = i(n.x) + e, n.y = i(n.y) + t;
				}), a && (a.x = i(a.x) + e, a.y = i(a.y) + t);
			}, s = {
				ArrowLeft: [-1, 0],
				ArrowRight: [1, 0],
				ArrowUp: [0, -1],
				ArrowDown: [0, 1]
			}[e];
			s && o(...s);
		}, oe = k(!1), se = (e) => {
			if (e.key === "Control" && re.value) {
				t.setCtrlPress(!0);
				let e = t.selectedComp.length;
				t.setControlTip(e > 0 ? `当前选中${e}个` : ""), oe.value = !0;
			}
		}, le = (e) => {
			if (e.key === "z" && t.ctrlPress && t.canUndo) {
				t.setUndo();
				return;
			}
			if (re.value && (t.setCtrlPress(!1), oe.value && t.setControlTip(""), oe.value = !1, e.key === "Delete")) {
				let e = t.selectedComp.map((e) => e.id);
				t.setDeleteDesignData(e), t.setSelectedComp([]), t.deleteRect();
			}
		};
		return te(() => {
			f(), window.addEventListener("keydown", se), window.addEventListener("keyup", le);
		}), E(() => {
			window.removeEventListener("keydown", se), window.removeEventListener("keyup", le);
		}), (e, i) => (D(), g("div", {
			ref_key: "containerRef",
			ref: n,
			class: "design-main"
		}, [
			v(pe, { size: m.value.width }, null, 8, ["size"]),
			v(pe, {
				direction: "v",
				size: m.value.height
			}, null, 8, ["size"]),
			_("div", {
				tabindex: "0",
				style: T(m.value),
				class: "design-canvas design-border",
				onMousedown: de(b, ["left"]),
				onMousemove: S,
				onMouseup: ee,
				onMouseleave: ee,
				onKeydown: ie,
				onFocus: i[2] ||= (e) => re.value = !0,
				onBlur: i[3] ||= (e) => re.value = !1
			}, [
				v(or, {
					modelValue: A(t).designData,
					"onUpdate:modelValue": i[0] ||= (e) => A(t).designData = e,
					onClickFocus: i[1] ||= (e) => re.value = !0,
					onContextmenuEvent: ne
				}, null, 8, ["modelValue"]),
				v(lr, {
					ref_key: "contextMenuRef",
					ref: r
				}, null, 512),
				A(t).isShowGrid ? (D(), g("div", ur)) : h("", !0)
			], 36),
			o.value === 0 ? (D(), g("div", dr, " 请从左则组件栏拖动组件到设计区域 ")) : h("", !0)
		], 512));
	}
});
//#endregion
export { fr as default };
