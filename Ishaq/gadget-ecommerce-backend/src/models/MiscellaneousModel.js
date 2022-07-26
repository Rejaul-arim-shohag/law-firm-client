const mongoose = require('mongoose')

const miscellaneousSchema = mongoose.Schema({


    createdDate: { type: Date, default: Date.now() }

})

const MiscellaneousModel = mongoose.model('CTA', miscellaneousSchema);

module.exports = MiscellaneousModel;


