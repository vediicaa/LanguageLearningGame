const router = require("express").Router();
const mongoose = require('mongoose');
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
   console.log("hello:", token)
	if (token == null) {
	  return res.sendStatus(401); // Unauthorized
	}
  
	jwt.verify(token, process.env.JWTPRIVATEKEY, (err, user) => {
	  if (err) {
		return res.sendStatus(403); // Forbidden
	  }
	  console.log(user);
	  req.user = user;
	  next();
	});
  }
  
  // Example route to retrieve user data
  router.get('/', authenticateToken, async (req, res) => {
	
	const userId = req.user._id;

	const user =  await User.findById(userId);
	res.status(200).json(user);
  });

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;