const { fetchMovies } = require('./src/mongodb');

const hello = () => {
  return `Hello from ScaleDynamics Platform, MongoDB, React and Node.js ${process.version} !`;
};

module.exports = { hello, fetchMovies };
