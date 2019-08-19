//User
//Comment
//Tema

const mongoose = require('mongoose');
const User = require('./User');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    user: {type: String, required: true},
    text: {type: String, required: true},
    theme: {type: String, required: true}
});

module.exports = mongoose.model('Comment', CommentSchema);