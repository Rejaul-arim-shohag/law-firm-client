const BrandsModel = require("../models/BrandsModel");

// add new Brand
exports.CreateBrand = (req, res) => {
    let data = req.body;
    BrandsModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Brands
exports.SelectBrands = async (req, res) => {
    let query = {};
    let projection = '';
    BrandsModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectBrand = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    BrandsModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// update  Brands
exports.UpdateBrand = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    BrandsModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Brands
exports.DeleteBrand = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    BrandsModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}