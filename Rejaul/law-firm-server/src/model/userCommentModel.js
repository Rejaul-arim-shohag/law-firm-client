const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
    email: { type: String },
    comment: { type: String },
    createDate: { type: Date, default: Date.now() },
}, { versionKey: false });

const commentModel = mongoose.model("comments", commentSchema);
module.exports = commentModel;