"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Loding();
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
        "url": "/pages/collect/index"
      });
    };
    common_vendor.onMounted(() => {
      a();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !User.value
      }, !User.value ? {} : {
        b: common_vendor.t(User.value),
        c: common_vendor.t(User.value.user_name),
        d: common_vendor.t(User.value.collect.length),
        e: common_vendor.o(($event) => go()),
        f: common_vendor.t(User.value.create.length)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/koajs/DiaPoem/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
