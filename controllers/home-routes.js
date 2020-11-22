const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// route to render homepage and place single posts in blog section using req.session
router.get('/', (req, res) => {
  res.render('homepage', { 
    loggedIn: req.session.loggedIn
   });
});

// posts render on blog page
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

<<<<<<< HEAD
router.get('/profile', (req, res) => {
  res.render('profile', {
    loggedIn: req.session.loggedIn
  });
});

=======
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    const post = dbPostData.get({ plain: true });

    res.render('single-post', { post });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


>>>>>>> 0871b1c78ae89534698ab10fa741a05c4eb24a17
module.exports = router;