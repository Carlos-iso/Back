"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  country: {
    type: Number,
    required: true,
    match: /^[0-9]{2,3}$/,
  },
  ddd: {
    type: Number,
    required: true,
    match: /^[0-9]{2,3}$/,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    match: /^[0-9]{8,15}$/,
  },
});
module.exports = mongoose.model("Ban", schema);
