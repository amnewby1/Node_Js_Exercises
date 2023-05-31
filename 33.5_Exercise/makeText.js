/** Command-line tool to generate Markov text. */
//import the Markov Machine

const MarkovMachine = require("./markov");

const fs = require("fs");
const axios = require("axios");

// Read the command-line arguments
const [command, source] = process.argv.slice(2);

// Handle different commands
if (command === "file") {
  readFile(source);
} else if (command === "url") {
  readURL(source);
} else {
  console.error("Invalid command. Please use file or url for command.");
}

// Read text from a file
function readFile(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
    } else {
      generateText(data);
    }
  });
}

// Read text from a URL
function readURL(url) {
  axios
    .get(url)
    .then((response) => {
      generateText(response.data);
    })
    .catch((error) => {
      console.error("Error fetching URL:", error.message);
    });
}

// Generate and print the random text
function generateText(text) {
  const mm = new MarkovMachine(text);
  console.log(mm.makeText(100));
}
