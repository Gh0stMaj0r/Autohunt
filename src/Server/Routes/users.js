const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res) => {
  const limit = req.query.limit || 10;
  const userIds = req.query.userIds; // Assuming user IDs are provided as a comma-separated string
  
  console.log(userIds);

  try {
    const client = await pool.connect();
    let result;
    
    if (userIds) {
      // Split userIds string into an array of individual user IDs
      const userIdArray = userIds.split(',');
      
      // Generate the SQL query with a WHERE clause to filter by user IDs
      result = await client.query('SELECT * FROM users WHERE userid = ANY($1) LIMIT $2', [userIdArray, limit]);
    } else {
      // If no specific user IDs provided, fetch all users within the limit
      result = await client.query('SELECT * FROM users LIMIT $1', [limit]);
    }
    
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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