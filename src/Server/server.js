// backend/server.js

const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const pool = require('./database');

// Set up CORS middleware
app.use(require('cors')());

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/cars", require("./Routes/cars"))
app.use("/api/users", require("./Routes/users"))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});