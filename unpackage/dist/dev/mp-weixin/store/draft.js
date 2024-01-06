"use strict";
const common_vendor = require("../common/vendor.js");
const useDarftStore = common_vendor.defineStore("DRAFT", () => {
  const Darft = common_vendor.ref(JSON.parse(common_vendor.index.getStorageSync("Darft")).key ?? []);
  const PUSHDARFT = (data) => {
    Darft.value.push(data);
    common_vendor.index.setStorageSync("Darft", JSON.stringify({
      "key": Darft.value
    }));
  };
  const DeleteDarft = (id) => {
    Darft.value.splice(id, 1);
    common_vendor.index.setStorageSync("Darft", JSON.stringify({
      "key": Darft.value
    }));
  };
  return { PUSHDARFT, Darft, DeleteDarft };
});
exports.useDarftStore = useDarftStore;
