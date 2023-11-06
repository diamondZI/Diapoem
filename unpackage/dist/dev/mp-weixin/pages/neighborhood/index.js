"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const card = common_vendor.ref(null);
    const click = () => {
      console.log(
        card.value[0]
      );
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.sr(card, "00aeee6c-0-" + i0, {
              "k": "card",
              "f": 1
            }),
            c: "00aeee6c-0-" + i0
          };
        }),
        b: common_vendor.o(($event) => click())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/pages/neighborhood/index.vue"]]);
wx.createPage(MiniProgramPage);
