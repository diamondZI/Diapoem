"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
if (!Math) {
  Poem();
}
const Poem = () => "../../components/Poem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Theme = store_theme.useThemeterStor();
    const duration = common_vendor.ref(24);
    const duration2 = common_vendor.ref(0);
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
    const bgroundColor = ["rgb(27,59,100)", "rgb(255,250,240)", "rgb(226,203,173)", "rgb(199, 237, 204)", "rgb(220, 226, 241)"];
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          poem: content
        }),
        b: common_vendor.f(bgroundColor, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => changeColor(item), index),
            b: item,
            c: index
          };
        }),
        c: common_vendor.t(duration.value),
        d: common_vendor.o((e) => changeSize(e)),
        e: duration.value,
        f: common_vendor.t(duration2.value),
        g: common_vendor.o((e) => changeletter(e)),
        h: duration2.value,
        i: common_vendor.t(duration3.value),
        j: common_vendor.o((e) => changeheight(e)),
        k: duration3.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/pages/theme/index.vue"]]);
wx.createPage(MiniProgramPage);
