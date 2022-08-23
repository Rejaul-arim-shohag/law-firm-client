const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customerID:{ type: String, require: true },
    allProductsID:{ type: Array, require: true },
    color:{ type: String, require: false },
    quantity:{ type: Number, require: true },
    total:{ type: Number, require: true },
    status:{ type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;


