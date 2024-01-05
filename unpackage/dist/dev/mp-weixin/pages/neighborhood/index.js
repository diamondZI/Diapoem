"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const hook_GetPoem = require("../../hook/GetPoem.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    common_vendor.ref(null);
    let total = common_vendor.ref(0);
    const LO = common_vendor.ref(false);
    const User = store_user.useUserstore();
    const userlist = common_vendor.ref([]);
    new common_vendor.dayjs();
    const LONOT = common_vendor.ref(true);
    common_vendor.onReachBottom(() => {
      GetUser();
    });
    common_vendor.onShareAppMessage((res) => {
      if (res.from === "button") {
        console.log(res.target);
      }
      return {
        imageUrl: "/static/diamond.png",
        title: "每天闲暇时来读一首诗吧",
        path: "/pages/index/index"
      };
    });
    const GetUser = async () => {
      const db = common_vendor.$s.database();
      const total1 = await GETALL();
      total.value = total1;
      if (userlist.value.length < total1 - 1) {
        LO.value = true;
        let { result } = await db.collection("users").where(`_id!='${User.UserData._id}'`).field(
          {
            "user_name": true,
            "create": true,
            "self_introduction": true,
            "slogan": true,
            "avatar": true,
            "LoginTime": true,
            "RegisteredTime": true,
            "PoemNumber": true
          }
        ).skip(userlist.value.length).limit(7).get();
        console.log(...result.data);
        userlist.value = [...userlist.value, ...result.data];
        LO.value = false;
      } else {
        setTimeout(() => {
          LO.value = false;
          LONOT.value = false;
          console.log("没有更多了");
        }, 2e3);
      }
    };
    const GoNavigateTo = (Url, value) => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        url: `/pages/${Url}/index?data=` + JSON.stringify(value),
        animationType: "pop-in",
        animationDuration: 1e4
      });
    };
    async function GETALL() {
      const db = common_vendor.$s.database();
      return await db.collection("users").count().then((res) => {
        console.log(res);
        return res.result.total;
      });
    }
    common_vendor.onMounted(() => {
      GetUser();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(userlist.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.user_name),
            c: common_vendor.t(item.slogan),
            d: common_vendor.t(item.self_introduction),
            e: common_vendor.t(item.PoemNumber),
            f: common_vendor.t(common_vendor.unref(hook_GetPoem.time)(item.LoginTime)),
            g: common_vendor.o(($event) => GoNavigateTo("Personal", item), index),
            h: index
          };
        }),
        b: common_vendor.t("隐藏"),
        c: LO.value && LONOT.value
      }, LO.value && LONOT.value ? {} : {}, {
        d: !LONOT.value
      }, !LONOT.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-da70f5fc"], ["__file", "D:/koajs/DiaPoem/pages/neighborhood/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
