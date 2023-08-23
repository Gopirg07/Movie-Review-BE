const mongoose = require("mongoose");

let MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    poster: { type: String, required: true },
    rating: { type: Number, required: true },
    summary: { type: String, required: true },
    trailer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    collection: "movieReviews",
    versionKey: false,
  }
);

let MovieModel = mongoose.model("movieReviews", MovieSchema);

module.exports = { MovieModel };
