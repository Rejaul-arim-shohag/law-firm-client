const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
    title: String,
    des: String,
    img: String,
    createdDate: { type: Date, default: Date.now() }
})

const BrandsModel = mongoose.model('brands', brandSchema);

module.exports = BrandsModel;


