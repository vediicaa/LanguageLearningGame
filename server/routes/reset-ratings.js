// routes/resetRatings.js
const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); // Assuming this is the path to your User model

// PUT /api/reset-ratings - Reset user ratings
router.put('/reset-ratings/:userId', async (req, res) => {
    console.log(req.params.userId);
  try {
    // Fetch user ID from the authenticated user or the request
    const userId = req.params.userId; // Change this based on your authentication setup

    // Reset user's ratings
    const updatedUser = await User.findByIdAndUpdate(userId, { $set: { 
        ratingEng: 1,
        ratingFrench:1,
        ratingGerman: 1,
        ratingItalian: 1,
        ratingSpanish: 1,
        visited: []

    } }, { new: true });

    res.status(200).json({ message: 'User ratings reset successfully', user: updatedUser });
  } catch (error) {
    console.log(req.params.userId);
    console.error('Error resetting user ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
