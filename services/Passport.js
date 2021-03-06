const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const Keys = require('../Config/Keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new googleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleID: profile.id })

    if (existingUser) {
        return done(null, existingUser);
    }
    const newUser = await new User({ googleID: profile.id }).save()
    done(null, newUser);
}));