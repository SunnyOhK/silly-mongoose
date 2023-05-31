const { User, Thought } = require('../models');

module.exports = {
    //* GET ALL THOUGHTS
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate("reactions");
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

    //* GET SINGLE THOUGHT BY ID
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.json({ message: `On ${thought.createdAt}, @${thought.username} wrote: ${thought.thoughtText}`, thought });
    } catch (err) {
      res.status(500).json(err)
    }
  },

  //* CREATE NEW THOUGHT
  async createThought(req, res) {
    try {
      
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { 'thoughts': thought._id } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Thought created, but found no user with that username' });
      }

      res.json({ message: `New thought created for @${thought.username}`, thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* UPDATE THOUGHT BY ID
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

  //* DELETE THOUGHT BY ID
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
  },

  //* FIND ALL REACTIONS TO A THOUGHT
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body }},
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
      var reactions = thought.reactions
      res.json({ message: `New reaction to a thought by @${thought.username} succesfully posted.`, reactions })
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //* CREATE NEW REACTION TO A THOUGHT
  // async addReaction(req, res) {
  //   try {
  //     const
  //   }
  // }

};