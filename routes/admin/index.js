const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
  req.app.locals.layout = 'admin';
  next();
});

// Setting up the main admin index route
router.get('/', (req, res) => {
  res.render('admin/index');
});

module.exports = router;
