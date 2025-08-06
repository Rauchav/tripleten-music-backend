const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: String,
  email: String,
  image: String,
  favorites: [
    {
      trackId: String,
      name: String,
      artist: String,
      album: String,
      duration: Number,
      image: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
