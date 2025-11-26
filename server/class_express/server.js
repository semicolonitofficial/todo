const express = require("express");

const User = require("./models/user");
const app = express();

const port = 3900;
app.use(express.json());

// mongodb+srv://gowtamsemicolonit_db_user:ihq1D1rqMUsH7PRF@cluster0.0mhcufk.mongodb.net/?appName=Cluster0
const mongoose = require("mongoose");
const mongoDBURL =
  "mongodb+srv://gowtamsemicolonit_db_user:ihq1D1rqMUsH7PRF@cluster0.0mhcufk.mongodb.net/?appName=Cluster0";

mongoose
  .connect(mongoDBURL)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error("Connection Error:", err));

// const mongoDBURL =
//   "mongodb+srv://gowtamsemicolonit_db_user:jyRz0PqH2zBnXiHg@cluster0.vpvtd4n.mongodb.net/?appName=Cluster0";

// mongoose
//   .connect(mongoDBURL)
//   .then(() => console.log("Database Connection Successful"))
//   .catch((err) => console.error("Connection Error:", err));
// app.get("/users", (req, res) => {
//   res.send("users Server is running...");
// });

// app.get("/user", (req, res) => {
//   res.send("user Server is running...");
// });

// app.get("/home", (req, res) => {
//   res.send("Home Server is running...");
// });

function validateUserCreation(req, res, next) {
  const { username, email, password } = req.body;

  // Simple validation
  if (!username) {
    return res
      .status(400)
      .json({ error: "Username must be at least 3 characters" });
  }

  if (!email) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  if (!password) {
    return res.send("Password must be at least 6 characters");
  }
  // Validation passed
  next();
}

app.put("/create", validateUserCreation, (req, res, next) => {
  console.log("req", req.body);

  res.send(req.body);
});

app.get("/create/:id", (req, res) => {
  console.log(req.params.id);

  console.log(req.query);

  const param = req.params.id;
  console.log(typeof param);

  const data = [
    { id: "3", name: "gowtam", age: 33 },
    { id: "4", name: "gowtam", age: 33 },
  ];

  const newData = data.find((item) => item?.id === param);
  console.log("newData", newData);

  res.send(newData);
});

app.post("/create", async (req, res) => {
  console.log("req", req.body);

  // const dbdata = User(req.body);

  // const resDATa = await dbdata.save();
  res.status(201).json({ message: "Data insert successfully done" });
});

app.delete("/create/:id", (req, res) => {
  const parmas = req.params;
  console.log("parmas", parmas);

  res.send("Delete Api created.", parmas);
});

// app.all("/*", (req, res) => {
//   console.log("Node.js server running..");
// });

app.listen(port, () => {
  console.log(`Express server running.... http://localhost:${port}`);
});
