const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUsers, getThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  //* CLEAR OUT EXISTING DATA WHEN INITIALLY SEEDING
  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});



  // Log out the seed data to indicate what should appear in the database
  console.table(Users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});