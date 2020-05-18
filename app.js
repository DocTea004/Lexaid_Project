const express=require('express');
const expressLayouts= require('express-ejs-layouts');
const path= require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser= require('body-parser');
const PORT = process.env.PORT || 5000;


//DB Connection

const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=>console.log("Database Connected Successfully"))
.catch(err=> console.log(err));

//EJS Layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));




//Routes
const index= require('./routes/index');
const users= require('./routes/users');

app.use('/',index);
app.use('/login',index);
app.use('/blog',index);
app.use('/briefs',index);
app.use('/quotes',index);

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
    );


