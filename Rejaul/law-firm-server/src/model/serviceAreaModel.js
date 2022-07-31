const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
    Name:{type: String},
    photo:{type: String},
    description:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const serviceModel = mongoose.model("services", serviceSchema);
module.exports = serviceModel;