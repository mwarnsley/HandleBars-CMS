const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

// Render the main route to show the post
router.get('/', (req, res) => {
  res.send('POST');
});

// Render the route to create a new post
router.get('/create', (req, res) => {
  res.render('admin/posts/create');
});

// Route that lets you post the created post
router.post('/create', (req, res) => {
  let allowComments = true;
  if (!req.body.allowComments) {
    allowComments = false;
  }
  const newPost = Post({
    title: req.body.title,
    status: req.body.status,
    allowComments,
    body: req.body.body,
  });
  res.send('POSTED');
});

module.exports = router;
