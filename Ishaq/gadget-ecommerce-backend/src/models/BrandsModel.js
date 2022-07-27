const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
    title: { type: String, require: true },
    des: { type: String, require: true },
    img: { type: String, require: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const BrandsModel = mongoose.model('brands', brandSchema);

module.exports = BrandsModel;


