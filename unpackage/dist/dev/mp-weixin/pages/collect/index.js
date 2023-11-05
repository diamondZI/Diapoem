"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const User = store_user.useUserstore();
    const sort = common_vendor.ref(false);
    const list = common_vendor.ref();
    common_vendor.onLoad((Option) => {
      list.value = JSON.parse(Option.data).map((el) => {
        return {
          id: el.id,
          title: el.title,
          author: el.author
        };
      });
    });
    const GoRead = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Readpoem/index?data=${JSON.stringify(list.value)}&key=${JSON.stringify(id)}`
      });
    };
    common_vendor.onLoad(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => sort.value = !sort.value),
        b: sort.value ? 1 : "",
        c: common_vendor.f(common_vendor.unref(User).UserData.collect, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.author),
            c: index,
            d: common_vendor.o(($event) => GoRead(index), index)
          };
        }),
        d: sort.value ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cb2cf245"], ["__file", "D:/koajs/DiaPoem/pages/collect/index.vue"]]);
wx.createPage(MiniProgramPage);
