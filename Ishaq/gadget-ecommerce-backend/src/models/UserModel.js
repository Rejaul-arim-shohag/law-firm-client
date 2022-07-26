const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    phone: String,
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
        unique: true,
        required: true,
        validate: {
            validator: (v) => {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
            },
            message: "Minimum eight characters, at least one letter and one number"
        }
    },
    isAdmin: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() }


})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;


