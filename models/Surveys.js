const mongoose = require('mongoose');
const { Schema } = mongoose;
const recepientSchema = require('./recepient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recepients: [recepientSchema],
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'users'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);