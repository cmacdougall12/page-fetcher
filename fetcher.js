const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
const website = args[0];
const saveTo = "./save/" + args[1].slice(2);
console.log(saveTo);
let fileSize = 0;

request(website, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(saveTo, body, (err) => {
    if (err) {
      console.error("contents could not be downloaded");
      return;
    }
    console.log(
      `Downloaded and saved ${
        fs.statSync("./save/index.html").size
      } bytes to ${saveTo}`
    );
  });
});
