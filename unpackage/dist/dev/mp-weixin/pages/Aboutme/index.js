"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userInfo = common_vendor.ref(
      {
        avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        nickName: "21"
      }
    );
    const onChooseAvatar = (e) => {
      const { avatarUrl } = e.detail;
      userInfo.value.avatarUrl = avatarUrl;
      console.log(userInfo.value.avatarUrl);
    };
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avatarUrl,
        b: common_vendor.o(onChooseAvatar)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e7ac45b4"], ["__file", "D:/koajs/DiaPoem/pages/Aboutme/index.vue"]]);
wx.createPage(MiniProgramPage);
