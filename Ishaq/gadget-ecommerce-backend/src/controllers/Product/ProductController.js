const ProductModel = require("../../models/Product/ProductModel");

// add new product
exports.CreateProduct = (req, res) => {
    let productData = req.body;
    ProductModel.create(productData, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })
}
// read  products
exports.SelectProductsHome = async (req, res) => {
    let query = {};
    let projection = 'name slug discount price';
    ProductModel.find(query, projection, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })

}
exports.SelectProducts = async (req, res) => {
    let query = {};
    let projection = 'name slug discount price specifications colors galleryImg brand warranty details reviews faq homeImg category adminID viewCount';
    ProductModel.find(query, projection, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })

}
exports.SelectProduct = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name slug discount price specifications colors galleryImg brand warranty details reviews faq homeImg category adminID viewCount';
    ProductModel.findOne(query, projection, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })

}
// update  product
exports.UpdateProduct = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    ProductModel.updateOne(query, updateData, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })

}
// delete  product
exports.DeleteProduct = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    ProductModel.deleteOne(query, (e, data) => {
        if (e) {
            res.status(400).send({ success: false, data: e })
        } else {
            res.status(200).send({ success: true, data })

        }
    })

}