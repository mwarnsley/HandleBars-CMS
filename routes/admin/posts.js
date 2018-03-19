const express = require('express');
const router = express.Router();

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
  res.send('POSTED');
});

module.exports = router;
