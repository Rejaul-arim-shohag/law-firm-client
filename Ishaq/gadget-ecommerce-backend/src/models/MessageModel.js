const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    message: String,
    status:String,
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const MessageModel = mongoose.model('message', messageSchema);

module.exports = MessageModel;


