const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
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
	  console.log(user._id);
	  req.user = user;
	  next();
	});
  }
  
  // Example route to retrieve user data
  router.get('/', authenticateToken, (req, res) => {
	// The token is valid; you can access user details from req.user
	// In this example, we'll just send a sample response
	const user = req.user;
	res.status(200).json({ user });
  });

  
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;