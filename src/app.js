const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie } = require("./utils/index");

const app = async (yargsObj) => {
	try {
		const collection = await connection();

		if (yargsObj.add) {
			// Add movie to MongoDB database, needs collection and success message
			await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
		} else {
			console.log("Incorrect command");
		}
		client.close();
	} catch (error) {
		console.log(error);
	}
};

app(yargs.argv);
