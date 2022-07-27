const OrderModel = require("../models/OrderModel");

// add new Order
exports.CreateOrder = (req, res) => {
    let data = req.body;
    OrderModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Order
exports.SelectOrders = async (req, res) => {
    let query = {};
    let projection = '';
    OrderModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectOrder = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    OrderModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

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
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Order
exports.DeleteOrder = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    OrderModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}