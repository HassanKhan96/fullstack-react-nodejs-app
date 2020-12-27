const checkAuth = require('../middlewares/checkAuth');
const checkCredit = require('../middlewares/checkCredit');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
module.exports = app => {
    app.post('/api/survey', checkAuth, checkCredit, (req, res) => {
        const { title, body, subject, recepients } = req.body;
        const survey = new Survey({
            title,
            body,
            subject,
            recepients: recepients.split(',').map(email => ({email})),
            _user: req.user.id,
            dateSent: Date.now()
        })
    })
}