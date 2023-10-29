require("dotenv").config();
const express = require("express");
const app = express();
const session = require('express-session');
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const languageRoutes = require("./routes/language");
const quesRoutes = require("./routes/questions");
const rateEngRoutes = require("./routes/rateEng");
const rateFrenchRoutes = require("./routes/rateFrench");
const rateItalianRoutes = require("./routes/rateItalian");
const rateSpanishRoutes = require("./routes/rateSpanish");
const rateGermanRoutes = require("./routes/rateGerman");
const resetRoutes = require("./routes/reset-ratings");
const leaderBoardRoutes = require("./routes/leaderboard");
const morgan = require('morgan');

// database connection
connection();

// middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/language", languageRoutes);
app.use("/api/questions", quesRoutes);
app.use("/api/ratingEng", rateEngRoutes);
app.use("/api/ratingFrench", rateFrenchRoutes);
app.use("/api/ratingGerman", rateGermanRoutes);
app.use("/api/ratingSpanish", rateSpanishRoutes);
app.use("/api/ratingItalian", rateItalianRoutes);
app.use("/api/reset-ratings", resetRoutes);
app.use("/api/leaderboard", leaderBoardRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));