const Keys = require('../Config/Keys');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HzSHtFdvOMEPwYsnZXJISWxcgHhaOeTnWI2HcxAxxwZiJV4QMeJNWCXkEMjKqPypwM2UWaX1Nt04kruEQSedw9k00ctrS4tAA')
module.exports = app =>{
    app.use("/api/stripe_handler", async(req, res) => {
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