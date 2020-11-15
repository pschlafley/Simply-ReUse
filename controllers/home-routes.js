const router = require('express').Router();

// route to render the homepage
router.get('/', (req, res) => {
  // ===== Need to pass a single post object into the homepage template
  res.render('homepage');
});

// route to render the login page
router.get('/login', (req, res) => {
  if (req.body.loggedIn) {
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

module.exports = router;