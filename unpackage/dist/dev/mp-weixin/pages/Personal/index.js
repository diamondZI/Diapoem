"use strict";
const common_vendor = require("../../common/vendor.js");
const hook_GetPoem = require("../../hook/GetPoem.js");
if (!Math) {
  (Loding + DataLoading)();
}
const Loding = () => "../../components/Loding/index.js";
const DataLoading = () => "../../components/Loding/Data_Loading.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const User = common_vendor.ref();
    const createBox = common_vendor.ref();
    const time = (datetime) => {
      const date = new Date(datetime);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    };
    const avatarView = (url) => {
      common_vendor.index.previewImage({
        urls: [url]
      });
    };
    const GoRead = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/Readpoem/index?data=${JSON.stringify(createBox.value)}&key=${JSON.stringify(item)}&User=${true}`
      });
    };
    const GoCreate = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/My_write/index?id=${id}`
      });
    };
    common_vendor.onMounted(() => {
      hook_GetPoem.Getpoem(createBox, User.value._id);
    });
    common_vendor.onLoad((options) => {
      User.value = JSON.parse(options.data);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !User.value
      }, !User.value ? {} : common_vendor.e({
        b: User.value.avatar,
        c: common_vendor.o(($event) => avatarView(User.value.avatar)),
        d: common_vendor.t(User.value.user_name),
        e: common_vendor.t(User.value.slogan),
        f: common_vendor.o(($event) => GoCreate(User.value._id)),
        g: !createBox.value
      }, !createBox.value ? {} : {
        h: common_vendor.f(createBox.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(time(item.CreateTime)),
            c: index,
            d: common_vendor.o(($event) => GoRead(index), index)
          };
        }),
        i: common_vendor.f(4 - createBox.value.length, (item, index, i0) => {
          return {
            a: index
          };
        })
      }, {
        j: common_vendor.t(User.value.self_introduction)
      }));
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b2c2814"], ["__file", "D:/koajs/DiaPoem/pages/Personal/index.vue"]]);
wx.createPage(MiniProgramPage);
