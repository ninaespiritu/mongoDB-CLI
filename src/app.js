const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, findMovie, findOneMovie, deleteMovie, deleteAll } = require("./utils/index");

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

		// FIND MOVIES BY TITLE (--find_title --title="")
		else if (yargsObj.find_title) {
			await findMovie(collection, {title: yargsObj.title});
		}

		// FIND MOVIES BY ACTOR (--find_actor --actor="")
		else if (yargsObj.find_actor) {
			await findMovie(collection, {actor: yargsObj.actor});
		}

		// FIND ONE MOVIE (--find_one)
		else if (yargsObj.find_one) {
			await findOneMovie(collection);
		}

		// DELETE MOVIES BY TITLE (--delete_title)
		else if (yargsObj.delete_title) {
			await deleteAll(collection, {title: yargsObj.title});
		}

		// DELETE MOVIES BY ACTOR (--delete_actor)
		else if (yargsObj.delete_actor) {
			await deleteAll(collection, {actor: yargsObj.actor});
		}

		// DELETE ONE MOVIE (--delete)
		else if (yargsObj.delete) {
			await deleteMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
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
