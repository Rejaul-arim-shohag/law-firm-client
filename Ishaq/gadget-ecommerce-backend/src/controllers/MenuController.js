const MenuModel = require("../models/MenuModel");

// add new Menu
exports.CreateMenu = (req, res) => {
    let data = req.body;
    MenuModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  Menu
exports.SelectMenus = async (req, res) => {
    let query = {};
    let projection = 'title link';
    MenuModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectMenu = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'title link';
    MenuModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// update  Menu
exports.UpdateMenu = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    MenuModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  Menu
exports.DeleteMenu = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    MenuModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}