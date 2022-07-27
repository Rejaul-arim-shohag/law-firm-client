const mongoose = require("mongoose");
const slotSchema = mongoose.Schema({
    startTime: { type: String},
    endTime: { type: String },
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const slotModel = mongoose.model("slot", slotSchema);
module.exports = slotModel;