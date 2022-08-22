const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  upVotes: {
    type: Array,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model('Comment', CommentSchema)
