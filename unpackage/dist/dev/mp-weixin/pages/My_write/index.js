"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref(false);
    const list = common_vendor.ref();
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    common_vendor.onLoad((Option) => {
      list.value = JSON.parse(Option.data).map((el) => {
        return {
          title: el.title,
          author: el.author
        };
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "plusempty",
          size: "40"
        }),
        b: common_vendor.o(($event) => GoWrite())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aad8b7e9"], ["__file", "D:/koajs/DiaPoem/pages/My_write/index.vue"]]);
wx.createPage(MiniProgramPage);
