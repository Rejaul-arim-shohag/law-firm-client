const ContactModel = require("../models/ContactModel");

// add new Contact
exports.CreateContact = (req, res) => {
    let data = req.body;
    ContactModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Contact
exports.SelectContacts = async (req, res) => {
    let query = {};
    let projection = '';
    ContactModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectContact = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    ContactModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// update  Contact
exports.UpdateContact = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    ContactModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Contact
exports.DeleteContact = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    ContactModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}