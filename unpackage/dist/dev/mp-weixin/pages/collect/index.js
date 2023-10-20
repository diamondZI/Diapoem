"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_easyinput = common_vendor.resolveComponent("uni-easyinput");
  _component_uni_easyinput();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = [{
      title: "你好"
    }, {
      title: "你好"
    }, {
      title: "你好"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["prefix-icon"]: "search",
          placeholder: "请输入",
          ["input-border"]: false
        }),
        b: common_vendor.f(list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.title),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cb2cf245"], ["__file", "D:/koajs/DiaPoem/pages/collect/index.vue"]]);
wx.createPage(MiniProgramPage);
