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

module.exports = router;