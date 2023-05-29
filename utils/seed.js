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

// Create new array of usernames
  const usernames = [
    'finnjamin',
    'annabelly',
    'subawoo22',
    'sunnyohk'
  ];

  // Create new array of email addresses
  const emails = [
    'finndog@gmail.com',
    'meow@email.com',
    'bbgirl@hotmail.com',
    'sunny@yahoo.com'
  ];

  // Create empty array of users
  const users = [];

  for (let i = 0; i < 4; i++) {
    const username = usernames[i];
    const email = emails[i];
    
    users.push({
      username,
      email,
    })
  }

  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});