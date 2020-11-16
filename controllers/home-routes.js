const router = require('express').Router();

// route to render the homepage
router.get('/', (req, res) => {
  // ===== Need to pass a single post object into the homepage template
  // check module 14.1.6 to seed data
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  })
});

// route to render the login page
router.get('/login', (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn
  });
});

// 14.2.6 FIX LOGOUT

// route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
  return;
});

// route to render about page
router.get('/about', (req, res) => {
  res.render('about');
  return;
});

// route to render blog page
router.get('/blog', (req, res) => {
  res.render('blog');
  return;
});

// route to render recycle page
router.get('/recycle', (req, res) => {
  res.render('recycle');
  return;
});

// route to render dashboard page
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;