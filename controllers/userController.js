const { User, Thought } = require('../models');

module.exports = {
  //* GET ALL USERS
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* GET A SINGLE USER AND SHOW THEIR THOUGHTS or FRIENDS
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('friends', 'username')
        .populate('thoughts', 'thoughtText')
        .select('-__v')
        .lean();

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      user.friends = user.friends.map(friend => {
        console.log(friend)
        return friend.username
      })
      console.log(user)

      user.thoughts = user.thoughts.map(thought => {
        console.log(thought)
        return thought.thoughtText
      })
      res.json(user);

    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  //* CREATE NEW USER
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({ message: `New user @${user.username} has been created!`, user });
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

      res.json({ message: `Details updated for @${user.username}`, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* DELETE USER
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID.' });
      }

      //DELETE THOUGHTS BEFORE USER
      //MONGODB DOCS: The $in is a comparison query operator that allows you to select documents where the value of a field is equal to any value in an array --> thoughts are []
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      res.json({ message: `@${user.username} and thoughts have successfully been deleted.` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //* ADD FRIEND TO USER
  // use friend's userId for $addToSet
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID.' });
      }

      res.json({ message: `New friend has been added!`, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* REMOVE FRIEND FROM USER
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID.' });
      }
      res.json(user);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  //* FIND FRIENDS OF USER
  // async getFriends(req, res) {
  //   try {
  //     const user = await User.findOne({ _id: req.params.userId })
  //       .select('-__v')
  //       .populate('friends');

  //     if (!user) {
  //       return res.status(404).json({ message: 'No user with that ID' });
  //     }

  //     // would also like to show more specific data
  //     const { username, _id, friends, friendCount } = user;
  //     const friendsUsernames = friends.map(friend => friend.username);
  //     const response = {
  //       username,
  //       _id,
  //       friends: friendsUsernames,
  //       friendCount
  //     };

  //     res.json(response);

  //   } catch (err) {
  //     console.log(err)
  //     res.status(500).json(err);
  //   }
  // }
};