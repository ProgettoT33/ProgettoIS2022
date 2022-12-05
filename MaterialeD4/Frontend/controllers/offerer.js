const Offerer = require("../models/offerer");
const getAllOfferer = (req, res, next) => {
    Offerer.find({}, (err, data) => {
        if(err) return res.json({Error : err});
        return res.json(data);
    })
};


const deleteAllOfferer = (req, res, next) => {
    Offerer.deleteMany({}, (err, data) => {
        if(err) return res.json({message : "Complete delete failed"});
        return res.json({message : "Complete delete successful"});
    })
};


const deleteOneOfferer = (req, res, next) => {
    let email = req.params.email;

    Offerer.deleteOne({email : email}, (err, data) => {
        if(err || !data) return res.json({message : "Offerer doesn't exist"});
        return res.json(data);
    })
};

const setIdTelegram = (req, res, next) => {
    let email = req.params.email;

    Offerer.findOneAndUpdate({email : email}, {idtelegram : req.query.id}, {new: true}, function(err, response) {
    if (err) {
        return res.json({message : "Offerer doesn't exist"});
    } else {
        return res.json(response);
    }});
}

const setDescription = (req, res, next) => {
    let email = req.params.email;

    Offerer.findOneAndUpdate({email : email}, {description : req.query.description}, {new: true}, function(err, response) {
    if (err) {
        return res.json({message : "Offerer doesn't exist"});
    } else {
        return res.json(response);
    }});
}

const setName = (req, res, next) => {
    let email = req.params.email;

    Offerer.findOneAndUpdate({email : email}, {name : req.query.name}, {new: true}, function(err, response) {
    if (err) {
        return res.json({message : "Offerer doesn't exist"});
    } else {
        return res.json(response);
    }});
}

const setSurname = (req, res, next) => {
    let email = req.params.email;

    Offerer.findOneAndUpdate({email : email}, {surname : req.query.surname}, {new: true}, function(err, response) {
    if (err) {
        return res.json({message : "Offerer doesn't exist"});
    } else {
        return res.json(response);
    }});
}

const setPassword = (req, res, next) => {
    let email = req.params.email;
    let oldPassword = req.query.old;
    let newPassword = req.query.new;
    let newPasswordConfirm = req.query.newnew;

    Offerer.findOne({email : email}, (err, data) => {
        if(!data){
            return res.json({message : "Offerer doesn't exist"});
        }else if(!(data.password == oldPassword)){
            return res.json({message : "Wrong old password"});
        }
    })

    if(newPassword != newPasswordConfirm){
        return res.json({message : "Two new password are not equal"});
    }

    Offerer.findOneAndUpdate({email : email},{password : newPassword}, {new: true}, function(err, response) {
        if (err) {
            return res.json({message : "Offerer doesn't exist"});
        } else {
            return res.json(response);
        }});
}

const addRelatedStudents = (req, res, next) => {
    let email = req.params.emailO;

    Offerer.findOne({email : email}, (err, data) => {
        if(err || !data) return res.json({message : "Offerer doesn't exist"});
        data.relatedStudentsEmail.push(req.query.emailS);
        data.save();
        res.json(data);
    })
}

module.exports = {
    getAllOfferer,
    deleteAllOfferer,
    deleteOneOfferer,
    setIdTelegram,
    setDescription,
    setName, 
    setSurname,
    setPassword,
    addRelatedStudents
};