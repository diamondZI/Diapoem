"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const hook_GetPoem = require("../../hook/GetPoem.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (BOXBOX + _easycom_uni_icons)();
}
const BOXBOX = () => "../../components/boxbox/boxbox.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const User = store_user.useUserstore();
    const title = common_vendor.ref();
    const Poem = common_vendor.ref([]);
    common_vendor.onLoad((option) => {
      !option.id ? hook_GetPoem.Getpoem(Poem, User.UserData._id) : hook_GetPoem.Getpoem(Poem, option.id);
      title.value = !option.id ? "我的创作" : "他的创作";
    });
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: title.value,
          poem: Poem.value,
          mode: "true"
        }),
        b: common_vendor.p({
          type: "plusempty",
          size: "40"
        }),
        c: common_vendor.o(($event) => GoWrite())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aad8b7e9"], ["__file", "D:/koajs/DiaPoem/pages/My_write/index.vue"]]);
wx.createPage(MiniProgramPage);
