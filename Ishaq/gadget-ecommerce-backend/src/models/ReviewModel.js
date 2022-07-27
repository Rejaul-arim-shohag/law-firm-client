const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name: { type: String, require: true },
    designation: { type: String, require: true },
    review: { type: String, require: true },
    img: { type: String, require: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})

const ReviewModel = mongoose.model('reviews', reviewSchema);

module.exports = ReviewModel;

 

