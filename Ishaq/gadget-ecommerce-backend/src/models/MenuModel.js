const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
   title:String,
   link:String,
   createdDate: { type: Date, default: Date.now() }

})

const MenuModel = mongoose.model('menu', menuSchema);

module.exports = MenuModel;


