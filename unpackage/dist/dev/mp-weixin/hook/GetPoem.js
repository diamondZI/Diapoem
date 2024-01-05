"use strict";
const common_vendor = require("../common/vendor.js");
const Getpoem = async (value, id) => {
  const db = common_vendor.$s.database();
  const res = await db.collection("user_poem").where({
    user_id: id
  }).get();
  value.value = res.result.data;
};
const time = (datetime) => {
  const date = new Date(datetime);
  let Y = date.getFullYear() + "-";
  let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  let D = date.getDate() + " ";
  return Y + M + D;
};
exports.Getpoem = Getpoem;
exports.time = time;
