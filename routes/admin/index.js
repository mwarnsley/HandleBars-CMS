const express = require('express');
const router = express.Router();

// Setting up the main admin index route
router.get('/', (req, res) => {
  res.render('admin/index');
});

module.exports = router;
