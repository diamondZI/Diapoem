"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.defineStore("counter", {
  state: () => ({
    theme: {
      backroundcolor: "rgb(255,250,240)",
      letter_spacing: "",
      line_height: "",
      color: ""
    }
  }),
  getters: {},
  actions: {
    onChangeBackroundcolor(value) {
      this.theme.backroundcolor = value;
    },
    onChangeletter_spacing(value) {
      this.theme.letter_spacing = value;
    },
    onChangeline_height(value) {
      this.theme.line_height = value;
    },
    onChangecolor(value) {
      this.theme.color = value;
    }
  }
});
const useThemeterStor = common_vendor.defineStore("Theme", () => {
  const theme = common_vendor.ref({
    backroundcolor: "rgb(255,250,240)",
    letter_spacing: "24px"
  });
  const onChangeBackroundcolor = (value) => {
    theme.value.backroundcolor = value;
  };
  return { theme, onChangeBackroundcolor };
});
exports.useThemeterStor = useThemeterStor;
