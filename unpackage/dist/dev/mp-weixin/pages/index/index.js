"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
if (!Math) {
  (Loding + Poem + FunButton)();
}
const Poem = () => "../../components/Poem/index.js";
const Loding = () => "../../components/Loding/index.js";
const FunButton = () => "../../components/FunButton/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Theme = store_theme.useThemeterStor();
    const poem = common_vendor.ref();
    const todo = common_vendor.$s.importObject("poem");
    async function C() {
      poem.value = [];
      poem.value = await todo.get().then((res) => {
        console.log(res);
        return res.data[0];
      }).catch((err) => {
        console.log(err);
      });
      console.log("你好");
    }
    common_vendor.onMounted(() => {
      C();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !poem.value
      }, !poem.value ? {} : {
        b: common_vendor.p({
          poem: poem.value
        }),
        c: common_vendor.s(common_vendor.unref(Theme).theme)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/koajs/DiaPoem/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
