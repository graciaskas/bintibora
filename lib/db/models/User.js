import mongoose, { mongo } from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      default: null,
    },
    birth_date: {
      type: Date,
      default: null,
    },
    phone: {
      type: String,
      unique: true,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model("User", Schema);

export default User;
