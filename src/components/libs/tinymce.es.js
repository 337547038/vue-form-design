/*!
* ak-design - 版权所有
* 版本: v4.0.0
* 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
* 友情价：90元
* 创建时间: 2026-6
*/
import { a as e, t } from "./api-DMmHgXj9.js";
import { computed as n, createElementBlock as r, defineComponent as i, mergeModels as a, onMounted as o, onUnmounted as s, openBlock as c, useModel as l, vModelText as u, withDirectives as d } from "vue";
//#region src/components/form/widgets/tinymce.vue?vue&type=script&setup=true&lang.ts
var f = "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount autosave ", p = "fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor table image | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | media charmap emoticons pagebreak insertdatetime print preview | code selectall searchreplace visualblocks | indent2em lineheight formatpainter axupimgs", m = "undo cut copy paste pastetext |forecolor backcolor bold italic underline strikethrough|alignleft aligncenter alignright alignjustify|", h = /* @__PURE__ */ i({
	__name: "tinymce",
	props: /* @__PURE__ */ a({
		modelValue: { default: "" },
		placeholder: { default: "请输入内容" },
		width: { default: "100%" },
		height: { default: "300px" },
		blobUrl: { default: "" },
		imgUrl: { default: "" },
		style: { default: "" }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(i) {
		let a = i, h = l(i, "modelValue"), g = {
			selector: "#myTextarea",
			cleanup: !0,
			language: "zh_CN",
			fontsize_formats: "12px 14px 16px 18px 20px 22px 24px 28px 32px 36px",
			lineheight_formats: "0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5",
			branding: !1,
			resize: !1,
			elementpath: !1,
			height: a.height,
			width: a.width,
			placeholder: a.placeholder,
			init_instance_callback: (e) => {
				e.on("NodeChange Change KeyUp SetContent", () => {
					h.value = e.getContent();
				});
			}
		}, _ = {
			plugins: f,
			toolbar: p,
			menubar: !0,
			font_formats: "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;",
			content_css: !1,
			paste_data_images: !0,
			urlconverter_callback: (e, t) => (t === "img" && e.startsWith("blob:") && tinymce.activeEditor && tinymce.activeEditor.uploadImages(), e),
			images_upload_handler: (e, n) => new Promise((n, r) => {
				let i = new FormData();
				i.append("file", e.blob()), a.imgUrl, t("upload", i, {}).then((e) => {
					e.code === 1 ? n(e.data) : r("上传失败");
				}).catch(() => {
					r("上传出错，示例暂不提供上传接口");
				});
			}),
			file_picker_types: "file image media",
			file_picker_callback: (n, r, i) => {
				let o = document.createElement("input");
				o.setAttribute("type", "file"), o.setAttribute("accept", ".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4"), o.click(), o.onchange = () => {
					let r = o?.files && o.files[0], s = {};
					i.filetype === "file" && (s = { text: r?.name }), i.filetype === "image" && (s = { alt: r?.name }), i.filetype;
					let c = new FormData();
					c.append("file", r);
					let l = "upload";
					a.blobUrl && (l = a.blobUrl), t(l, c).then((t) => {
						t.code === 1 ? n(t.data, s) : e.error(t?.message);
					}).catch((t) => {
						e.error(t.message);
					});
				};
			}
		}, v = {
			plugins: "",
			toolbar: m,
			menubar: !1,
			font_formats: "",
			paste_data_images: !1
		}, y = n(() => {
			let e = a.style === "simple" ? v : _;
			return Object.assign(g, e);
		});
		return o(() => {
			tinymce.init(y.value);
		}), s(() => {
			tinymce.remove();
		}), (e, t) => d((c(), r("textarea", {
			id: "myTextarea",
			"onUpdate:modelValue": t[0] ||= (e) => h.value = e
		}, null, 512)), [[u, h.value]]);
	}
});
//#endregion
export { h as default };
