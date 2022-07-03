var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var import_Chatlog_svelte = __toESM(require("./Chatlog.svelte.js"));
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".iphone-text.svelte-1n4zrv0{width:95%;height:100px;border:1px solid black;border-radius:5px;padding:10px;font-size:20px;font-family:'Roboto', sans-serif;background-color:#f5f5f5;resize:none}")();
const css = {
  code: ".iphone-text.svelte-1n4zrv0{width:95%;height:100px;border:1px solid black;border-radius:5px;padding:10px;font-size:20px;font-family:'Roboto', sans-serif;background-color:#f5f5f5;resize:none}",
  map: null
};
const Routes = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let dialogue = [
    "Hey! I'm a automated assistant whose sole purpose is to make your life easier! Just describe your problem and I'll do my best to help you. Once we both figure out the best way to help you, I will keep you accountable by sending you reminders to keep to the plan we figure out!",
    "How can you help me?",
    "Just start by telling me about your problem! \u{1F61C}"
  ];
  $$result.css.add(css);
  return `




${(0, import_index_6b489d84.v)(import_Chatlog_svelte.default, "Chatlog").$$render($$result, { dialogue }, {}, {})}




<textarea class="${"iphone-text svelte-1n4zrv0"}">${""}</textarea>
<button>Submit</button>`;
});
