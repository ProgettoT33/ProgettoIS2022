const mongoose = require("mongoose");

const offererloginSchema = new mongoose.Schema({
    typeofuser : {type : Boolean, required : true},
    email : {type : String, required : true},
    numberofattempts : {type : Number, default : 0},
    endblock : {
        hour : {type : Number, required : true},
        minutes : {type : Number, required : true}
    },
    blockedauthentication : {type : Boolean, default : false},
    password : {type : String, required : true}
});

const Offererlogin = mongoose.model('Offererlogin', offererloginSchema);
module.exports = Offererlogin;