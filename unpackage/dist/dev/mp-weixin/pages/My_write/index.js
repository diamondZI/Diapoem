"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref(false);
    const User = store_user.useUserstore();
    const value = common_vendor.ref(null);
    const Poem = common_vendor.ref();
    const time = (datetime) => {
      const date = new Date(datetime);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    };
    common_vendor.onMounted(() => {
      Getpoem();
    });
    const Getpoem = async () => {
      const db = common_vendor.$s.database();
      const res = await db.collection("user_poem").where({
        user_id: User.UserData._id
      }).limit(User.UserData.PoemNumber).get();
      Poem.value = res;
    };
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    const GoRead = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/Readpoem/index?poem=${JSON.stringify(item)}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => value.value = $event),
        b: common_vendor.p({
          ["prefix-icon"]: "search",
          placeholder: "请输入",
          ["input-border"]: true,
          modelValue: value.value
        }),
        c: Poem.value
      }, Poem.value ? {} : {
        d: common_vendor.f(Poem.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(time(item.data)),
            c: "aad8b7e9-1-" + i0,
            d: common_vendor.t(item.author),
            e: index,
            f: item.title.includes(value.value) | value.value === null,
            g: common_vendor.o(($event) => GoRead(item), index)
          };
        }),
        e: common_vendor.p({
          type: "arrow-up",
          size: "33",
          color: "rgb(138,151,155)"
        })
      }, {
        f: common_vendor.p({
          type: "plusempty",
          size: "40"
        }),
        g: common_vendor.o(($event) => GoWrite())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aad8b7e9"], ["__file", "D:/koajs/DiaPoem/pages/My_write/index.vue"]]);
wx.createPage(MiniProgramPage);
