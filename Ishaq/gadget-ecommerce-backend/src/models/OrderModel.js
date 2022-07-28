const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customerId:{ type: String, require: true },
    productId:{ type: String, require: true },
    color:{ type: String, require: false },
    quantity:{ type: String, require: true },
    total:{ type: String, require: true },
    status:{ type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;


