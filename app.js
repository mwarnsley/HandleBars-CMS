const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

// Connecting to the database
mongoose
  .connect('mongodb://localhost:27017/handlebars-cms')
  .then(() => console.log('MongoDB Connect...'))
  .catch(error => console.log('Error: ', error));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Getting the main routes from the home routes folder to use
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

// Express middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting up the express engine to use handlebars as the view
app.engine('handlebars', exphbs({defaultLayout: 'home'}));

// Setting up the express middleware for setting the view engine
app.set('view engine', 'handlebars');

// Using the middelware for the main routes
app.use('/', home);

// Using the middelware for the admin routes
app.use('/admin', admin);

// Using the middleware for the post routes
app.use('/admin/posts', posts);

// Set the app to listen on a specific port
app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Application is running on port: ${port}`);
});
