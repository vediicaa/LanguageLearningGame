require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const Question = require('./models/questions');
// Reuse your existing database connection logic or require your db.js file
require('./db')(); // Adjust the path as needed

const sampleQuestions = [
    {
      text: 'Sample Question 20',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A',
      rating: 1, // Adjust the rating as needed
      decreaseAmount: 0,
      IncreaseAmount: 1,
    },
    {
      text: 'Sample Question 21',
      options: ['Option X', 'Option Y', 'Option Z'],
      correctAnswer: 'Option Z',
      rating: 1,
      decreaseAmount: 1,
      IncreaseAmount: 1,
    },
    {
        text: 'Sample Question 22',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctAnswer: 'Option Y',
        rating: 1,
        decreaseAmount: 2,
        IncreaseAmount: 1,
      },
      {
        text: 'Sample Question 23',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctAnswer: 'Option Z',
        rating: 2,
        decreaseAmount: 2,
        IncreaseAmount: 1,
      },
      {
        text: 'Sample Question 24',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctAnswer: 'Option Z',
        rating: 5,
        decreaseAmount: 2,
        IncreaseAmount: 0,
      },
    // Add more sample questions as needed
  ];
  
  Question.insertMany(sampleQuestions)
  .then(questions => {
    console.log('Sample questions inserted into the database:', questions);
  })
  .catch(error => {
    console.error('Error inserting sample questions:', error);
  })
  .finally(() => {
    // Close the database connection to ensure it doesn't hang
    mongoose.connection.close();
  });
