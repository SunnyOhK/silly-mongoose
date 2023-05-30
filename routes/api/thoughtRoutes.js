const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  // updateThought,
  // deleteThought
} = require('../../controllers/thoughtController.js');

//* THOUGHT ROUTES
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

//* REACTION ROUTES
// GET ALL USER REACTIONS, CREATE NEW REACTION
// router
//   .route('/:thoughtId/reactions')
//   .get(getReactions)
//   .post(addReaction);

// // REACTION BY ID (GET, UPDATE, DELETE)
// router
//   .route('/users/:userId/reactions/:reactionId')
//   .get(getSingleReaction)
//   .delete(removeReaction);
module.exports = router;