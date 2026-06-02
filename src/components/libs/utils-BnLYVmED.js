/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./api-2vEvKYmc.js";
import { a as s, c, i as l, n as u, s as d } from "./design-ZYUl2LQ4.js";
import { Fragment as f, computed as p, createBlock as m, createCommentVNode as h, createElementBlock as g, createElementVNode as _, createTextVNode as v, createVNode as y, defineComponent as b, getCurrentInstance as x, inject as S, mergeProps as C, nextTick as w, normalizeProps as T, normalizeStyle as E, onActivated as D, onDeactivated as O, onMounted as k, onUnmounted as A, openBlock as j, ref as M, renderList as N, renderSlot as P, resolveComponent as F, resolveDynamicComponent as I, toDisplayString as L, watch as R, withCtx as z } from "vue";
import { defineStore as B } from "pinia";
//#region src/store/screen.ts
var V = B("screen", () => {
	let n = M(t("screenConfig", !0) || {});
	function i(e) {
		let t = Object.assign({}, n.value, e);
		a("screenConfig", t, 0), n.value = t;
	}
	let o = M(n.value.isShowGrid ?? !0);
	function s(e) {
		o.value = e, i({ isShowGrid: e });
	}
	let c = M(n.value.isShowRuler ?? !0);
	function l(e) {
		c.value = e, i({ isShowRuler: e });
	}
	let d = M(n.value.scale);
	function f(e) {
		d.value = e, i({ scale: e });
	}
	let m = M(0);
	function h(e) {
		m.value = e;
	}
	let g = M([]), _ = M(-1), v = (e) => {
		g.value = g.value.slice(0, _.value + 1), g.value.push(e), _.value = g.value.length - 1, g.value.length > 30 && (g.value.shift(), _.value--);
	}, y = () => {
		x.value && (g.value[_.value].undo(), _.value--);
	}, b = () => {
		S.value && (_.value++, g.value[_.value].execute());
	}, x = p(() => _.value >= 0), S = p(() => _.value < g.value.length - 1), C = (e, t, n = !1) => {
		let r = [];
		e.forEach((e, i) => {
			let a = n ? { ...t[i] } : { ...e }, o = n ? { ...e } : { ...t[i] };
			r.push({
				execute: () => Object.assign(e, o),
				undo: () => Object.assign(e, a)
			});
		});
		let i = {
			execute: () => r.forEach((e) => e.execute()),
			undo: () => r.reverse().forEach((e) => e.undo())
		};
		v(i), n || i.execute();
	}, w = (e, t, n = !1, r) => {
		let i = n ? { ...t } : { ...e }, a = n ? { ...e } : { ...t }, o = {
			execute: () => {
				Object.assign(e, a), r && r("redo");
			},
			undo: () => {
				Object.assign(e, i), r && r("undo");
			}
		};
		v(o), n || o.execute();
	}, T = M(n.value.showComponentPanel ?? !0);
	function E() {
		let e = !T.value;
		T.value = e, i({ showComponentPanel: e });
	}
	let D = M(n.value.showPropertyPanel ?? !0);
	function O() {
		let e = !D.value;
		D.value = e, i({ showPropertyPanel: e });
	}
	let k = M({
		width: "1920px",
		height: "1080px",
		background: "#000",
		style: "",
		styleLink: "",
		primary: "#409eff",
		method: "get"
	});
	function A(e) {
		k.value = e;
	}
	let j = M([]), N = p(() => j.value.filter((e) => e.type !== "rect"));
	function P(e, t = !1, n = !1) {
		let r = Array.isArray(e) ? e : [e], i = r.map((e) => e.id), a = u(j.value), o = {
			execute: () => {
				t ? j.value.push(...r) : j.value = r;
			},
			undo: () => {
				t ? j.value = j.value.filter((e) => !i.includes(e.id)) : j.value = a;
			}
		};
		n && v(o), o.execute();
	}
	function F(e, t = !1) {
		let n = Array.isArray(e) ? e : [e], r = j.value.filter((t) => e.includes(t.id)), i = {
			execute: () => {
				j.value = j.value.filter((e) => !n.includes(e.id));
			},
			undo: () => {
				j.value.push(...r);
			}
		};
		t && v(i), i.execute();
	}
	let I = M([]);
	function L(t, n) {
		n && !Array.isArray(t) ? I.value.some((e) => e.id === t.id) || I.value.push(t) : I.value = e(t) ? t : [t];
	}
	let R = p(() => I.value[0] || {});
	function z() {
		j.value = j.value.filter((e) => e.type !== "rect");
	}
	let B = M(!1);
	function V(e) {
		B.value = e;
	}
	let H = M();
	function U(e) {
		H.value = e;
	}
	let W = M({});
	function G(e) {
		W.value = e;
	}
	let K = JSON.stringify(k.value);
	function q() {
		j.value = [], k.value = JSON.parse(K), I.value = [], g.value = [], W.value = {}, r("scopedStyleId"), r("styleLink");
	}
	return {
		isShowGrid: o,
		setIsShowGrid: s,
		isShowRuler: c,
		setIsShowRuler: l,
		scale: d,
		setScale: f,
		autoScale: m,
		setAutoScale: h,
		showComponentPanel: T,
		setShowComponentPanel: E,
		showPropertyPanel: D,
		setShowPropertyPanel: O,
		designData: j,
		designFilterData: N,
		setDesignData: P,
		setDeleteDesignData: F,
		designConfig: k,
		setDesignConfig: A,
		selectedComp: I,
		setSelectedComp: L,
		activeComp: R,
		deleteRect: z,
		ctrlPress: B,
		setCtrlPress: V,
		controlTip: H,
		setControlTip: U,
		getScreenGlobal: W,
		setScreenGlobal: G,
		history: g,
		setHistory: v,
		canUndo: x,
		canRedo: S,
		setUndo: y,
		setRedo: b,
		updateComponentHistory: C,
		updateCompHistory: w,
		clearOnExitDesign: q
	};
});
Array.isArray;
var H = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({});
Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), H.MATCHER_NOT_FOUND, H.NAVIGATION_GUARD_REDIRECT, H.NAVIGATION_ABORTED, H.NAVIGATION_CANCELLED, H.NAVIGATION_DUPLICATED;
var U = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched");
Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), Symbol(process.env.NODE_ENV === "production" ? "" : "router"), Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), Symbol(process.env.NODE_ENV === "production" ? "" : "router view location");
//#endregion
//#region node_modules/.pnpm/vue-router@5.0.4_@vue+compi_347ff7aca99ec2241ea0068e088df74d/node_modules/vue-router/dist/devtools-DUDsFuj9.js
function W(e) {
	let t = Array.from(arguments).slice(1);
	console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function G(e, t, n) {
	let r = e.value;
	if (!r) {
		process.env.NODE_ENV !== "production" && W(`No active route record was found when calling \`${t === "updateGuards" ? "onBeforeRouteUpdate" : "onBeforeRouteLeave"}()\`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?`);
		return;
	}
	let i = r, a = () => {
		i[t].delete(n);
	};
	A(a), O(a), D(() => {
		let r = e.value;
		process.env.NODE_ENV !== "production" && !r && W("No active route record was found when reactivating component with navigation guard. This is likely a bug in vue-router. Please report it."), r && (i = r), i[t].add(n);
	}), i[t].add(n);
}
function K(e) {
	if (process.env.NODE_ENV !== "production" && !x()) {
		W("getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function");
		return;
	}
	G(S(U, {}), "leaveGuards", e);
}
//#endregion
//#region src/components/screen/widgets/echartsInt.vue
var q = /* @__PURE__ */ b({
	__name: "echartsInt",
	props: { option: {} },
	setup(e) {
		let t = e, n = M(), r = M(), a = i(() => {
			n.value && (r.value = echarts.init(n.value), r.value.setOption(t.option), window.onresize = r.value);
		}, 100), o = R(() => t, () => {
			r.value && (r.value.clear(), r.value.dispose()), a();
		}, { deep: !0 });
		return K(() => {
			o();
		}), k(() => {
			w(() => {
				a();
			});
		}), (e, t) => (j(), g("div", {
			ref_key: "echartsEl",
			ref: n,
			class: "echarts"
		}, null, 512));
	}
}), ee = { class: "scroll-content" }, te = /* @__PURE__ */ c(/* @__PURE__ */ b({
	__name: "scrollText",
	props: { data: {} },
	setup(e) {
		let t = e, n = M(null), r = M(null), i = M(0), a = null, o = p(() => t.data.direction || "left"), s = p(() => ["left", "right"].includes(o.value)), c = p(() => {
			let e = s.value ? `translateX(${i.value}px)` : `translateY(${i.value}px)`;
			return {
				display: "flex",
				flexDirection: s.value ? "row" : "column",
				transform: e,
				willChange: "transform"
			};
		});
		function l() {
			if (!n.value || !r.value) return;
			a && clearInterval(a);
			let { step: e = 1, speed: c = 30 } = t.data, l = s.value ? r.value.offsetWidth : r.value.offsetHeight;
			a = window.setInterval(() => {
				switch (o.value) {
					case "right":
						i.value += e, i.value >= 0 && (i.value = -l);
						break;
					case "bottom":
						i.value += e, i.value >= 0 && (i.value = -l);
						break;
					case "top":
						i.value -= e, i.value <= -l && (i.value = 0);
						break;
					default: i.value -= e, i.value <= -l && (i.value = 0);
				}
			}, c);
		}
		function u() {
			a &&= (clearInterval(a), null);
		}
		return k(() => {
			l(), n.value && (n.value.addEventListener("mouseenter", u), n.value.addEventListener("mouseleave", l));
		}), A(() => {
			u();
		}), (e, t) => (j(), g("div", {
			ref_key: "containerRef",
			ref: n,
			class: "scroll-container"
		}, [_("div", {
			class: "scroll-inner",
			style: E(c.value)
		}, [_("div", {
			ref_key: "contentRef",
			ref: r,
			class: "scroll-content"
		}, [P(e.$slots, "default", {}, void 0, !0)], 512), _("div", ee, [P(e.$slots, "default", {}, void 0, !0)])], 4)], 512));
	}
}), [["__scopeId", "data-v-2a375c4f"]]), ne = /* @__PURE__ */ b({
	__name: "datetime",
	props: { formatType: {} },
	setup(e) {
		let t = e, r = M(), i = M(), a = () => {
			!t.formatType || t.formatType && t.formatType.indexOf("{i}") !== -1 ? r.value = setInterval(() => {
				i.value = n(/* @__PURE__ */ new Date(), t.formatType);
			}, 1e3) : i.value = n(/* @__PURE__ */ new Date(), t.formatType);
		}, o = R(() => t.formatType, () => {
			clearInterval(r.value), a();
		}, { immediate: !0 });
		return k(() => {}), K(() => {
			o();
		}), (e, t) => (j(), g("div", null, L(i.value), 1));
	}
}), re = /* @__PURE__ */ c(/* @__PURE__ */ b({
	__name: "table",
	props: {
		data: {},
		height: {},
		carousel: {
			type: Boolean,
			default: !1
		},
		speed: { default: 30 }
	},
	setup(e) {
		let t = e, n = M(null), r = () => {
			if (!t.carousel || !n.value) return;
			let e = n.value.$el.querySelector(".el-scrollbar__wrap");
			function r() {
				e.scrollTop += 1, e.clientHeight + e.scrollTop === e.scrollHeight && (e.scrollTop -= e.scrollHeight / 2);
			}
			let i = setInterval(r, t.speed);
			n.value.onmouseenter = function() {
				clearInterval(i);
			}, n.value.onmouseleave = function() {
				i = setInterval(r, t.speed);
			};
		}, i = R(() => t.data?.list, () => {
			w(() => {
				r();
			});
		}, { immediate: !0 });
		return k(() => {}), K(() => {
			i();
		}), (t, r) => {
			let i = F("el-table-column"), a = F("el-table");
			return j(), g("div", null, [y(a, {
				ref_key: "tableRef",
				ref: n,
				class: "table",
				data: e.data.list,
				height: `${e.height}`,
				style: { width: "100%" }
			}, {
				default: z(() => [(j(!0), g(f, null, N(e.data?.columns, (e) => (j(), m(i, C({ ref_for: !0 }, e, { key: e.prop }), null, 16))), 128))]),
				_: 1
			}, 8, ["data", "height"])]);
		};
	}
}), [["__scopeId", "data-v-d35bb7bb"]]), ie = (e, t, n) => {
	let r = l(e);
	if (!t) return r;
	if (typeof t == "function") return t(r, n) ?? r;
	if (Array.isArray(t) && t.length === 2) {
		let [e, i] = t, a = r;
		return typeof e == "function" && (a = e(r, n) ?? r), a === !1 ? !1 : typeof i == "function" ? i(l(a), n) ?? a : a;
	}
	return console.log("before 钩子返回字符串标识，暂不处理:", t), r;
}, J = (e, t, n, r) => {
	if (!t) return e;
	if (typeof t == "function") return t(e, r, n) ?? e;
	if (Array.isArray(t) && t.length === 2) {
		let [i, a] = t, o = e;
		return typeof i == "function" && (o = i(e, r, n)), o === !1 ? !1 : typeof a == "function" ? a(o ?? e, r, n) : o ?? e;
	}
	return console.log("after 钩子返回字符串标识，暂不处理:", t), e;
}, ae = async (e) => {
	let { apiKey: t, params: n = {}, route: r, formModel: i, options: a = {}, before: s, after: c, type: u } = e;
	if (!t) throw Error("请求 apiKey 不能为空");
	let d = ie(n, s, {
		route: r,
		model: l(i),
		type: u
	});
	if (d === !1) throw Error("用户终止操作");
	try {
		let e = await o(t, d, a), n = e.request?.responseType === "blob" ? e : e.data;
		if (n = J(n, c, u, !0), n === !1) throw Error("用户终止操作");
		return {
			data: n ?? e.data,
			message: e.message
		};
	} catch (e) {
		throw J(e, c, u, !1), e;
	}
}, Y = () => V(), oe = (e) => {
	try {
		return /^-?\d+(\.\d+)?$/.test(e.toString());
	} catch {
		return !1;
	}
}, X = (e) => e === 0 || e === "0" ? 0 : oe(e) ? Math.round(e) + "px" : e, Z = (e) => {
	let t = String(e).trim().match(/^-?\d+(\.\d+)?/);
	if (!t) return 0;
	let n = parseFloat(t[0]);
	return Math.round(n);
}, se = (e) => {
	let t = Y().designData.find((e) => e.type === "rect"), n = {
		type: "rect",
		label: "临时选区",
		width: 0,
		height: 0,
		class: "",
		display: !0,
		...e
	};
	return t ? (Object.assign(t, n), t) : (Y().setDesignData(n, !0), n);
}, ce = () => {
	let e = Infinity, t = Infinity, n = -Infinity, r = -Infinity;
	return Y().selectedComp.forEach((i) => {
		let { x: a, y: o, width: s, height: c } = i;
		e = Math.min(e, Z(a)), t = Math.min(t, Z(o)), n = Math.max(n, Z(a) + Z(s)), r = Math.max(r, Z(o) + Z(c));
	}), {
		x: `${e}px`,
		y: `${t}px`,
		width: `${n - e}px`,
		height: `${r - t}px`,
		display: !1,
		class: "group-wrap"
	};
}, le = (e) => {
	if (e.notUseInlineStyle) return {};
	let { x: t, y: n, height: r, width: i, zIndex: a, display: o, right: s, bottom: c } = e, l = {
		left: s ? "auto" : X(t),
		right: X(s),
		bottom: X(c),
		top: c ? "auto" : X(n),
		width: X(i),
		height: X(r),
		zIndex: a || "",
		display: o ? "none" : "",
		position: "absolute"
	};
	return Object.fromEntries(Object.entries(l).filter(([e, t]) => t !== ""));
};
function ue(e) {
	return e == null || e === "" ? !1 : /^\d+(px)?$/i.test(String(e));
}
var de = (e) => !(e.display || e.locked || e.notUseInlineStyle || e.right || e.bottom || !ue(e.x) || !ue(e.y));
V();
var fe = (e) => new Promise((t, n) => {
	let { optionsType: r, requestUrl: i, method: a = "post", before: o, after: s } = e;
	r === 1 && i ? ae({
		apiKey: i,
		params: {},
		before: o,
		options: { method: a },
		type: "none"
	}).then((n) => {
		let r = n.data;
		t(typeof s == "function" ? {
			res: r,
			option: s(r, Q(e))
		} : {
			res: r,
			option: Q(e)
		});
	}).catch((e) => {
		n(e);
	}) : t({
		res: {},
		option: {}
	});
}), Q = (e) => {
	switch (e.type) {
		case "text":
		case "sText": return e.text;
		default: return e.option;
	}
}, pe = ["innerHTML"], me = ["src"], he = /* @__PURE__ */ b({
	__name: "componentFactory",
	props: { data: {} },
	setup(e) {
		let t = V(), n = e, r = p(() => {
			let { fontSize: e, color: t, style: r, border: i, background: a, src: o } = n.data;
			return {
				width: "100%",
				height: "100%",
				fontSize: e,
				color: t,
				border: i,
				backgroundColor: a,
				backgroundImage: o ? `url(${o})` : "",
				...r
			};
		}), i = M({}), a = M({}), o = p(() => {
			let e = {
				getScreenGlobal: t.getScreenGlobal,
				getScreenComp: a.value
			};
			return d(s(Object.keys(i.value).length ? i.value : Q(n.data)).replace(/"{{([\w.]+)}}"/g, (t, n) => {
				let r = n.split(".").reduce((e, t) => e?.[t], e);
				return JSON.stringify(r);
			}).replace(/{{([\w.]+)}}/g, (t, n) => n.split(".").reduce((e, t) => e?.[t], e) ?? ""));
		}), c = () => {
			fe(n.data).then((e) => {
				i.value = e.option || {}, a.value = e.res || {};
			});
		};
		return k(() => {
			c();
		}), A(() => {
			i.value = {}, a.value = {};
		}), (t, n) => (j(), g(f, null, [
			[
				"line",
				"bar",
				"pie",
				"echarts"
			].includes(e.data.type) ? (j(), m(q, {
				key: 0,
				option: o.value,
				style: E(r.value)
			}, null, 8, ["option", "style"])) : h("", !0),
			["text", "border"].includes(e.data.type) ? (j(), g("div", {
				key: 1,
				style: E(r.value),
				innerHTML: o.value
			}, null, 12, pe)) : h("", !0),
			["sText"].includes(e.data.type) ? (j(), m(te, {
				key: 2,
				data: e.data,
				style: E(r.value)
			}, {
				default: z(() => [v(L(o.value), 1)]),
				_: 1
			}, 8, ["data", "style"])) : h("", !0),
			e.data.type === "image" ? (j(), g("img", {
				key: 3,
				src: e.data.src,
				style: E(r.value),
				alt: "请选择或输入图片url地址",
				class: "default-img"
			}, null, 12, me)) : h("", !0),
			e.data.type === "background" ? (j(), g("div", {
				key: 4,
				style: E(r.value),
				class: "default-bg"
			}, null, 4)) : h("", !0),
			e.data.type === "clock" ? (j(), m(ne, {
				key: 5,
				"format-type": e.data.dateTime,
				style: E(r.value)
			}, null, 8, ["format-type", "style"])) : h("", !0),
			["component"].includes(e.data.type) ? (j(), m(I(e.data.component), T(C({ key: 6 }, e.data.props)), null, 16)) : h("", !0),
			e.data.type === "table" ? (j(), m(re, {
				key: 7,
				height: e.data.height,
				speed: e.data.speed,
				carousel: e.data.carousel,
				data: o.value,
				style: E(r.value)
			}, null, 8, [
				"height",
				"speed",
				"carousel",
				"data",
				"style"
			])) : h("", !0)
		], 64));
	}
}), ge = (e) => {
	try {
		return /^-?\d+(\.\d+)?$/.test(e.toString());
	} catch {
		return !1;
	}
}, $ = (e) => e === 0 || e === "0" ? 0 : ge(e) ? Math.round(e) + "px" : e, _e = (e) => {
	let t = String(e).trim().match(/^-?\d+(\.\d+)?/);
	if (!t) return 0;
	let n = parseFloat(t[0]);
	return Math.round(n);
}, ve = (e) => {
	if (e.notUseInlineStyle) return {};
	let { x: t, y: n, height: r, width: i, zIndex: a, display: o, right: s, bottom: c } = e, l = {
		left: s ? "auto" : $(t),
		right: $(s),
		bottom: $(c),
		top: c ? "auto" : $(n),
		width: $(i),
		height: $(r),
		zIndex: a || "",
		display: o ? "none" : "",
		position: "absolute"
	};
	return Object.fromEntries(Object.entries(l).filter(([e, t]) => t !== ""));
};
//#endregion
export { le as a, Z as c, de as i, V as l, _e as n, ce as o, he as r, se as s, ve as t };
