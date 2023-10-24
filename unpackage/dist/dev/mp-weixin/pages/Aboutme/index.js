"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userInfo = common_vendor.reactive({});
    const getCode = () => {
      return new Promise((resolve, reject) => {
        common_vendor.index.login({
          provider: "weixin",
          success: (e) => {
            resolve(e);
          },
          fail: (err) => {
            reject(new Error("获取code失败"));
          }
        });
      });
    };
    const getOpenID = (code) => {
      return common_vendor.Ds.callFunction({
        name: "wxLogin",
        data: {
          code
        }
      });
    };
    const getUserProfile = () => {
      return new Promise((resolve, reject) => {
        common_vendor.index.getProvider({
          desc: "获取你的昵称、头像、地区及性别",
          success: (e) => {
            resolve(e);
          },
          fail: (err) => {
            reject(new Error("getUserProfile失败"));
          }
        });
      });
    };
    const wxLogin = async () => {
      getCode().then((e) => {
        return getOpenID(e.code);
      }).then((e) => {
        console.log(e);
        const {
          openid,
          token,
          tokenExpired
        } = e.result;
        common_vendor.index.setStorageSync("openid", openid);
        common_vendor.index.setStorageSync("uni_id_token", token);
        common_vendor.index.setStorageSync("uni_id_token_expired", tokenExpired);
        common_vendor.index.showModal({
          title: "温馨提示",
          content: "亲，授权微信登录后才能正常使用小程序功能",
          success: (e2) => {
            if (e2.confirm) {
              getUserProfile().then((e3) => {
                console.log(e3);
                userInfo = e3.userInfo;
              });
            }
          }
        });
      }).catch((err) => console.log(err));
    };
    return (_ctx, _cache) => {
      return {
        a: userInfo.avatarUrl,
        b: common_vendor.t(userInfo.nickName),
        c: common_vendor.o(wxLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e7ac45b4"], ["__file", "D:/koajs/DiaPoem/pages/Aboutme/index.vue"]]);
wx.createPage(MiniProgramPage);
