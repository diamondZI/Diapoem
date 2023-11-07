"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
const store_user = require("../../store/user.js");
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
    const User = store_user.useUserstore();
    const poem = common_vendor.ref();
    const todo = common_vendor.$s.importObject("poem");
    const start = common_vendor.ref();
    async function reload() {
      poem.value = {};
      poem.value = await todo.get().then((res) => {
        return res.data[0];
      }).catch((err) => {
      });
      if (User.UserData) {
        start.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === poem.value._id;
          }
        ).length > 0);
      }
    }
    async function collect() {
      User.SetCollect({
        id: poem.value._id,
        title: poem.value.title,
        author: poem.value.author,
        data: (/* @__PURE__ */ new Date()).getTime()
      });
      start.value = await (User.UserData.collect.filter(
        (el) => {
          return el.id === poem.value._id;
        }
      ).length > 0);
    }
    async function remove() {
      User.UserData.collect.map((el, index) => {
        if (el.id === poem.value._id) {
          User.removeCollect(index);
        }
      });
      start.value = await (User.UserData.collect.filter(
        (el) => {
          return el.id === poem.value._id;
        }
      ).length > 0);
    }
    common_vendor.onLoad((Option) => {
      console.log(Option.value);
    });
    common_vendor.onShareAppMessage((res) => {
      if (res.from === "button") {
        console.log(res.target);
      }
      return {
        title: "在这里分享你的诗",
        path: "/pages/index/index"
      };
    });
    common_vendor.onMounted(() => {
      reload();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !poem.value
      }, !poem.value ? {} : {
        b: common_vendor.p({
          poem: poem.value
        }),
        c: common_vendor.p({
          reload,
          remove,
          collect,
          start: start.value
        }),
        d: common_vendor.s(common_vendor.unref(Theme).theme)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/koajs/DiaPoem/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
