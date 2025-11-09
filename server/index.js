const fs = require("fs");

fs.readFile("myfile.txt", "utf8", (err, data) => {
  console.log("err read", err);
  console.log("File read", data);
});

fs.writeFile("myfile.txt", "Hello World sdfasdf", (err) => {
  console.log("err write", err);
});

function fetchData(callback) {
  setTimeout(() => {
    callback("Done!");
    console.log("featch data");
  }, 1000);
}

fetchData(processData);

function processData(value) {
  console.log("value", value);
}

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    let haveData = false;
    try {
      if (!haveData) {
        reject("Error occurred");
      }
      setTimeout(() => {
        resolve("Data received");
      }, 4000);
    } catch (error) {
      reject("Error occurred");
    }
  });
}

async function getData() {
  const res = await fetchDataPromise();
  console.log(" res", res);
}

getData();
