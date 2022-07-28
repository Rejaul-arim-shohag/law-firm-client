const mongoose = require("mongoose");
const slotSchema = mongoose.Schema({
    ServiceID:{type: Number, require:true},
    SlotID: { type: Number, default: function () { return Math.floor(Date.now() / 1000) } },
    startTime: { type: Date, require:true},
    endTime: { type: Date, require:true},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const slotModel = mongoose.model("slots", slotSchema);
module.exports = slotModel;