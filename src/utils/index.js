// ADD NEW MOVIE
exports.addMovie = async (collection, movieObj) => {
	await collection.insertOne(movieObj);
};

// FIND MOVIES
exports.findMovie = async (collection, movieObj) => {
	const findResult = await collection.find(movieObj).toArray();
	console.log(findResult);
};
