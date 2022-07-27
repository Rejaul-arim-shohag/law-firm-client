const PaymentModel = require("../models/PaymentModel");

// add new Payment
exports.CreatePayment = (req, res) => {
    let data = req.body;
    PaymentModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Payment
exports.SelectPayments = async (req, res) => {
    let query = {};
    let projection = '';
    PaymentModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectPayment = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    PaymentModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// update  Payment
exports.UpdatePayment = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    PaymentModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Payment
exports.DeletePayment = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    PaymentModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}