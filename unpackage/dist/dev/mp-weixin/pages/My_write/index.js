"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const list = common_vendor.ref();
    const value = common_vendor.ref(null);
    const lists = common_vendor.ref([{
      title: "你好",
      autour: "作何"
    }, {
      title: "山上",
      autour: "作何"
    }, {
      title: "你好",
      autour: "作何"
    }]);
    common_vendor.computed(() => {
      return;
    });
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    common_vendor.onLoad((Option) => {
      list.value = JSON.parse(Option.data).map((el) => {
        return {
          title: el.title,
          author: el.author
        };
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => value.value = $event),
        b: common_vendor.p({
          ["prefix-icon"]: "search",
          placeholder: "请输入",
          ["input-border"]: true,
          modelValue: value.value
        }),
        c: common_vendor.f(lists.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "aad8b7e9-1-" + i0,
            c: index,
            d: item.title.includes(value.value) | value.value === null
          };
        }),
        d: common_vendor.p({
          type: "arrow-up",
          size: "33",
          color: "$uni-text-color-one"
        }),
        e: common_vendor.p({
          type: "plusempty",
          size: "40"
        }),
        f: common_vendor.o(($event) => GoWrite())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aad8b7e9"], ["__file", "D:/koajs/DiaPoem/pages/My_write/index.vue"]]);
wx.createPage(MiniProgramPage);
