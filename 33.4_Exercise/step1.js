const fs = require("fs");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("Error", err);
      process.kill(1);
    }
    console.log("Data...", data);
  });
}

cat("./one.txt");

cat("./huh.txt");
