const express = require("express");
const connect = require("./config/database");

const Tweet = require("./models/tweet.js");
const Comment = require("./models/comment");
const TweetRepository = require("./repository/tweet-repository.js");

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server Running on ${PORT}`);
  await connect();
  console.log("MongoDB connection created!!");
  // const tweet = await Tweet.create({
  //     content:"This is content2",
  //     userEmail:"1@2.com"
  // })

  const tweetRepository = new TweetRepository();
  const tweet = await tweetRepository.create({
    content: "BGMI",
    userEmail: "BGMI@cd.com",
  });

  const comment = await Comment.create({ content: "Comment23" });
  tweet.comments.push(comment);
  await tweet.save();

//   const tweet = await tweetRepository.get("6522eeac81c609478f567f9c");

  // const tweet = await tweetRepository.update("6522d34e5fd9f47a025c4289",{content:"Update3 Content Content"});


});
