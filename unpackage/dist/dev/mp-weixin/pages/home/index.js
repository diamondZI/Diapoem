"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
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
    const U = store_user.useUserstore();
    common_vendor.$s.importObject("User");
    const GoNavigateTo = (Url, value) => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        "url": `/pages/${Url}/index?data=` + JSON.stringify(value)
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(U).UserData.avatar,
        b: common_vendor.t(common_vendor.unref(U).UserData.user_name),
        c: common_vendor.t(common_vendor.unref(U).UserData.region),
        d: common_vendor.t(common_vendor.unref(U).UserData.slogan),
        e: common_vendor.p({
          type: "info-filled",
          size: "30"
        }),
        f: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        g: common_vendor.o(($event) => GoNavigateTo("collect", common_vendor.unref(U).UserData.collect)),
        h: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        i: common_vendor.o(($event) => GoNavigateTo("Personal", common_vendor.unref(U).UserData.collect)),
        j: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        k: common_vendor.o(($event) => GoNavigateTo("My_write", common_vendor.unref(U).UserData.collect)),
        l: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        m: common_vendor.o(($event) => GoNavigateTo("theme", common_vendor.unref(U).UserData.collect)),
        n: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        o: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        p: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        q: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        r: common_vendor.o(($event) => GoNavigateTo("Aboutme"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/koajs/DiaPoem/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
