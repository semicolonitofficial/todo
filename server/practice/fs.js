const fs = require("fs");

const readfile = fs.writeFile(
  "myfile.txt",
  "rahat akta faulto boy",
  (err, data) => {
    console.log("dd", err);
    console.log("data", data);
  }
);

console.log(readfile);
