const PromotionModel = require("../models/PromotionModel");

// add new Promotion
exports.CreatePromotion = (req, res) => {
    let data = req.body;
    PromotionModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Promotion
exports.SelectPromotions = async (req, res) => {
    let query = {};
    let projection = '';
    PromotionModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectPromotion = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    PromotionModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// update  Promotion
exports.UpdatePromotion = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    PromotionModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Promotion
exports.DeletePromotion = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    PromotionModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}