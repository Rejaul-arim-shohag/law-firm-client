const StatModel = require("../models/StatModel");

// add new Stat
exports.CreateStat = (req, res) => {
    let data = req.body;
    StatModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Stat
exports.SelectStats = async (req, res) => {
    let query = {};
    let projection = 'title stat createdDate updatedDate';
    StatModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectStat = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'title stat createdDate updatedDate';
    StatModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  Stat
exports.UpdateStat = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    StatModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Stat
exports.DeleteStat = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    StatModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}