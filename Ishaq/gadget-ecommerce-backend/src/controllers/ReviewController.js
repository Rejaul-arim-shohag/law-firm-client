const ReviewModel = require("../models/ReviewModel");

// add new Review
exports.CreateReview = (req, res) => {
    let data = req.body;
    ReviewModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Review
exports.SelectReviews = async (req, res) => {
    let query = {};
    let projection = 'name designation review img createdDate updatedDate';
    ReviewModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectReview = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name designation review img createdDate updatedDate';
    ReviewModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

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
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Review
exports.DeleteReview = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    ReviewModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}