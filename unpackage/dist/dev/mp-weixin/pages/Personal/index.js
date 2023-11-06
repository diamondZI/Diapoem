"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const User = common_vendor.ref();
    const time = (datetime) => {
      const date = new Date(datetime);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    };
    const GoRead = (item) => {
      common_vendor.index.navigateTo(
        {
          url: `/pages/Readpoem/index?poem=${JSON.stringify(item)}`
        }
      );
    };
    const GoWrite = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Write/index"
      });
    };
    common_vendor.onLoad((options) => {
      User.value = JSON.parse(options.data);
    });
    return (_ctx, _cache) => {
      return {
        a: User.value.avatar,
        b: common_vendor.t(User.value.user_name),
        c: common_vendor.t(User.value.slogan),
        d: common_vendor.f(User.value.create, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(time(item.data)),
            c: common_vendor.o(($event) => GoRead(item))
          };
        }),
        e: common_vendor.f(4 - User.value.create.length, (item, k0, i0) => {
          return {};
        }),
        f: common_vendor.o(GoWrite),
        g: common_vendor.t(User.value.self_introduction)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b2c2814"], ["__file", "D:/koajs/DiaPoem/pages/Personal/index.vue"]]);
wx.createPage(MiniProgramPage);
