const mongoose = require("mongoose");
const planSchema = mongoose.Schema({
    planName: { type: String},
    fee: { type: String},
    extrabenifit: { type: String},
    services: { type: Array},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const planModel = mongoose.model("plans", planSchema);
module.exports = planModel;