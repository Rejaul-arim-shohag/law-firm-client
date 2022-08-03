const ReviewModel = require("../models/ReviewModel");

// add new Review
exports.CreateReview = (req, res) => {
    let data = req.body;
    ReviewModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Review
exports.SelectReviews = async (req, res) => {
    let query = {};
    let projection = 'name designation review img createdDate updatedDate';
    ReviewModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectReview = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name designation review img createdDate updatedDate';
    ReviewModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  Review
exports.UpdateReview = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    ReviewModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Review
exports.DeleteReview = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    ReviewModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}