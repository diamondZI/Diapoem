"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const store_draft = require("../../store/draft.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (Loding + _easycom_uni_icons)();
}
const Loding = () => "../../components/Loding/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const U = store_user.useUserstore();
    const Darft = store_draft.useDarftStore();
    common_vendor.$s.importObject("User");
    const GoNavigateTo = (Url, value) => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        "url": `/pages/${Url}/index?data=` + JSON.stringify(value)
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(U).UserData
      }, !common_vendor.unref(U).UserData ? {} : {
        b: common_vendor.unref(U).UserData.avatar,
        c: common_vendor.t(common_vendor.unref(U).UserData.user_name),
        d: common_vendor.t(common_vendor.unref(U).UserData.region),
        e: common_vendor.t(common_vendor.unref(U).UserData.slogan),
        f: common_vendor.p({
          type: "info-filled",
          size: "30"
        }),
        g: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        h: common_vendor.o(($event) => GoNavigateTo("collect", common_vendor.unref(U).UserData.collect)),
        i: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        j: common_vendor.o(($event) => GoNavigateTo("Personal", common_vendor.unref(U).UserData.collect)),
        k: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        l: common_vendor.o(($event) => GoNavigateTo("My_write", common_vendor.unref(U).UserData.collect)),
        m: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        n: common_vendor.o(($event) => GoNavigateTo("theme", common_vendor.unref(U).UserData.collect)),
        o: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        p: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        q: common_vendor.t(common_vendor.unref(Darft).Darft.length),
        r: common_vendor.t(common_vendor.unref(U).UserData.collect.length),
        s: common_vendor.o(($event) => GoNavigateTo("Aboutme"))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/koajs/DiaPoem/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
