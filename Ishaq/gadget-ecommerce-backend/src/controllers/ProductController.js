const ProductModel = require("../models/ProductModel");

// add new product
exports.CreateProduct = (req, res) => {
    let product = req.body;
    ProductModel.create(product, (e,data) => {
        if (e) {
            res.status(400).send({ status: 'failed', data: e })
        }else{
            res.status(201).send({ status: 'success', data })

        }
    })

}
// read  products
exports.SelectProducts = (req, res) => {


}
// update  product
exports.UpdateProduct = (req, res) => {

}
// delete  product
exports.DeleteProduct = (req, res) => {


}