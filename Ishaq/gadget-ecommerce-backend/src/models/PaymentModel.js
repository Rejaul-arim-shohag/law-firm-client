const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    transactionID: { type: String, require: true },
    customerID: { type: String, require: true },
    amount: { type: Number, require: true },
    coupon: { type: String, require: false },
    allProductsID: { type: Array, require: true },
    paymentMethod:{ type: String, require: true },
    status:{ type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const PaymentModel = mongoose.model('payment', paymentSchema);

module.exports = PaymentModel;


 