const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 4000;

// Express middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting up the express engine to use handlebars as the view
app.engine('handlebars', exphbs({defaultLayout: 'home'}));

// Setting up the express middleware for setting the view engine
app.set('view engine', 'handlebars');

// Setting up the main index route
app.get('/', (req, res) => {
  res.render('home/index');
});

// Setting up the about page route
app.get('/about', (req, res) => {
  res.render('home/about');
});

// Set the app to listen on a specific port
app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Application is running on port: ${port}`);
});
