const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const PinSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
      min: 3,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Pin = model("Pin", PinSchema);

module.exports = Pin;
