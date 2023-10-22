"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const User = common_vendor.ref({
      User_name: "西川",
      avt: "../../static/diamond.jpeg"
    });
    return (_ctx, _cache) => {
      return {
        a: User.value.avt,
        b: common_vendor.t(User.value.User_name)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b2c2814"], ["__file", "D:/koajs/DiaPoem/pages/Personal/index.vue"]]);
wx.createPage(MiniProgramPage);
