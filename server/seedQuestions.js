require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const Question = require('./models/questions');
const { User } = require('./models/user');
// Reuse your existing database connection logic or require your db.js file
require('./db')(); // Adjust the path as needed

const sampleQuestions = [
  {
      text: 'What is the opposite of happy?',
      options: ['Sad', 'Angry', 'Excited', 'Hungry'],
      correctAnswer: 'Sad',
      rating: 1,
      decreaseAmount: 0,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the opposite of happy?',
      options: ['Sad', 'Angry', 'Excited', 'Hungry'],
      correctAnswer: 'Sad',
      rating: 1,
      decreaseAmount: 0,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following words is a synonym for beautiful?',
      options: ['Ugly', 'Pretty', 'Small', 'Fast'],
      correctAnswer: 'Pretty',
      rating: 1,
      decreaseAmount: 0,
      IncreaseAmount: 2,
  },
  
  {
      text: 'What is the plural form of child?',
      options: ['Childs', 'Children', 'Childes', 'Childen'],
      correctAnswer: 'Children',
      rating: 1,
      decreaseAmount: 0,
      IncreaseAmount: 2,
  },
  
  {
      text: 'Choose the correct spelling: Occasion',
      options: ['Occassion', 'Occasionn', 'Occasssion', 'Occasion'],
      correctAnswer: 'Occasion',
      rating: 2,
      decreaseAmount: 1,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the superlative form of good?',
      options: ['Gooder', 'Better', 'Best', 'Goods'],
      correctAnswer: 'Best',
      rating: 2,
      decreaseAmount: 1,
      IncreaseAmount: 2,
  },
  
  {
      text: 'Which of the following is a preposition:?',
      options: ['In', 'Happy', 'Jumped', 'Quickly'],
      correctAnswer: 'In',
      rating: 2,
      decreaseAmount: 1,
      IncreaseAmount: 2,
  },
  
  {
      text:'What is the past tense of run?',
      options: ['Ran', 'Runned', 'Running', 'Runned'],
      correctAnswer: 'Ran',
      rating: 3,
      decreaseAmount: 1,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is an adverb?',
      options: ['Quick', 'Jumping', 'Well', 'Tree'],
      correctAnswer: 'Well',
      rating: 3,
      decreaseAmount: 1,
      IncreaseAmount: 2,
  },
  
  {
      text: 'What is the plural of mouse?',
      options: ['Mouses', 'Mice', 'Micees', 'Mousen'],
      correctAnswer: 'Mice',
      rating: 3,
      decreaseAmount: 1,
      IncreaseAmount: 3,
  },
  
  {
      text: 'Choose the correct spelling:',
      options: ['Beutiful', 'Beautyful', 'Beutifull', 'Beautiful'],
      correctAnswer: 'Beautiful',
      rating: 4,
      decreaseAmount: 2,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is a synonym for angry?',
      options: ['Happy', 'Sad', 'Excited', 'Furious'],
      correctAnswer: 'Furious',
      rating: 4,
      decreaseAmount: 2,
      IncreaseAmount: 2,
  },
  
  {
      text: 'What is the present participle of eat?',
      options: ['Ate', 'Eated', 'Eating', 'Eaten'],
      correctAnswer: 'Eating',
      rating: 4,
      decreaseAmount: 2,
      IncreaseAmount: 3,
  },
  
  {
      text: 'Which of the following is a conjunction ?',
      options: ['Apple', 'But', 'Quick', 'Green'],
      correctAnswer: 'But',
      rating: 5,
      decreaseAmount: 3,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the comparative form of happy?',
      options: ['Happyer', 'Happier', 'Happiest', 'Happien'],
      correctAnswer: 'Happier',
      rating: 5,
      decreaseAmount: 3,
      IncreaseAmount: 2,
  },
  
  {
      text: 'Which of the following is a noun:?',
      options: ['Run', 'Quick', 'Teacher', 'Jump'],
      correctAnswer: 'Teacher',
      rating: 5,
      decreaseAmount: 3,
      IncreaseAmount: 3,
  },
  
  {
      text: 'What is the past tense of go?',
      options: ['Gone', 'Going', 'Went', 'Goed'],
      correctAnswer: 'Went',
      rating: 6,
      decreaseAmount: 3,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is an adjective ? ',
      options: ['Book', 'Red', 'Quickly', 'Read'],
      correctAnswer: 'Red',
      rating: 6,
      decreaseAmount: 3,
      IncreaseAmount: 2,
  },
  
  {
      text: 'What is the plural of tooth?',
      options: ['Teeths', 'Toothes', 'Tooths', 'Teeth'],
      correctAnswer: 'Teeth',
      rating: 6,
      decreaseAmount: 3,
      IncreaseAmount: 3,
  },
  
  {
      text: 'Choose the correct spelling: ',
      options: ['Oestaraunt', 'Resturant', 'Restaurantt', 'Restaurant'],
      correctAnswer: 'Restaurant',
      rating: 7,
      decreaseAmount: 4,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is a synonym for sad?',
      options: ['Happy', 'Angry', 'Upset', 'Excited'],
      correctAnswer: 'Upset',
      rating: 7,
      decreaseAmount: 4,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the present participle of sleep?',
      options: ['Slept', 'Sleeped', 'Sleeping', 'Sleep'],
      correctAnswer: 'Sleeping',
      rating: 7,
      decreaseAmount: 4,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is a preposition ?',
      options: ['Between', 'Happy', 'Jumped', 'Quickly'],
      correctAnswer: 'Between',
      rating: 8,
      decreaseAmount: 5,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the past tense of write?',
      options: ['Writing', 'Wrote', 'Written', 'Writed'],
      correctAnswer: 'Wrote',
      rating: 8,
      decreaseAmount: 5,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the superlative form of tall?',
      options: ['Taller', 'Talliest', 'Tallest', 'Tallerest'],
      correctAnswer: 'Tallest',
      rating: 8,
      decreaseAmount: 5,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is an adverb ?',
      options: ['Car', 'Quickly', 'Yellow', 'Jump'],
      correctAnswer: 'Quickly',
      rating: 9,
      decreaseAmount: 6,
      IncreaseAmount: 1,
  },
  
  {
      text: 'What is the plural form of man?',
      options: ['Mans', 'Men', 'Menn', 'Manen'],
      correctAnswer: 'Men',
      rating: 9,
      decreaseAmount: 6,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Choose the correct spelling:',
      options: ['Apreciate', 'Oppreciate', 'Apreceate', 'Apreesheate'],
      correctAnswer: 'Oppreciate',
      rating: 9,
      decreaseAmount: 6,
      IncreaseAmount: 1,
  },
  
  {
      text: 'Which of the following is a synonym for tired?',
      options: ['Energetic', 'Sleepy',  'Active',  'Bored'],
      correctAnswer: 'Sleepy',
      rating: 10,
      decreaseAmount: 6,
      IncreaseAmount: 0,
  },
  
  {
      text: 'What is the present participle of drink ?',
      options: ['Drank', 'Drinking',  'Drunk', 'Drunken'],
      correctAnswer: 'Drinking',
      rating: 10,
      decreaseAmount: 6,
      IncreaseAmount: 0,
  },
  
  {
      text: 'Which of the following is a preposition?',
      options: ['Under',  'Happy', 'Jumped',  'Quickly'],
      correctAnswer: 'Under',
      rating: 10,
      decreaseAmount: 6,
      IncreaseAmount: 0,
  }
  ];

  
  
  
  const userId = "653e12f99158e43a153e0f16";
  const deleteSingleUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (deletedUser) {
            console.log('User deleted:', deletedUser);
        } else {
            console.log('User not found.');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Example usage:
deleteSingleUser(userId);