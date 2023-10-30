"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Users = store_user.useUserstore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(Users).UserData.avatar,
        b: common_vendor.t(common_vendor.unref(Users).UserData.user_name),
        c: common_vendor.t(common_vendor.unref(Users).UserData.slogan),
        d: common_vendor.t(common_vendor.unref(Users).UserData.self_introduction)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b2c2814"], ["__file", "D:/koajs/DiaPoem/pages/Personal/index.vue"]]);
wx.createPage(MiniProgramPage);
