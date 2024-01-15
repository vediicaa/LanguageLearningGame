// seed.js
require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const ModuleOne = require('./models/ModuleOne'); // path to your ModuleOne model
const connectDB = require('./db');

const data = [
  {
    sentence: 'He is wearing a shirt',
    items: [
      { id: 1, name: 'Shirt', type: 'item', src: 'http://localhost:8080/images/Shirt.jpg' },
      { id: 2, name: 'Pant', type: 'item', src: 'http://localhost:8080/images/pant.jpg' },
      { id: 3, name: 'Cap', type: 'item', src: 'http://localhost:8080/images/Cap.jpg' },
      { id: 4, name: 'Jewellery', type: 'item', src: 'http://localhost:8080/images/ring.png' },
      { id: 5, name: 'Man', type: 'person', src: 'http://localhost:8080/images/man.png' },
      { id: 6, name: 'Woman', type: 'person', src: 'http://localhost:8080/images/woman.png' },
      { id: 7, name: 'Shoes', type: 'item', src: 'http://localhost:8080/images/shoes.png' },
      { id: 8, name: 'sandals', type: 'item', src: 'http://localhost:8080/images/sandals.png' }
    ],
    images: [
      { src: 'http://localhost:8080/images/cap.jpg', caption: 'Cap' },
      { src: 'http://localhost:8080/images/dress.jpg', caption: 'dress' },
      { src: 'http://localhost:8080/images/sandals.png', caption: 'sandals' },
      { src: 'http://localhost:8080/images/ring.png', caption: 'ring' },
      { src: 'http://localhost:8080/images/Shirt.jpg', caption: 'Shirt' },
      { src: 'http://localhost:8080/images/shoes.png', caption: 'shoes' }
      // Add more images as needed
    ],
    timer: 120
  }
  // Add more data as needed
];

connectDB().then(() => {
  console.log('MongoDB connected...');
  ModuleOne.insertMany(data)
    .then(() => {
      console.log('Data has been seeded!');
      mongoose.connection.close();
    })
    .catch((error) => console.log(error));
});
