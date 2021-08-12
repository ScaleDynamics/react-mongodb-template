const { MongoClient } = require('mongodb');

// connection URI
const URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/';

// create & connect a new MongoDB client
const connection = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).connect();

const fetchMovies = async (search) => {
  // await database connection
  const client = await connection.catch((error) => {
    throw new Error(`Database connection failed (${error.message})`);
  });
  // request database
  return client
    .db('sample_mflix')
    .collection('movies')
    .find({ poster: { $exists: true }, title: { $regex: search, $options: 'i' } })
    .project({ _id: 0, title: 1, year: 1, plot: 1, poster: 1 })
    .sort({ year: -1 })
    .limit(50)
    .toArray();
};
module.exports = { fetchMovies };
