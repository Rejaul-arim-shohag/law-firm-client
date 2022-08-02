const UserModel = require("../models/UserModel");

// add new User
exports.CreateUser = (req, res) => {
    let data = req.body;
    UserModel.create(data, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })
}
// read  User
exports.SelectUsers = async (req, res) => {
    let query = {};
    let projection = 'name phone email password isAdmin createdDate updatedDate';
    UserModel.find(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
exports.SelectUser = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name phone email password isAdmin createdDate updatedDate';
    UserModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// update  User
exports.UpdateUser = (req, res) => {
    // let id = req.query.id;
    let id = req.params.id;
    let query = { _id: id }
    let updateData = req.body;
    UserModel.updateOne(query, updateData, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}
// delete  User
exports.DeleteUser = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    UserModel.deleteOne(query, (e, result) => {
        if (e) {
            res.send({ success: false, result: e })
        } else {
            res.send({ success: true, result })

        }
    })

}