"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const User = common_vendor.ref();
    const todo = common_vendor.Ds.importObject("User");
    const a = async () => {
      User.value = await todo.GetUser().then((res) => {
        return res.data[0];
      });
    };
    const go = () => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        "url": "/pages/collect/index?data=" + JSON.stringify(User.value.collect)
      });
    };
    common_vendor.onMounted(() => {
      a();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !User.value
      }, !User.value ? {} : {
        b: common_vendor.t(User.value.user_name),
        c: common_vendor.t(User.value.region),
        d: common_vendor.t(User.value.slogan),
        e: common_vendor.p({
          type: "info-filled",
          size: "30"
        }),
        f: common_vendor.t(User.value.collect.length),
        g: common_vendor.o(($event) => go()),
        h: common_vendor.t(User.value.collect.length),
        i: common_vendor.t(User.value.create.length),
        j: common_vendor.t(User.value.create.length),
        k: common_vendor.t(User.value.collect.length),
        l: common_vendor.o(($event) => go()),
        m: common_vendor.t(User.value.collect.length),
        n: common_vendor.o(($event) => go()),
        o: common_vendor.t(User.value.create.length),
        p: common_vendor.t(User.value.create.length)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/koajs/DiaPoem/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
