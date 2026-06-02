/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { r as e, t } from "./utils-BnLYVmED.js";
import { Fragment as n, createBlock as r, createElementBlock as i, defineComponent as a, normalizeClass as o, normalizeStyle as s, openBlock as c, renderList as l, resolveComponent as u, unref as d } from "vue";
//#region src/components/screen/componentFactory.vue
var f = e, p = { class: "show-detail" }, m = /* @__PURE__ */ a({
	__name: "show",
	props: { data: {} },
	setup(e) {
		return (a, m) => {
			let h = u("show", !0);
			return c(), i("div", p, [(c(!0), i(n, null, l(e.data, (e) => (c(), i("div", {
				key: e.key,
				class: o(["component-wrapper", {
					["group-" + e.type]: !0,
					[e.class]: e.class
				}]),
				style: s(d(t)(e))
			}, [e.children?.length && ["container", "div"].includes(e.type) ? (c(), r(h, {
				key: 0,
				data: e.children
			}, null, 8, ["data"])) : (c(), r(f, {
				key: e.key,
				data: e
			}, null, 8, ["data"]))], 6))), 128))]);
		};
	}
});
//#endregion
export { m as default };
