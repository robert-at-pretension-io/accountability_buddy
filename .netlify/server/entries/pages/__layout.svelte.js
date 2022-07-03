var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#header.svelte-xomdla{background:#333;color:#fff;padding:20px;text-align:center}")();
const css = {
  code: "#header.svelte-xomdla{background:#333;color:#fff;padding:20px;text-align:center}",
  map: null
};
const _layout = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = null;
  $$result.css.add(css);
  return `


<div id="${"page"}"><body><div id="${"header"}" class="${"svelte-xomdla"}">
			${`
				<form><span><input type="${"email"}" placeholder="${"Email"}" name="${"email"}"${(0, import_index_6b489d84.a)("value", email, 0)}>
						<input type="${"password"}" placeholder="${"Password"}" name="${"password"}"${(0, import_index_6b489d84.a)("value", password, 0)}>
						<button type="${"submit"}" id="${"login"}">Login</button></span></form>`}</div>

        
		${``}

		<div id="${"footer"}"><p>\xA9 Accountability Buddy 2022</p></div></body>
</div>`;
});
