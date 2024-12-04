const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema(
  {
    rank: {
      type: Number,
      required: [true, "A score must have a rank"],
    },
    percentile: {
      type: Number,
      required: [true, "A score must have a percentile"],
    },
    currentScore: {
      type: Number,
      required: [true, "A score must have a current score"],
      min: [0, "Score cannot be less than 0"],
      max: [15, "Score cannot be more than 15"],
    },
  },
  {
    collection: "scores",
    timestamps: true,
  }
);

const Scores = mongoose.models.Scores || mongoose.model("Scores", scoresSchema);

export default Scores;
