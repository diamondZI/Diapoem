"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  BoxBox();
}
const BoxBox = () => "../../components/boxbox/boxbox.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.ref();
    common_vendor.onLoad((Option) => {
      list.value = JSON.parse(Option.data);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的收藏",
          poem: list.value,
          mode: "false"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cb2cf245"], ["__file", "D:/koajs/DiaPoem/pages/collect/index.vue"]]);
wx.createPage(MiniProgramPage);
