const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CookieSession = require('cookie-session');
const passport = require('passport');
const Keys = require('./Config/Keys');
require('./models/Users');
require('./services/Passport');

app.use(CookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [Keys.cookieKeys]
}));

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authroutes')(app);

mongoose.connect(
    Keys.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(result => console.log('Connected successfully!'))
.catch(e => console.log(e));


const PORT = process.env.port || 5000
app.listen(PORT);