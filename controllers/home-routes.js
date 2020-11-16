const router = require('express').Router();

// route to render the homepage
router.get('/', (req, res) => {
  // ===== Need to pass a single post object into the homepage template
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
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;