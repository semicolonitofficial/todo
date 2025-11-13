const path = require("path");

const findPath = path.basename("new.txt");

const configPath = path.join(__dirname, "nfew", "app-config.json");
console.log("Config file path:", configPath);
