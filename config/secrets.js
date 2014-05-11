module.exports = {

  db: process.env.MONGODB|| 'mongodb://stem:123Welcome@ds043037.mongolab.com:43037/stemdb',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  mailgun: {
    login: process.env.MAILGUN_LOGIN || 'postmaster@sandbox697fcddc09814c6b83718b9fd5d4e5dc.mailgun.org',
    password: process.env.MAILGUN_PASSWORD || '29eldds1uri6'
  },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'hslogin',
    password: process.env.SENDGRID_PASSWORD || 'hspassword00'
  },

  nyt: {
    key: process.env.NYT_KEY || '9548be6f3a64163d23e1539f067fcabd:5:68537648'
  },


  facebook: {
    clientID: process.env.FACEBOOK_ID || '230530347141143',
    clientSecret: process.env.FACEBOOK_SECRET || '98f64d2a2fb5ad4339d4d0d62cfc6b54',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },


  twitter: {
    consumerKey: process.env.TWITTER_KEY || '6NNBDyJ2TavL407A3lWxPFKBI',
    consumerSecret: process.env.TWITTER_SECRET  || 'ZHaYyK3DQCqv49Z9ofsYdqiUgeoICyh6uoBgFfu7OeYC7wTQKa',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID || '326892606835-j8hch6m8738mjst280ffr8bhvav9rctg.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || '0CjatgpCaqlTrWwXjojhEJf8',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  }
};
