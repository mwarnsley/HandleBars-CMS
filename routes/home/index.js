const express = require('express');
const router = express.Router();

// Setting up the main index route
router.get('/', (req, res) => {
  res.render('home/index');
});

// Setting up the about page route
router.get('/about', (req, res) => {
  res.render('home/about');
});

// Setting up the route for logging in
router.get('/login', (req, res) => {
  res.render('home/login');
});

// Setting up the route for registering for the router
router.get('/register', (req, res) => {
  res.render('home/register');
});

module.exports = router;
