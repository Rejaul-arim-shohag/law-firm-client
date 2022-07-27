const mongoose = require('mongoose')

const PromotionSchema = mongoose.Schema({
    img:String,
    title:String,
    des:String,
    timer:String,
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const PromotionModel = mongoose.model('promotion', PromotionSchema);

module.exports = PromotionModel;


