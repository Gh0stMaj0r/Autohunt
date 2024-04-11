const express = require('express');
const router = express.Router();
const pool = require('../database');

// Fecth all data from cars
router.get('/', async (req, res) => {
    const limit = req.query.limit || 10;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM cars LIMIT $1', [limit]);
      res.json(result.rows);
      client.release();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post('/', async (req, res) => {
    try {
      const {
        brand,
        model,
        year,
        mileage,
        engine,
        gearbox,
        fueltype,
        condition,
        price,
        description,
        image,
        userId, // Assume userId is sent from the client along with car data
      } = req.body;
  
      // Insert car info into the cars table
      const client = await pool.connect();
      const carResult = await client.query('INSERT INTO cars (brand, model, year, mileage, engine, gearbox, fueltype, condition, price, description, image, userid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [brand, model, year, mileage, engine, gearbox, fueltype, condition, price, description, image, userId]);
      
      client.release();
  
      res.status(200).json(carResult.rows[0]);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router