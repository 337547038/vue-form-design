/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { G as e, W as t } from "./api-2vEvKYmc.js";
//#region \0plugin-vue:export-helper
var n = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, r = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
	}
	n.prototype.clone_empty = function() {
		var e = new n(this.__parent);
		return e.set_indent(this.__indent_count, this.__alignment_count), e;
	}, n.prototype.item = function(e) {
		return e < 0 ? this.__items[this.__items.length + e] : this.__items[e];
	}, n.prototype.has_match = function(e) {
		for (var t = this.__items.length - 1; t >= 0; t--) if (this.__items[t].match(e)) return !0;
		return !1;
	}, n.prototype.set_indent = function(e, t) {
		this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = t || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
	}, n.prototype._set_wrap_point = function() {
		this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
	}, n.prototype._should_wrap = function() {
		return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
	}, n.prototype._allow_wrap = function() {
		if (this._should_wrap()) {
			this.__parent.add_new_line();
			var e = this.__parent.current_line;
			return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, e.__items[0] === " " && (e.__items.splice(0, 1), --e.__character_count), !0;
		}
		return !1;
	}, n.prototype.is_empty = function() {
		return this.__items.length === 0;
	}, n.prototype.last = function() {
		return this.is_empty() ? null : this.__items[this.__items.length - 1];
	}, n.prototype.push = function(e) {
		this.__items.push(e);
		var t = e.lastIndexOf("\n");
		t === -1 ? this.__character_count += e.length : this.__character_count = e.length - t;
	}, n.prototype.pop = function() {
		var e = null;
		return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e;
	}, n.prototype._remove_indent = function() {
		this.__indent_count > 0 && (--this.__indent_count, this.__character_count -= this.__parent.indent_size);
	}, n.prototype._remove_wrap_indent = function() {
		this.__wrap_point_indent_count > 0 && --this.__wrap_point_indent_count;
	}, n.prototype.trim = function() {
		for (; this.last() === " ";) this.__items.pop(), --this.__character_count;
	}, n.prototype.toString = function() {
		var e = "";
		return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e;
	};
	function r(e, t) {
		this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = Array(e.indent_size + 1).join(e.indent_char)), t ||= "", e.indent_level > 0 && (t = Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = t, this.__base_string_length = t.length;
	}
	r.prototype.get_indent_size = function(e, t) {
		var n = this.__base_string_length;
		return t ||= 0, e < 0 && (n = 0), n += e * this.__indent_size, n += t, n;
	}, r.prototype.get_indent_string = function(e, t) {
		var n = this.__base_string;
		return t ||= 0, e < 0 && (e = 0, n = ""), t += e * this.__indent_size, this.__ensure_cache(t), n += this.__cache[t], n;
	}, r.prototype.__ensure_cache = function(e) {
		for (; e >= this.__cache.length;) this.__add_column();
	}, r.prototype.__add_column = function() {
		var e = this.__cache.length, t = 0, n = "";
		this.__indent_size && e >= this.__indent_size && (t = Math.floor(e / this.__indent_size), e -= t * this.__indent_size, n = Array(t + 1).join(this.__indent_string)), e && (n += Array(e + 1).join(" ")), this.__cache.push(n);
	};
	function i(e, t) {
		this.__indent_cache = new r(e, t), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new n(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
	}
	i.prototype.__add_outputline = function() {
		this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
	}, i.prototype.get_line_number = function() {
		return this.__lines.length;
	}, i.prototype.get_indent_string = function(e, t) {
		return this.__indent_cache.get_indent_string(e, t);
	}, i.prototype.get_indent_size = function(e, t) {
		return this.__indent_cache.get_indent_size(e, t);
	}, i.prototype.is_empty = function() {
		return !this.previous_line && this.current_line.is_empty();
	}, i.prototype.add_new_line = function(e) {
		return this.is_empty() || !e && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
	}, i.prototype.get_code = function(e) {
		this.trim(!0);
		var t = this.current_line.pop();
		t && (t[t.length - 1] === "\n" && (t = t.replace(/\n+$/g, "")), this.current_line.push(t)), this._end_with_newline && this.__add_outputline();
		var n = this.__lines.join("\n");
		return e !== "\n" && (n = n.replace(/[\n]/g, e)), n;
	}, i.prototype.set_wrap_point = function() {
		this.current_line._set_wrap_point();
	}, i.prototype.set_indent = function(e, t) {
		return e ||= 0, t ||= 0, this.next_line.set_indent(e, t), this.__lines.length > 1 ? (this.current_line.set_indent(e, t), !0) : (this.current_line.set_indent(), !1);
	}, i.prototype.add_raw_token = function(e) {
		for (var t = 0; t < e.newlines; t++) this.__add_outputline();
		this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
	}, i.prototype.add_token = function(e) {
		this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
	}, i.prototype.__add_space_before_token = function() {
		this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
	}, i.prototype.remove_indent = function(e) {
		for (var t = this.__lines.length; e < t;) this.__lines[e]._remove_indent(), e++;
		this.current_line._remove_wrap_indent();
	}, i.prototype.trim = function(e) {
		for (e = e === void 0 ? !1 : e, this.current_line.trim(); e && this.__lines.length > 1 && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
		this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
	}, i.prototype.just_added_newline = function() {
		return this.current_line.is_empty();
	}, i.prototype.just_added_blankline = function() {
		return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
	}, i.prototype.ensure_empty_line_above = function(e, t) {
		for (var r = this.__lines.length - 2; r >= 0;) {
			var i = this.__lines[r];
			if (i.is_empty()) break;
			if (i.item(0).indexOf(e) !== 0 && i.item(-1) !== t) {
				this.__lines.splice(r + 1, 0, new n(this)), this.previous_line = this.__lines[this.__lines.length - 2];
				break;
			}
			r--;
		}
	}, t.exports.Output = i;
})), i = /* @__PURE__ */ t(((e, t) => {
	function n(e, t, n, r) {
		this.type = e, this.text = t, this.comments_before = null, this.newlines = n || 0, this.whitespace_before = r || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
	}
	t.exports.Token = n;
})), a = /* @__PURE__ */ t(((e) => {
	var t = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", n = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", r = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", i = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", a = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", o = "(?:" + a + "|[" + t + r + "])", s = "(?:" + a + "|[" + n + r + i + "])*";
	e.identifier = new RegExp(o + s, "g"), e.identifierStart = new RegExp(o), e.identifierMatch = RegExp("(?:" + a + "|[" + n + r + i + "])+"), e.newline = /[\n\r\u2028\u2029]/, e.lineBreak = RegExp("\r\n|" + e.newline.source), e.allLineBreaks = new RegExp(e.lineBreak.source, "g");
})), o = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		this.raw_options = r(e, t), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", [
			"auto",
			"none",
			"angular",
			"django",
			"erb",
			"handlebars",
			"php",
			"smarty"
		], ["auto"]);
	}
	n.prototype._get_array = function(e, t) {
		var n = this.raw_options[e], r = t || [];
		return typeof n == "object" ? n !== null && typeof n.concat == "function" && (r = n.concat()) : typeof n == "string" && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r;
	}, n.prototype._get_boolean = function(e, t) {
		var n = this.raw_options[e];
		return n === void 0 ? !!t : !!n;
	}, n.prototype._get_characters = function(e, t) {
		var n = this.raw_options[e], r = t || "";
		return typeof n == "string" && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	")), r;
	}, n.prototype._get_number = function(e, t) {
		var n = this.raw_options[e];
		t = parseInt(t, 10), isNaN(t) && (t = 0);
		var r = parseInt(n, 10);
		return isNaN(r) && (r = t), r;
	}, n.prototype._get_selection = function(e, t, n) {
		var r = this._get_selection_list(e, t, n);
		if (r.length !== 1) throw Error("Invalid Option Value: The option '" + e + "' can only be one of the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
		return r[0];
	}, n.prototype._get_selection_list = function(e, t, n) {
		if (!t || t.length === 0) throw Error("Selection list cannot be empty.");
		if (n ||= [t[0]], !this._is_valid_selection(n, t)) throw Error("Invalid Default Value!");
		var r = this._get_array(e, n);
		if (!this._is_valid_selection(r, t)) throw Error("Invalid Option Value: The option '" + e + "' can contain only the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
		return r;
	}, n.prototype._is_valid_selection = function(e, t) {
		return e.length && t.length && !e.some(function(e) {
			return t.indexOf(e) === -1;
		});
	};
	function r(e, t) {
		var n = {};
		for (var r in e = i(e), e) r !== t && (n[r] = e[r]);
		if (t && e[t]) for (r in e[t]) n[r] = e[t][r];
		return n;
	}
	function i(e) {
		var t = {}, n;
		for (n in e) {
			var r = n.replace(/-/g, "_");
			t[r] = e[n];
		}
		return t;
	}
	t.exports.Options = n, t.exports.normalizeOpts = i, t.exports.mergeOpts = r;
})), s = /* @__PURE__ */ t(((e, t) => {
	var n = o().Options, r = [
		"before-newline",
		"after-newline",
		"preserve-newline"
	];
	function i(e) {
		n.call(this, e, "js");
		var t = this.raw_options.brace_style || null;
		t === "expand-strict" ? this.raw_options.brace_style = "expand" : t === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
		var i = this._get_selection_list("brace_style", [
			"collapse",
			"expand",
			"end-expand",
			"none",
			"preserve-inline"
		]);
		this.brace_preserve_inline = !1, this.brace_style = "collapse";
		for (var a = 0; a < i.length; a++) i[a] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = i[a];
		this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", r), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
	}
	i.prototype = new n(), t.exports.Options = i;
})), c = /* @__PURE__ */ t(((e, t) => {
	var n = RegExp.prototype.hasOwnProperty("sticky");
	function r(e) {
		this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0;
	}
	r.prototype.restart = function() {
		this.__position = 0;
	}, r.prototype.back = function() {
		this.__position > 0 && --this.__position;
	}, r.prototype.hasNext = function() {
		return this.__position < this.__input_length;
	}, r.prototype.next = function() {
		var e = null;
		return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e;
	}, r.prototype.peek = function(e) {
		var t = null;
		return e ||= 0, e += this.__position, e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)), t;
	}, r.prototype.__match = function(e, t) {
		e.lastIndex = t;
		var r = e.exec(this.__input);
		return r && !(n && e.sticky) && r.index !== t && (r = null), r;
	}, r.prototype.test = function(e, t) {
		return t ||= 0, t += this.__position, t >= 0 && t < this.__input_length ? !!this.__match(e, t) : !1;
	}, r.prototype.testChar = function(e, t) {
		var n = this.peek(t);
		return e.lastIndex = 0, n !== null && e.test(n);
	}, r.prototype.match = function(e) {
		var t = this.__match(e, this.__position);
		return t ? this.__position += t[0].length : t = null, t;
	}, r.prototype.read = function(e, t, n) {
		var r = "", i;
		return e && (i = this.match(e), i && (r += i[0])), t && (i || !e) && (r += this.readUntil(t, n)), r;
	}, r.prototype.readUntil = function(e, t) {
		var n = "", r = this.__position;
		e.lastIndex = this.__position;
		var i = e.exec(this.__input);
		return i ? (r = i.index, t && (r += i[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n;
	}, r.prototype.readUntilAfter = function(e) {
		return this.readUntil(e, !0);
	}, r.prototype.get_regexp = function(e, t) {
		var r = null, i = "g";
		return t && n && (i = "y"), typeof e == "string" && e !== "" ? r = new RegExp(e, i) : e && (r = new RegExp(e.source, i)), r;
	}, r.prototype.get_literal_regexp = function(e) {
		return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
	}, r.prototype.peekUntilAfter = function(e) {
		var t = this.__position, n = this.readUntilAfter(e);
		return this.__position = t, n;
	}, r.prototype.lookBack = function(e) {
		var t = this.__position - 1;
		return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e;
	}, t.exports.InputScanner = r;
})), l = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = e;
	}
	n.prototype.restart = function() {
		this.__position = 0;
	}, n.prototype.isEmpty = function() {
		return this.__tokens_length === 0;
	}, n.prototype.hasNext = function() {
		return this.__position < this.__tokens_length;
	}, n.prototype.next = function() {
		var e = null;
		return this.hasNext() && (e = this.__tokens[this.__position], this.__position += 1), e;
	}, n.prototype.peek = function(e) {
		var t = null;
		return e ||= 0, e += this.__position, e >= 0 && e < this.__tokens_length && (t = this.__tokens[e]), t;
	}, n.prototype.add = function(e) {
		this.__parent_token && (e.parent = this.__parent_token), this.__tokens.push(e), this.__tokens_length += 1;
	}, t.exports.TokenStream = n;
})), u = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		this._input = e, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after);
	}
	n.prototype.read = function() {
		var e = this._input.read(this._starting_pattern);
		return (!this._starting_pattern || e) && (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), e;
	}, n.prototype.read_match = function() {
		return this._input.match(this._match_pattern);
	}, n.prototype.until_after = function(e) {
		var t = this._create();
		return t._until_after = !0, t._until_pattern = this._input.get_regexp(e), t._update(), t;
	}, n.prototype.until = function(e) {
		var t = this._create();
		return t._until_after = !1, t._until_pattern = this._input.get_regexp(e), t._update(), t;
	}, n.prototype.starting_with = function(e) {
		var t = this._create();
		return t._starting_pattern = this._input.get_regexp(e, !0), t._update(), t;
	}, n.prototype.matching = function(e) {
		var t = this._create();
		return t._match_pattern = this._input.get_regexp(e, !0), t._update(), t;
	}, n.prototype._create = function() {
		return new n(this._input, this);
	}, n.prototype._update = function() {}, t.exports.Pattern = n;
})), d = /* @__PURE__ */ t(((e, t) => {
	var n = u().Pattern;
	function r(e, t) {
		n.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
	}
	r.prototype = new n(), r.prototype.__set_whitespace_patterns = function(e, t) {
		e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]");
	}, r.prototype.read = function() {
		this.newline_count = 0, this.whitespace_before_token = "";
		var e = this._input.read(this._match_pattern);
		if (e === " ") this.whitespace_before_token = " ";
		else if (e) {
			var t = this.__split(this._newline_regexp, e);
			this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
		}
		return e;
	}, r.prototype.matching = function(e, t) {
		var n = this._create();
		return n.__set_whitespace_patterns(e, t), n._update(), n;
	}, r.prototype._create = function() {
		return new r(this._input, this);
	}, r.prototype.__split = function(e, t) {
		e.lastIndex = 0;
		for (var n = 0, r = [], i = e.exec(t); i;) r.push(t.substring(n, i.index)), n = i.index + i[0].length, i = e.exec(t);
		return n < t.length ? r.push(t.substring(n, t.length)) : r.push(""), r;
	}, t.exports.WhitespacePattern = r;
})), f = /* @__PURE__ */ t(((e, t) => {
	var n = c().InputScanner, r = i().Token, a = l().TokenStream, o = d().WhitespacePattern, s = {
		START: "TK_START",
		RAW: "TK_RAW",
		EOF: "TK_EOF"
	}, u = function(e, t) {
		this._input = new n(e), this._options = t || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new o(this._input);
	};
	u.prototype.tokenize = function() {
		this._input.restart(), this.__tokens = new a(), this._reset();
		for (var e, t = new r(s.START, ""), n = null, i = [], o = new a(); t.type !== s.EOF;) {
			for (e = this._get_next_token(t, n); this._is_comment(e);) o.add(e), e = this._get_next_token(t, n);
			o.isEmpty() || (e.comments_before = o, o = new a()), e.parent = n, this._is_opening(e) ? (i.push(n), n = e) : n && this._is_closing(e, n) && (e.opened = n, n.closed = e, n = i.pop(), e.parent = n), e.previous = t, t.next = e, this.__tokens.add(e), t = e;
		}
		return this.__tokens;
	}, u.prototype._is_first_token = function() {
		return this.__tokens.isEmpty();
	}, u.prototype._reset = function() {}, u.prototype._get_next_token = function(e, t) {
		this._readWhitespace();
		var n = this._input.read(/.+/g);
		return n ? this._create_token(s.RAW, n) : this._create_token(s.EOF, "");
	}, u.prototype._is_comment = function(e) {
		return !1;
	}, u.prototype._is_opening = function(e) {
		return !1;
	}, u.prototype._is_closing = function(e, t) {
		return !1;
	}, u.prototype._create_token = function(e, t) {
		return new r(e, t, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
	}, u.prototype._readWhitespace = function() {
		return this._patterns.whitespace.read();
	}, t.exports.Tokenizer = u, t.exports.TOKEN = s;
})), p = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		e = typeof e == "string" ? e : e.source, t = typeof t == "string" ? t : t.source, this.__directives_block_pattern = RegExp(e + " beautify( \\w+[:]\\w+)+ " + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = RegExp(e + "\\sbeautify\\signore:end\\s" + t, "g");
	}
	n.prototype.get_directives = function(e) {
		if (!e.match(this.__directives_block_pattern)) return null;
		var t = {};
		this.__directive_pattern.lastIndex = 0;
		for (var n = this.__directive_pattern.exec(e); n;) t[n[1]] = n[2], n = this.__directive_pattern.exec(e);
		return t;
	}, n.prototype.readIgnored = function(e) {
		return e.readUntilAfter(this.__directives_end_ignore_pattern);
	}, t.exports.Directives = n;
})), m = /* @__PURE__ */ t(((e, t) => {
	var n = u().Pattern, r = {
		django: !1,
		erb: !1,
		handlebars: !1,
		php: !1,
		smarty: !1,
		angular: !1
	};
	function i(e, t) {
		n.call(this, e, t), this.__template_pattern = null, this._disabled = Object.assign({}, r), this._excluded = Object.assign({}, r), t && (this.__template_pattern = this._input.get_regexp(t.__template_pattern), this._excluded = Object.assign(this._excluded, t._excluded), this._disabled = Object.assign(this._disabled, t._disabled));
		var i = new n(e);
		this.__patterns = {
			handlebars_comment: i.starting_with(/{{!--/).until_after(/--}}/),
			handlebars_unescaped: i.starting_with(/{{{/).until_after(/}}}/),
			handlebars: i.starting_with(/{{/).until_after(/}}/),
			php: i.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
			erb: i.starting_with(/<%[^%]/).until_after(/[^%]%>/),
			django: i.starting_with(/{%/).until_after(/%}/),
			django_value: i.starting_with(/{{/).until_after(/}}/),
			django_comment: i.starting_with(/{#/).until_after(/#}/),
			smarty: i.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
			smarty_comment: i.starting_with(/{\*/).until_after(/\*}/),
			smarty_literal: i.starting_with(/{literal}/).until_after(/{\/literal}/)
		};
	}
	i.prototype = new n(), i.prototype._create = function() {
		return new i(this._input, this);
	}, i.prototype._update = function() {
		this.__set_templated_pattern();
	}, i.prototype.disable = function(e) {
		var t = this._create();
		return t._disabled[e] = !0, t._update(), t;
	}, i.prototype.read_options = function(e) {
		var t = this._create();
		for (var n in r) t._disabled[n] = e.templating.indexOf(n) === -1;
		return t._update(), t;
	}, i.prototype.exclude = function(e) {
		var t = this._create();
		return t._excluded[e] = !0, t._update(), t;
	}, i.prototype.read = function() {
		var e = "";
		e = this._match_pattern ? this._input.read(this._starting_pattern) : this._input.read(this._starting_pattern, this.__template_pattern);
		for (var t = this._read_template(); t;) this._match_pattern ? t += this._input.read(this._match_pattern) : t += this._input.readUntil(this.__template_pattern), e += t, t = this._read_template();
		return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e;
	}, i.prototype.__set_templated_pattern = function() {
		var e = [];
		this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.angular || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || e.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")");
	}, i.prototype._read_template = function() {
		var e = "", t = this._input.peek();
		if (t === "<") {
			var n = this._input.peek(1);
			!this._disabled.php && !this._excluded.php && n === "?" && (e ||= this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && n === "%" && (e ||= this.__patterns.erb.read());
		} else t === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (e ||= this.__patterns.handlebars_comment.read(), e ||= this.__patterns.handlebars_unescaped.read(), e ||= this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (e ||= this.__patterns.django_value.read()), this._excluded.django || (e ||= this.__patterns.django_comment.read(), e ||= this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (e ||= this.__patterns.smarty_comment.read(), e ||= this.__patterns.smarty_literal.read(), e ||= this.__patterns.smarty.read()));
		return e;
	}, t.exports.TemplatablePattern = i;
})), h = /* @__PURE__ */ t(((e, t) => {
	var n = c().InputScanner, r = f().Tokenizer, i = f().TOKEN, o = p().Directives, s = a(), l = u().Pattern, d = m().TemplatablePattern;
	function h(e, t) {
		return t.indexOf(e) !== -1;
	}
	var g = {
		START_EXPR: "TK_START_EXPR",
		END_EXPR: "TK_END_EXPR",
		START_BLOCK: "TK_START_BLOCK",
		END_BLOCK: "TK_END_BLOCK",
		WORD: "TK_WORD",
		RESERVED: "TK_RESERVED",
		SEMICOLON: "TK_SEMICOLON",
		STRING: "TK_STRING",
		EQUALS: "TK_EQUALS",
		OPERATOR: "TK_OPERATOR",
		COMMA: "TK_COMMA",
		BLOCK_COMMENT: "TK_BLOCK_COMMENT",
		COMMENT: "TK_COMMENT",
		DOT: "TK_DOT",
		UNKNOWN: "TK_UNKNOWN",
		START: i.START,
		RAW: i.RAW,
		EOF: i.EOF
	}, _ = new o(/\/\*/, /\*\//), v = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, y = /[0-9]/, b = /[^\d\.]/, x = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), S = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
	S = S.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), S = "\\?\\.(?!\\d) " + S, S = S.replace(/ /g, "|");
	var C = new RegExp(S), w = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), T = w.concat([
		"do",
		"in",
		"of",
		"else",
		"get",
		"set",
		"new",
		"catch",
		"finally",
		"typeof",
		"yield",
		"async",
		"await",
		"from",
		"as",
		"class",
		"extends"
	]), E = RegExp("^(?:" + T.join("|") + ")$"), D, O = function(e, t) {
		r.call(this, e, t), this._patterns.whitespace = this._patterns.whitespace.matching("\\u00A0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff", "\\u2028\\u2029");
		var n = new l(this._input), i = new d(this._input).read_options(this._options);
		this.__patterns = {
			template: i,
			identifier: i.starting_with(s.identifier).matching(s.identifierMatch),
			number: n.matching(v),
			punct: n.matching(C),
			comment: n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
			block_comment: n.starting_with(/\/\*/).until_after(/\*\//),
			html_comment_start: n.matching(/<!--/),
			html_comment_end: n.matching(/-->/),
			include: n.starting_with(/#include/).until_after(s.lineBreak),
			shebang: n.starting_with(/#!/).until_after(s.lineBreak),
			xml: n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
			single_quote: i.until(/['\\\n\r\u2028\u2029]/),
			double_quote: i.until(/["\\\n\r\u2028\u2029]/),
			template_text: i.until(/[`\\$]/),
			template_expression: i.until(/[`}\\]/)
		};
	};
	O.prototype = new r(), O.prototype._is_comment = function(e) {
		return e.type === g.COMMENT || e.type === g.BLOCK_COMMENT || e.type === g.UNKNOWN;
	}, O.prototype._is_opening = function(e) {
		return e.type === g.START_BLOCK || e.type === g.START_EXPR;
	}, O.prototype._is_closing = function(e, t) {
		return (e.type === g.END_BLOCK || e.type === g.END_EXPR) && t && (e.text === "]" && t.text === "[" || e.text === ")" && t.text === "(" || e.text === "}" && t.text === "{");
	}, O.prototype._reset = function() {
		D = !1;
	}, O.prototype._get_next_token = function(e, t) {
		var n = null;
		this._readWhitespace();
		var r = this._input.peek();
		return r === null ? this._create_token(g.EOF, "") : (n ||= this._read_non_javascript(r), n ||= this._read_string(r), n ||= this._read_pair(r, this._input.peek(1)), n ||= this._read_word(e), n ||= this._read_singles(r), n ||= this._read_comment(r), n ||= this._read_regexp(r, e), n ||= this._read_xml(r, e), n ||= this._read_punctuation(), n ||= this._create_token(g.UNKNOWN, this._input.next()), n);
	}, O.prototype._read_word = function(e) {
		var t = this.__patterns.identifier.read();
		if (t !== "") return t = t.replace(s.allLineBreaks, "\n"), !(e.type === g.DOT || e.type === g.RESERVED && (e.text === "set" || e.text === "get")) && E.test(t) ? (t === "in" || t === "of") && (e.type === g.WORD || e.type === g.STRING) ? this._create_token(g.OPERATOR, t) : this._create_token(g.RESERVED, t) : this._create_token(g.WORD, t);
		if (t = this.__patterns.number.read(), t !== "") return this._create_token(g.WORD, t);
	}, O.prototype._read_singles = function(e) {
		var t = null;
		return e === "(" || e === "[" ? t = this._create_token(g.START_EXPR, e) : e === ")" || e === "]" ? t = this._create_token(g.END_EXPR, e) : e === "{" ? t = this._create_token(g.START_BLOCK, e) : e === "}" ? t = this._create_token(g.END_BLOCK, e) : e === ";" ? t = this._create_token(g.SEMICOLON, e) : e === "." && b.test(this._input.peek(1)) ? t = this._create_token(g.DOT, e) : e === "," && (t = this._create_token(g.COMMA, e)), t && this._input.next(), t;
	}, O.prototype._read_pair = function(e, t) {
		var n = null;
		return e === "#" && t === "{" && (n = this._create_token(g.START_BLOCK, e + t)), n && (this._input.next(), this._input.next()), n;
	}, O.prototype._read_punctuation = function() {
		var e = this.__patterns.punct.read();
		if (e !== "") return e === "=" ? this._create_token(g.EQUALS, e) : e === "?." ? this._create_token(g.DOT, e) : this._create_token(g.OPERATOR, e);
	}, O.prototype._read_non_javascript = function(e) {
		var t = "";
		if (e === "#") {
			if (this._is_first_token() && (t = this.__patterns.shebang.read(), t) || (t = this.__patterns.include.read(), t)) return this._create_token(g.UNKNOWN, t.trim() + "\n");
			e = this._input.next();
			var n = "#";
			if (this._input.hasNext() && this._input.testChar(y)) {
				do
					e = this._input.next(), n += e;
				while (this._input.hasNext() && e !== "#" && e !== "=");
				return e === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (n += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (n += "{}", this._input.next(), this._input.next())), this._create_token(g.WORD, n);
			}
			this._input.back();
		} else if (e === "<" && this._is_first_token()) {
			if (t = this.__patterns.html_comment_start.read(), t) {
				for (; this._input.hasNext() && !this._input.testChar(s.newline);) t += this._input.next();
				return D = !0, this._create_token(g.COMMENT, t);
			}
		} else if (D && e === "-" && (t = this.__patterns.html_comment_end.read(), t)) return D = !1, this._create_token(g.COMMENT, t);
		return null;
	}, O.prototype._read_comment = function(e) {
		var t = null;
		if (e === "/") {
			var n = "";
			if (this._input.peek(1) === "*") {
				n = this.__patterns.block_comment.read();
				var r = _.get_directives(n);
				r && r.ignore === "start" && (n += _.readIgnored(this._input)), n = n.replace(s.allLineBreaks, "\n"), t = this._create_token(g.BLOCK_COMMENT, n), t.directives = r;
			} else this._input.peek(1) === "/" && (n = this.__patterns.comment.read(), t = this._create_token(g.COMMENT, n));
		}
		return t;
	}, O.prototype._read_string = function(e) {
		if (e === "`" || e === "'" || e === "\"") {
			var t = this._input.next();
			return this.has_char_escapes = !1, e === "`" ? t += this._read_string_recursive("`", !0, "${") : t += this._read_string_recursive(e), this.has_char_escapes && this._options.unescape_strings && (t = k(t)), this._input.peek() === e && (t += this._input.next()), t = t.replace(s.allLineBreaks, "\n"), this._create_token(g.STRING, t);
		}
		return null;
	}, O.prototype._allow_regexp_or_xml = function(e) {
		return e.type === g.RESERVED && h(e.text, [
			"return",
			"case",
			"throw",
			"else",
			"do",
			"typeof",
			"yield"
		]) || e.type === g.END_EXPR && e.text === ")" && e.opened.previous.type === g.RESERVED && h(e.opened.previous.text, [
			"if",
			"while",
			"for"
		]) || h(e.type, [
			g.COMMENT,
			g.START_EXPR,
			g.START_BLOCK,
			g.START,
			g.END_BLOCK,
			g.OPERATOR,
			g.EQUALS,
			g.EOF,
			g.SEMICOLON,
			g.COMMA
		]);
	}, O.prototype._read_regexp = function(e, t) {
		if (e === "/" && this._allow_regexp_or_xml(t)) {
			for (var n = this._input.next(), r = !1, i = !1; this._input.hasNext() && (r || i || this._input.peek() !== e) && !this._input.testChar(s.newline);) n += this._input.peek(), r ? r = !1 : (r = this._input.peek() === "\\", this._input.peek() === "[" ? i = !0 : this._input.peek() === "]" && (i = !1)), this._input.next();
			return this._input.peek() === e && (n += this._input.next(), n += this._input.read(s.identifier)), this._create_token(g.STRING, n);
		}
		return null;
	}, O.prototype._read_xml = function(e, t) {
		if (this._options.e4x && e === "<" && this._allow_regexp_or_xml(t)) {
			var n = "", r = this.__patterns.xml.read_match();
			if (r) {
				for (var i = r[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), a = i.indexOf("{") === 0, o = 0; r;) {
					var c = !!r[1], l = r[2];
					if (!(r[r.length - 1] || l.slice(0, 8) === "![CDATA[") && (l === i || a && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (c ? --o : ++o), n += r[0], o <= 0) break;
					r = this.__patterns.xml.read_match();
				}
				return r || (n += this._input.match(/[\s\S]*/g)[0]), n = n.replace(s.allLineBreaks, "\n"), this._create_token(g.STRING, n);
			}
		}
		return null;
	};
	function k(e) {
		for (var t = "", r = 0, i = new n(e), a = null; i.hasNext();) if (a = i.match(/([\s]|[^\\]|\\\\)+/g), a && (t += a[0]), i.peek() === "\\") {
			if (i.next(), i.peek() === "x") a = i.match(/x([0-9A-Fa-f]{2})/g);
			else if (i.peek() === "u") a = i.match(/u([0-9A-Fa-f]{4})/g), a ||= i.match(/u\{([0-9A-Fa-f]+)\}/g);
			else {
				t += "\\", i.hasNext() && (t += i.next());
				continue;
			}
			if (!a || (r = parseInt(a[1], 16), r > 126 && r <= 255 && a[0].indexOf("x") === 0)) return e;
			r >= 0 && r < 32 || r > 1114111 ? t += "\\" + a[0] : r === 34 || r === 39 || r === 92 ? t += "\\" + String.fromCharCode(r) : t += String.fromCharCode(r);
		}
		return t;
	}
	O.prototype._read_string_recursive = function(e, t, n) {
		var r, i;
		e === "'" ? i = this.__patterns.single_quote : e === "\"" ? i = this.__patterns.double_quote : e === "`" ? i = this.__patterns.template_text : e === "}" && (i = this.__patterns.template_expression);
		for (var a = i.read(), o = ""; this._input.hasNext();) {
			if (o = this._input.next(), o === e || !t && s.newline.test(o)) {
				this._input.back();
				break;
			} else o === "\\" && this._input.hasNext() ? (r = this._input.peek(), r === "x" || r === "u" ? this.has_char_escapes = !0 : r === "\r" && this._input.peek(1) === "\n" && this._input.next(), o += this._input.next()) : n && (n === "${" && o === "$" && this._input.peek() === "{" && (o += this._input.next()), n === o && (e === "`" ? o += this._read_string_recursive("}", t, "`") : o += this._read_string_recursive("`", t, "${"), this._input.hasNext() && (o += this._input.next())));
			o += i.read(), a += o;
		}
		return a;
	}, t.exports.Tokenizer = O, t.exports.TOKEN = g, t.exports.positionable_operators = x.slice(), t.exports.line_starters = w.slice();
})), g = /* @__PURE__ */ t(((e, t) => {
	var n = r().Output, o = i().Token, c = a(), l = s().Options, u = h().Tokenizer, d = h().line_starters, f = h().positionable_operators, p = h().TOKEN;
	function m(e, t) {
		return t.indexOf(e) !== -1;
	}
	function g(e) {
		return e.replace(/^\s+/g, "");
	}
	function _(e) {
		for (var t = {}, n = 0; n < e.length; n++) t[e[n].replace(/-/g, "_")] = e[n];
		return t;
	}
	function v(e, t) {
		return e && e.type === p.RESERVED && e.text === t;
	}
	function y(e, t) {
		return e && e.type === p.RESERVED && m(e.text, t);
	}
	var b = [
		"case",
		"return",
		"do",
		"if",
		"throw",
		"else",
		"await",
		"break",
		"continue",
		"async"
	], x = _([
		"before-newline",
		"after-newline",
		"preserve-newline"
	]), S = [x.before_newline, x.preserve_newline], C = {
		BlockStatement: "BlockStatement",
		Statement: "Statement",
		ObjectLiteral: "ObjectLiteral",
		ArrayLiteral: "ArrayLiteral",
		ForInitializer: "ForInitializer",
		Conditional: "Conditional",
		Expression: "Expression"
	};
	function w(e, t) {
		t.multiline_frame || t.mode === C.ForInitializer || t.mode === C.Conditional || e.remove_indent(t.start_line_index);
	}
	function T(e) {
		e = e.replace(c.allLineBreaks, "\n");
		for (var t = [], n = e.indexOf("\n"); n !== -1;) t.push(e.substring(0, n)), e = e.substring(n + 1), n = e.indexOf("\n");
		return e.length && t.push(e), t;
	}
	function E(e) {
		return e === C.ArrayLiteral;
	}
	function D(e) {
		return m(e, [
			C.Expression,
			C.ForInitializer,
			C.Conditional
		]);
	}
	function O(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].trim().charAt(0) !== t) return !1;
		return !0;
	}
	function k(e, t) {
		for (var n = 0, r = e.length, i; n < r; n++) if (i = e[n], i && i.indexOf(t) !== 0) return !1;
		return !0;
	}
	function A(e, t) {
		t ||= {}, this._source_text = e || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new l(t);
	}
	A.prototype.create_flags = function(e, t) {
		var n = 0;
		return e && (n = e.indentation_level, !this._output.just_added_newline() && e.line_indent_level > n && (n = e.line_indent_level)), {
			mode: t,
			parent: e,
			last_token: e ? e.last_token : new o(p.START_BLOCK, ""),
			last_word: e ? e.last_word : "",
			declaration_statement: !1,
			declaration_assignment: !1,
			multiline_frame: !1,
			inline_frame: !1,
			if_block: !1,
			else_block: !1,
			class_start_block: !1,
			do_block: !1,
			do_while: !1,
			import_block: !1,
			in_case_statement: !1,
			in_case: !1,
			case_body: !1,
			case_block: !1,
			indentation_level: n,
			alignment: 0,
			line_indent_level: e ? e.line_indent_level : n,
			start_line_index: this._output.get_line_number(),
			ternary_depth: 0
		};
	}, A.prototype._reset = function(e) {
		var t = e.match(/^[\t ]*/)[0];
		return this._last_last_text = "", this._output = new n(this._options, t), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(C.BlockStatement), this._tokens = new u(e, this._options).tokenize(), e;
	}, A.prototype.beautify = function() {
		if (this._options.disabled) return this._source_text;
		var e, t = this._reset(this._source_text), n = this._options.eol;
		this._options.eol === "auto" && (n = "\n", t && c.lineBreak.test(t || "") && (n = t.match(c.lineBreak)[0]));
		for (var r = this._tokens.next(); r;) this.handle_token(r), this._last_last_text = this._flags.last_token.text, this._flags.last_token = r, r = this._tokens.next();
		return e = this._output.get_code(n), e;
	}, A.prototype.handle_token = function(e, t) {
		e.type === p.START_EXPR ? this.handle_start_expr(e) : e.type === p.END_EXPR ? this.handle_end_expr(e) : e.type === p.START_BLOCK ? this.handle_start_block(e) : e.type === p.END_BLOCK ? this.handle_end_block(e) : e.type === p.WORD || e.type === p.RESERVED ? this.handle_word(e) : e.type === p.SEMICOLON ? this.handle_semicolon(e) : e.type === p.STRING ? this.handle_string(e) : e.type === p.EQUALS ? this.handle_equals(e) : e.type === p.OPERATOR ? this.handle_operator(e) : e.type === p.COMMA ? this.handle_comma(e) : e.type === p.BLOCK_COMMENT ? this.handle_block_comment(e, t) : e.type === p.COMMENT ? this.handle_comment(e, t) : e.type === p.DOT ? this.handle_dot(e) : e.type === p.EOF ? this.handle_eof(e) : (e.type, p.UNKNOWN, this.handle_unknown(e, t));
	}, A.prototype.handle_whitespace_and_comments = function(e, t) {
		var n = e.newlines, r = this._options.keep_array_indentation && E(this._flags.mode);
		if (e.comments_before) for (var i = e.comments_before.next(); i;) this.handle_whitespace_and_comments(i, t), this.handle_token(i, t), i = e.comments_before.next();
		if (r) for (var a = 0; a < n; a += 1) this.print_newline(a > 0, t);
		else if (this._options.max_preserve_newlines && n > this._options.max_preserve_newlines && (n = this._options.max_preserve_newlines), this._options.preserve_newlines && n > 1) {
			this.print_newline(!1, t);
			for (var o = 1; o < n; o += 1) this.print_newline(!0, t);
		}
	};
	var j = [
		"async",
		"break",
		"continue",
		"return",
		"throw",
		"yield"
	];
	A.prototype.allow_wrap_or_preserved_newline = function(e, t) {
		if (t = t === void 0 ? !1 : t, !this._output.just_added_newline()) {
			var n = this._options.preserve_newlines && e.newlines || t;
			if (m(this._flags.last_token.text, f) || m(e.text, f)) {
				var r = m(this._flags.last_token.text, f) && m(this._options.operator_position, S) || m(e.text, f);
				n &&= r;
			}
			if (n) this.print_newline(!1, !0);
			else if (this._options.wrap_line_length) {
				if (y(this._flags.last_token, j)) return;
				this._output.set_wrap_point();
			}
		}
	}, A.prototype.print_newline = function(e, t) {
		if (!t && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== p.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) for (var n = this._tokens.peek(); this._flags.mode === C.Statement && !(this._flags.if_block && v(n, "else")) && !this._flags.do_block;) this.restore_mode();
		this._output.add_new_line(e) && (this._flags.multiline_frame = !0);
	}, A.prototype.print_token_line_indentation = function(e) {
		this._output.just_added_newline() && (this._options.keep_array_indentation && e.newlines && (e.text === "[" || E(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(e.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
	}, A.prototype.print_token = function(e) {
		if (this._output.raw) {
			this._output.add_raw_token(e);
			return;
		}
		if (this._options.comma_first && e.previous && e.previous.type === p.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
			var t = this._output.previous_line.pop();
			this._output.previous_line.is_empty() && (this._output.previous_line.push(t), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(e), this._output.add_token(","), this._output.space_before_token = !0;
		}
		this.print_token_line_indentation(e), this._output.non_breaking_space = !0, this._output.add_token(e.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
	}, A.prototype.indent = function() {
		this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	}, A.prototype.deindent = function() {
		this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (--this._flags.indentation_level, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
	}, A.prototype.set_mode = function(e) {
		this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, e), this._flags = this.create_flags(this._previous_flags, e), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	}, A.prototype.restore_mode = function() {
		this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === C.Statement && w(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
	}, A.prototype.start_of_object_property = function() {
		return this._flags.parent.mode === C.ObjectLiteral && this._flags.mode === C.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || y(this._flags.last_token, ["get", "set"]));
	}, A.prototype.start_of_statement = function(e) {
		var t = !1;
		return t ||= y(this._flags.last_token, [
			"var",
			"let",
			"const"
		]) && e.type === p.WORD, t ||= v(this._flags.last_token, "do"), t ||= !(this._flags.parent.mode === C.ObjectLiteral && this._flags.mode === C.Statement) && y(this._flags.last_token, j) && !e.newlines, t ||= v(this._flags.last_token, "else") && !(v(e, "if") && !e.comments_before), t ||= this._flags.last_token.type === p.END_EXPR && (this._previous_flags.mode === C.ForInitializer || this._previous_flags.mode === C.Conditional), t ||= this._flags.last_token.type === p.WORD && this._flags.mode === C.BlockStatement && !this._flags.in_case && !(e.text === "--" || e.text === "++") && this._last_last_text !== "function" && e.type !== p.WORD && e.type !== p.RESERVED, t ||= this._flags.mode === C.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || y(this._flags.last_token, ["get", "set"])), t ? (this.set_mode(C.Statement), this.indent(), this.handle_whitespace_and_comments(e, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e, y(e, [
			"do",
			"for",
			"if",
			"while"
		])), !0) : !1;
	}, A.prototype.handle_start_expr = function(e) {
		this.start_of_statement(e) || this.handle_whitespace_and_comments(e);
		var t = C.Expression;
		if (e.text === "[") {
			if (this._flags.last_token.type === p.WORD || this._flags.last_token.text === ")") {
				y(this._flags.last_token, d) && (this._output.space_before_token = !0), this.print_token(e), this.set_mode(t), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
				return;
			}
			t = C.ArrayLiteral, E(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), m(this._flags.last_token.type, [
				p.START_EXPR,
				p.END_EXPR,
				p.WORD,
				p.OPERATOR,
				p.DOT
			]) || (this._output.space_before_token = !0);
		} else {
			if (this._flags.last_token.type === p.RESERVED) this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, t = C.ForInitializer) : m(this._flags.last_token.text, [
				"if",
				"while",
				"switch"
			]) ? (this._output.space_before_token = this._options.space_before_conditional, t = C.Conditional) : m(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && e.whitespace_before === "" ? this._output.space_before_token = !1 : (m(this._flags.last_token.text, d) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
			else if (this._flags.last_token.type === p.EQUALS || this._flags.last_token.type === p.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e);
			else if (this._flags.last_token.type === p.WORD) {
				this._output.space_before_token = !1;
				var n = this._tokens.peek(-3);
				if (this._options.space_after_named_function && n) {
					var r = this._tokens.peek(-4);
					y(n, ["async", "function"]) || n.text === "*" && y(r, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === C.ObjectLiteral ? (n.text === "{" || n.text === "," || n.text === "*" && (r.text === "{" || r.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
				}
			} else this.allow_wrap_or_preserved_newline(e);
			(this._flags.last_token.type === p.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (m(this._last_last_text, ["function", "yield"]) || this._flags.mode === C.ObjectLiteral && m(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
		}
		this._flags.last_token.text === ";" || this._flags.last_token.type === p.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === p.END_EXPR || this._flags.last_token.type === p.START_EXPR || this._flags.last_token.type === p.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === p.COMMA) && this.allow_wrap_or_preserved_newline(e, e.newlines), this.print_token(e), this.set_mode(t), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
	}, A.prototype.handle_end_expr = function(e) {
		for (; this._flags.mode === C.Statement;) this.restore_mode();
		this.handle_whitespace_and_comments(e), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(e, e.text === "]" && E(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type === p.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(e), this.restore_mode(), w(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === C.Conditional && (this._previous_flags.mode = C.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
	}, A.prototype.handle_start_block = function(e) {
		this.handle_whitespace_and_comments(e);
		var t = this._tokens.peek(), n = this._tokens.peek(1);
		this._flags.last_word === "switch" && this._flags.last_token.type === p.END_EXPR ? (this.set_mode(C.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(C.BlockStatement) : n && (m(n.text, [":", ","]) && m(t.type, [
			p.STRING,
			p.WORD,
			p.RESERVED
		]) || m(t.text, [
			"get",
			"set",
			"..."
		]) && m(n.type, [p.WORD, p.RESERVED])) ? m(this._last_last_text, ["class", "interface"]) && !m(n.text, [":", ","]) ? this.set_mode(C.BlockStatement) : this.set_mode(C.ObjectLiteral) : this._flags.last_token.type === p.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(C.BlockStatement) : m(this._flags.last_token.type, [
			p.EQUALS,
			p.START_EXPR,
			p.COMMA,
			p.OPERATOR
		]) || y(this._flags.last_token, [
			"return",
			"throw",
			"import",
			"default"
		]) ? this.set_mode(C.ObjectLiteral) : this.set_mode(C.BlockStatement), this._flags.last_token && y(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
		var r = !t.comments_before && t.text === "}", i = r && this._flags.last_word === "function" && this._flags.last_token.type === p.END_EXPR;
		if (this._options.brace_preserve_inline) {
			var a = 0, o = null;
			this._flags.inline_frame = !0;
			do
				if (a += 1, o = this._tokens.peek(a - 1), o.newlines) {
					this._flags.inline_frame = !1;
					break;
				}
			while (o.type !== p.EOF && !(o.type === p.END_BLOCK && o.opened === e));
		}
		(this._options.brace_style === "expand" || this._options.brace_style === "none" && e.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== p.OPERATOR && (i || this._flags.last_token.type === p.EQUALS || y(this._flags.last_token, b) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (E(this._previous_flags.mode) && (this._flags.last_token.type === p.START_EXPR || this._flags.last_token.type === p.COMMA) && ((this._flags.last_token.type === p.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === p.COMMA || this._flags.last_token.type === p.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(e), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== p.OPERATOR && this._flags.last_token.type !== p.START_EXPR && (m(this._flags.last_token.type, [p.START_BLOCK, p.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(e), this.indent(), !r && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
	}, A.prototype.handle_end_block = function(e) {
		for (this.handle_whitespace_and_comments(e); this._flags.mode === C.Statement;) this.restore_mode();
		var t = this._flags.last_token.type === p.START_BLOCK;
		this._flags.inline_frame && !t ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? t || this.print_newline() : t || (E(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(e);
	}, A.prototype.handle_word = function(e) {
		if (e.type === p.RESERVED && (m(e.text, ["set", "get"]) && this._flags.mode !== C.ObjectLiteral || e.text === "import" && m(this._tokens.peek().text, ["(", "."]) || m(e.text, ["as", "from"]) && !this._flags.import_block || this._flags.mode === C.ObjectLiteral && this._tokens.peek().text === ":") && (e.type = p.WORD), this.start_of_statement(e) ? y(this._flags.last_token, [
			"var",
			"let",
			"const"
		]) && e.type === p.WORD && (this._flags.declaration_statement = !0) : e.newlines && !D(this._flags.mode) && (this._flags.last_token.type !== p.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== p.EQUALS && (this._options.preserve_newlines || !y(this._flags.last_token, [
			"var",
			"let",
			"const",
			"set",
			"get"
		])) ? (this.handle_whitespace_and_comments(e), this.print_newline()) : this.handle_whitespace_and_comments(e), this._flags.do_block && !this._flags.do_while) if (v(e, "while")) {
			this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0, this._flags.do_while = !0;
			return;
		} else this.print_newline(), this._flags.do_block = !1;
		if (this._flags.if_block) if (!this._flags.else_block && v(e, "else")) this._flags.else_block = !0;
		else {
			for (; this._flags.mode === C.Statement;) this.restore_mode();
			this._flags.if_block = !1, this._flags.else_block = !1;
		}
		if (this._flags.in_case_statement && y(e, ["case", "default"])) {
			this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(e), this._flags.in_case = !0;
			return;
		}
		if ((this._flags.last_token.type === p.COMMA || this._flags.last_token.type === p.START_EXPR || this._flags.last_token.type === p.EQUALS || this._flags.last_token.type === p.OPERATOR) && !this.start_of_object_property() && !(m(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === C.ObjectLiteral) && this.allow_wrap_or_preserved_newline(e), v(e, "function")) {
			(m(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(m(this._flags.last_token.text, [
				"(",
				"[",
				"{",
				":",
				"=",
				","
			]) || this._flags.last_token.type === p.OPERATOR)) && !this._output.just_added_blankline() && !e.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === p.RESERVED || this._flags.last_token.type === p.WORD ? y(this._flags.last_token, [
				"get",
				"set",
				"new",
				"export"
			]) || y(this._flags.last_token, j) || v(this._flags.last_token, "default") && this._last_last_text === "export" || this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === p.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (D(this._flags.mode) || E(this._flags.mode)) || this.print_newline(), this.print_token(e), this._flags.last_word = e.text;
			return;
		}
		var t = "NONE";
		this._flags.last_token.type === p.END_BLOCK ? this._previous_flags.inline_frame ? t = "SPACE" : y(e, [
			"else",
			"catch",
			"finally",
			"from"
		]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && e.newlines ? t = "NEWLINE" : (t = "SPACE", this._output.space_before_token = !0) : t = "NEWLINE" : this._flags.last_token.type === p.SEMICOLON && this._flags.mode === C.BlockStatement ? t = "NEWLINE" : this._flags.last_token.type === p.SEMICOLON && D(this._flags.mode) ? t = "SPACE" : this._flags.last_token.type === p.STRING ? t = "NEWLINE" : this._flags.last_token.type === p.RESERVED || this._flags.last_token.type === p.WORD || this._flags.last_token.text === "*" && (m(this._last_last_text, ["function", "yield"]) || this._flags.mode === C.ObjectLiteral && m(this._last_last_text, ["{", ","])) ? t = "SPACE" : this._flags.last_token.type === p.START_BLOCK ? t = this._flags.inline_frame ? "SPACE" : "NEWLINE" : this._flags.last_token.type === p.END_EXPR && (this._output.space_before_token = !0, t = "NEWLINE"), y(e, d) && this._flags.last_token.text !== ")" && (t = this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? "SPACE" : "NEWLINE"), y(e, [
			"else",
			"catch",
			"finally"
		]) ? (!(this._flags.last_token.type === p.END_BLOCK && this._previous_flags.mode === C.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && e.newlines) && !this._flags.inline_frame ? this.print_newline() : (this._output.trim(!0), this._output.current_line.last() !== "}" && this.print_newline(), this._output.space_before_token = !0) : t === "NEWLINE" ? y(this._flags.last_token, b) || this._flags.last_token.text === "declare" && y(e, [
			"var",
			"let",
			"const"
		]) ? this._output.space_before_token = !0 : this._flags.last_token.type === p.END_EXPR ? y(e, d) && this._flags.last_token.text !== ")" && this.print_newline() : (this._flags.last_token.type !== p.START_EXPR || !y(e, [
			"var",
			"let",
			"const"
		])) && this._flags.last_token.text !== ":" && (v(e, "if") && v(e.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : this._flags.multiline_frame && E(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : t === "SPACE" && (this._output.space_before_token = !0), e.previous && (e.previous.type === p.WORD || e.previous.type === p.RESERVED) && (this._output.space_before_token = !0), this.print_token(e), this._flags.last_word = e.text, e.type === p.RESERVED && (e.text === "do" ? this._flags.do_block = !0 : e.text === "if" ? this._flags.if_block = !0 : e.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && v(e, "from") && (this._flags.import_block = !1));
	}, A.prototype.handle_semicolon = function(e) {
		this.start_of_statement(e) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(e);
		for (var t = this._tokens.peek(); this._flags.mode === C.Statement && !(this._flags.if_block && v(t, "else")) && !this._flags.do_block;) this.restore_mode();
		this._flags.import_block && (this._flags.import_block = !1), this.print_token(e);
	}, A.prototype.handle_string = function(e) {
		e.text.startsWith("`") && e.newlines === 0 && e.whitespace_before === "" && (e.previous.text === ")" || this._flags.last_token.type === p.WORD) || (this.start_of_statement(e) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(e), this._flags.last_token.type === p.RESERVED || this._flags.last_token.type === p.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === p.COMMA || this._flags.last_token.type === p.START_EXPR || this._flags.last_token.type === p.EQUALS || this._flags.last_token.type === p.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e) : e.text.startsWith("`") && this._flags.last_token.type === p.END_EXPR && (e.previous.text === "]" || e.previous.text === ")") && e.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(e);
	}, A.prototype.handle_equals = function(e) {
		this.start_of_statement(e) || this.handle_whitespace_and_comments(e), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0;
	}, A.prototype.handle_comma = function(e) {
		this.handle_whitespace_and_comments(e, !0), this.print_token(e), this._output.space_before_token = !0, this._flags.declaration_statement ? (D(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)) : this._flags.mode === C.ObjectLiteral || this._flags.mode === C.Statement && this._flags.parent.mode === C.ObjectLiteral ? (this._flags.mode === C.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e);
	}, A.prototype.handle_operator = function(e) {
		var t = e.text === "*" && (y(this._flags.last_token, ["function", "yield"]) || m(this._flags.last_token.type, [
			p.START_BLOCK,
			p.COMMA,
			p.END_BLOCK,
			p.SEMICOLON
		])), n = m(e.text, ["-", "+"]) && (m(this._flags.last_token.type, [
			p.START_BLOCK,
			p.START_EXPR,
			p.EQUALS,
			p.OPERATOR
		]) || m(this._flags.last_token.text, d) || this._flags.last_token.text === ",");
		if (!this.start_of_statement(e)) {
			var r = !t;
			this.handle_whitespace_and_comments(e, r);
		}
		if (e.text === "*" && this._flags.last_token.type === p.DOT) {
			this.print_token(e);
			return;
		}
		if (e.text === "::") {
			this.print_token(e);
			return;
		}
		if (m(e.text, ["-", "+"]) && this.start_of_object_property()) {
			this.print_token(e);
			return;
		}
		if (this._flags.last_token.type === p.OPERATOR && m(this._options.operator_position, S) && this.allow_wrap_or_preserved_newline(e), e.text === ":" && this._flags.in_case) {
			this.print_token(e), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type === p.START_BLOCK ? (this._flags.case_block = !0, this._output.space_before_token = !0) : (this.indent(), this.print_newline(), this._flags.case_block = !1);
			return;
		}
		var i = !0, a = !0, o = !1;
		if (e.text === ":" ? this._flags.ternary_depth === 0 ? i = !1 : (--this._flags.ternary_depth, o = !0) : e.text === "?" && (this._flags.ternary_depth += 1), !n && !t && this._options.preserve_newlines && m(e.text, f)) {
			var s = e.text === ":", c = s && o, l = s && !o;
			switch (this._options.operator_position) {
				case x.before_newline:
					this._output.space_before_token = !l, this.print_token(e), (!s || c) && this.allow_wrap_or_preserved_newline(e), this._output.space_before_token = !0;
					return;
				case x.after_newline:
					this._output.space_before_token = !0, !s || c ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(e) : this._output.space_before_token = !1, this.print_token(e), this._output.space_before_token = !0;
					return;
				case x.preserve_newline:
					l || this.allow_wrap_or_preserved_newline(e), i = !(this._output.just_added_newline() || l), this._output.space_before_token = i, this.print_token(e), this._output.space_before_token = !0;
					return;
			}
		}
		if (t) {
			this.allow_wrap_or_preserved_newline(e), i = !1;
			var u = this._tokens.peek();
			a = u && m(u.type, [p.WORD, p.RESERVED]);
		} else if (e.text === "...") this.allow_wrap_or_preserved_newline(e), i = this._flags.last_token.type === p.START_BLOCK, a = !1;
		else if (m(e.text, [
			"--",
			"++",
			"!",
			"~"
		]) || n) {
			if ((this._flags.last_token.type === p.COMMA || this._flags.last_token.type === p.START_EXPR) && this.allow_wrap_or_preserved_newline(e), i = !1, a = !1, e.newlines && (e.text === "--" || e.text === "++" || e.text === "~")) {
				var h = y(this._flags.last_token, b) && e.newlines;
				h && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(h, !0);
			}
			this._flags.last_token.text === ";" && D(this._flags.mode) && (i = !0), this._flags.last_token.type === p.RESERVED ? i = !0 : this._flags.last_token.type === p.END_EXPR ? i = !(this._flags.last_token.text === "]" && (e.text === "--" || e.text === "++")) : this._flags.last_token.type === p.OPERATOR && (i = m(e.text, [
				"--",
				"-",
				"++",
				"+"
			]) && m(this._flags.last_token.text, [
				"--",
				"-",
				"++",
				"+"
			]), m(e.text, ["+", "-"]) && m(this._flags.last_token.text, ["--", "++"]) && (a = !0)), (this._flags.mode === C.BlockStatement && !this._flags.inline_frame || this._flags.mode === C.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
		}
		this._output.space_before_token = this._output.space_before_token || i, this.print_token(e), this._output.space_before_token = a;
	}, A.prototype.handle_block_comment = function(e, t) {
		if (this._output.raw) {
			this._output.add_raw_token(e), e.directives && e.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
			return;
		}
		if (e.directives) {
			this.print_newline(!1, t), this.print_token(e), e.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
			return;
		}
		if (!c.newline.test(e.text) && !e.newlines) {
			this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0;
			return;
		} else this.print_block_commment(e, t);
	}, A.prototype.print_block_commment = function(e, t) {
		var n = T(e.text), r, i = !1, a = !1, o = e.whitespace_before, s = o.length;
		if (this.print_newline(!1, t), this.print_token_line_indentation(e), this._output.add_token(n[0]), this.print_newline(!1, t), n.length > 1) {
			for (n = n.slice(1), i = O(n, "*"), a = k(n, o), i && (this._flags.alignment = 1), r = 0; r < n.length; r++) i ? (this.print_token_line_indentation(e), this._output.add_token(g(n[r]))) : a && n[r] ? (this.print_token_line_indentation(e), this._output.add_token(n[r].substring(s))) : (this._output.current_line.set_indent(-1), this._output.add_token(n[r])), this.print_newline(!1, t);
			this._flags.alignment = 0;
		}
	}, A.prototype.handle_comment = function(e, t) {
		e.newlines ? this.print_newline(!1, t) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(e), this.print_newline(!1, t);
	}, A.prototype.handle_dot = function(e) {
		this.start_of_statement(e) || this.handle_whitespace_and_comments(e, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), y(this._flags.last_token, b) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(e, this._flags.last_token.text === ")" && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(e);
	}, A.prototype.handle_unknown = function(e, t) {
		this.print_token(e), e.text[e.text.length - 1] === "\n" && this.print_newline(!1, t);
	}, A.prototype.handle_eof = function(e) {
		for (; this._flags.mode === C.Statement;) this.restore_mode();
		this.handle_whitespace_and_comments(e);
	}, t.exports.Beautifier = A;
})), _ = /* @__PURE__ */ t(((e, t) => {
	var n = g().Beautifier, r = s().Options;
	function i(e, t) {
		return new n(e, t).beautify();
	}
	t.exports = i, t.exports.defaultOptions = function() {
		return new r();
	};
})), v = /* @__PURE__ */ t(((e, t) => {
	var n = o().Options;
	function r(e) {
		n.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
		var t = this._get_boolean("space_around_selector_separator");
		this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
		var r = this._get_selection_list("brace_style", [
			"collapse",
			"expand",
			"end-expand",
			"none",
			"preserve-inline"
		]);
		this.brace_style = "collapse";
		for (var i = 0; i < r.length; i++) r[i] === "expand" ? this.brace_style = r[i] : this.brace_style = "collapse";
	}
	r.prototype = new n(), t.exports.Options = r;
})), y = /* @__PURE__ */ t(((e, t) => {
	var n = v().Options, i = r().Output, a = c().InputScanner, o = p().Directives, s = new o(/\/\*/, /\*\//), l = /\r\n|[\r\n]/, u = /\r\n|[\r\n]/g, d = /\s/, f = /(?:\s|\n)+/g, m = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, h = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
	function g(e, t) {
		this._source_text = e || "", this._options = new n(t), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
			page: !0,
			"font-face": !0,
			keyframes: !0,
			media: !0,
			supports: !0,
			document: !0
		}, this.CONDITIONAL_GROUP_RULE = {
			media: !0,
			supports: !0,
			document: !0
		}, this.NON_SEMICOLON_NEWLINE_PROPERTY = ["grid-template-areas", "grid-template"];
	}
	g.prototype.eatString = function(e) {
		var t = "";
		for (this._ch = this._input.next(); this._ch;) {
			if (t += this._ch, this._ch === "\\") t += this._input.next();
			else if (e.indexOf(this._ch) !== -1 || this._ch === "\n") break;
			this._ch = this._input.next();
		}
		return t;
	}, g.prototype.eatWhitespace = function(e) {
		for (var t = d.test(this._input.peek()), n = 0; d.test(this._input.peek());) this._ch = this._input.next(), e && this._ch === "\n" && (n === 0 || n < this._options.max_preserve_newlines) && (n++, this._output.add_new_line(!0));
		return t;
	}, g.prototype.foundNestedPseudoClass = function() {
		for (var e = 0, t = 1, n = this._input.peek(t); n;) {
			if (n === "{") return !0;
			if (n === "(") e += 1;
			else if (n === ")") {
				if (e === 0) return !1;
				--e;
			} else if (n === ";" || n === "}") return !1;
			t++, n = this._input.peek(t);
		}
		return !1;
	}, g.prototype.print_string = function(e) {
		this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(e);
	}, g.prototype.preserveSingleSpace = function(e) {
		e && (this._output.space_before_token = !0);
	}, g.prototype.indent = function() {
		this._indentLevel++;
	}, g.prototype.outdent = function() {
		this._indentLevel > 0 && this._indentLevel--;
	}, g.prototype.beautify = function() {
		if (this._options.disabled) return this._source_text;
		var e = this._source_text, t = this._options.eol;
		t === "auto" && (t = "\n", e && l.test(e || "") && (t = e.match(l)[0])), e = e.replace(u, "\n");
		var n = e.match(/^[\t ]*/)[0];
		this._output = new i(this._options, n), this._input = new a(e), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
		for (var r = 0, o = !1, c = !1, p = !1, g = !1, _ = !1, v = this._ch, y = !1, b, x, S; b = this._input.read(f), x = b !== "", S = v, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), v = this._ch, this._ch;) if (this._ch === "/" && this._input.peek() === "*") {
			this._output.add_new_line(), this._input.back();
			var C = this._input.read(m), w = s.get_directives(C);
			w && w.ignore === "start" && (C += s.readIgnored(this._input)), this.print_string(C), this.eatWhitespace(!0), this._output.add_new_line();
		} else if (this._ch === "/" && this._input.peek() === "/") this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(h)), this.eatWhitespace(!0);
		else if (this._ch === "$") {
			this.preserveSingleSpace(x), this.print_string(this._ch);
			var T = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
			T.match(/[ :]$/) && (T = this.eatString(": ").replace(/\s+$/, ""), this.print_string(T), this._output.space_before_token = !0), r === 0 && T.indexOf(":") !== -1 && (c = !0, this.indent());
		} else if (this._ch === "@") if (this.preserveSingleSpace(x), this._input.peek() === "{") this.print_string(this._ch + this.eatString("}"));
		else {
			this.print_string(this._ch);
			var E = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
			E.match(/[ :]$/) && (E = this.eatString(": ").replace(/\s+$/, ""), this.print_string(E), this._output.space_before_token = !0), r === 0 && E.indexOf(":") !== -1 ? (c = !0, this.indent()) : E in this.NESTED_AT_RULE ? (this._nestedLevel += 1, E in this.CONDITIONAL_GROUP_RULE && (p = !0)) : r === 0 && !c && (g = !0);
		}
		else if (this._ch === "#" && this._input.peek() === "{") this.preserveSingleSpace(x), this.print_string(this._ch + this.eatString("}"));
		else if (this._ch === "{") c && (c = !1, this.outdent()), g = !1, p ? (p = !1, o = this._indentLevel >= this._nestedLevel) : o = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && o && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (S === "(" ? this._output.space_before_token = !1 : S !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
		else if (this._ch === "}") this.outdent(), this._output.add_new_line(), S === "{" && this._output.trim(!0), c &&= (this.outdent(), !1), this.print_string(this._ch), o = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
		else if (this._ch === ":") {
			for (var D = 0; D < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; D++) if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[D])) {
				y = !0;
				break;
			}
			(o || p) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !g && r === 0 ? (this.print_string(":"), c || (c = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
		} else if (this._ch === "\"" || this._ch === "'") {
			var O = S === "\"" || S === "'";
			this.preserveSingleSpace(O || x), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
		} else if (this._ch === ";") y = !1, r === 0 ? (c &&= (this.outdent(), !1), g = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
		else if (this._ch === "(") if (this._input.lookBack("url")) this.print_string(this._ch), this.eatWhitespace(), r++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === "\"" || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), r && (r--, this.outdent()));
		else {
			var k = !1;
			this._input.lookBack("with") && (k = !0), this.preserveSingleSpace(x || k), this.print_string(this._ch), c && S === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), _ = !0) : (this.eatWhitespace(), r++, this.indent());
		}
		else if (this._ch === ")") r && (r--, this.outdent()), _ && this._input.peek() === ";" && this._options.selector_separator_newline && (_ = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
		else if (this._ch === ",") this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!c || _) && r === 0 && !g ? this._output.add_new_line() : this._output.space_before_token = !0;
		else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !c && r === 0) this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && d.test(this._ch) && (this._ch = ""));
		else if (this._ch === "]") this.print_string(this._ch);
		else if (this._ch === "[") this.preserveSingleSpace(x), this.print_string(this._ch);
		else if (this._ch === "=") this.eatWhitespace(), this.print_string("="), d.test(this._ch) && (this._ch = "");
		else if (this._ch === "!" && !this._input.lookBack("\\")) this._output.space_before_token = !0, this.print_string(this._ch);
		else {
			var A = S === "\"" || S === "'";
			this.preserveSingleSpace(A || x), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === "\n" && y && this._output.add_new_line();
		}
		return this._output.get_code(t);
	}, t.exports.Beautifier = g;
})), b = /* @__PURE__ */ t(((e, t) => {
	var n = y().Beautifier, r = v().Options;
	function i(e, t) {
		return new n(e, t).beautify();
	}
	t.exports = i, t.exports.defaultOptions = function() {
		return new r();
	};
})), x = /* @__PURE__ */ t(((e, t) => {
	var n = o().Options;
	function r(e) {
		n.call(this, e, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = [
			"django",
			"erb",
			"handlebars",
			"php"
		]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection("wrap_attributes", [
			"auto",
			"force",
			"force-aligned",
			"force-expand-multiline",
			"aligned-multiple",
			"preserve",
			"preserve-aligned"
		]), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", [
			"head",
			"body",
			"/html"
		]), this.inline = this._get_array("inline", /* @__PURE__ */ "a.abbr.area.audio.b.bdi.bdo.br.button.canvas.cite.code.data.datalist.del.dfn.em.embed.i.iframe.img.input.ins.kbd.keygen.label.map.mark.math.meter.noscript.object.output.progress.q.ruby.s.samp.select.small.span.strong.sub.sup.svg.template.textarea.time.u.var.video.wbr.text.acronym.big.strike.tt".split(".")), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
			"area",
			"base",
			"br",
			"col",
			"embed",
			"hr",
			"img",
			"input",
			"keygen",
			"link",
			"menuitem",
			"meta",
			"param",
			"source",
			"track",
			"wbr",
			"!doctype",
			"?xml",
			"basefont",
			"isindex"
		]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", ["pre", "textarea"]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", [
			"normal",
			"keep",
			"separate"
		]);
	}
	r.prototype = new n(), t.exports.Options = r;
})), S = /* @__PURE__ */ t(((e, t) => {
	var n = f().Tokenizer, r = f().TOKEN, i = p().Directives, a = m().TemplatablePattern, o = u().Pattern, s = {
		TAG_OPEN: "TK_TAG_OPEN",
		TAG_CLOSE: "TK_TAG_CLOSE",
		CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
		CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
		ATTRIBUTE: "TK_ATTRIBUTE",
		EQUALS: "TK_EQUALS",
		VALUE: "TK_VALUE",
		COMMENT: "TK_COMMENT",
		TEXT: "TK_TEXT",
		UNKNOWN: "TK_UNKNOWN",
		START: r.START,
		RAW: r.RAW,
		EOF: r.EOF
	}, c = new i(/<\!--/, /-->/), l = function(e, t) {
		n.call(this, e, t), this._current_tag_name = "";
		var r = new a(this._input).read_options(this._options), i = new o(this._input);
		if (this.__patterns = {
			word: r.until(/[\n\r\t <]/),
			word_control_flow_close_excluded: r.until(/[\n\r\t <}]/),
			single_quote: r.until_after(/'/),
			double_quote: r.until_after(/"/),
			attribute: r.until(/[\n\r\t =>]|\/>/),
			element_name: r.until(/[\n\r\t >\/]/),
			angular_control_flow_start: i.matching(/\@[a-zA-Z]+[^({]*[({]/),
			handlebars_comment: i.starting_with(/{{!--/).until_after(/--}}/),
			handlebars: i.starting_with(/{{/).until_after(/}}/),
			handlebars_open: i.until(/[\n\r\t }]/),
			handlebars_raw_close: i.until(/}}/),
			comment: i.starting_with(/<!--/).until_after(/-->/),
			cdata: i.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
			conditional_comment: i.starting_with(/<!\[/).until_after(/]>/),
			processing: i.starting_with(/<\?/).until_after(/\?>/)
		}, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
			var s = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
			this.__patterns.unformatted_content_delimiter = i.matching(s).until_after(s);
		}
	};
	l.prototype = new n(), l.prototype._is_comment = function(e) {
		return !1;
	}, l.prototype._is_opening = function(e) {
		return e.type === s.TAG_OPEN || e.type === s.CONTROL_FLOW_OPEN;
	}, l.prototype._is_closing = function(e, t) {
		return e.type === s.TAG_CLOSE && t && ((e.text === ">" || e.text === "/>") && t.text[0] === "<" || e.text === "}}" && t.text[0] === "{" && t.text[1] === "{") || e.type === s.CONTROL_FLOW_CLOSE && e.text === "}" && t.text.endsWith("{");
	}, l.prototype._reset = function() {
		this._current_tag_name = "";
	}, l.prototype._get_next_token = function(e, t) {
		var n = null;
		this._readWhitespace();
		var r = this._input.peek();
		return r === null ? this._create_token(s.EOF, "") : (n ||= this._read_open_handlebars(r, t), n ||= this._read_attribute(r, e, t), n ||= this._read_close(r, t), n ||= this._read_script_and_style(r, e), n ||= this._read_control_flows(r, t), n ||= this._read_raw_content(r, e, t), n ||= this._read_content_word(r, t), n ||= this._read_comment_or_cdata(r), n ||= this._read_processing(r), n ||= this._read_open(r, t), n ||= this._create_token(s.UNKNOWN, this._input.next()), n);
	}, l.prototype._read_comment_or_cdata = function(e) {
		var t = null, n = null, r = null;
		return e === "<" && (this._input.peek(1) === "!" && (n = this.__patterns.comment.read(), n ? (r = c.get_directives(n), r && r.ignore === "start" && (n += c.readIgnored(this._input))) : n = this.__patterns.cdata.read()), n && (t = this._create_token(s.COMMENT, n), t.directives = r)), t;
	}, l.prototype._read_processing = function(e) {
		var t = null, n = null, r = null;
		if (e === "<") {
			var i = this._input.peek(1);
			(i === "!" || i === "?") && (n = this.__patterns.conditional_comment.read(), n ||= this.__patterns.processing.read()), n && (t = this._create_token(s.COMMENT, n), t.directives = r);
		}
		return t;
	}, l.prototype._read_open = function(e, t) {
		var n = null, r = null;
		return (!t || t.type === s.CONTROL_FLOW_OPEN) && e === "<" && (n = this._input.next(), this._input.peek() === "/" && (n += this._input.next()), n += this.__patterns.element_name.read(), r = this._create_token(s.TAG_OPEN, n)), r;
	}, l.prototype._read_open_handlebars = function(e, t) {
		var n = null, r = null;
		return (!t || t.type === s.CONTROL_FLOW_OPEN) && (this._options.templating.includes("angular") || this._options.indent_handlebars) && e === "{" && this._input.peek(1) === "{" && (this._options.indent_handlebars && this._input.peek(2) === "!" ? (n = this.__patterns.handlebars_comment.read(), n ||= this.__patterns.handlebars.read(), r = this._create_token(s.COMMENT, n)) : (n = this.__patterns.handlebars_open.read(), r = this._create_token(s.TAG_OPEN, n))), r;
	}, l.prototype._read_control_flows = function(e, t) {
		var n = "", r = null;
		if (!this._options.templating.includes("angular")) return r;
		if (e === "@") {
			if (n = this.__patterns.angular_control_flow_start.read(), n === "") return r;
			for (var i = +!!n.endsWith("("), a = 0; !(n.endsWith("{") && i === a);) {
				var o = this._input.next();
				if (o === null) break;
				o === "(" ? i++ : o === ")" && a++, n += o;
			}
			r = this._create_token(s.CONTROL_FLOW_OPEN, n);
		} else e === "}" && t && t.type === s.CONTROL_FLOW_OPEN && (n = this._input.next(), r = this._create_token(s.CONTROL_FLOW_CLOSE, n));
		return r;
	}, l.prototype._read_close = function(e, t) {
		var n = null, r = null;
		return t && t.type === s.TAG_OPEN && (t.text[0] === "<" && (e === ">" || e === "/" && this._input.peek(1) === ">") ? (n = this._input.next(), e === "/" && (n += this._input.next()), r = this._create_token(s.TAG_CLOSE, n)) : t.text[0] === "{" && e === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), r = this._create_token(s.TAG_CLOSE, "}}"))), r;
	}, l.prototype._read_attribute = function(e, t, n) {
		var r = null, i = "";
		if (n && n.text[0] === "<") if (e === "=") r = this._create_token(s.EQUALS, this._input.next());
		else if (e === "\"" || e === "'") {
			var a = this._input.next();
			e === "\"" ? a += this.__patterns.double_quote.read() : a += this.__patterns.single_quote.read(), r = this._create_token(s.VALUE, a);
		} else i = this.__patterns.attribute.read(), i && (r = t.type === s.EQUALS ? this._create_token(s.VALUE, i) : this._create_token(s.ATTRIBUTE, i));
		return r;
	}, l.prototype._is_content_unformatted = function(e) {
		return this._options.void_elements.indexOf(e) === -1 && (this._options.content_unformatted.indexOf(e) !== -1 || this._options.unformatted.indexOf(e) !== -1);
	}, l.prototype._read_raw_content = function(e, t, n) {
		var r = "";
		if (n && n.text[0] === "{") r = this.__patterns.handlebars_raw_close.read();
		else if (t.type === s.TAG_CLOSE && t.opened.text[0] === "<" && t.text[0] !== "/") {
			var i = t.opened.text.substr(1).toLowerCase();
			this._is_content_unformatted(i) && (r = this._input.readUntil(RegExp("</" + i + "[\\n\\r\\t ]*?>", "ig")));
		}
		return r ? this._create_token(s.TEXT, r) : null;
	}, l.prototype._read_script_and_style = function(e, t) {
		if (t.type === s.TAG_CLOSE && t.opened.text[0] === "<" && t.text[0] !== "/") {
			var n = t.opened.text.substr(1).toLowerCase();
			if (n === "script" || n === "style") {
				var r = this._read_comment_or_cdata(e);
				if (r) return r.type = s.TEXT, r;
				var i = this._input.readUntil(RegExp("</" + n + "[\\n\\r\\t ]*?>", "ig"));
				if (i) return this._create_token(s.TEXT, i);
			}
		}
		return null;
	}, l.prototype._read_content_word = function(e, t) {
		var n = "";
		return this._options.unformatted_content_delimiter && e === this._options.unformatted_content_delimiter[0] && (n = this.__patterns.unformatted_content_delimiter.read()), n ||= t && t.type === s.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read(), n ? this._create_token(s.TEXT, n) : null;
	}, t.exports.Tokenizer = l, t.exports.TOKEN = s;
})), C = /* @__PURE__ */ t(((e, t) => {
	var n = x().Options, i = r().Output, a = S().Tokenizer, o = S().TOKEN, s = /\r\n|[\r\n]/, c = /\r\n|[\r\n]/g, l = function(e, t) {
		this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = e.max_preserve_newlines, this.preserve_newlines = e.preserve_newlines, this._output = new i(e, t);
	};
	l.prototype.current_line_has_match = function(e) {
		return this._output.current_line.has_match(e);
	}, l.prototype.set_space_before_token = function(e, t) {
		this._output.space_before_token = e, this._output.non_breaking_space = t;
	}, l.prototype.set_wrap_point = function() {
		this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
	}, l.prototype.add_raw_token = function(e) {
		this._output.add_raw_token(e);
	}, l.prototype.print_preserved_newlines = function(e) {
		var t = 0;
		e.type !== o.TEXT && e.previous.type !== o.TEXT && (t = +!!e.newlines), this.preserve_newlines && (t = e.newlines < this.max_preserve_newlines + 1 ? e.newlines : this.max_preserve_newlines + 1);
		for (var n = 0; n < t; n++) this.print_newline(n > 0);
		return t !== 0;
	}, l.prototype.traverse_whitespace = function(e) {
		return e.whitespace_before || e.newlines ? (this.print_preserved_newlines(e) || (this._output.space_before_token = !0), !0) : !1;
	}, l.prototype.previous_token_wrapped = function() {
		return this._output.previous_token_wrapped;
	}, l.prototype.print_newline = function(e) {
		this._output.add_new_line(e);
	}, l.prototype.print_token = function(e) {
		e.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(e.text));
	}, l.prototype.indent = function() {
		this.indent_level++;
	}, l.prototype.deindent = function() {
		this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
	}, l.prototype.get_full_indent = function(e) {
		return e = this.indent_level + (e || 0), e < 1 ? "" : this._output.get_indent_string(e);
	};
	var u = function(e) {
		for (var t = null, n = e.next; n.type !== o.EOF && e.closed !== n;) {
			if (n.type === o.ATTRIBUTE && n.text === "type") {
				n.next && n.next.type === o.EQUALS && n.next.next && n.next.next.type === o.VALUE && (t = n.next.next.text);
				break;
			}
			n = n.next;
		}
		return t;
	}, d = function(e, t) {
		var n = null, r = null;
		return t.closed ? (e === "script" ? n = "text/javascript" : e === "style" && (n = "text/css"), n = u(t) || n, n.search("text/css") > -1 ? r = "css" : n.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? r = "javascript" : n.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? r = "html" : n.search(/test\/null/) > -1 && (r = "null"), r) : null;
	};
	function f(e, t) {
		return t.indexOf(e) !== -1;
	}
	function p(e, t, n) {
		this.parent = e || null, this.tag = t ? t.tag_name : "", this.indent_level = n || 0, this.parser_token = t || null;
	}
	function m(e) {
		this._printer = e, this._current_frame = null;
	}
	m.prototype.get_parser_token = function() {
		return this._current_frame ? this._current_frame.parser_token : null;
	}, m.prototype.record_tag = function(e) {
		this._current_frame = new p(this._current_frame, e, this._printer.indent_level);
	}, m.prototype._try_pop_frame = function(e) {
		var t = null;
		return e && (t = e.parser_token, this._printer.indent_level = e.indent_level, this._current_frame = e.parent), t;
	}, m.prototype._get_frame = function(e, t) {
		for (var n = this._current_frame; n && e.indexOf(n.tag) === -1;) {
			if (t && t.indexOf(n.tag) !== -1) {
				n = null;
				break;
			}
			n = n.parent;
		}
		return n;
	}, m.prototype.try_pop = function(e, t) {
		var n = this._get_frame([e], t);
		return this._try_pop_frame(n);
	}, m.prototype.indent_to_tag = function(e) {
		var t = this._get_frame(e);
		t && (this._printer.indent_level = t.indent_level);
	};
	function h(e, t, r, i) {
		this._source_text = e || "", t ||= {}, this._js_beautify = r, this._css_beautify = i, this._tag_stack = null, this._options = new n(t, "html"), this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
	}
	h.prototype.beautify = function() {
		if (this._options.disabled) return this._source_text;
		var e = this._source_text, t = this._options.eol;
		this._options.eol === "auto" && (t = "\n", e && s.test(e) && (t = e.match(s)[0])), e = e.replace(c, "\n");
		var n = e.match(/^[\t ]*/)[0], r = {
			text: "",
			type: ""
		}, i = new g(this._options), u = new l(this._options, n), d = new a(e, this._options).tokenize();
		this._tag_stack = new m(u);
		for (var f = null, p = d.next(); p.type !== o.EOF;) p.type === o.TAG_OPEN || p.type === o.COMMENT ? (f = this._handle_tag_open(u, p, i, r, d), i = f) : p.type === o.ATTRIBUTE || p.type === o.EQUALS || p.type === o.VALUE || p.type === o.TEXT && !i.tag_complete ? f = this._handle_inside_tag(u, p, i, r) : p.type === o.TAG_CLOSE ? f = this._handle_tag_close(u, p, i) : p.type === o.TEXT ? f = this._handle_text(u, p, i) : p.type === o.CONTROL_FLOW_OPEN ? f = this._handle_control_flow_open(u, p) : p.type === o.CONTROL_FLOW_CLOSE ? f = this._handle_control_flow_close(u, p) : u.add_raw_token(p), r = f, p = d.next();
		return u._output.get_code(t);
	}, h.prototype._handle_control_flow_open = function(e, t) {
		var n = {
			text: t.text,
			type: t.type
		};
		return e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0), t.newlines ? e.print_preserved_newlines(t) : e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0), e.print_token(t), e.indent(), n;
	}, h.prototype._handle_control_flow_close = function(e, t) {
		var n = {
			text: t.text,
			type: t.type
		};
		return e.deindent(), t.newlines ? e.print_preserved_newlines(t) : e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0), e.print_token(t), n;
	}, h.prototype._handle_tag_close = function(e, t, n) {
		var r = {
			text: t.text,
			type: t.type
		};
		return e.alignment_size = 0, n.tag_complete = !0, e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0), n.is_unformatted ? e.add_raw_token(t) : (n.tag_start_char === "<" && (e.set_space_before_token(t.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && n.has_wrapped_attrs && e.print_newline(!1)), e.print_token(t)), n.indent_content && !(n.is_unformatted || n.is_content_unformatted) && (e.indent(), n.indent_content = !1), !n.is_inline_element && !(n.is_unformatted || n.is_content_unformatted) && e.set_wrap_point(), r;
	}, h.prototype._handle_inside_tag = function(e, t, n, r) {
		var i = n.has_wrapped_attrs, a = {
			text: t.text,
			type: t.type
		};
		return e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0), n.is_unformatted ? e.add_raw_token(t) : n.tag_start_char === "{" && t.type === o.TEXT ? e.print_preserved_newlines(t) ? (t.newlines = 0, e.add_raw_token(t)) : e.print_token(t) : (t.type === o.ATTRIBUTE ? e.set_space_before_token(!0) : (t.type === o.EQUALS || t.type === o.VALUE && t.previous.type === o.EQUALS) && e.set_space_before_token(!1), t.type === o.ATTRIBUTE && n.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (e.traverse_whitespace(t), i ||= t.newlines !== 0), this._is_wrap_attributes_force && n.attr_count >= this._options.wrap_attributes_min_attrs && (r.type !== o.TAG_OPEN || this._is_wrap_attributes_force_expand_multiline) && (e.print_newline(!1), i = !0)), e.print_token(t), i ||= e.previous_token_wrapped(), n.has_wrapped_attrs = i), a;
	}, h.prototype._handle_text = function(e, t, n) {
		var r = {
			text: t.text,
			type: "TK_CONTENT"
		};
		return n.custom_beautifier_name ? this._print_custom_beatifier_text(e, t, n) : n.is_unformatted || n.is_content_unformatted ? e.add_raw_token(t) : (e.traverse_whitespace(t), e.print_token(t)), r;
	}, h.prototype._print_custom_beatifier_text = function(e, t, n) {
		var r = this;
		if (t.text !== "") {
			var i = t.text, a, o = 1, s = "", c = "";
			n.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? a = this._js_beautify : n.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? a = this._css_beautify : n.custom_beautifier_name === "html" && (a = function(e, t) {
				return new h(e, t, r._js_beautify, r._css_beautify).beautify();
			}), this._options.indent_scripts === "keep" ? o = 0 : this._options.indent_scripts === "separate" && (o = -e.indent_level);
			var l = e.get_full_indent(o);
			if (i = i.replace(/\n[ \t]*$/, ""), n.custom_beautifier_name !== "html" && i[0] === "<" && i.match(/^(<!--|<!\[CDATA\[)/)) {
				var u = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(i);
				if (!u) {
					e.add_raw_token(t);
					return;
				}
				s = l + u[1] + "\n", i = u[4], u[5] && (c = l + u[5]), i = i.replace(/\n[ \t]*$/, ""), (u[2] || u[3].indexOf("\n") !== -1) && (u = u[3].match(/[ \t]+$/), u && (t.whitespace_before = u[0]));
			}
			if (i) if (a) {
				var d = function() {
					this.eol = "\n";
				};
				d.prototype = this._options.raw_options;
				var f = new d();
				i = a(l + i, f);
			} else {
				var p = t.whitespace_before;
				p && (i = i.replace(RegExp("\n(" + p + ")?", "g"), "\n")), i = l + i.replace(/\n/g, "\n" + l);
			}
			s && (i = i ? s + i + "\n" + c : s + c), e.print_newline(!1), i && (t.text = i, t.whitespace_before = "", t.newlines = 0, e.add_raw_token(t), e.print_newline(!0));
		}
	}, h.prototype._handle_tag_open = function(e, t, n, r, i) {
		var a = this._get_tag_open_token(t);
		if ((n.is_unformatted || n.is_content_unformatted) && !n.is_empty_element && t.type === o.TAG_OPEN && !a.is_start_tag ? (e.add_raw_token(t), a.start_tag_token = this._tag_stack.try_pop(a.tag_name)) : (e.traverse_whitespace(t), this._set_tag_position(e, t, a, n, r), a.is_inline_element || e.set_wrap_point(), e.print_token(t)), a.is_start_tag && this._is_wrap_attributes_force) {
			var s = 0, c;
			do
				c = i.peek(s), c.type === o.ATTRIBUTE && (a.attr_count += 1), s += 1;
			while (c.type !== o.EOF && c.type !== o.TAG_CLOSE);
		}
		return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (a.alignment_size = t.text.length + 1), !a.tag_complete && !a.is_unformatted && (e.alignment_size = a.alignment_size), a;
	};
	var g = function(e, t, n) {
		if (this.parent = t || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !n) this.tag_complete = !0;
		else {
			var r;
			this.tag_start_char = n.text[0], this.text = n.text, this.tag_start_char === "<" ? (r = n.text.match(/^<([^\s>]*)/), this.tag_check = r ? r[1] : "") : (r = n.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = r ? r[1] : "", (n.text.startsWith("{{#>") || n.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && n.next !== null ? this.tag_check = n.next.text.split(" ")[0] : this.tag_check = n.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), n.type === o.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || n.closed && n.closed.text === "/>";
			var i = 2;
			this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (i = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (!e.indent_handlebars || this.text.length < 3 || /[^#\^]/.test(this.text.charAt(i)));
		}
	};
	h.prototype._get_tag_open_token = function(e) {
		var t = new g(this._options, this._tag_stack.get_parser_token(), e);
		return t.alignment_size = this._options.wrap_attributes_indent_size, t.is_end_tag = t.is_end_tag || f(t.tag_check, this._options.void_elements), t.is_empty_element = t.tag_complete || t.is_start_tag && t.is_end_tag, t.is_unformatted = !t.tag_complete && f(t.tag_check, this._options.unformatted), t.is_content_unformatted = !t.is_empty_element && f(t.tag_check, this._options.content_unformatted), t.is_inline_element = f(t.tag_name, this._options.inline) || this._options.inline_custom_elements && t.tag_name.includes("-") || t.tag_start_char === "{", t;
	}, h.prototype._set_tag_position = function(e, t, n, r, i) {
		if (n.is_empty_element || (n.is_end_tag ? n.start_tag_token = this._tag_stack.try_pop(n.tag_name) : (this._do_optional_end_element(n) && (n.is_inline_element || e.print_newline(!1)), this._tag_stack.record_tag(n), (n.tag_name === "script" || n.tag_name === "style") && !(n.is_unformatted || n.is_content_unformatted) && (n.custom_beautifier_name = d(n.tag_check, t)))), f(n.tag_check, this._options.extra_liners) && (e.print_newline(!1), e._output.just_added_blankline() || e.print_newline(!0)), n.is_empty_element) n.tag_start_char === "{" && n.tag_check === "else" && (this._tag_stack.indent_to_tag([
			"if",
			"unless",
			"each"
		]), n.indent_content = !0, e.current_line_has_match(/{{#if/) || e.print_newline(!1)), n.tag_name === "!--" && i.type === o.TAG_CLOSE && r.is_end_tag && n.text.indexOf("\n") === -1 || (n.is_inline_element || n.is_unformatted || e.print_newline(!1), this._calcluate_parent_multiline(e, n));
		else if (n.is_end_tag) {
			var a = !1;
			a = n.start_tag_token && n.start_tag_token.multiline_content, a ||= !n.is_inline_element && !(r.is_inline_element || r.is_unformatted) && !(i.type === o.TAG_CLOSE && n.start_tag_token === r) && i.type !== "TK_CONTENT", (n.is_content_unformatted || n.is_unformatted) && (a = !1), a && e.print_newline(!1);
		} else n.indent_content = !n.custom_beautifier_name, n.tag_start_char === "<" && (n.tag_name === "html" ? n.indent_content = this._options.indent_inner_html : n.tag_name === "head" ? n.indent_content = this._options.indent_head_inner_html : n.tag_name === "body" && (n.indent_content = this._options.indent_body_inner_html)), !(n.is_inline_element || n.is_unformatted) && (i.type !== "TK_CONTENT" || n.is_content_unformatted) && e.print_newline(!1), this._calcluate_parent_multiline(e, n);
	}, h.prototype._calcluate_parent_multiline = function(e, t) {
		t.parent && e._output.just_added_newline() && !((t.is_inline_element || t.is_unformatted) && t.parent.is_inline_element) && (t.parent.multiline_content = !0);
	};
	var _ = /* @__PURE__ */ "address.article.aside.blockquote.details.div.dl.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hr.main.menu.nav.ol.p.pre.section.table.ul".split("."), v = [
		"a",
		"audio",
		"del",
		"ins",
		"map",
		"noscript",
		"video"
	];
	h.prototype._do_optional_end_element = function(e) {
		var t = null;
		if (!(e.is_empty_element || !e.is_start_tag || !e.parent)) {
			if (e.tag_name === "body") t ||= this._tag_stack.try_pop("head");
			else if (e.tag_name === "li") t ||= this._tag_stack.try_pop("li", [
				"ol",
				"ul",
				"menu"
			]);
			else if (e.tag_name === "dd" || e.tag_name === "dt") t ||= this._tag_stack.try_pop("dt", ["dl"]), t ||= this._tag_stack.try_pop("dd", ["dl"]);
			else if (e.parent.tag_name === "p" && _.indexOf(e.tag_name) !== -1) {
				var n = e.parent.parent;
				(!n || v.indexOf(n.tag_name) === -1) && (t ||= this._tag_stack.try_pop("p"));
			} else e.tag_name === "rp" || e.tag_name === "rt" ? (t ||= this._tag_stack.try_pop("rt", ["ruby", "rtc"]), t ||= this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : e.tag_name === "optgroup" ? t ||= this._tag_stack.try_pop("optgroup", ["select"]) : e.tag_name === "option" ? t ||= this._tag_stack.try_pop("option", [
				"select",
				"datalist",
				"optgroup"
			]) : e.tag_name === "colgroup" ? t ||= this._tag_stack.try_pop("caption", ["table"]) : e.tag_name === "thead" ? (t ||= this._tag_stack.try_pop("caption", ["table"]), t ||= this._tag_stack.try_pop("colgroup", ["table"])) : e.tag_name === "tbody" || e.tag_name === "tfoot" ? (t ||= this._tag_stack.try_pop("caption", ["table"]), t ||= this._tag_stack.try_pop("colgroup", ["table"]), t ||= this._tag_stack.try_pop("thead", ["table"]), t ||= this._tag_stack.try_pop("tbody", ["table"])) : e.tag_name === "tr" ? (t ||= this._tag_stack.try_pop("caption", ["table"]), t ||= this._tag_stack.try_pop("colgroup", ["table"]), t ||= this._tag_stack.try_pop("tr", [
				"table",
				"thead",
				"tbody",
				"tfoot"
			])) : (e.tag_name === "th" || e.tag_name === "td") && (t ||= this._tag_stack.try_pop("td", [
				"table",
				"thead",
				"tbody",
				"tfoot",
				"tr"
			]), t ||= this._tag_stack.try_pop("th", [
				"table",
				"thead",
				"tbody",
				"tfoot",
				"tr"
			]));
			return e.parent = this._tag_stack.get_parser_token(), t;
		}
	}, t.exports.Beautifier = h;
})), w = /* @__PURE__ */ t(((e, t) => {
	var n = C().Beautifier, r = x().Options;
	function i(e, t, r, i) {
		return new n(e, t, r, i).beautify();
	}
	t.exports = i, t.exports.defaultOptions = function() {
		return new r();
	};
})), T = /* @__PURE__ */ t(((e, t) => {
	var n = _(), r = b(), i = w();
	function a(e, t, a, o) {
		return a ||= n, o ||= r, i(e, t, a, o);
	}
	a.defaultOptions = i.defaultOptions, t.exports.js = n, t.exports.css = r, t.exports.html = a;
})), E = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	function n(e, t, n) {
		var r = function(t, n) {
			return e.js_beautify(t, n);
		};
		return r.js = e.js_beautify, r.css = t.css_beautify, r.html = n.html_beautify, r.js_beautify = e.js_beautify, r.css_beautify = t.css_beautify, r.html_beautify = n.html_beautify, r;
	}
	typeof define == "function" && define.amd ? define([
		"./lib/beautify",
		"./lib/beautify-css",
		"./lib/beautify-html"
	], function(e, t, r) {
		return n(e, t, r);
	}) : (function(e) {
		var t = T();
		t.js_beautify = t.js, t.css_beautify = t.css, t.html_beautify = t.html, e.exports = n(t, t, t);
	})(t);
})))(), 1);
function D(e) {
	return Function("return " + e)();
}
function O(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		if (e === null) return "null";
		if (e === void 0) return "undefined";
		if (typeof e == "string") return `"${e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t")}"`;
		if (typeof e != "object") return String(e);
		if (t.has(e)) return "\"[Circular]\"";
		if (t.add(e), Array.isArray(e)) return `[${e.map((e) => n(e)).join(",")}]`;
		let r = Object.keys(e), i = [];
		for (let t of r) {
			let r = e[t], a = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(t) ? t : `"${t}"`;
			i.push(`${a}:${n(r)}`);
		}
		return `{${i.join(",")}}`;
	}
	return n(e);
}
function k(e, t, n = "opt=") {
	return t ? (0, E.default)(`${n}${O(e)}`, {
		indent_size: 2,
		brace_style: "expand"
	}) : O(e);
}
function A(e) {
	return D(e);
}
function j(e) {
	try {
		return JSON.parse(e || "{}");
	} catch {
		return {};
	}
}
function M(e, t) {
	return t ? JSON.stringify(e, null, 2) : JSON.stringify(e);
}
var N = ({ content: e, id: t, type: n }) => {
	n ||= "javascript", t ||= "editJson";
	let r = ace.edit(t);
	return r.setOptions({
		enableBasicAutocompletion: !0,
		enableSnippets: !0,
		enableLiveAutocompletion: !0
	}), r.setFontSize(14), r.setShowPrintMargin(!1), r.session.setMode("ace/mode/" + n), r.setTheme("ace/theme/tomorrow_night"), r.setValue(e), r;
}, P = (e) => typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e, F = (e) => D(O(e));
//#endregion
export { k as a, n as c, P as i, F as n, j as o, M as r, A as s, N as t };
