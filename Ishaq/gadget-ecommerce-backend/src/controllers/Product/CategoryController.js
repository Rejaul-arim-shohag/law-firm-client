const CategoryModel = require("../../models/Product/CategoryModel");

// add new Category
exports.CreateCategory = (req, res) => {
    let data = req.body;
    CategoryModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Categorys
exports.SelectCategories = async (req, res) => {
    let query = {};
    let projection = 'title des img';
    CategoryModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectCategory = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'title des img';
    CategoryModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  Categorys
exports.UpdateCategory = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    CategoryModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Categorys
exports.DeleteCategory = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    CategoryModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}