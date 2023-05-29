const router = require('express').Router();
const {
  getThoughts,
  // getSingleThought,
  createThought,
  // updateThought,
  // deleteThought
} = require('../../controllers/thoughtController.js');

//* THOUGHT ROUTES
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

module.exports = router;