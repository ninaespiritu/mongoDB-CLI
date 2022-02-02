const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, findAll } = require("./utils/index");

const app = async (yargsObj) => {
	try {
		const collection = await connection();

		// Add movie to MongoDB database, needs collection and success message
		
		// ADD NEW MOVIE (--add --title="" --actor="")
		if (yargsObj.add) {
			await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
			console.log(`Movie ${yargsObj.title} with ${yargsObj.actor} added`)
		}
		
		// FIND ALL MOVIES (--find)
		else if (yargsObj.find) {
			await findAll(collection);
		}
		
		// INCORRECT COMMAND
		else {
			console.log("Incorrect command");
		}

		client.close();
	}
	catch (error) {
		console.log(error);
	}
};

app(yargs.argv);
