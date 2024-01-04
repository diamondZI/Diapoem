"use strict";
const common_vendor = require("../common/vendor.js");
const Getpoem = async (value, id) => {
  const db = common_vendor.$s.database();
  const res = await db.collection("user_poem").where({
    user_id: id
  }).get();
  value.value = res.result.data;
};
exports.Getpoem = Getpoem;
