"use strict";

const mongoose = require("mongoose");
const Ban = mongoose.model("Ban");

exports.get = async () => {
  const res = await Ban.find({}, "phoneNumber");
  return res;
};

exports.getExist = async (phoneNumber) => {
  const user = await Ban.findOne({ phoneNumber });
  return user;
};

exports.create = async (data) => {
  var ban = await new Ban(data);
  await ban.save();
};

exports.delete = async (id) => {
  await Ban.findByIdAndRemove(id);
};