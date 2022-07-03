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
  default: () => Chatlog
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var Chatlog_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.imessage.svelte-1mlhr9r.svelte-1mlhr9r{background-color:#fff;border:1px solid #e5e5ea;border-radius:0.25rem;display:flex;flex-direction:column;font-family:"SanFrancisco";font-size:1.25rem;margin:0 auto 1rem;max-width:600px;padding:0.5rem 1.5rem}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r{border-radius:1.15rem;line-height:1.25;max-width:75%;padding:0.5rem 0.875rem;position:relative;word-wrap:break-word}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r::before,.imessage.svelte-1mlhr9r p.svelte-1mlhr9r::after{bottom:-0.1rem;content:"";height:1rem;position:absolute}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r{align-self:flex-end;background-color:#248bf5;color:#fff}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r::before{border-bottom-left-radius:0.8rem 0.7rem;border-right:1rem solid #248bf5;right:-0.35rem;transform:translate(0, -0.1rem)}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r::after{background-color:#fff;border-bottom-left-radius:0.5rem;right:-40px;transform:translate(-30px, -2px);width:10px}p[class^="from-"].svelte-1mlhr9r.svelte-1mlhr9r{margin:0.5rem 0;width:fit-content}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r{margin:0.25rem 0 0}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r:not(:last-child){margin:0.25rem 0 0}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r:last-child{margin-bottom:0.5rem}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r{align-items:flex-start;background-color:#e5e5ea;color:#000}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r:before{border-bottom-right-radius:0.8rem 0.7rem;border-left:1rem solid #e5e5ea;left:-0.35rem;transform:translate(0, -0.1rem)}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r::after{background-color:#fff;border-bottom-right-radius:0.5rem;left:20px;transform:translate(-30px, -2px);width:10px}@font-face{font-family:"SanFrancisco";src:url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff2") format("woff2"), url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff") format("woff")}@media screen and (max-width: 800px){.imessage.svelte-1mlhr9r.svelte-1mlhr9r{font-size:1.05rem;margin:0 auto 1rem;max-width:600px;padding:0.25rem 0.875rem}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r{margin:0.5rem 0}}')();
const css = {
  code: '.imessage.svelte-1mlhr9r.svelte-1mlhr9r{background-color:#fff;border:1px solid #e5e5ea;border-radius:0.25rem;display:flex;flex-direction:column;font-family:"SanFrancisco";font-size:1.25rem;margin:0 auto 1rem;max-width:600px;padding:0.5rem 1.5rem}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r{border-radius:1.15rem;line-height:1.25;max-width:75%;padding:0.5rem 0.875rem;position:relative;word-wrap:break-word}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r::before,.imessage.svelte-1mlhr9r p.svelte-1mlhr9r::after{bottom:-0.1rem;content:"";height:1rem;position:absolute}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r{align-self:flex-end;background-color:#248bf5;color:#fff}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r::before{border-bottom-left-radius:0.8rem 0.7rem;border-right:1rem solid #248bf5;right:-0.35rem;transform:translate(0, -0.1rem)}p.from-me.svelte-1mlhr9r.svelte-1mlhr9r::after{background-color:#fff;border-bottom-left-radius:0.5rem;right:-40px;transform:translate(-30px, -2px);width:10px}p[class^="from-"].svelte-1mlhr9r.svelte-1mlhr9r{margin:0.5rem 0;width:fit-content}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r{margin:0.25rem 0 0}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r:not(:last-child){margin:0.25rem 0 0}p.from-me.svelte-1mlhr9r~p.from-me.svelte-1mlhr9r:last-child{margin-bottom:0.5rem}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r{align-items:flex-start;background-color:#e5e5ea;color:#000}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r:before{border-bottom-right-radius:0.8rem 0.7rem;border-left:1rem solid #e5e5ea;left:-0.35rem;transform:translate(0, -0.1rem)}p.from-them.svelte-1mlhr9r.svelte-1mlhr9r::after{background-color:#fff;border-bottom-right-radius:0.5rem;left:20px;transform:translate(-30px, -2px);width:10px}@font-face{font-family:"SanFrancisco";src:url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff2") format("woff2"), url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff") format("woff")}@media screen and (max-width: 800px){.imessage.svelte-1mlhr9r.svelte-1mlhr9r{font-size:1.05rem;margin:0 auto 1rem;max-width:600px;padding:0.25rem 0.875rem}.imessage.svelte-1mlhr9r p.svelte-1mlhr9r{margin:0.5rem 0}}',
  map: null
};
const Chatlog = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { dialogue } = $$props;
  if ($$props.dialogue === void 0 && $$bindings.dialogue && dialogue !== void 0)
    $$bindings.dialogue(dialogue);
  $$result.css.add(css);
  return `

    <div class="${"imessage svelte-1mlhr9r"}">${(0, import_index_6b489d84.b)(dialogue, (entry, index) => {
    return `<p class="${(0, import_index_6b489d84.e)((0, import_index_6b489d84.n)(index % 2 == 0 ? "from-them" : "from-me")) + " svelte-1mlhr9r"}">${(0, import_index_6b489d84.e)(entry)}</p>`;
  })}
    </div>`;
});
