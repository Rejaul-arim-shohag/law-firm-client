const mongoose = require('mongoose')

const miscellaneousSchema = mongoose.Schema({


    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const MiscellaneousModel = mongoose.model('miscellaneous', miscellaneousSchema);

module.exports = MiscellaneousModel;


