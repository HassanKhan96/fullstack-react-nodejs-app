const checkAuth = require('../middlewares/checkAuth');
const checkCredit = require('../middlewares/checkCredit');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const sgMail = require('@sendgrid/mail');
const Keys = require('../Config/Keys');
const surveyTemplate = require('../services/templates/surveyTemplate');
const Mailer2 = require('../services/Mailer2');
module.exports = app => {

    app.get('/api/surveys/redirect', (req,res)=>{
        res.send("<h1>Thanks for the feedback!</h1>")
    })
    
    app.post('/api/surveys', checkAuth, checkCredit, async (req, res) => {
        const { title, body, subject, recepients } = req.body;
        const survey = new Survey({
            title,
            body,
            subject,
            recepients: recepients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer2(survey, surveyTemplate(survey));
        try{
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save()
            res.send(user);
        }
        catch(err){
            res.status(422).json({
                error: err
            })
        }
    //    const mailer = new Mailer(survey, surveyTemplate(survey));
    //    mailer.send().then(resp => console.log(resp)).catch(e => console.log(e))
    })
}