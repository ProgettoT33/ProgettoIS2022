const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
    emailstudent : {type : String, required : true},
    amount : {type : Number, required : true},
    typeofpayment: {
        type: String,
        enum : ["contanti","paypal"]
    },
    note : String
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;