const OrderModel = require("../models/OrderModel");

// add new Order
exports.CreateOrder = (req, res) => {
    let data = req.body;
    OrderModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Order
exports.SelectOrders = async (req, res) => {
    let query = {};
    let projection = 'customerId productId color quantity total status';
    OrderModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectOrder = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'customerId productId color quantity total status';
    OrderModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  Order
exports.UpdateOrder = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    OrderModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Order
exports.DeleteOrder = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    OrderModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}