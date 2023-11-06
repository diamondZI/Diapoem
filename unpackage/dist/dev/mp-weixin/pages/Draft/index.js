"use strict";
const common_vendor = require("../../common/vendor.js");
const store_draft = require("../../store/draft.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Draft = store_draft.useDarftStore();
    const sort = common_vendor.ref(false);
    const GoWrite = (value, list) => {
      common_vendor.index.navigateTo({
        url: `/pages/Write/index?value=${JSON.stringify(value)}&list=${JSON.stringify(list)}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => sort.value = !sort.value),
        b: sort.value ? 1 : "",
        c: common_vendor.f(common_vendor.unref(Draft).Darft, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.author),
            c: common_vendor.o(($event) => GoWrite(item.title, item.paragraphs), index),
            d: index
          };
        }),
        d: sort.value ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-58e8536a"], ["__file", "D:/koajs/DiaPoem/pages/Draft/index.vue"]]);
wx.createPage(MiniProgramPage);
