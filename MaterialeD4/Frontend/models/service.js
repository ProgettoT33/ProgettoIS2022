const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    typeofwork : {type : String, required : true},
    city : {type : String, required : true},
    region : {type : String, required : true},
    date : {
        day : {type : Number, required : true},
        month : {type : Number, required : true},
        year : {type : Number, required : true}
    },
    starttime : {
        hour : {type : Number, required : true},
        minutes : {type : Number, required : true}
    },
    endttime : {
        hour : {type : Number, required : true},
        minutes : {type : Number, required : true}
    },
    typeofpayment: {
        type: String,
        enum : ["contanti","paypal"]
    },
    description : String,
    finished : {type : Boolean, default : false},
    paymentdone : {type : Boolean, default : false},
    studentemail : {type : String}
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;