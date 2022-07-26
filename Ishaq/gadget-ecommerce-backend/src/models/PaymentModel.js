const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    transactionID: String,
    customerID: String,
    amount: String,
    productsID: Array,
    paymentMethod:String,
    createdDate: { type: Date, default: Date.now() }

})

const PaymentModel = mongoose.model('payment', paymentSchema);

module.exports = PaymentModel;


