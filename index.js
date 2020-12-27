const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CookieSession = require('cookie-session');
const passport = require('passport');
const Keys = require('./Config/Keys');
const BodyParser = require('body-parser');
require('./models/Users');
require('./models/Surveys');
require('./services/Passport');
app.use(BodyParser.json());
app.use(CookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [Keys.cookieKeys]
}));

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authroutes')(app);
require('./routes/paymentRoutes')(app);
require('./routes/surveyRoute')(app);

mongoose.connect(
    Keys.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(result => console.log('Connected successfully!'))
.catch(e => console.log("Error: ", e));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT);