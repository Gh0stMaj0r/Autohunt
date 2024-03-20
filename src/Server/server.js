// backend/server.js

const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Set up CORS middleware
app.use(require('cors')());

// Create a new Pool instance using ElephantSQL connection details
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Middleware to parse JSON bodies
app.use(express.json());

// Fetch data from the database
app.get('/api/new_cars', async (req, res) => {
  const limit = req.query.limit || 10;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM new_cars LIMIT $1', [limit]);
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Insert data into the database
app.post('/api/new_cars', async (req, res) => {
  try {
    const { name, age } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO new_cars (name, age) VALUES ($1, $2) RETURNING *', [name, age]);
    res.json(result.rows[0]);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});