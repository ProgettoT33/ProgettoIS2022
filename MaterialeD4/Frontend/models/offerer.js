const mongoose = require("mongoose");

const offererSchema = new mongoose.Schema({
    name : {type : String, required : true},
    surname : {type : String, required : true},
    email : {type : String, required : true},
    idtelegram : String, 
    confirmedaccount : {type : Boolean, default : false},
    password : {type : String, required : true},
    relatedStudentsEmail : [String],
    averagevotes : {type : Number, default : 0},
    description : String
});

const Offerer = mongoose.model('Offerer', offererSchema);
module.exports = Offerer;