const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
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

// //* FRIEND ROUTES
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
