"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: ["Showclose", "AddPoem"],
  setup(__props) {
    const props = __props;
    const Show = common_vendor.ref(true);
    const close = () => {
      props.Showclose();
    };
    const sure = () => {
      props.AddPoem();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => sure()),
        b: common_vendor.o(($event) => close()),
        c: Show.value ? "flex" : "none"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ced272ff"], ["__file", "D:/koajs/DiaPoem/components/Opspringers/index.vue"]]);
wx.createComponent(Component);
