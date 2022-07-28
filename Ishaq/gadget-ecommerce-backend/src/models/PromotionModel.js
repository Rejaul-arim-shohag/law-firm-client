const mongoose = require('mongoose')

const PromotionSchema = mongoose.Schema({
    img:{ type: String, require: true },
    title:{ type: String, require: true },
    des:{ type: String, require: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const PromotionModel = mongoose.model('promotion', PromotionSchema);

module.exports = PromotionModel;

 

