const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://SunnyOh:finn@practice.wchmv4y.mongodb.net/sillyMongooseDB';

connect(connectionString);

module.exports = connection;