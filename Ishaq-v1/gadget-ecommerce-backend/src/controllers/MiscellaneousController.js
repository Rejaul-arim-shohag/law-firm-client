const MiscellaneousModel = require("../models/MiscellaneousModel");

// add new Miscellaneous
exports.CreateMiscellaneous = (req, res) => {
    let data = req.body;
    MiscellaneousModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Miscellaneous
exports.SelectAllMiscellaneous = async (req, res) => {
    let query = {};
    let projection = '';
    MiscellaneousModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectMiscellaneous = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = '';
    MiscellaneousModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  Miscellaneous
exports.UpdateMiscellaneous = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    MiscellaneousModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Miscellaneous
exports.DeleteMiscellaneous = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    MiscellaneousModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}