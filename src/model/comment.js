const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    comment: {
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Comments', CommentSchema);