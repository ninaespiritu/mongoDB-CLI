require("dotenv").config();
const { MongoClient } = require("mongodb");

// const client = new MongoClient(url of database);

const client = new MongoClient(process.env.MONGO_URI);

// We need to make connection asynchronous -> wait to connect to database

const connection = async () => {
	try {
		// Use conect method to connect to the server
		await client.connect();
		// Name database
		const db = client.db("Movies");
		// Return collection
		return db.collection("Movie");
	}
	catch (error) {
		console.log(error);
	}
};

module.exports = { client, connection };