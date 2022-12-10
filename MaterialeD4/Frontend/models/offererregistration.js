const mongoose = require("mongoose");

const offererregistrationSchema = new mongoose.Schema({
    typeofuser : {type : Boolean, default : false}, 
    termsaccepted : Boolean,
    name : {type : String, required : true},
    surname : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    confirmationpassword : {type : String, required : true},
    idtelegram : String
});

const Offererregistration = mongoose.model('Offererregistration', offererregistrationSchema);
module.exports = Offererregistration;