const fs = require("fs");
const axios = require("axios");

function cat(path, outputFile) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("Error", err);
      process.kill(1);
    }
    writeOutput(data, outputFile);
  });
}

async function webCat(url, outputFile) {
  try {
    let response = await axios.get(url);
    writeOutput(response.data, outputFile);
  } catch (e) {
    console.log("Something went wrong", e);
    process.exit(1);
  }
}

//url I used for webCat: "https://www.poetryfoundation.org/poems/44263/fire-and-ice"

function writeOutput(content, outputFile) {
  if (outputFile) {
    fs.writeFile(outputFile, content, (err) => {
      if (err) {
        console.log("Error writing to the file:", err);
        process.exit(1);
      }
      console.log("Output written to file:", outputFile);
    });
  } else {
    console.log("Output:", content);
  }
}

let thirdArg = process.argv[2];
let outputFile = null;

if (thirdArg === "--out" && process.argv.length >= 5) {
  outputFile = process.argv[3];
  thirdArg = process.argv[4];
}

if (thirdArg.slice(0, 4) != "http") {
  cat(thirdArg, outputFile);
} else {
  webCat(thirdArg, outputFile);
}
