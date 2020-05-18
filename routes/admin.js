const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStratedy = require('passport-local').Strategy;
const multer = require('multer');
let Uploads = require('../model/Upload');
let Admin = require('../model/Admin');

var storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, '../uploads');
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage:storage
}).fields({
    name:'file'

})

router.route.get('/', function(req,res){

})

router.route.post('/login',function(req,res){
    const {username, password} = req.body;

    let errors = [];

    if(!username || password){
        
        errors.push({msg:"Please fill in all the fields"});
    }

    
});


router.route.post('/upload',upload.single(' ') ,function(req,res){
    
    const errors =[];

    upload(req,res,function(err){
        if(err){
            errors.push({msg:err});
        }
        else{
            console.log('Uploading File....');
            var brief_casefile= req.file.filename;
        }
    })


});

router.route.get('/:id').get((req,res)=>{
    Uploads.findById(req,params.id)
    .then(upload=>res.json(upload))
    .catch(err=>res.status(400).json('Error: '+err));
});


router.route.delete('/:id').get((req,res)=>{
    Uploads.findByIdAndDelete(req,params.id)
    .then(upload=>res.json('File Deleted'))
    .catch(err=>res.status(400).json('Error: '+err));
});


router.route.get('/:id').get((req,res)=>{
    Uploads.findById(req,params.id)
    .then(upload=>res.json(upload))
    .catch(err=>res.status(400).json('Error: '+err));
});


module.exports.router;