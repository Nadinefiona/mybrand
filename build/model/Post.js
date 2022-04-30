"use strict";

var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  image: {
    type: String,
    comment: String,
    like: Number
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Posts', PostSchema);