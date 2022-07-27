const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
    email:{ type: String},
    serviceName: { type: String},
    apointmentDate: { type: string},
    Weekday: { type: string},
    time: { type: string},
    name: { type: string},
    age: { type: string},
    phone: { type: string},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const appointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = appointmentModel;