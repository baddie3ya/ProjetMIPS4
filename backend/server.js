// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route for handling registration form
app.post('/register', (req, res) => {
  const formData = req.body;
  console.log("Received registration:", formData);
  res.send("Registration received!");
});

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
