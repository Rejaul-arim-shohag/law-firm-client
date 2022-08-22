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
exports.SelectCategoryList = async (req, res) => {
    try {
        let { pageNo, perPage, searchKeyword } = req.params
        let skipRow = (+pageNo - 1) * (+perPage)
        let data;
        if (searchKeyword !== "null") {
            let searchRgx = { "$regex": searchKeyword, "$options": "i" }
            let searchQuery = { $or: [{ name: searchRgx }] }
            data = await CategoryModel.aggregate([
                {
                    $facet: {
                        total: [{ $match: searchQuery }, { $count: "count" }],
                        rows: [{ $match: searchQuery }, { $sort: { _id: -1 } }, { $skip: skipRow }, { $limit: +perPage }]
                    }
                }
            ])
        } else {
            data = await CategoryModel.aggregate([
                {
                    $facet: {
                        total: [{ $count: "count" }],
                        rows: [{ $sort: { _id: -1 } }, { $skip: skipRow }, { $limit: +perPage }]
                    }
                }
            ])
        }
        res.send({ success: true, result: data })
    } catch (error) {
        res.send({ success: false, result: error })
    }
}

// read  Category
exports.SelectCategories = async (req, res) => {
    let query = {};
    let projection = 'title  img';
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
    let projection = 'title  img';
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
exports.DeleteMultiple = async (req, res) => {
    try {
        let data = req.body;
        let result = await CategoryModel.deleteMany({ name: { $in: data } })
        res.send({ success: true, result })
    } catch (error) {
        res.send({ success: false, result: error })
    }
}