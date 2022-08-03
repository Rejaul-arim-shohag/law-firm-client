const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const dataSchema = mongoose.Schema({
    name: { type: String, require: true, unique: true },
    des: { type: String, require: true },
    img: { type: String, require: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

dataSchema.plugin(uniqueValidator,{ message: 'Hi,{VALUE}..you already exist in our database.' });

const BrandModel = mongoose.model('brands', dataSchema);


module.exports = BrandModel;


