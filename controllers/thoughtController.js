const { User, Thought } = require('../models');

// getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought


module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.json({ message: `On ${thought.createdAt}, @${thought.username} wrote: ${thought.thoughtText}`, thought });
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!thought.username) {
        return res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' });
      }
      res.json({ message: `New thought created for @${thought.username}`, thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //UPDATE THOUGHT
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: `Thought has been updated for @${thought.username}`, thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE THOUGHT
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID.'});
      }

      res.json({ message: `Thought has been deleted for @${thought.username}` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};