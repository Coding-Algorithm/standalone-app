const mongoose = require("mongoose");

const ReplySchema = mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  commenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  reply: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model('Reply', ReplySchema)
