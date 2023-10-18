"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Loding();
}
const Loding = () => "../../components/Loding/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const loding = common_vendor.ref(true);
    common_vendor.onMounted(() => {
      setTimeout(() => {
        loding.value = false;
      }, 3e3);
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
