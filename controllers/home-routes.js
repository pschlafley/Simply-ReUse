const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// route to render homepage and place single posts in blog section using req.session
router.get('/', (req, res) => {
  res.render('homepage', { 
    loggedIn: req.session.loggedIn
   });
});

// single post render on blog page
router.get('/blog', (req, res) => {
  res.render('blog', { 
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

module.exports = router;