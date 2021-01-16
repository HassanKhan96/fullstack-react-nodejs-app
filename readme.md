# Survey App

Survey app front-end is built with react and back-end is built with node js and express.

## Packages and APIs used.

### Front-end packages:
1. Redux
2. Redux forms
3. React router dom
4. Materialize CSS
5. Stripe-checkpoint

### Back-end packages:
1. Express
2. body-parser3
3. Passport and Passport-google-oauth2.0
4. Mongodb and mongoose js
5. Stripe js
6. Concorrently
7. Cookie session
8. body-parser
9. Sendgrid
10. nodemon


## Clone
Clone the repo with command below or you can download.

```bash
git clone https://github.com/HassanKhan96/fullstack-react-nodejs-app.git
```

## Usage

```javascript
//To run app.
//First install all dependecies with command:
npm install
//To run type:
npm run dev
```

In order for the application to run proper please make a file in Config folder with name dev.js and provide these keys:

```javascript
module.exports = {
    googleClientID: 'GOOGLE_CLIENT_ID',
    googleClientSecret: 'GOOGLE_CLIENT_SECRET',
    mongoURI: 'MONGO_DB_CONNECT_STRING',
    cookieKeys: 'TYPE ANY RANDOM COOKIE KEYS',
    stripePublishableKey: 'STRIPE_PUBLISHABLE_KEY',
    stripeSecretKey: 'STRIPE_SECRET_KEY',
    sendGridKey: 'SENDGIRD_API_KEY',
    redirectDomain: 'A REDIRECT DOMAIN FOR SENDGRID TO REDIRECT CLIENT AFTER RESPONDING TO SURVEY CAN BE LOCALHOST:5000',
}

```

## Contributing
Pull requests are welcome.