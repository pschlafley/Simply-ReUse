const router = require('express').Router();

// route to render the homepage
router.get('/', (req, res) => {
  // ===== Need to pass a single post object into the homepage template
  // check module 14.1.6 to seed data
  res.render('homepage');
});

// route to render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

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

module.exports = router;