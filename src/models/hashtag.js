const mongoose = require("mongoose");

const hasthtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,

    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const hashTag = mongoose.model("Hashtag", hasthtagSchema);

module.exports = hashTag;
