const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    location: { type: String, require: true },
    email: { type: String, require: true },
    phone: String,
    facebook: String,
    twitter: String,
    youtube: String,
    linkedIn: String,
    createdDate: { type: Date, default: Date.now() }
})

const ContactModel = mongoose.model('contacts', contactSchema);

module.exports = ContactModel;


