const sendgrid = require('@sendgrid/mail');
const Keys = require('../Config/Keys');
class Mailer2{
    constructor({subject, recepients}, body){
        sendgrid.setApiKey(Keys.sendGridKey);
        this.mail = {
            from: 'khanhassan057@gmail.com',
            subject,
            to: recepients.map(({ email }) => email),
            content: [
                {
                    type: 'text/html',
                    value: body
                }
            ]
        }
    }
    async send(){
        const response = await sendgrid.sendMultiple(this.mail);
        return response;
    }
}

module.exports = Mailer2;