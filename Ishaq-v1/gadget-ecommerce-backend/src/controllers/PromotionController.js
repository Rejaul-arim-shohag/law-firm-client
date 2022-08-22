const PromotionModel = require("../models/PromotionModel");

// add new Promotion
exports.CreatePromotion = (req, res) => {
    let data = req.body;
    PromotionModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Promotion
exports.SelectPromotions = async (req, res) => {
    let query = {};
    let projection = 'img title des createdDate updatedDate';
    PromotionModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectPromotion = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'img title des createdDate updatedDate';
    PromotionModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

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
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Promotion
exports.DeletePromotion = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    PromotionModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}