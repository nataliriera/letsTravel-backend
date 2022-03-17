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
    }
    // profile_pic: {
    //   type: String,
    //   default:
    //     "https://res.cloudinary.com/dzdovm4uz/image/upload/v1642550134/profile_lknnfm.jpg",
    // },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;


