const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	return mongoose.connect(process.env.DB, connectionParams)
		.then(() => console.log("Connected to database successfully"))
		.catch((error) => {
			console.log(error);
			console.log("Could not connect database!");
		});
};
