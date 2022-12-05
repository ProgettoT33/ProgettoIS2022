const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    typeofuser : {type : Boolean, required : true},
    email : {type : String, required : true},
    numberofattempts : {type : Number, default : 0},
    endblock : {
        hour : {type : Number, required : true},
        minutes : {type : Number, required : true}
    },
    blockedauthentication : {type : Boolean, default : false}
});

const Login = mongoose.model('Login', loginSchema);
module.exports = Login;