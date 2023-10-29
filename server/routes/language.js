// routes/language.js
const express = require("express");
const router = express.Router();

// Sample list of available languages (you can replace this with your data)
const availableLanguages = ["English", "Spanish", "French", "German","Italian"];

// Define the route for fetching available languages
router.get("/", (req, res) => {
  // Send the list of available languages to the client
  res.json(availableLanguages);
});

// Define the route for handling language selection
router.post("/select", (req, res) => {
  const selectedLanguage = req.body.selectedLanguage;
  // Handle the selected language, e.g., store it in a database
  // Respond with a success message
  res.json({ message: `Language '${selectedLanguage}' selected successfully`, redirectTo:'/' });
});

module.exports = router;
