"use strict";
const common_vendor = require("../common/vendor.js");
const utility_login = require("../utility/login.js");
const useUserstore = common_vendor.defineStore("User", () => {
  const UserData = common_vendor.ref({
    user_name: "未知名",
    collect: [
      // {
      //     id: '653096f699c6248d808d9c53',
      //     title: '红花草',
      //     author: '阿裴',
      //     date: '2022-12-22'
      // }
    ],
    integral: 1,
    create: [],
    theme: {
      dark: true,
      color: 0,
      size: "16px"
    },
    PoemNumber: 1,
    avatar: "",
    region: "中国",
    self_introduction: "自东向西",
    slogan: "你好,世界!"
  });
  const token = common_vendor.ref(null);
  const GetUser = async () => {
    token.value = false;
    if (token.value) {
      let res = await utility_login.wxLogin(token.value);
      console.log(res);
    } else {
      let res = await utility_login.wxRegistered(UserData.value);
      console.log(res);
    }
  };
  return { GetUser };
});
exports.useUserstore = useUserstore;
