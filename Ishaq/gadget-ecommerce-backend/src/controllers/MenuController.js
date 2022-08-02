const MenuModel = require("../models/MenuModel");

// add new Menu
exports.CreateMenu = (req, res) => {
    let data = req.body;
    MenuModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  Menu
exports.SelectMenus = async (req, res) => {
    let query = {};
    let projection = 'title link';
    MenuModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectMenu = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'title link';
    MenuModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

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
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  Menu
exports.DeleteMenu = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    MenuModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}