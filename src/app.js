const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, findMovie, findOneMovie } = require("./utils/index");

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
			await findMovie(collection);
		}

		// FIND MOVIE BY TITLE (--find --title="")
		else if (yargsObj.find_title) {
			await findMovie(collection, {title: yargsObj.title});
		}

		// FIND MOVIE BY ACTOR (--find --actor="")
		else if (yargsObj.find_actor) {
			await findMovie(collection, {actor: yargsObj.actor});
		}

		// FIND ONE MOVIE (--find_one)
		else if (yargsObj.find_one) {
			await findOneMovie(collection);
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
