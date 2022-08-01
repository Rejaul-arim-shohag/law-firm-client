const MessageModel = require("../models/MessageModel");

// add new Message
exports.CreateMessage = (req, res) => {
    let data = req.body;
    MessageModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })
}
// read  Message
exports.SelectMessages = async (req, res) => {
    let query = {};
    let projection = 'name email message status';
    MessageModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
exports.SelectMessage = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name email message status';
    MessageModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
// update  Message
exports.UpdateMessage = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    MessageModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}
// delete  Message
exports.DeleteMessage = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    MessageModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ success: false, result: e })
        } else {
            res.status(200).send({ success: true, result })

        }
    })

}   