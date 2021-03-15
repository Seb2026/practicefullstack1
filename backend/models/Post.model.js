const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  message: String,
});

module.exports = model("Post", postSchema);
