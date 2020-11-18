const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// route to render homepage and place single posts in blog section using req.session
router.get('/', (req, res) => {
  const post = {
    id: 1,
    title: 'Big Changes Coming to Plastic Bottles in California',
    content: `In August, California became the first state in the U.S. to require any company making plastic bottles to use recycled plastic. 
    Governor Newsom signed AB 793 into law on September 24th. Starting in 2022, big changes are coming to plastic bottles in the products available 
    to consumers. Many food and beverage manufacturers use virgin plastic to make their bottles. It’s what they’re used to and believe it’s stronger. 
    Recycled plastic loses some of its strength. As a result, many companies do not buy and incorporate recycled plastic into their products. 
    This is concerning as consumer plastics that are recycled aren’t being used in products that consumers purchase regularly.`,
    // created_at: new Date(),
    created_at: 'November 10, 2020',
    // post_url: https://recyclenation.com/2020/11/big-changes-coming-to-plastic-bottles-in-california/
    comments: [{}, {}],
    user: {
      username: 'Tracy Farnsworth'
    }
  };

  res.render('homepage', { 
    post,
    loggedIn: req.session.loggedIn
   });
});

//     id: 2,
//     title: 'Futuristic Recycling Ideas That Could Be Reality By 2050',
//     content: `The recycling industry has seen so many changes over the decades. As early as the late-1800s, men were going 
//     from one home to the next looking for worn-out clothing. Why? Companies bought the “rags” to turn them into paper and hired men to collect those rags. 
//     This was just the beginning. Every decade, recycling advances. Where will it be 10, 20, or 30 years from now?`,
//     // created_at: new Date(),
//     created_at: 'October 14, 2020',
//     // post_url: https://recyclenation.com/2020/10/futuristic-recycling-ideas-that-could-be-reality-by-2050/
//     comments: [{}],
//     user: {
//       username: 'Tracy Farnsworth'
//     }
//   };

// single post render on blog page
router.get('/blog', (req, res) => {
  const post = {
    id: 1,
    title: 'Big Changes Coming to Plastic Bottles in California',
    content: `In August, California became the first state in the U.S. to require any company making plastic bottles to use recycled plastic. 
    Governor Newsom signed AB 793 into law on September 24th. Starting in 2022, big changes are coming to plastic bottles in the products available 
    to consumers. Many food and beverage manufacturers use virgin plastic to make their bottles. It’s what they’re used to and believe it’s stronger. 
    Recycled plastic loses some of its strength. As a result, many companies do not buy and incorporate recycled plastic into their products. 
    This is concerning as consumer plastics that are recycled aren’t being used in products that consumers purchase regularly.`,
    // created_at: new Date(),
    created_at: 'November 10, 2020',
    comments: [{}, {}],
    user: {
      username: 'Tracy Farnsworth'
    }
  };

  res.render('blog', { 
    post,
    loggedIn: req.session.loggedIn
   });
});

// route to render the login page
router.get('/login', (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn
  });
});

// route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
  return;
});

// route to render about page
router.get('/about', (req, res) => {
  res.render('about', {
    loggedIn: req.session.loggedIn
  });
});

// route to render blog page
router.get('/blog', (req, res) => {
  res.render('blog', {
    loggedIn: req.session.loggedIn
  });
});

// route to render recycle page
router.get('/recycle', (req, res) => {
  res.render('recycle', {
    loggedIn: req.session.loggedIn
  });
});

// route to render dashboard page
// router.get('/dashboard', (req, res) => {
//   res.render('dashboard', {
//     loggedIn: req.session.loggedIn
//   });
// });

module.exports = router;