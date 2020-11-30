const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    googleID: String
});

mongoose.model('users', UserSchema);