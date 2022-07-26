const mongoose = require('mongoose')

const ctaSchema = mongoose.Schema({
    img:String,
    title:String,
    des:String,
    timer:String,
    createdDate: { type: Date, default: Date.now() }
})

const CTAModel = mongoose.model('CTA', ctaSchema);

module.exports = CTAModel;


