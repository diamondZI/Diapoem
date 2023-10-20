"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const aclick = () => {
      console.log("nihao1");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(aclick),
        b: common_vendor.o(aclick),
        c: common_vendor.o(aclick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ab3ed6fc"], ["__file", "D:/koajs/DiaPoem/components/FunButton/index.vue"]]);
wx.createComponent(Component);
