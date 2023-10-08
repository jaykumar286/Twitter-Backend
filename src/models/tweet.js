const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);


tweetSchema.pre("save",function(next){
    console.log("Pre Log")
    next();
});
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
