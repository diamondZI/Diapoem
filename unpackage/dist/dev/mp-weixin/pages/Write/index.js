"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref(null);
    const Auto = common_vendor.ref(false);
    common_vendor.ref(null);
    const callback = (e) => {
      console.log(e.detail.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(callback),
        b: !Auto.value,
        c: Auto.value,
        d: common_vendor.o(($event) => _ctx.Get())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9a32d65"], ["__file", "D:/koajs/DiaPoem/pages/Write/index.vue"]]);
wx.createPage(MiniProgramPage);
