const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  // deleteUser,
  // getReactions,
  // addReaction,
  // getSingleReaction,
  // removeReaction,
  // getFriends,
  // getSingleFriend,
  // addFriend,
  // removeFriend
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
  // .delete(deleteUser);

// //* FRIEND ROUTES
// // GET ALL | ADD NEW FRIENDS OF SINGLE USER BY USER ID
// router
//   .route('/:userId/friends')
//   .get(getFriends)
//   .post(addFriend);

// // DELETE FRIEND OF USER BY USER ID
// router
//   .route('/:userId/friends/:friendId')
//   .get(getSingleFriend)
//   .delete(removeFriend);

module.exports = router;
