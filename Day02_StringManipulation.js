/*
    String Manipulation
*/

//ask the user to enter a tweet and calculate the number of sent and calculate the number of sent and remaining of sent words
//Note: max character is 280
//ex: sent:10 remaining 270

//Getting an input from the user

// let myTweet = prompt('Write your tweet');
// let tweetLen = myTweet.length;//getting length of the input
// let maxLen= 280;

// console.log(`Sent: ${tweetLen} Remaining: ${maxLen-tweetLen}`);

//indexOf

//search a string for "welcome"
let text = "Hello world, welcome to javascript";
let result = text.indexOf("welcome");
console.log(result);

let text1 = "Hello world, welcome to javascript";
let result1 = text1.indexOf("Welcome");
console.log(result1); //If given word or char doesn't exist it will return -1

let text2 = "Hello world, welcome to javascript";
let result2 = text2.indexOf("e");
console.log(result2);//first occurence of letter "e"

let text3 = "Hello world, welcome to javascript";
let result3 = text3.indexOf("e", 5);
console.log(result3);//First occurence after first 5 index

