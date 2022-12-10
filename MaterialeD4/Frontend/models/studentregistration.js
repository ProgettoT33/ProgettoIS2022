const mongoose = require("mongoose");

const studentregistrationSchema = new mongoose.Schema({
    typeofuser : {type : Boolean, default : true}, 
    termsaccepted : Boolean,
    university : {type : String, required : true}
});

const Studentregistration = mongoose.model('Studentregistration', studentregistrationSchema);
module.exports = Studentregistration;