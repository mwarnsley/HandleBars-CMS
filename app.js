const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 4000;

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
