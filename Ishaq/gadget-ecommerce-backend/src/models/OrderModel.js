const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderId:String,
    customerId:String,
    productId:String,
    color:String,
    quantity:String,
    total:String,
    createdDate: { type: Date, default: Date.now() }

})

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;


