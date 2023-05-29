const fs = require("fs");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("Error", err);
      process.kill(1);
    }
    console.log("Data...", data);
  });
}

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response.data);
  } catch (e) {
    console.log("Something went wrong", e);
    process.exit(1);
  }
}

//url I used for webCat: "https://www.poetryfoundation.org/poems/44263/fire-and-ice"

// for (let arg of process.argv) {
//   console.log(arg);
// }

let thirdArg = process.argv[2];

if (thirdArg.slice(0, 4) != "http") {
  cat(thirdArg);
} else {
  webCat(thirdArg);
}

//checked in my terminal like this

//node step2.js "https://www.poetryfoundation.org/poems/44263/fire-and-ice"

//node step2.js "./one.txt"
