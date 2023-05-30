const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getThoughts } = require('./data');

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
    'Finnjamin',
    'Puddin.Pop',
    'Subawoo17',
    'SunnyOhK'
  ];

  // Create new array of email addresses
  const emails = [
    'puppybear@gmail.com',
    'annabelly-button@email.com',
    'bbgvroom@hotmail.com',
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
  };

const thoughts = [
    {
      thoughtText: 'I tooted and cleared the room!',
      createdAt: 'May 25th, 2023 @ 6:57 PM',
      username: 'Finnjamin',
    },
    {
      thoughtText: 'Mom calls me a fuzzy, little house cow...',
      createdAt: 'May 23rd, 2023 @ 2:22 AM',
      username: 'Puddin.Pop',
    },
    {
      thoughtText: 'Not sure how I typed this since I am a car.',
      createdAt: 'May 26th, 2023 @ 3:46 PM',
      username: 'subawoo17',
    },
    {
      thoughtText: 'How in the world are my pets and car posting on social media?!?',
      createdAt: 'May 29th, 2023 @ 7:27 PM',
      username: 'SunnyOhK',
    },
  ];

  await User.collection.insertMany(users);
  
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});