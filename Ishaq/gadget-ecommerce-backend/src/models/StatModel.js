const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
   title: String,
   stat: String,
   createdDate: { type: Date, default: Date.now() }
})

const StatModel = mongoose.model('stat', statSchema);

module.exports = StatModel;


