"use strict";
const common_vendor = require("../common/vendor.js");
const useThemeterStor = common_vendor.defineStore("Theme", () => {
  const theme = common_vendor.ref({
    "--backroundcolor": "rgb(255,250,240)",
    "--size": "24px",
    "--letter_spacing": "0px",
    "--line_height": "32px"
  });
  const onChangeBackroundcolor = (value) => {
    theme.value["--backroundcolor"] = value;
  };
  const onChangesize = (value) => {
    theme.value["--size"] = value + "px";
  };
  const onChangeletter = (value) => {
    theme.value["--letter_spacing"] = value + "px";
  };
  const onChangeheight = (value) => {
    theme.value["--line_height"] = value + "px";
  };
  const onChangtheme = (id) => {
    common_vendor.index.setStorage({
      data: theme.value,
      key: "Theme"
    });
  };
  const GetTheme = () => {
    const a = common_vendor.index.getStorageSync("Theme");
    theme.value = a;
  };
  return { theme, onChangeBackroundcolor, onChangesize, onChangeheight, onChangeletter, onChangtheme, GetTheme };
});
exports.useThemeterStor = useThemeterStor;
