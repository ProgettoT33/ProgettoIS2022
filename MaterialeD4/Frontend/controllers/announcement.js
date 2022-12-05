const Announcement = require("../models/announcement");
const Student = require("../models/student");
const getAllAnnouncement = (req, res, next) => {
    Announcement.find({}, (err, data) => {
        if(err) return res.json({Error : err});
        return res.json(data);
    })
};

const newAnnouncement = (req, res, next) => {
    var hour1 = req.body.hour1;
    var hour2 = req.body.hour2;
    var minutes1 = req.body.minutes1;
    var minutes2 = req.body.minutes2;
    var day = req.body.day;
    var month = req.body.month;
    var year = req.body.year;
    if(hour1 < 0 || hour1 > 23){
        return res.json({message : "Wrong hour start time inserted"});
    }
    if(hour2 < 0 || hour2 > 23){
        return res.json({message : "Wrong hour end time inserted"});
    }
    if(minutes1 < 0 || minutes1 > 59){
        return res.json({message : "Wrong minute start time inserted"});
    }
    if(minutes2 < 0 || minutes2 > 59){
        return res.json({message : "Wrong hour end time inserted"});
    }
    if(hour1 > hour2){
        return res.json({message : "Wrong hours inserted"});
    }else if(hour1 == hour2 && minutes1 > minutes2){
        return res.json({message : "Wrong minutes inserted"});
    }
    if(year < 1850){
        return res.json({message : "Wrong year inserted"});
    }
    if(month < 1 || month > 12){
        return res.json({message : "Wrong month inserted"});
    }
    if(day < 1 || day > 31){
        return res.json({message : "Wrong day inserted"});
    }
    Announcement.findOne({typeofwork : req.body.typeofwork}, (err, data) => {
        if(!data){
            const newAnnouncement = new Announcement({
                typeofwork : req.body.typeofwork,
                city : req.body.city,
                date : {
                    day : req.body.day,
                    month : req.body.month,
                    year : req.body.year
                },
                starttime : {
                    hour : req.body.hour1,
                    minutes : req.body.minutes1
                },
                endttime : {
                    hour : req.body.hour2,
                    minutes : req.body.minutes2
                },
                typeofpayment : req.body.typeofpayment,
                description : req.body.description,
                offereremail : req.body.offereremail
            })
            newAnnouncement.save((err, data) => {
                if(err) return res.json({Error : err});
                return res.json({message : "OK"});
            })
        }else{
            if(err) return res.json("Something went wrong, please try again: " + err);
            return res.json({message: "Announcement already exists"});
        }
    })
};


const deleteAllAnnouncement = (req, res, next) => {
    Announcement.deleteMany({}, (err, data) => {
        if(err) return res.json({message : "Complete delete failed"});
        return res.json({message : "Complete delete successful"});
    })
};


const getOneAnnouncement = (req, res, next) => {
    let typeofwork = req.params.typeofwork;

    Announcement.findOne({typeofworn : typeofwork}, (err, data) => {
        if(err || !data) return res.json({message : "Announcement doesn't exist"});
        return res.json(data);
    })
};


const deleteOneAnnouncement = (req, res, next) => {
    let typeofwork = req.params.typeofwork;

    Announcement.deleteOne({typeofwork : typeofwork}, (err, data) => {
        if(err || !data) return res.json({message : "Announcement doesn't exist"});
        return res.json(data);
    })
};

const printSetOfCandidates = (req, res, next) => {
    let typeofwork = req.params.typeofwork;

    Announcement.findOne({typeofwork : typeofwork}, (err, data) => {
        if(err || !data) return res.json({message : "Announcement doesn't exist"});
        return res.json(data.candidates);
    })
}

const addCandidate = (req, res, next) => {
    let typeofwork = req.params.typeofwork;

    let email = req.query.email;

    Student.findOne({email : email}, (err, data) => {
        if(err || !data) return res.json({message : "Student doesn't exist"});
    })

    Announcement.findOne({typeofwork : typeofwork}, (err, data) => {
        if(err || !data) return res.json({message : "Announcement doesn't exist"});
        data.candidates.push({emailcandidate : email});
        data.save();
        return res.json(data);
    })
}

module.exports = {
    getAllAnnouncement,
    newAnnouncement, 
    deleteAllAnnouncement,
    getOneAnnouncement, 
    deleteOneAnnouncement,
    printSetOfCandidates,
    addCandidate
};