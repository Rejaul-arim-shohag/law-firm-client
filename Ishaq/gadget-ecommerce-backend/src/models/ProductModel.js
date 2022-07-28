const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    slug: { type: String, require: true },
    discount: { type: String, require: true },
    price: { type: String, require: true },
    specifications: { type: Array, require: false },
    colors: { type: Array, require: true }, /*color name and hex code*/
    galleryImg: { type: Array, require: true },
    brand: { type: String, require: true }, /*brand should be relational*/
    warranty: { type: String, require: true },
    details: { type: Array, require: true },
    reviews: { type: Array, require: false },/*reviews should be relational*/
    faq: { type: Array, require: false },
    homeImg: { type: String, require: true },
    category: { type: String, require: true }, /*category should be relational*/
    adminId: { type: String, require: true },
    viewCount: { type: Number, require: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;

    // display: String,
    // camera: String,
    // memory: Array, /* price should be change depends on memory */
