const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
   title: { type: String, require: true },
   stat: { type: String, require: true },
   createdDate: { type: Date, default: Date.now() },
   updatedDate: { type: Date, default: Date.now() }

})

const StatModel = mongoose.model('stat', statSchema);

module.exports = StatModel;

 

