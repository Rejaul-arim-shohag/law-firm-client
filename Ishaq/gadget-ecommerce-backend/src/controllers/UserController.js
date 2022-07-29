const UserModel = require("../models/UserModel");

// add new User
exports.CreateUser = (req, res) => {
    let data = req.body;
    UserModel.create(data, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })
}
// read  User
exports.SelectUsers = async (req, res) => {
    let query = {};
    let projection = 'name phone email password isAdmin createdDate updatedDate';
    UserModel.find(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
exports.SelectUser = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let projection = 'name phone email password isAdmin createdDate updatedDate';
    UserModel.findOne(query, projection, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

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
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}
// delete  User
exports.DeleteUser = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    UserModel.deleteOne(query, (e, result) => {
        if (e) {
            res.status(400).send({ status: 'failed', result: e })
        } else {
            res.status(200).send({ status: 'success', result })

        }
    })

}