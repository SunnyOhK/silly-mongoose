const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

//* THOUGHT ROUTES
router
  .route('/')
  .get(getThoughts)
  .post(createThought);
  
  // /api/thoughts/:thoughtId
  router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//* REACTION ROUTES
// GET ALL USER REACTIONS, CREATE NEW REACTION
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// REACTION BY ID (GET, UPDATE, DELETE)
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;