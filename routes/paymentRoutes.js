const Keys = require('../Config/Keys');
const Stripe = require('stripe');
const stripe = Stripe(Keys.stripeSecretKey);
const checkAuth = require('../middlewares/checkAuth');
module.exports = app =>{
    app.use("/api/stripe_handler",checkAuth, async(req, res) => {
      const charge = await stripe.charges.create({
          amount: '500',
          description: "5 surveys for $5",
          currency: 'usd',
          source: req.body.id
      });
      req.user.credits+=5;
      const user = await req.user.save();
      res.send(user);
    })
}