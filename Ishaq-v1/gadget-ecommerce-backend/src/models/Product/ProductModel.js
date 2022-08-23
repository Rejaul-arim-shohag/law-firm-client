const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const dataSchema = mongoose.Schema({
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true },
    discount: { type: Number, require: true },
    price: { type: Number, require: true },
    specifications: { type: Object, require: false },
    colors: { type: Array, require: true }, /*color name and hex code*/
    galleryImg: { type: Array, require: true },
    brandID: { type: String, require: true }, /*brand should be relational*/
    warranty: { type: String, require: true },
    details: { type: Object, require: false },
    reviews: { type: Object, require: false },/*reviews should be relational*/
    faq: { type: Object, require: false },
    homeImg: { type: String, require: true },
    category: { type: String, require: true }, /*category should be relational*/
    adminId: { type: String, require: true },
    availability: { type: Boolean, default: true },
    viewCount: { type: Number, require: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

dataSchema.plugin(uniqueValidator, { message: 'Hi,{VALUE}..you already exist in our database.' });


const ProductModel = mongoose.model('products', dataSchema);

module.exports = ProductModel;

    // display: String,
    // camera: String,
    // memory: Array, /* price should be change depends on memory */
