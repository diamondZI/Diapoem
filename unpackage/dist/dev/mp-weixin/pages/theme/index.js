"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
if (!Array) {
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_message + _easycom_uni_popup + Poem)();
}
const Poem = () => "../../components/Poem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Theme = store_theme.useThemeterStor();
    const duration = common_vendor.ref(24);
    common_vendor.ref("");
    const msg = common_vendor.reactive({
      msgType: "",
      messageText: ""
    });
    const message = common_vendor.ref();
    const duration2 = common_vendor.ref(10);
    const duration3 = common_vendor.ref(32);
    const content = {
      title: "大海",
      author: "博尔赫斯",
      paragraphs: [
        "在梦幻（抑或恐惧）编织",
        "神话和宇宙起源之前",
        "在时间被铸成一个个日子之前",
        "海，那永远的大海就早已存在",
        "谁是大海？谁是那凶猛而古老",
        "的生命？它啃噬着大地的支柱",
        "它是一个，是许许多多个海洋",
        "是深渊，是光耀，是缘，是风",
        "谁看它都像是头一回见到一样",
        "永远如此。大自然之奇妙",
        "令人惊艳赞叹，那美丽的",
        "黄昏、月光、熊熊的篝火",
        "谁是大海？我又是谁？我将在",
        "弥留人世的最后日子得到答案"
      ]
    };
    const BG = common_vendor.ref("rgb(255,250,240)");
    const bgroundColor = ["rgb(27,59,100)", "rgb(255,250,240)", "#282c34", "rgb(199, 237, 204)", "rgb(220, 226, 241)"];
    function messageToggle(type, TEXT) {
      msg.msgType = type;
      msg.messageText = TEXT;
      message.value.open();
    }
    function changeColor(color) {
      Theme.onChangeBackroundcolor(color);
      BG.value = color;
    }
    const changeSize = (e) => {
      Theme.onChangesize(e.detail.value);
    };
    const changeletter = (e) => {
      Theme.onChangeletter(e.detail.value);
    };
    const changeheight = (e) => {
      Theme.onChangeheight(e.detail.value);
    };
    const onChangtheme = (e) => {
      try {
        Theme.onChangtheme();
        messageToggle("success", "保存成功");
      } catch (e2) {
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: msg.msgType,
          message: msg.messageText,
          duration: 2e3
        }),
        b: common_vendor.sr(message, "783cfd7e-0", {
          "k": "message"
        }),
        c: common_vendor.p({
          type: "message"
        }),
        d: common_vendor.p({
          poem: content
        }),
        e: common_vendor.f(bgroundColor, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => changeColor(item), index),
            b: item,
            c: index
          };
        }),
        f: common_vendor.o((e) => changeSize(e)),
        g: duration.value,
        h: common_vendor.o((e) => changeletter(e)),
        i: duration2.value,
        j: common_vendor.o((e) => changeheight(e)),
        k: duration3.value,
        l: common_vendor.o(($event) => onChangtheme())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/pages/theme/index.vue"]]);
wx.createPage(MiniProgramPage);
