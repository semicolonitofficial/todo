const path = require("path");

const filename = path.basename("/server/file/myfile.txt");

console.log("filename", filename);

console.log("drectory name", __dirname);
console.log("drectory name", __filename);

console.log(path.join(__dirname, "config", "app-config.json"));
console.log("Directory using path.dirname():", path.dirname(__filename));
