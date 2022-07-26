const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    price:String,
    discount: String,
    display: String,
    camera: String,
    memory: Array,
    color: Array,
    sliderImages: Array,
    brand: String,
    warranty: String,
    review:String,
    details:Array,
    reviews:Array,
    faq:Array,
    img:String,
    createdDate: { type: Date, default: Date.now() }

})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;


