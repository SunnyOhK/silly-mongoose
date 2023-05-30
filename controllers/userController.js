const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

//   getUsers,
//   getSingleUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   getReactions,
//   addReaction,
//   getSingleReaction,
//   removeReaction,
//   getFriends,
//   getSingleFriend,
//   addFriend,
//   removeFriend

module.exports = {
  //* GET ALL USERS
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* GET A SINGLE USER AND SHOW THEIR THOUGHTS or FRIENDS
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .populate("friends");

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({
        user
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  //* CREATE NEW USER
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  //* UPDATE USER
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};