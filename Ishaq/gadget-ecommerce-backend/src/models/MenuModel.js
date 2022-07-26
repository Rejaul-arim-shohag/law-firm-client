const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
   title: { type: String, require: true },
   link: { type: String, require: true },
   createdDate: { type: Date, default: Date.now() }

})

const MenuModel = mongoose.model('menu', menuSchema);

module.exports = MenuModel;


