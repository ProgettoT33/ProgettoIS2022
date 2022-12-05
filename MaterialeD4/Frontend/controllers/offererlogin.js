const Offerer = require("../models/offerer");

const loginOfferer = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email);
    console.log(password);

    Offerer.findOne({email : email, password : password}, (err, data) => {
        if(!data){
            return res.json({message : "Wrong credentials"});
        }else{
            return res.json({message : "OK"})
        }
    })
};

module.exports = {
    loginOfferer
}