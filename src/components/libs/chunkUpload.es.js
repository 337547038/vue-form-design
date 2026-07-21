/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-7
*/
import { B as e, a as t, i as n, n as r, r as i, t as a, z as o } from "./api-B3VSUKZ0.js";
import { Fragment as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, mergeModels as g, mergeProps as _, normalizeClass as v, normalizeStyle as y, onBeforeUnmount as b, openBlock as x, ref as S, renderList as C, resolveComponent as w, resolveDirective as T, toDisplayString as E, unref as D, useModel as O, vModelText as k, vShow as A, watch as j, withCtx as M, withDirectives as N, withModifiers as P } from "vue";
//#region src/components/form/chunkUpload/group.vue?vue&type=script&setup=true&lang.ts
var F = { class: "upload-group" }, I = { class: "group-list" }, L = ["onUpdate:modelValue", "onKeyup"], R = ["onClick"], z = ["title", "onClick"], B = ["onClick"], V = { class: "group-btn" }, ee = {
	key: 0,
	class: "add-group"
}, te = {
	key: 1,
	class: "btn"
}, ne = /* @__PURE__ */ h({
	__name: "group",
	emits: ["changeGroup"],
	setup(e, { emit: n }) {
		let r = n, i = S(!1), o = S(!1), c = S(""), l = S([]), u = S(""), h = (e) => {
			u.value = e.id, r("changeGroup", e.id);
		}, g = () => {
			i.value = !0, c.value = "";
		}, _ = () => {
			c.value ? a("chunkUploadAddGroup", { name: c.value }).then(() => {
				t({
					type: "success",
					message: "添加成功"
				}), i.value = !1, A();
			}).catch((e) => {
				t({
					type: "error",
					message: e.message
				});
			}) : t({
				type: "error",
				message: "请输入分组名称"
			});
		}, y = (e) => {
			a("chunkUploadEditGroup", {
				id: e.id,
				name: e.__newName
			}).then(() => {
				t({
					type: "success",
					message: "修改成功"
				}), A();
			}).catch((e) => {
				t({
					type: "error",
					message: e.message
				});
			});
		}, b = (e, n) => {
			a("chunkUploadDelGroup", { id: e }).then(() => {
				t({
					type: "success",
					message: "删除成功"
				}), l.value.splice(n, 1);
			}).catch((e) => {
				t({
					type: "error",
					message: e.message
				});
			});
		}, D = (e) => {
			e.__isEdit = !0, e.__newName = e.name;
		}, O = (e, t) => {
			t.key === "Escape" && (delete e.__isEdit, delete e.__newName);
		}, A = () => {
			a("chunkUploadGroupList", {}).then((e) => {
				l.value = e.data?.list || [];
			});
		};
		return A(), (e, t) => {
			let n = w("el-popconfirm"), r = w("el-input"), a = w("el-button"), S = T("loading");
			return x(), d("div", F, [N((x(), d("div", I, [f("ul", null, [f("li", {
				class: v({ active: u.value === "" }),
				onClick: t[0] ||= (e) => h({ id: "" })
			}, [...t[2] ||= [f("i", { class: "icon-folder" }, null, -1), f("span", { class: "group-name" }, "全部", -1)]], 2), (x(!0), d(s, null, C(l.value, (e, r) => (x(), d("li", {
				key: e.id,
				class: v({ active: u.value === e.id })
			}, [
				t[4] ||= f("i", { class: "icon-folder" }, null, -1),
				e.__isEdit ? (x(), d(s, { key: 0 }, [N(f("input", {
					"onUpdate:modelValue": (t) => e.__newName = t,
					class: "group-name",
					onKeyup: (t) => O(e, t)
				}, null, 40, L), [[k, e.__newName]]), f("i", {
					class: "icon-save",
					title: "保存",
					onClick: P((t) => y(e), ["stop"])
				}, null, 8, R)], 64)) : (x(), d(s, { key: 1 }, [f("span", {
					title: e.name,
					class: "group-name",
					onClick: (t) => h(e)
				}, E(e.name), 9, z), f("i", {
					class: "icon-edit",
					title: "编辑",
					onClick: P((t) => D(e), ["stop"])
				}, null, 8, B)], 64)),
				m(n, {
					title: "确定删除该分组?",
					"cancel-button-text": "取消",
					"confirm-button-text": "确认",
					onConfirm: (t) => b(e.id, r)
				}, {
					reference: M(() => [...t[3] ||= [f("i", {
						class: "icon-del",
						title: "删除"
					}, null, -1)]]),
					_: 1
				}, 8, ["onConfirm"])
			], 2))), 128))])])), [[S, o.value]]), f("div", V, [i.value ? (x(), d("div", ee, [m(r, {
				modelValue: c.value,
				"onUpdate:modelValue": t[1] ||= (e) => c.value = e,
				placeholder: "分组名称",
				size: "small"
			}, null, 8, ["modelValue"]), m(a, {
				size: "small",
				type: "primary",
				onClick: _
			}, {
				default: M(() => [...t[5] ||= [p(" 提交 ", -1)]]),
				_: 1
			})])) : (x(), d("div", te, [m(a, {
				size: "small",
				onClick: g
			}, {
				default: M(() => [...t[6] ||= [p(" 添加分组 ", -1)]]),
				_: 1
			})]))])]);
		};
	}
}), H = /* @__PURE__ */ e((/* @__PURE__ */ o(((e, t) => {
	(function(n) {
		if (typeof e == "object") t.exports = n();
		else if (typeof define == "function" && define.amd) define(n);
		else {
			var r;
			try {
				r = window;
			} catch {
				r = self;
			}
			r.SparkMD5 = n();
		}
	})(function(e) {
		var t = [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f"
		];
		function n(e, t) {
			var n = e[0], r = e[1], i = e[2], a = e[3];
			n += (r & i | ~r & a) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + r | 0, a += (n & r | ~n & i) + t[1] - 389564586 | 0, a = (a << 12 | a >>> 20) + n | 0, i += (a & n | ~a & r) + t[2] + 606105819 | 0, i = (i << 17 | i >>> 15) + a | 0, r += (i & a | ~i & n) + t[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & a) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + r | 0, a += (n & r | ~n & i) + t[5] + 1200080426 | 0, a = (a << 12 | a >>> 20) + n | 0, i += (a & n | ~a & r) + t[6] - 1473231341 | 0, i = (i << 17 | i >>> 15) + a | 0, r += (i & a | ~i & n) + t[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & a) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + r | 0, a += (n & r | ~n & i) + t[9] - 1958414417 | 0, a = (a << 12 | a >>> 20) + n | 0, i += (a & n | ~a & r) + t[10] - 42063 | 0, i = (i << 17 | i >>> 15) + a | 0, r += (i & a | ~i & n) + t[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & a) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + r | 0, a += (n & r | ~n & i) + t[13] - 40341101 | 0, a = (a << 12 | a >>> 20) + n | 0, i += (a & n | ~a & r) + t[14] - 1502002290 | 0, i = (i << 17 | i >>> 15) + a | 0, r += (i & a | ~i & n) + t[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & a | i & ~a) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + r | 0, a += (n & i | r & ~i) + t[6] - 1069501632 | 0, a = (a << 9 | a >>> 23) + n | 0, i += (a & r | n & ~r) + t[11] + 643717713 | 0, i = (i << 14 | i >>> 18) + a | 0, r += (i & n | a & ~n) + t[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & a | i & ~a) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + r | 0, a += (n & i | r & ~i) + t[10] + 38016083 | 0, a = (a << 9 | a >>> 23) + n | 0, i += (a & r | n & ~r) + t[15] - 660478335 | 0, i = (i << 14 | i >>> 18) + a | 0, r += (i & n | a & ~n) + t[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & a | i & ~a) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + r | 0, a += (n & i | r & ~i) + t[14] - 1019803690 | 0, a = (a << 9 | a >>> 23) + n | 0, i += (a & r | n & ~r) + t[3] - 187363961 | 0, i = (i << 14 | i >>> 18) + a | 0, r += (i & n | a & ~n) + t[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & a | i & ~a) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + r | 0, a += (n & i | r & ~i) + t[2] - 51403784 | 0, a = (a << 9 | a >>> 23) + n | 0, i += (a & r | n & ~r) + t[7] + 1735328473 | 0, i = (i << 14 | i >>> 18) + a | 0, r += (i & n | a & ~n) + t[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r ^ i ^ a) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + r | 0, a += (n ^ r ^ i) + t[8] - 2022574463 | 0, a = (a << 11 | a >>> 21) + n | 0, i += (a ^ n ^ r) + t[11] + 1839030562 | 0, i = (i << 16 | i >>> 16) + a | 0, r += (i ^ a ^ n) + t[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ a) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + r | 0, a += (n ^ r ^ i) + t[4] + 1272893353 | 0, a = (a << 11 | a >>> 21) + n | 0, i += (a ^ n ^ r) + t[7] - 155497632 | 0, i = (i << 16 | i >>> 16) + a | 0, r += (i ^ a ^ n) + t[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ a) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + r | 0, a += (n ^ r ^ i) + t[0] - 358537222 | 0, a = (a << 11 | a >>> 21) + n | 0, i += (a ^ n ^ r) + t[3] - 722521979 | 0, i = (i << 16 | i >>> 16) + a | 0, r += (i ^ a ^ n) + t[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ a) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + r | 0, a += (n ^ r ^ i) + t[12] - 421815835 | 0, a = (a << 11 | a >>> 21) + n | 0, i += (a ^ n ^ r) + t[15] + 530742520 | 0, i = (i << 16 | i >>> 16) + a | 0, r += (i ^ a ^ n) + t[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (i ^ (r | ~a)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + r | 0, a += (r ^ (n | ~i)) + t[7] + 1126891415 | 0, a = (a << 10 | a >>> 22) + n | 0, i += (n ^ (a | ~r)) + t[14] - 1416354905 | 0, i = (i << 15 | i >>> 17) + a | 0, r += (a ^ (i | ~n)) + t[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~a)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + r | 0, a += (r ^ (n | ~i)) + t[3] - 1894986606 | 0, a = (a << 10 | a >>> 22) + n | 0, i += (n ^ (a | ~r)) + t[10] - 1051523 | 0, i = (i << 15 | i >>> 17) + a | 0, r += (a ^ (i | ~n)) + t[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~a)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + r | 0, a += (r ^ (n | ~i)) + t[15] - 30611744 | 0, a = (a << 10 | a >>> 22) + n | 0, i += (n ^ (a | ~r)) + t[6] - 1560198380 | 0, i = (i << 15 | i >>> 17) + a | 0, r += (a ^ (i | ~n)) + t[13] + 1309151649 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~a)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + r | 0, a += (r ^ (n | ~i)) + t[11] - 1120210379 | 0, a = (a << 10 | a >>> 22) + n | 0, i += (n ^ (a | ~r)) + t[2] + 718787259 | 0, i = (i << 15 | i >>> 17) + a | 0, r += (a ^ (i | ~n)) + t[9] - 343485551 | 0, r = (r << 21 | r >>> 11) + i | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = i + e[2] | 0, e[3] = a + e[3] | 0;
		}
		function r(e) {
			var t = [], n;
			for (n = 0; n < 64; n += 4) t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24);
			return t;
		}
		function i(e) {
			var t = [], n;
			for (n = 0; n < 64; n += 4) t[n >> 2] = e[n] + (e[n + 1] << 8) + (e[n + 2] << 16) + (e[n + 3] << 24);
			return t;
		}
		function a(e) {
			var t = e.length, i = [
				1732584193,
				-271733879,
				-1732584194,
				271733878
			], a, o, s, c, l, u;
			for (a = 64; a <= t; a += 64) n(i, r(e.substring(a - 64, a)));
			for (e = e.substring(a - 64), o = e.length, s = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			], a = 0; a < o; a += 1) s[a >> 2] |= e.charCodeAt(a) << (a % 4 << 3);
			if (s[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (n(i, s), a = 0; a < 16; a += 1) s[a] = 0;
			return c = t * 8, c = c.toString(16).match(/(.*?)(.{0,8})$/), l = parseInt(c[2], 16), u = parseInt(c[1], 16) || 0, s[14] = l, s[15] = u, n(i, s), i;
		}
		function o(e) {
			var t = e.length, r = [
				1732584193,
				-271733879,
				-1732584194,
				271733878
			], a, o, s, c, l, u;
			for (a = 64; a <= t; a += 64) n(r, i(e.subarray(a - 64, a)));
			for (e = a - 64 < t ? e.subarray(a - 64) : new Uint8Array(), o = e.length, s = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			], a = 0; a < o; a += 1) s[a >> 2] |= e[a] << (a % 4 << 3);
			if (s[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (n(r, s), a = 0; a < 16; a += 1) s[a] = 0;
			return c = t * 8, c = c.toString(16).match(/(.*?)(.{0,8})$/), l = parseInt(c[2], 16), u = parseInt(c[1], 16) || 0, s[14] = l, s[15] = u, n(r, s), r;
		}
		function s(e) {
			var n = "", r;
			for (r = 0; r < 4; r += 1) n += t[e >> r * 8 + 4 & 15] + t[e >> r * 8 & 15];
			return n;
		}
		function c(e) {
			var t;
			for (t = 0; t < e.length; t += 1) e[t] = s(e[t]);
			return e.join("");
		}
		c(a("hello")), typeof ArrayBuffer < "u" && !ArrayBuffer.prototype.slice && (function() {
			function t(e, t) {
				return e = e | 0 || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t);
			}
			ArrayBuffer.prototype.slice = function(n, r) {
				var i = this.byteLength, a = t(n, i), o = i, s, c, l, u;
				return r !== e && (o = t(r, i)), a > o ? /* @__PURE__ */ new ArrayBuffer(0) : (s = o - a, c = new ArrayBuffer(s), l = new Uint8Array(c), u = new Uint8Array(this, a, s), l.set(u), c);
			};
		})();
		function l(e) {
			return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
		}
		function u(e, t) {
			var n = e.length, r = new ArrayBuffer(n), i = new Uint8Array(r), a;
			for (a = 0; a < n; a += 1) i[a] = e.charCodeAt(a);
			return t ? i : r;
		}
		function d(e) {
			return String.fromCharCode.apply(null, new Uint8Array(e));
		}
		function f(e, t, n) {
			var r = new Uint8Array(e.byteLength + t.byteLength);
			return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer;
		}
		function p(e) {
			var t = [], n = e.length, r;
			for (r = 0; r < n - 1; r += 2) t.push(parseInt(e.substr(r, 2), 16));
			return String.fromCharCode.apply(String, t);
		}
		function m() {
			this.reset();
		}
		return m.prototype.append = function(e) {
			return this.appendBinary(l(e)), this;
		}, m.prototype.appendBinary = function(e) {
			this._buff += e, this._length += e.length;
			var t = this._buff.length, i;
			for (i = 64; i <= t; i += 64) n(this._hash, r(this._buff.substring(i - 64, i)));
			return this._buff = this._buff.substring(i - 64), this;
		}, m.prototype.end = function(e) {
			var t = this._buff, n = t.length, r, i = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			], a;
			for (r = 0; r < n; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
			return this._finish(i, n), a = c(this._hash), e && (a = p(a)), this.reset(), a;
		}, m.prototype.reset = function() {
			return this._buff = "", this._length = 0, this._hash = [
				1732584193,
				-271733879,
				-1732584194,
				271733878
			], this;
		}, m.prototype.getState = function() {
			return {
				buff: this._buff,
				length: this._length,
				hash: this._hash.slice()
			};
		}, m.prototype.setState = function(e) {
			return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this;
		}, m.prototype.destroy = function() {
			delete this._hash, delete this._buff, delete this._length;
		}, m.prototype._finish = function(e, t) {
			var r = t, i, a, o;
			if (e[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (n(this._hash, e), r = 0; r < 16; r += 1) e[r] = 0;
			i = this._length * 8, i = i.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(i[2], 16), o = parseInt(i[1], 16) || 0, e[14] = a, e[15] = o, n(this._hash, e);
		}, m.hash = function(e, t) {
			return m.hashBinary(l(e), t);
		}, m.hashBinary = function(e, t) {
			var n = c(a(e));
			return t ? p(n) : n;
		}, m.ArrayBuffer = function() {
			this.reset();
		}, m.ArrayBuffer.prototype.append = function(e) {
			var t = f(this._buff.buffer, e, !0), r = t.length, a;
			for (this._length += e.byteLength, a = 64; a <= r; a += 64) n(this._hash, i(t.subarray(a - 64, a)));
			return this._buff = a - 64 < r ? new Uint8Array(t.buffer.slice(a - 64)) : new Uint8Array(), this;
		}, m.ArrayBuffer.prototype.end = function(e) {
			var t = this._buff, n = t.length, r = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			], i, a;
			for (i = 0; i < n; i += 1) r[i >> 2] |= t[i] << (i % 4 << 3);
			return this._finish(r, n), a = c(this._hash), e && (a = p(a)), this.reset(), a;
		}, m.ArrayBuffer.prototype.reset = function() {
			return this._buff = new Uint8Array(), this._length = 0, this._hash = [
				1732584193,
				-271733879,
				-1732584194,
				271733878
			], this;
		}, m.ArrayBuffer.prototype.getState = function() {
			var e = m.prototype.getState.call(this);
			return e.buff = d(e.buff), e;
		}, m.ArrayBuffer.prototype.setState = function(e) {
			return e.buff = u(e.buff, !0), m.prototype.setState.call(this, e);
		}, m.ArrayBuffer.prototype.destroy = m.prototype.destroy, m.ArrayBuffer.prototype._finish = m.prototype._finish, m.ArrayBuffer.hash = function(e, t) {
			var n = c(o(new Uint8Array(e)));
			return t ? p(n) : n;
		}, m;
	});
})))(), 1), U = ["accept"], W = { class: "split-upload-list" }, G = ["src"], K = {
	key: 1,
	class: "icon-apply"
}, q = { class: "name" }, J = { class: "size" }, Y = { class: "progress" }, X = {
	key: 2,
	class: "speed-time"
}, Z = ["onClick"], re = ["onClick"], ie = ["onClick"], ae = ["onClick"], oe = {
	key: 0,
	class: "upload-btn"
}, Q = 10 * 1024 * 1024, se = 3, ce = /* @__PURE__ */ h({
	__name: "upload",
	props: {
		auto: { type: Boolean },
		accept: { default: "" },
		groupId: { default: "" }
	},
	setup(e) {
		let r = e, o = S(), c = S([]), m = S(), h = S(0), g = (e) => e.status === 1 ? e.progress + "%" : {
			0: "等待上传",
			1: "正在上传",
			2: "上传失败",
			3: "暂停上传",
			4: "上传成功",
			5: "正在处理"
		}[e.status], _ = async () => {
			o.value = "", h.value = 1;
			let e = c.value.filter((e) => e.status === 0), t = [];
			for (let n of e) {
				for (; t.length >= se;) await Promise.race(t), t.shift();
				t.push(D(n));
			}
			await Promise.all(t);
		}, b = async (e, t) => {
			h.value = 0;
			let n = e;
			if (t !== "drag" && (n = e.target && e.target.files), !(!n || !n?.length)) {
				for (let e = 0; e < n.length; e++) {
					let t = n[e], r = "";
					/image\/\w+/.test(t.type) && (r = z(t) || ""), c.value.push({
						size: R(t.size),
						progress: 0,
						speed: "",
						remainingTime: "",
						status: 0,
						name: t.name,
						src: r,
						type: t.type,
						file: t,
						source: null
					});
				}
				r.auto && await _();
			}
		}, T, D = async (e) => {
			let t = e.file, i = Math.ceil(t.size / Q);
			e.status = 5;
			let a = await V(t, Q, i), o = n.source();
			T = o.token, e.source = o, e.fileHash = a + "", e.source = o, m.value = Date.now();
			for (let n = 0; n < i; n++) {
				let { chunk: o } = B(t, n, Q);
				await O({
					chunkNumber: n + 1,
					chunkSize: Q,
					currentChunkSize: o.size,
					totalSize: t.size,
					fileHash: a,
					filename: t.name,
					totalChunks: i,
					file: o,
					groupId: r.groupId
				}, e);
			}
			console.log(`程序运行时间: ${(Date.now() - m.value) / 1e3}秒`);
		}, O = (e, t) => new Promise((n, r) => {
			let i = new FormData();
			for (let t in e) i.append(t, e[t]);
			let o = {
				headers: { "Content-Type": "multipart/form-data" },
				timeout: 0,
				onUploadProgress: (n) => {
					let r = e.chunkSize * (e.chunkNumber - 1) + n.loaded, i = r / e.totalSize * 100;
					t.progress = Number(i > 100 ? 100 : i.toFixed(2)), k(r, e.totalSize, t);
				},
				cancelToken: T
			};
			t.status = 1, a("chunkUpload", i, o).then((e) => {
				e.data.status === 1 && (t.status = 4), n(e);
			}).catch((e) => {
				switch (e.code) {
					case "ERR_CANCELED":
						t.status = 3, console.log("cancel .."), r(e);
						break;
					default: t.status = 2, r(e);
				}
			});
		}), k = i((e, t, n) => {
			let r = e / ((Date.now() - m.value) / 1e3);
			n.speed = R(r);
			let i = (t - e) / r, a = Math.floor(i / 60), o = Math.floor(i - a * 60), s;
			s = a ? `${a}分${o}秒` : `${o}秒`, n.remainingTime = s;
		}, 1e3), j = (e) => {
			e.source?.cancel("cancel");
		}, P = (e) => {
			e.source = null, D(e);
		}, F = (e) => {
			let n = c.value[e];
			n.source && n.source.cancel("del"), [
				1,
				2,
				3,
				4
			].includes(n.status) && n.fileHash && a("chunkUploadDel", { fileHash: n.fileHash }).then(() => {
				t({
					type: "success",
					message: "删除成功"
				});
			}), c.value.splice(e, 1);
		}, I = (e) => {
			e.preventDefault();
		}, L = (e) => {
			e.preventDefault(), b(e.dataTransfer.files, "drag");
		}, R = (e) => {
			if (e === 0) return "0B";
			let t = 1024, n = [
				"B",
				"KB",
				"MB",
				"GB"
			], r = Math.floor(Math.log(e) / Math.log(t));
			return (e / t ** +r).toPrecision(3) + n[r];
		}, z = (e) => {
			let t = null;
			return window.URL === void 0 ? window.webkitURL !== void 0 && (t = window.webkitURL.createObjectURL(e)) : t = window.URL.createObjectURL(e), t;
		}, B = (e, t, n) => {
			let r = t * n, i = Math.min(e.size, r + n);
			return {
				start: r,
				end: i,
				chunk: e.slice(r, i)
			};
		}, V = (e, t, n) => new Promise((r, i) => {
			let a = 0, o = (/* @__PURE__ */ new Date()).getTime(), s = new H.default.ArrayBuffer(), c = new FileReader();
			l(), c.onload = function(e) {
				if (s.append(e.target?.result), a < n) a++, l();
				else {
					let e = s.end();
					console.log(`MD5计算完毕：${e}，耗时：${(/* @__PURE__ */ new Date()).getTime() - o} ms`), r(e);
				}
			}, c.onerror = function() {
				i("文件读取错误");
			};
			function l() {
				let { chunk: n } = B(e, a, t);
				c.readAsArrayBuffer(n);
			}
		});
		return (t, n) => {
			let r = w("el-button");
			return x(), d(s, null, [f("label", {
				class: "split-upload-file",
				onDragover: I,
				onDrop: L
			}, [
				f("input", {
					ref_key: "inputEl",
					ref: o,
					style: { display: "none" },
					type: "file",
					multiple: "multiple",
					accept: e.accept,
					onChange: b
				}, null, 40, U),
				n[0] ||= f("i", { class: "icon-upload" }, null, -1),
				n[1] ||= f("span", null, [p("将文件拖放到此处以上传或"), f("b", null, "选择文件")], -1)
			], 32), f("div", W, [(x(!0), d(s, null, C(c.value, (e, t) => (x(), d("div", {
				key: e.name,
				class: "split-item"
			}, [
				e.src ? (x(), d("img", {
					key: 0,
					src: e.src,
					alt: ""
				}, null, 8, G)) : (x(), d("i", K)),
				f("span", q, E(e.name), 1),
				f("span", J, E(e.size), 1),
				f("span", Y, E(g(e)), 1),
				e.status === 1 && e.speed && e.remainingTime ? (x(), d("span", X, E(e.speed) + "/s " + E(e.remainingTime), 1)) : u("", !0),
				N(f("i", {
					class: "icon icon-pause",
					onClick: (t) => j(e)
				}, null, 8, Z), [[A, e.status === 1]]),
				N(f("i", {
					class: "icon icon-refresh",
					onClick: (t) => P(e)
				}, null, 8, re), [[A, e.status === 3]]),
				N(f("i", {
					class: "icon icon-play",
					onClick: (t) => P(e)
				}, null, 8, ie), [[A, e.status === 0]]),
				f("i", {
					class: "icon icon-del",
					onClick: (e) => F(t)
				}, null, 8, ae),
				f("span", {
					class: v(["progress-bar", [`status-${e.status}`]]),
					style: y({ width: `${e.progress}%` })
				}, null, 6)
			]))), 128)), !e.auto && c.value.length ? (x(), d("div", oe, [c.value.length && h.value === 0 ? (x(), l(r, {
				key: 0,
				type: "primary",
				onClick: _
			}, {
				default: M(() => [...n[2] ||= [p(" 确认上传 ", -1)]]),
				_: 1
			})) : u("", !0)])) : u("", !0)])], 64);
		};
	}
}), le = {
	key: 0,
	class: "list-table"
}, ue = {
	key: 1,
	class: "list-grid"
}, de = ["onClick"], fe = {
	key: 0,
	class: "icon-checkbox"
}, pe = ["src"], me = {
	key: 2,
	class: "other icon-help"
}, he = ["title"], ge = {
	key: 1,
	class: "empty"
}, _e = {
	key: 2,
	class: "pages"
}, ve = /* @__PURE__ */ h({
	__name: "tableList",
	props: {
		listType: {},
		modelValue: { default: () => [] },
		limit: { default: 0 }
	},
	emits: ["checkedChange", "update:modelValue"],
	setup(e, { expose: t, emit: n }) {
		let i = e, o = n, h = S([]), g = S([]), _ = S(20), v = S(1), y = S(0), T = j(() => i.modelValue, (e) => {
			g.value = e;
		}, {
			deep: !0,
			immediate: !0
		}), O = c(() => g.value.map((e) => e.fileUrl)), k = (e) => {
			g.value = [e], o("update:modelValue", [e]);
		}, A = (e) => {
			let t = O.value.indexOf(e.fileUrl);
			t === -1 ? g.value.push(e) : g.value.splice(t, 1), o("update:modelValue", g.value);
		}, N = (e) => g.value.length >= i.limit ? !O.value.includes(e) : !1, P = (e) => {
			if (i.limit > 1) {
				if (N(e.fileUrl)) return;
				A(e);
			} else k(e);
		}, F = (e) => {
			let t = e.split(".")?.pop()?.toLowerCase();
			return [
				"jpg",
				"gif",
				"png",
				"jpeg",
				"webp"
			].includes(t);
		}, I = (e) => {
			a("chunkUploadFileList", { query: {
				groupId: e?.id,
				fileName: e?.keyword
			} }).then((e) => {
				h.value = e.data?.list || [];
			});
		};
		return I({}), b(() => {
			T();
		}), t({ getList: I }), (t, n) => {
			let i = w("el-checkbox"), a = w("el-radio"), o = w("el-table-column"), c = w("el-table"), g = w("el-pagination");
			return x(), d(s, null, [h.value.length ? (x(), d(s, { key: 0 }, [e.listType === "table" ? (x(), d("div", le, [m(c, {
				data: h.value,
				style: { width: "100%" }
			}, {
				default: M(() => [m(o, { label: "文件名" }, {
					default: M((t) => [e.limit > 1 ? (x(), l(i, {
						key: 0,
						disabled: N(t.row.fileUrl),
						"model-value": O.value.includes(t.row.fileUrl),
						value: t.row.fileUrl,
						onChange: (e) => A(t.row)
					}, {
						default: M(() => [p(E(t.row.fileName), 1)]),
						_: 2
					}, 1032, [
						"disabled",
						"model-value",
						"value",
						"onChange"
					])) : (x(), l(a, {
						key: 1,
						"model-value": O.value[0],
						label: t.row.fileUrl,
						onChange: (e) => k(t.row)
					}, {
						default: M(() => [p(E(t.row.fileName), 1)]),
						_: 2
					}, 1032, [
						"model-value",
						"label",
						"onChange"
					]))]),
					_: 1
				}), m(o, {
					label: "上传时间",
					prop: "creatTime",
					width: "170"
				}, {
					default: M(({ row: e }) => [p(E(D(r)(e.creatTime)), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["data"])])) : u("", !0), e.listType === "grid" ? (x(), d("div", ue, [f("ul", null, [(x(!0), d(s, null, C(h.value, (e) => (x(), d("li", {
				key: e.id,
				onClick: (t) => P(e)
			}, [
				O.value.includes(e.fileUrl) ? (x(), d("i", fe)) : u("", !0),
				F(e.fileUrl) ? (x(), d("img", {
					key: 1,
					src: `/api${e.fileUrl}`,
					alt: "",
					width: "100px",
					height: "75px"
				}, null, 8, pe)) : (x(), d("i", me, "无预览")),
				f("span", { title: e.fileName }, E(e.fileName), 9, he)
			], 8, de))), 128))])])) : u("", !0)], 64)) : (x(), d("div", ge, [...n[2] ||= [f("i", { class: "icon-empty" }, null, -1), p("暂无数据 ", -1)]])), y.value > _.value ? (x(), d("div", _e, [m(g, {
				"page-size": _.value,
				"onUpdate:pageSize": n[0] ||= (e) => _.value = e,
				"current-page": v.value,
				"onUpdate:currentPage": n[1] ||= (e) => v.value = e,
				background: "",
				layout: "prev, pager, next",
				total: y.value,
				onCurrentChange: I
			}, null, 8, [
				"page-size",
				"current-page",
				"total"
			])])) : u("", !0)], 64);
		};
	}
}), ye = { class: "upload-checked-list" }, be = { class: "checked-info" }, xe = ["onClick"], Se = /* @__PURE__ */ h({
	__name: "checkedList",
	props: {
		limit: { default: 0 },
		modelValue: { default: () => [] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = (e) => {
			let t = n.modelValue;
			t.splice(e, 1), a(t);
		}, a = (e) => {
			r("update:modelValue", e || []);
		};
		return (t, n) => {
			let r = w("el-button");
			return x(), d("div", ye, [f("div", be, [f("span", null, "已选择" + E(e.modelValue.length) + "/" + E(e.limit), 1), m(r, {
				type: "primary",
				link: "",
				onClick: n[0] ||= (e) => a()
			}, {
				default: M(() => [...n[1] ||= [p(" 清空 ", -1)]]),
				_: 1
			})]), f("ul", null, [(x(!0), d(s, null, C(e.modelValue, (e, t) => (x(), d("li", { key: e.path }, [f("span", null, E(e.fileName || e.fileUrl), 1), f("i", {
				class: "icon-del",
				title: "删除",
				onClick: (e) => i(t)
			}, null, 8, xe)]))), 128))])]);
		};
	}
}), Ce = { class: "upload-content" }, we = { class: "upload-list" }, Te = {
	key: 1,
	class: "upload-header"
}, Ee = { class: "control" }, De = { class: "btn" }, $ = { class: "search" }, Oe = { class: "grid-type" }, ke = { class: "dialog-footer" }, Ae = /* @__PURE__ */ h({
	__name: "dialog",
	props: {
		config: { default: () => ({}) },
		defaultValue: { default: () => [] }
	},
	emits: ["confirm"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = S(), o = S(""), h = S(!1), g = S(""), _ = S([]), y = S(!1), C = S("table"), T = j(() => r.defaultValue, (e) => {
			_.value = e;
		}, {
			deep: !0,
			immediate: !0
		}), E = c(() => r.config.limit ? parseInt(r.config.limit) : 1), D = () => {
			a.value.getList({
				id: o.value,
				keyword: g.value
			});
		}, O = () => {
			A();
		}, k = () => {
			y.value = !1, D();
		}, A = () => {
			h.value = !1;
		}, N = () => {
			A(), i("confirm", _.value);
		}, P = () => {
			h.value = !0, C.value = "table";
		}, F = (e) => {
			if (y.value) return !1;
			o.value = e, D();
		};
		return b(() => {
			T();
		}), t({ open: P }), (t, n) => {
			let r = w("el-button"), i = w("el-input"), c = w("el-dialog");
			return x(), l(c, {
				modelValue: h.value,
				"onUpdate:modelValue": n[6] ||= (e) => h.value = e,
				"append-to-body": !0,
				"before-close": O,
				"destroy-on-close": !0,
				title: "选择上传文件",
				class: "select-upload-dialog",
				width: "1000px"
			}, {
				footer: M(() => [f("div", ke, [y.value ? (x(), l(r, {
					key: 0,
					type: "primary",
					onClick: k
				}, {
					default: M(() => [...n[8] ||= [p(" 返回列表 ", -1)]]),
					_: 1
				})) : (x(), d(s, { key: 1 }, [m(r, { onClick: A }, {
					default: M(() => [...n[9] ||= [p(" 取 消 ", -1)]]),
					_: 1
				}), m(r, {
					type: "primary",
					onClick: N
				}, {
					default: M(() => [...n[10] ||= [p(" 确 定 ", -1)]]),
					_: 1
				})], 64))])]),
				default: M(() => [f("div", Ce, [
					m(ne, { onChangeGroup: F }),
					f("div", we, [y.value ? (x(), l(ce, {
						key: 0,
						accept: e.config.accept,
						auto: e.config.auto,
						"group-id": o.value
					}, null, 8, [
						"accept",
						"auto",
						"group-id"
					])) : (x(), d("div", Te, [f("div", Ee, [
						f("div", De, [m(r, {
							type: "primary",
							onClick: n[0] ||= (e) => y.value = !0
						}, {
							default: M(() => [...n[7] ||= [p(" 本地上传 ", -1)]]),
							_: 1
						})]),
						f("div", $, [m(i, {
							modelValue: g.value,
							"onUpdate:modelValue": n[1] ||= (e) => g.value = e,
							class: "input-with-select",
							placeholder: "请输入名称"
						}, {
							append: M(() => [m(r, {
								icon: "search",
								onClick: D
							})]),
							_: 1
						}, 8, ["modelValue"])]),
						f("div", Oe, [f("i", {
							class: v([{ active: C.value === "table" }, "icon-list"]),
							onClick: n[2] ||= (e) => C.value = "table"
						}, null, 2), f("i", {
							class: v([{ active: C.value === "grid" }, "icon-grid"]),
							onClick: n[3] ||= (e) => C.value = "grid"
						}, null, 2)])
					]), m(ve, {
						ref_key: "tableListEl",
						ref: a,
						modelValue: _.value,
						"onUpdate:modelValue": n[4] ||= (e) => _.value = e,
						limit: E.value,
						"list-type": C.value,
						"group-id": o.value
					}, null, 8, [
						"modelValue",
						"limit",
						"list-type",
						"group-id"
					])]))]),
					E.value > 1 && !y.value ? (x(), l(Se, {
						key: 0,
						modelValue: _.value,
						"onUpdate:modelValue": n[5] ||= (e) => _.value = e,
						limit: E.value
					}, null, 8, ["modelValue", "limit"])) : u("", !0)
				])]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
}), je = { class: "select-upload" }, Me = {
	key: 1,
	class: "select-upload-img"
}, Ne = { class: "select-upload-list" }, Pe = ["src"], Fe = ["onClick"], Ie = {
	key: 2,
	class: "select-upload-btn"
}, Le = { class: "select-upload-file" }, Re = ["onClick"], ze = /* @__PURE__ */ h({
	__name: "index",
	props: /* @__PURE__ */ g({
		data: { default: () => ({}) },
		disabled: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = O(e, "modelValue"), r = c(() => t.data.btnText || "选择文件"), i = c(() => t.data.showType || "input"), a = c(() => {
			let { limit: e, accept: n, auto: r } = t.data;
			return {
				limit: e,
				accept: n,
				auto: r
			};
		}), o = c(() => {
			if (n.value) {
				let e = [];
				return n.value.split(",").forEach((t) => {
					e.push({ fileUrl: t });
				}), e;
			} else return [];
		}), h = (e) => {
			if (e === -1) n.value = "";
			else {
				let t = o.value;
				t.splice(e, 1), n.value = t.join(",");
			}
		}, g = S(), y = () => {
			g.value.open();
		}, b = (e) => {
			n.value = e.map((e) => e.fileUrl).join(",");
		};
		return (t, c) => {
			let S = w("el-button"), T = w("el-input");
			return x(), d(s, null, [f("div", je, [i.value === "input" ? (x(), l(T, _({
				key: 0,
				value: n.value,
				readonly: "",
				clearable: !0,
				disabled: e.disabled
			}, e.data.control, {
				title: n.value,
				onClear: c[0] ||= (e) => h(-1)
			}), {
				append: M(() => [m(S, {
					disabled: e.disabled,
					onClick: y
				}, {
					default: M(() => [p(E(r.value), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				_: 1
			}, 16, [
				"value",
				"disabled",
				"title"
			])) : u("", !0), i.value === "img" ? (x(), d("div", Me, [f("div", Ne, [(x(!0), d(s, null, C(o.value, (t, n) => (x(), d("div", {
				key: t.fileUrl,
				class: "upload-item"
			}, [f("img", {
				src: t.fileUrl,
				alt: ""
			}, null, 8, Pe), N(f("i", {
				class: "icon-close",
				onClick: P((e) => h(n), ["stop"])
			}, null, 8, Fe), [[A, !e.disabled]])]))), 128))]), f("i", {
				class: v(["icon-plus", { disabled: e.disabled }]),
				onClick: y
			}, null, 2)])) : i.value === "btn" ? (x(), d("div", Ie, [m(S, _({ disabled: e.disabled }, e.data.control, {
				icon: "UploadFilled",
				type: "primary",
				onClick: y
			}), {
				default: M(() => [p(E(r.value), 1)]),
				_: 1
			}, 16, ["disabled"]), f("div", Le, [f("ul", null, [(x(!0), d(s, null, C(o.value, (t, n) => (x(), d("li", { key: t }, [p(E(t.fileUrl) + " ", 1), N(f("i", {
				class: "icon-close",
				onClick: P((e) => h(n), ["stop"])
			}, null, 8, Re), [[A, !e.disabled]])]))), 128))])])])) : u("", !0)]), m(Ae, {
				ref_key: "selectDialogEl",
				ref: g,
				config: a.value,
				"default-value": o.value,
				onConfirm: b
			}, null, 8, ["config", "default-value"])], 64);
		};
	}
});
//#endregion
export { ze as default };
