const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name: String,
    designation: String,
    review: String,
    img: String,
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const ReviewModel = mongoose.model('reviews', reviewSchema);

module.exports = ReviewModel;


