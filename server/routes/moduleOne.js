const express = require('express');
const router = express.Router();
const ModuleOne = require('../models/ModuleOne');

  router.get('/', async (req, res) => {
    try {
      const moduleData = await ModuleOne.find();
      res.json(moduleData);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  module.exports = router;
