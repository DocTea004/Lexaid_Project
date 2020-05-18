const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStratedy = require('passport-local').Strategy;

router.get('/',function(req,res){
    res.render('welcome',{title:'Welcome'});
});

router.get('/login',function(req,res){
    res.render('login', {title: 'Login'});
});

router.get('/admin-dashboard',function(req,res){
    res.render('admin-dashboard', {title:'admin-dashboard'});
});
router.get('/blog',function(req,res){
    res.render('blog',{title:'blog'});
});
router.get('/briefs',function(req,res){
    res.render('briefs', {title:'Briefs'});
});
router.get('/quotes',function(req,res){
    res.render('quotes', {title:'quotes'});
});

router.get('/dashboard',function(req,res){
    res.render('dashboard', {title:'dashboard'});
});

router.get('/about',function(req,res){
    res.render('about-us.ejs',{title:'about us'});
});

router.post('/login',function(req,res){
    
});

router.post('/feedback', function(req,res){
    const {firstname, lastname, email, message} = req.body;
    let errors = [];
    let success = [];

    //Check required fields
    if(!firstname || !lastname || !email || !message){
        errors.push({msg:'Please fill in all fields'});
    }

    else{
        success.push({msg:'Messages send successfully'});
    }


})



















module.exports = router;