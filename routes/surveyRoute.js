const checkAuth = require('../middlewares/checkAuth');
module.exports = app => {
    app.post('/api/survey', checkAuth,(req, res) => {

    })
}