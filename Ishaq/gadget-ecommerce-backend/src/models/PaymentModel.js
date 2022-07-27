const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    transactionId: { type: String, require: true },
    customerId: { type: String, require: true },
    amount: { type: String, require: true },
    coupon: { type: String, require: false },
    productsId: { type: Array, require: true },
    paymentMethod:{ type: String, require: true },
    status:{ type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }


})

const PaymentModel = mongoose.model('payment', paymentSchema);

module.exports = PaymentModel;


 