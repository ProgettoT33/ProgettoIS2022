const mongoose = require("mongoose");

const operativesystemSchema = new mongoose.Schema({
    //DOVREBBE ESSERCI L'UTENTE DI RIFERIMENTO?
    language : {type : Boolean, default : false},
    syscolor : {type : Boolean, default : false}
});

const Operativesystem = mongoose.model('Operativesysten', operativesystemSchema);
module.exports = Operativesystem;