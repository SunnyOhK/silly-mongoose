const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    thoughts: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'thought'
    }],
    friends: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'user' 
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// userSchema.virtual("fullName").get(function(){
//   return this.first + " " + this.last
// })

const User = model('user', userSchema);

module.exports = User;