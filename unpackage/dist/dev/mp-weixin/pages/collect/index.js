"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([{
      title: "你好"
    }, {
      title: "你好"
    }, {
      title: "你好"
    }]);
    const getCollect = async (A) => {
      const D = common_vendor.Ds.importObject("User");
      console.log(
        await D.GetUser_collect(A)
      );
    };
    common_vendor.onLoad((Option) => {
      getCollect(JSON.parse(Option.data));
    });
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
