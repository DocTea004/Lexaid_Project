const mongoose = require('mongoose');

var UploadSchema = mongoose.Schema({

    brief_case:{
        type:'String'
    }
})

var Upload = module.exports= mongoose.model('Upload', UploadSchema);