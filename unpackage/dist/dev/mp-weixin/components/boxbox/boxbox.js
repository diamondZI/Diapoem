"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_transition_group = common_vendor.resolveComponent("transition-group");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2 + _easycom_uni_icons2 + _component_transition_group)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup + DataLoading + _easycom_uni_icons)();
}
const DataLoading = () => "../Loding/Data_Loading.js";
const _sfc_main = {
  __name: "boxbox",
  props: ["poem", "title", "mode", "fun"],
  setup(__props) {
    const {
      poem,
      title,
      mode,
      fun
    } = __props;
    const sort = common_vendor.ref(false);
    const type = common_vendor.ref();
    const ID = common_vendor.ref();
    const delect = common_vendor.ref(false);
    const alertDialog = common_vendor.ref();
    const FUNK = (type1, index) => {
      type.value = type1;
      ID.value = index;
      alertDialog.value.open();
    };
    const dialogConfirm = () => {
      fun(ID.value);
    };
    const GoRead = (id, poem2) => {
      if (!delect.value) {
        if (mode === "true") {
          common_vendor.index.navigateTo({
            url: `/pages/Readpoem/index?data=${JSON.stringify(poem2)}&key=${JSON.stringify(id)}&User=${true}`
          });
        } else if (mode === "false") {
          common_vendor.index.navigateTo({
            url: `/pages/Readpoem/index?data=${JSON.stringify(poem2)}&key=${JSON.stringify(id)}&User=${poem2[id].isanuthor}`
          });
        } else {
          common_vendor.index.navigateTo({
            url: `/pages/Write/index?value=${JSON.stringify(id)}&list=${JSON.stringify(poem2)}`
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(dialogConfirm),
        b: common_vendor.o(_ctx.dialogClose),
        c: common_vendor.p({
          type: type.value,
          cancelText: "关闭",
          confirmText: "删除",
          title: "提示",
          content: "确定要删除吗?"
        }),
        d: common_vendor.sr(alertDialog, "71bac138-0", {
          "k": "alertDialog"
        }),
        e: common_vendor.p({
          type: "dialog"
        }),
        f: common_vendor.t(__props.title),
        g: __props.title !== "他的创作"
      }, __props.title !== "他的创作" ? {
        h: common_vendor.o(($event) => delect.value = !delect.value),
        i: delect.value ? 1 : ""
      } : {}, {
        j: common_vendor.o(($event) => sort.value = !sort.value),
        k: sort.value ? 1 : "",
        l: !__props.poem
      }, !__props.poem ? {} : __props.poem ? {
        n: common_vendor.f(__props.poem, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title.substr(0, 6)),
            b: common_vendor.t(item.title.length > 6 ? "……" : "")
          }, delect.value ? {
            c: "71bac138-4-" + i0 + ",71bac138-3",
            d: common_vendor.p({
              type: "closeempty",
              size: "25",
              color: " #dd524d"
            }),
            e: common_vendor.o(($event) => FUNK("info", index), item)
          } : {}, {
            f: common_vendor.t(item.author),
            g: item,
            h: common_vendor.o(($event) => GoRead(index, __props.poem), item)
          });
        }),
        o: delect.value,
        p: sort.value ? 1 : "",
        q: delect.value ? "scale(.9)" : "scale(1)",
        r: common_vendor.p({
          name: "list",
          tag: "ul"
        })
      } : {}, {
        m: __props.poem
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-71bac138"], ["__file", "D:/koajs/DiaPoem/components/boxbox/boxbox.vue"]]);
wx.createComponent(Component);
