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
  props: ["reload", "collect", "start", "remove"],
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
      } else {
        props.remove();
      }
    };
    common_vendor.onShareAppMessage((res) => {
      if (res.from === "button") {
        console.log(res.target);
      }
      return {
        title: "在这里分享你的诗",
        path: "/pages/index/index?id=123"
      };
    });
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
          type: "redo",
          size: "30"
        }),
        k: open.value ? 1 : "",
        l: open.value ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ab3ed6fc"], ["__file", "D:/koajs/DiaPoem/components/FunButton/index.vue"]]);
wx.createComponent(Component);
