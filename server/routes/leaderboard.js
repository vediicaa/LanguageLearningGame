const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Question = require('../models/questions'); // Import your question model
const { User } = require('../models/user'); 

// Route to get the leaderboard data
router.get('/', async (req, res) => {
    try {
      // Query the database to retrieve user data sorted by rating in descending order
      const users = await User.find({}, 'firstName ratingEng') // Retrieve 'name' and 'rating' fields
        .sort({ ratingEng: -1 }); // Sort by 'rating' in descending order
     console.log(users);
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;
