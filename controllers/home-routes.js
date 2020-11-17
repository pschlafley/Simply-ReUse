const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// route to render homepage and place single post in blog section using req.session
router.get('/', (req, res) => {
  Post.findOne({
    attributes: [
      'id',
      'title',
      'content', 
      'created_at'
    ],
    include: [
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
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

  // serialize the data
  const post = dbPostData.get({ plain: true });

  res.render('homepage', { 
    post,
    loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
  });
});

// router.get('/', (req, res) => {
//   const post = {
//     id: 1,
//     title: 'Title of Test Blog Post',
//     content: 'Test content',
//     created_at: new Date(),
//     comments: [{}, {}],
//     user: {
//       username: 'User1'
//     }
//   };

//   res.render('homepage', { 
//     post,
//     loggedIn: req.session.loggedIn
//    });
// });


// single post render on blog page
router.get('/blog', (req, res) => {
  Post.findOne({
    attributes: [
      'id',
      'title',
      'content', 
      'created_at'
    ],
    include: [
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
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

  // serialize the data
  const post = dbPostData.get({ plain: true });

  res.render('blog', { 
    post,
    loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
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
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;