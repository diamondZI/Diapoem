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
    const todo = common_vendor.$s.importObject("User");
    const a = async () => {
      User.value = await todo.GetUser().then((res) => {
        console.log(res);
        return res.data[0];
      });
    };
    const GoNavigateTo = (Url, value) => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        "url": `/pages/${Url}/index?data=` + JSON.stringify(value)
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
        g: common_vendor.o(($event) => GoNavigateTo("collect", User.value.collect)),
        h: common_vendor.t(User.value.collect.length),
        i: common_vendor.o(($event) => GoNavigateTo("Personal", User.value.collect)),
        j: common_vendor.t(User.value.create.length),
        k: common_vendor.o(($event) => GoNavigateTo("My_write", User.value.collect)),
        l: common_vendor.t(User.value.create.length),
        m: common_vendor.o(($event) => GoNavigateTo("theme", User.value.collect)),
        n: common_vendor.t(User.value.collect.length),
        o: common_vendor.t(User.value.collect.length),
        p: common_vendor.t(User.value.create.length),
        q: common_vendor.t(User.value.create.length),
        r: common_vendor.o(($event) => GoNavigateTo("Aboutme"))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/koajs/DiaPoem/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
