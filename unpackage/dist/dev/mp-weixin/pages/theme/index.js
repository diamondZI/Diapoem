"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Poem();
}
const Poem = () => "../../components/Poem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
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
      console.log(color);
      BG.value = color;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          poem: content
        }),
        b: BG.value,
        c: common_vendor.f(bgroundColor, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => changeColor(item), index),
            b: item,
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/pages/theme/index.vue"]]);
wx.createPage(MiniProgramPage);
