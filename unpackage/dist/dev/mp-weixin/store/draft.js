"use strict";
const common_vendor = require("../common/vendor.js");
const useDarftStore = common_vendor.defineStore("DRAFT", () => {
  const Darft = common_vendor.ref(JSON.parse(common_vendor.index.getStorageSync("Darft")).key || []);
  const PUSHDARFT = (data) => {
    Darft.value.push(data);
    console.log(Darft.value);
    common_vendor.index.setStorageSync("Darft", JSON.stringify({
      "key": Darft.value
    }));
    Get();
  };
  const Get = () => {
    console.log(Darft.value);
  };
  return { Get, PUSHDARFT, Darft };
});
exports.useDarftStore = useDarftStore;
