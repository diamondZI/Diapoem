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
  (_easycom_uni_easyinput + DataLoading + _easycom_uni_icons)();
}
const DataLoading = () => "../../components/Loding/Data_Loading.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const sort = common_vendor.ref(false);
    const User = store_user.useUserstore();
    const value = common_vendor.ref(null);
    const Poem = common_vendor.ref();
    common_vendor.onMounted(() => {
      Getpoem();
    });
    const Getpoem = async () => {
      const db = common_vendor.$s.database();
      const res = await db.collection("user_poem").where({
        user_id: User.UserData._id
      }).get();
      console.log(res.result.data);
      Poem.value = res.result.data;
    };
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    const GoRead = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/Readpoem/index?data=${JSON.stringify(Poem.value)}&key=${JSON.stringify(item)}&User=${true}`
      });
    };
    const TouchLongtime = () => {
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
        c: !Poem.value
      }, !Poem.value ? {} : {
        d: common_vendor.f(Poem.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.author),
            c: common_vendor.o(($event) => TouchLongtime.TouchStart(), index),
            d: index,
            e: common_vendor.o(($event) => GoRead(index), index)
          };
        }),
        e: sort.value ? 1 : ""
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
