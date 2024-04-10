const express = require('express');
const router = express.Router();
const pool = require('../database');

// Insert data into the database
router.post('/', async (req, res) => {
    try {
      const {
        contactfName,
        contactlName,
        contactEmail,
        contactPhone,
      } = req.body;
  
      // Insert contact info into the users table
      const client = await pool.connect();
      const userResult = await client.query('INSERT INTO users (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4) RETURNING userid', [contactfName, contactlName, contactEmail, contactPhone]);
      const userId = userResult.rows[0].userid;
  
      client.release();
  
      res.status(200).json({ userId });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router