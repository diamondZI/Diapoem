"use strict";
const common_vendor = require("../../common/vendor.js");
const store_draft = require("../../store/draft.js");
if (!Math) {
  BoxBox();
}
const BoxBox = () => "../../components/boxbox/boxbox.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Draft = store_draft.useDarftStore();
    console.log(Draft.Darft);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的草稿",
          mode: "Draft",
          poem: common_vendor.unref(Draft).Darft
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-58e8536a"], ["__file", "D:/koajs/DiaPoem/pages/Draft/index.vue"]]);
wx.createPage(MiniProgramPage);
