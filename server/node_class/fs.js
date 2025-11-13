const fs = require("fs");

fs.mkdir("./file", (err) => {
  try {
    console.log("done");
  } catch (err) {
    console.log("have a error");
  }

  // if (err) {
  //   console.log("have a error");
  // } else {
  //   console.log("done");
  // }
});

console.log(fs);

fs.writeFile("new.txt", "hello node.js", (err, data) => {
  console.log(data);
  console.log(err);
});

fs.readFile("new.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
