const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max:[300,"Tweet can not be more than 300 characters!!"]
    },
    hashtags:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hashtag"
      }
    ]
  },
  { timestamps: true }
);


tweetSchema.pre("save",function(next){
    console.log("Pre Log")
    next();
});
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
