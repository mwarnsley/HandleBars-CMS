const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Application is running on port: ${port}`);
});
