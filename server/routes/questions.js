const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Question = require('../models/questions'); // Import your question model
const { User } = require('../models/user'); // Import your question model

// GET request to fetch a question based on user's rating
router.get('/:userId/:userRating', async (req, res) => {
  const userId = req.params.userId;
  const userRating = parseFloat(req.params.userRating); // Get the user's rating from the URL parameter
  try {

    console.log("in the try block");
    const user = await User.findById(userId).populate('visited');
    const visitedQuestions= user.visited.map(question => question._id);
    // Query the database to find a question with a matching or closest rating
    const question = await Question.findOne({ rating: { $gte: userRating }, _id: {$nin: visitedQuestions} }).sort({rating: 1});
    if (!question) {
      return res.status(200).json({ message: 'Congratulations! All the questions have been compeleted' });
    }

    // Return the question in the response
      user.visited.push(question._id);
      await user.save();
    res.status(200).json({ question });
  } catch (err) {
    console.error('hello Error fetching question:', err);
    res.status(500).json({ message: 'Error fetching question' });
  }
});

module.exports = router;
