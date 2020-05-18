const mongoose = require('mongoose');
var bcrypt= require('bcryptjs');

var AdminSchema = mongoose.Schema({
    username:{
        type:String,
        index:true,
        required:true
    },
    password:{
        type:String,
        index:true,
        required:true
    }
});

var Admin = module.exports = mongoose.model('Admin', AdminSchema);

