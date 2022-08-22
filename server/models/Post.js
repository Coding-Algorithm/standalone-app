const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  poster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model('Post', PostSchema)
