"use strict";
const common_vendor = require("../../common/vendor.js");
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
  props: ["reload", "collect", "start"],
  setup(__props) {
    const props = __props;
    const open = common_vendor.ref(false);
    const aclick = () => {
      open.value = !open.value;
    };
    const Reload = () => {
      props.reload();
    };
    const Collect = () => {
      if (!props.start) {
        props.collect();
      }
    };
    const theme = () => {
      common_vendor.index.navigateTo({
        url: "/pages/theme/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => aclick()),
        b: common_vendor.p({
          type: "reload",
          size: "30"
        }),
        c: common_vendor.o(($event) => Reload()),
        d: open.value ? 1 : "",
        e: !props.start
      }, !props.start ? {
        f: common_vendor.p({
          type: "star",
          size: "30"
        })
      } : {
        g: common_vendor.p({
          type: "star-filled",
          size: "30"
        })
      }, {
        h: common_vendor.o(($event) => Collect()),
        i: open.value ? 1 : "",
        j: common_vendor.p({
          type: "color-filled",
          size: "30"
        }),
        k: common_vendor.o(($event) => theme()),
        l: open.value ? 1 : "",
        m: open.value ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ab3ed6fc"], ["__file", "D:/koajs/DiaPoem/components/FunButton/index.vue"]]);
wx.createComponent(Component);
