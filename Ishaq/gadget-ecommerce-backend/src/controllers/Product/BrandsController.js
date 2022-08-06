const BrandModel = require("../../models/Product/BrandModel");

// add new Brand
exports.CreateBrand = (req, res) => {
    let data = req.body;
    BrandModel.create(data, (e, result) => {
        // console.log('Error :: ', e, " ,Result :: ", result);
        if (e) {
            res.send({ success: false, result: e });
        } else {
            res.send({ success: true, result });
        }
    })
}
// read  Brands
exports.SelectBrandList = async (req, res) => {

    try {
        let { pageNo, perPage, searchKeyword } = req.params
        let skipRow = (+pageNo - 1) * (+perPage)
        // console.log('pageNo, perPage, searchKeyword ,skipRow', pageNo, perPage, searchKeyword,skipRow);
        let data;
        if (searchKeyword !== "null") {
            let searchRgx = { "$regex": searchKeyword, "$options": "i" }
            let searchQuery = { $or: [{ name: searchRgx }] }
            data = await BrandModel.aggregate([
                {
                    $facet: {
                        total: [{ $match: searchQuery }, { $count: "count" }],
                        rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: +perPage }]
                    }
                }
            ])
        } else {
            data = await BrandModel.aggregate([
                {
                    $facet: {
                        total: [{ $count: "count" }],
                        rows: [{ $skip: skipRow }, { $limit: +perPage }]
                    }
                }
            ])
        }

        res.send({ success: true, result: data })

    } catch (error) {
        res.send({ success: false, result: error })

    }

    // let projection = 'title des img';
    // BrandModel.find(query, projection, (e, result) => {
    //     if (e) {
    //         res.send({ success: false, result: e })
    //     } else {
    //         res.send({ success: true, result })

    //     }
    // })

}
exports.SelectBrands = async (req, res) => {
    let query = {};
    let projection = 'name des img';
    BrandModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectBrand = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name des img';
    BrandModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

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
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Brands
exports.DeleteBrand = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    BrandModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}