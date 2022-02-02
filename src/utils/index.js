// ADD NEW MOVIE
exports.addMovie = async (collection, movieObj) => {
	const addResult = await collection.insertOne(movieObj);
    console.log(addResult)
};

// FIND MOVIES
exports.findMovie = async (collection, movieObj) => {
	const findResult = await collection.find(movieObj).toArray();
	console.log(findResult);
};

// FIND ONE MOVIE
exports.findOneMovie = async (collection, movieObj) => {
	const findOneResult = await collection.findOne(movieObj);
	console.log(findOneResult);
};

// DELETE MOVIES
exports.deleteAll = async (collection, movieObj) => {
	const deleteAllResult = await collection.deleteMany(movieObj);
	console.log(deleteAllResult);
};

// DELETE ONE MOVIE
exports.deleteMovie = async (collection, movieObj) => {
	const deleteResult = await collection.deleteOne(movieObj);
	console.log(deleteResult);
};