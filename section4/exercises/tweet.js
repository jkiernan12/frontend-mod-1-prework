/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  newLike() {
    this.numberOfLikes += 1;
  }
  newComment(userComment) {
    this.comments.push(userComment);
  }
};

var firstTweet = new Tweet("Billy", "Hey twitter friends!", "4:00pm", 3,
["lol, u r cool", "that was a lame first tweet"]);
var secondTweet = new Tweet("Billy", "apparently my first tweet was lame...", "4:30pm", 1,
["you are correct", "maybe stay off twitter...", "hey, I thought it was funny"]);
console.log(firstTweet);
console.log(secondTweet);
firstTweet.newLike();
secondTweet.newComment("lol");
console.log(firstTweet);
console.log(secondTweet);
