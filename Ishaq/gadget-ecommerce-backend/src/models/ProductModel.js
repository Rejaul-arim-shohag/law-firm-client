const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    slug:String,
    discount: String,
    price:String,
    // display: String,
    // camera: String,
    // memory: Array, /* price should be change depends on memory */
    specifications:Array,
    colors: Array, /*color name and hex code*/
    galleryImg: Array,
    brand: String, /*brand should be relational*/
    warranty: String,
    details:Array,
    reviews:Array,/*reviews should be relational*/
    faq:Array,
    homeImg:String,
    category:String, /*category should be relational*/
    adminID:String,
    viewCount:String,
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;


