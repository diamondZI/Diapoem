"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: ["Showclose", "AddPoem"],
  setup(__props) {
    const props = __props;
    const Show = common_vendor.ref(true);
    const Buttonlist = common_vendor.reactive({
      letG: false,
      text: "确认发表"
    });
    const close = () => {
      props.Showclose();
    };
    const sure = () => {
      props.AddPoem();
      Buttonlist.letG = true;
      Buttonlist.text = "稍后再来吧";
      setTimeout(() => {
        Buttonlist.letG = false, Buttonlist.text = "确认发表";
      }, 3e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(Buttonlist.text),
        b: Buttonlist.letG,
        c: common_vendor.o(($event) => sure()),
        d: common_vendor.o(($event) => close()),
        e: Show.value ? "flex" : "none"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ced272ff"], ["__file", "D:/koajs/DiaPoem/components/Opspringers/index.vue"]]);
wx.createComponent(Component);
