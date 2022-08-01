const BrandModel = require("../../models/Product/BrandModel");

// add new Brand
exports.CreateBrand = (req, res) => {
    let data = req.body;
    BrandModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })
}
// read  Brands
exports.SelectBrands = async (req, res) => {
    let query = {};
    let projection = 'title des img';
    BrandModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
exports.SelectBrand = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'title des img';
    BrandModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
// update  Brands
exports.UpdateBrand = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    BrandModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
// delete  Brands
exports.DeleteBrand = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    BrandModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}