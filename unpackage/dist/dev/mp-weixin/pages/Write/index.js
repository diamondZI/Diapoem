"use strict";
const common_vendor = require("../../common/vendor.js");
const store_draft = require("../../store/draft.js");
if (!Array) {
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (Poem + Opspringers + _easycom_uni_popup_message + _easycom_uni_popup)();
}
const Opspringers = () => "../../components/Opspringers/index.js";
const Poem = () => "../../components/Poem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const H = common_vendor.ref("0px");
    const TextTitle = common_vendor.ref("");
    const TextConet = common_vendor.ref("");
    const paragraphs = common_vendor.computed(() => {
      return TextConet.value.split("\n");
    });
    const Poemtodo = common_vendor.$s.importObject("poem");
    const poem = common_vendor.computed(() => {
      return {
        title: TextTitle.value,
        author: "西川",
        paragraphs: paragraphs.value
      };
    });
    const Darft = store_draft.useDarftStore();
    const Show = common_vendor.ref(false);
    const Auto = common_vendor.ref(false);
    common_vendor.ref("");
    const msg = common_vendor.reactive({
      msgType: "",
      messageText: ""
    });
    const message = common_vendor.ref(null);
    const callback = (e) => {
      const { height } = e.detail;
      console.log(height);
      H.value = height + "px";
    };
    const Clear = () => {
      Show.value = false;
      TextConet.value = "";
      TextTitle.value = "";
      messageToggle("success", "成功把他丢进了垃圾桶");
    };
    function messageToggle(type, TEXT) {
      msg.msgType = type;
      msg.messageText = TEXT;
      message.value.open();
    }
    const Showopen = () => {
      Show.value = true;
    };
    const Showclose = () => {
      Show.value = false;
    };
    const AddPoem = async () => {
      let res = await Poemtodo.Set(poem.value);
      console.log(res);
      messageToggle(res.ok === 200 ? "success" : "error", res.msg);
    };
    const DarftP = () => {
      Darft.PUSHDARFT(poem.value);
      messageToggle("success", "成功放入了草稿");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: Show.value
      }, Show.value ? {
        b: common_vendor.p({
          poem: common_vendor.unref(poem)
        }),
        c: common_vendor.p({
          Showclose,
          AddPoem
        })
      } : {}, {
        d: common_vendor.p({
          type: msg.msgType,
          message: msg.messageText,
          duration: 2e3
        }),
        e: common_vendor.sr(message, "e9a32d65-2", {
          "k": "message"
        }),
        f: common_vendor.p({
          type: "message"
        }),
        g: common_vendor.o(callback),
        h: !Auto.value,
        i: TextTitle.value,
        j: common_vendor.o(($event) => TextTitle.value = $event.detail.value),
        k: TextConet.value,
        l: common_vendor.o(($event) => TextConet.value = $event.detail.value),
        m: common_vendor.o(($event) => Showopen()),
        n: common_vendor.o(($event) => Clear()),
        o: common_vendor.o(($event) => DarftP()),
        p: H.value
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9a32d65"], ["__file", "D:/koajs/DiaPoem/pages/Write/index.vue"]]);
wx.createPage(MiniProgramPage);
