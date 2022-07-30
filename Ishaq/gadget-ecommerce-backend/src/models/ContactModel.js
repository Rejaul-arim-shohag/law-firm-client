const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    location: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    facebook: { type: String, require: false },
    twitter: { type: String, require: false },
    youtube: { type: String, require: false },
    linkedIn: { type: String, require: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const ContactModel = mongoose.model('contacts', contactSchema);

module.exports = ContactModel;


