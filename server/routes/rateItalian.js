const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const {User} = require('../models/user');

// Update user's rating
router.put('/', async (req, res) => {
    console.log(req.body);
  const { userEmail, newRating } = req.body;
  console.log(userEmail);
  console.log(newRating);

  try {
    // Find the user by ID
    const user = await User.findOne({email: userEmail});
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's rating
    user.ratingItalian = newRating;
    await user.save();

    res.status(200).json({ message: 'User rating updated successfully' });
  } catch (error) {
    console.error('Error updating user rating:', error);
    res.status(500).json({ message: 'Error updating user rating' });
  }
});

module.exports = router;
