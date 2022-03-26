const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true, //-> Ideally, should be unique, but its up to you
    },
    password: {
      type: String,
      require: true,
    },
    job_title: {
      type: String,
      require: true,
    },
    skills: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: false,
    },
    about: {
      type: String,
      require: false,
    },
    linked_in: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      require: true,
    },
    blog: {
      type: String,
      require: false,
    },
    isAdmin: {
      type: Boolean,
      default: false
    },

    profile_pic: {
      type: String,
      default:
        "https://res.cloudinary.com/dzdovm4uz/image/upload/v1648261017/profile-pictures/avatar_a44xzq.png",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
