"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_user = require("./store/user.js");
const store_theme = require("./store/theme.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/index.js";
  "./pages/collect/index.js";
  "./pages/Personal/index.js";
  "./pages/My_write/index.js";
  "./pages/theme/index.js";
  "./pages/Aboutme/index.js";
  "./pages/PersonalEdit/index.js";
  "./pages/Write/index.js";
  "./pages/neighborhood/index.js";
  "./pages/Readpoem/index.js";
  "./pages/Draft/index.js";
}
const _sfc_main = {
  methods: {
    p() {
      const A = store_user.useUserstore();
      A.GetUser();
      if (!common_vendor.index.getStorageSync("Darft")) {
        common_vendor.index.setStorageSync("Darft", JSON.stringify({
          "key": []
        }));
      }
    },
    A() {
      const Theme = store_theme.useThemeterStor();
      Theme.GetTheme();
    }
  },
  onLaunch: function() {
    try {
      this.p();
      this.A();
    } catch (e) {
      console.log("失败");
    }
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
