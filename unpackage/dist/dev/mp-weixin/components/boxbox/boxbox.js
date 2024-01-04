"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  DataLoading();
}
const DataLoading = () => "../Loding/Data_Loading.js";
const _sfc_main = {
  __name: "boxbox",
  props: ["poem", "title", "mode"],
  setup(__props) {
    const { poem, title, mode } = __props;
    const sort = common_vendor.ref(false);
    console.log(poem);
    const GoRead = (id, poem2) => {
      if (mode) {
        common_vendor.index.navigateTo({
          url: `/pages/Readpoem/index?data=${JSON.stringify(poem2)}&key=${JSON.stringify(id)}&User=${true}`
        });
      } else {
        common_vendor.index.navigateTo({
          url: `/pages/Readpoem/index?data=${JSON.stringify(poem2)}&key=${JSON.stringify(id)}&User=${poem2[id].isanuthor}`
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: common_vendor.o(($event) => sort.value = !sort.value),
        c: sort.value ? 1 : "",
        d: !__props.poem
      }, !__props.poem ? {} : {
        e: common_vendor.f(__props.poem, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title.substr(0, 6)),
            b: common_vendor.t(item.title.length > 6 ? "……" : ""),
            c: common_vendor.t(item.author),
            d: index,
            e: common_vendor.o(($event) => GoRead(index, __props.poem), index)
          };
        }),
        f: sort.value ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-71bac138"], ["__file", "D:/koajs/DiaPoem/components/boxbox/boxbox.vue"]]);
wx.createComponent(Component);
