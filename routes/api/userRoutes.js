const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  getFriends
} = require('../../controllers/userController');

//* USER ROUTES
// ALL USER ROUTES (GET ALL, CREATE)
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// SINGLE USER ROUTES (GET BY ID, UPDATE, DELETE)
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//* FRIEND ROUTES
// GET FRIENDS LIST WITH ONLY USERNAME, ID, FRIENDS' USERNAMES AND COUNT
// router
//   .route('/:userId/friends')
//   .get(getFriends);

// ADD AND DELETE INDIVIDUAL FRIENDS FOR USER BY ID
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
