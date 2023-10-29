"use strict";
const common_vendor = require("../common/vendor.js");
const wxLogin = (token) => {
  common_vendor.index.login({
    provider: "weixin",
    success: (res) => {
      common_vendor.$s.callFunction({
        name: "wxLogin",
        data: {
          code: res.code,
          token
        },
        success: (res2) => {
          const { token: token2, data } = res2;
          common_vendor.index.setStorage({
            key: "token",
            data: res2.token
          });
          return data;
        }
      });
    },
    fail: (err) => {
      console.log(err);
    }
  });
};
const wxRegistered = async (UserData) => {
  await common_vendor.index.login({
    provider: "weixin",
    success: (res) => {
      let a = common_vendor.$s.callFunction({
        name: "wxRegistered",
        data: {
          code: res.code,
          UserData
        },
        success: (res1) => {
          return res1;
        }
      });
      console.log(a);
    }
  });
};
exports.wxLogin = wxLogin;
exports.wxRegistered = wxRegistered;
