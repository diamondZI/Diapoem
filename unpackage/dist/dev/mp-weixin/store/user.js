"use strict";
const common_vendor = require("../common/vendor.js");
const useUserstore = common_vendor.defineStore("User", () => {
  const UserData = common_vendor.ref();
  const token = common_vendor.ref(null);
  const GetUser = async () => {
    token.value = await Gettoken();
    if (token.value) {
      await wxLogin(token.value);
    } else {
      console.log("2");
      await wxRegistered({
        user_name: "未知名",
        collect: [],
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
    }
  };
  const wxLogin = (token2) => {
    common_vendor.index.login({
      provider: "weixin",
      success: (res) => {
        common_vendor.$s.callFunction({
          name: "wxLogin",
          data: {
            code: res.code,
            token: token2
          },
          success: (res2) => {
            console.log(res2);
            UserData.value = res2.result.Userdata.data[0];
          }
        });
      },
      fail: (err) => {
        console.log(err);
      }
    });
  };
  const wxRegistered = (Data) => {
    console.log("注册");
    common_vendor.index.login({
      provider: "weixin",
      success: (res) => {
        common_vendor.$s.callFunction({
          name: "wxRegistered",
          data: {
            code: res.code,
            UserData: Data
          },
          success: (res2) => {
            const {
              ok,
              token: token2,
              msg
            } = res2.result;
            if (ok === 200) {
              console.log("1", res2.result.Userdata.data[0]);
              UserData.value = res2.result.Userdata.data[0];
              common_vendor.index.setStorage({
                data: token2,
                key: "token"
              });
            } else {
              console.log("失败", ok, msg);
            }
          }
        });
      }
    });
  };
  const SetAvatarUrl = async (avatar) => {
    const result = await common_vendor.$s.uploadFile({
      filePath: avatar,
      cloudPath: "a.jpg",
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round(
          progressEvent.loaded * 100 / progressEvent.total
        );
        console.log(percentCompleted);
      }
    });
    UserData.value.avatar = result.fileID;
  };
  const SetText = (key, value) => {
    UserData.value[`${key}`] = value;
  };
  const SetUser = async () => {
    const { avatar, user_name, slogan, self_introduction } = UserData.value;
    const db = await common_vendor.$s.database();
    await db.collection("users").doc(UserData.value._id).update({
      avatar,
      user_name,
      slogan,
      self_introduction
    });
  };
  const SetCollect = async (id) => {
    UserData.value.collect.push(id);
    const { collect } = UserData.value;
    try {
      const db = await common_vendor.$s.database();
      await db.collection("users").doc(UserData.value._id).update({
        collect
      });
    } catch (e) {
      console.log(e, "添加失败");
    }
  };
  const Gettoken = async () => {
    try {
      let res = await common_vendor.index.getStorage({
        key: "token"
      });
      return res.data;
    } catch (e) {
      return false;
    }
  };
  return {
    UserData,
    GetUser,
    SetAvatarUrl,
    SetUser,
    SetText,
    SetCollect
  };
});
exports.useUserstore = useUserstore;
