"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    store_user.useUserstore();
    const title = common_vendor.ref();
    const sort = common_vendor.ref(false);
    const list = common_vendor.ref();
    common_vendor.onLoad((Option) => {
      list.value = JSON.parse(Option.data);
      console.log(list.value);
      title.value = Option.title ? Option.title : "我的收藏";
    });
    const GoRead = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Readpoem/index?data=${JSON.stringify(list.value)}&key=${JSON.stringify(id)}&User=${list.value[id].isanuthor}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value.substr(0, 5)),
        b: common_vendor.o(($event) => sort.value = !sort.value),
        c: sort.value ? 1 : "",
        d: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title.substr(0, 6)),
            b: common_vendor.t(item.title.length > 6 ? "……" : ""),
            c: common_vendor.t(item.author),
            d: index,
            e: common_vendor.o(($event) => GoRead(index), index)
          };
        }),
        e: sort.value ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cb2cf245"], ["__file", "D:/koajs/DiaPoem/pages/collect/index.vue"]]);
wx.createPage(MiniProgramPage);
