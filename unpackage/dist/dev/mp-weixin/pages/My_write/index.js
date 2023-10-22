"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const sort = common_vendor.ref(false);
    const list = common_vendor.ref();
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
        a: common_vendor.o(($event) => sort.value = !sort.value),
        b: sort.value ? 1 : "",
        c: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.author),
            c: index
          };
        }),
        d: sort.value ? 1 : "",
        e: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.author),
            c: index
          };
        }),
        f: sort.value ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aad8b7e9"], ["__file", "D:/koajs/DiaPoem/pages/My_write/index.vue"]]);
wx.createPage(MiniProgramPage);
