// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World! Your Node.js app is running on AWS EC2!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
