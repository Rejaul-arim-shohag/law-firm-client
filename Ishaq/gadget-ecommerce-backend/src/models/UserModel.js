const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    phone: Number,
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
    password: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
            },
            message: "Minimum eight characters, at least one letter and one number"
        }
    },
    isAdmin: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }
}, { versionKey: false })

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;


