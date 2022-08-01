const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    name: { type: String, require: true, unique: true },
    des: { type: String, require: true },
    img: { type: String, require: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const BrandModel = mongoose.model('brands', dataSchema);

module.exports = BrandModel;


