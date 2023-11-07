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
    const time = (datetime) => {
      const date = new Date(datetime);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    };
    const avatarView = (url) => {
      common_vendor.index.previewImage({
        urls: [url]
      });
    };
    const GoRead = (item) => {
      common_vendor.index.navigateTo(
        {
          url: `/pages/Readpoem/index?poem=${JSON.stringify(item)}`
        }
      );
    };
    const GoCreate = () => {
      common_vendor.index.navigateTo({
        url: `/pages/collect/index?title=更多作品&data=${JSON.stringify(User.value.create)}`
      });
    };
    common_vendor.onLoad((options) => {
      User.value = JSON.parse(options.data);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !User.value
      }, !User.value ? {} : {
        b: User.value.avatar,
        c: common_vendor.o(($event) => avatarView(User.value.avatar)),
        d: common_vendor.t(User.value.user_name),
        e: common_vendor.t(User.value.slogan),
        f: common_vendor.o(($event) => GoCreate()),
        g: common_vendor.f(User.value.create, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(time(item.data)),
            c: common_vendor.o(($event) => GoRead(item), index),
            d: index
          };
        }),
        h: common_vendor.f(4 - User.value.create.length, (item, index, i0) => {
          return {
            a: index
          };
        }),
        i: common_vendor.t(User.value.self_introduction)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b2c2814"], ["__file", "D:/koajs/DiaPoem/pages/Personal/index.vue"]]);
wx.createPage(MiniProgramPage);
