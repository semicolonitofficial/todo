const express = require("express");
const User = require("./entity/user");
const app = express();

const port = 3900;
app.use(express.json());

const mongoose = require("mongoose");

const mongoDBURL =
  "mongodb+srv://gowtamsemicolonit_db_user:ihq1D1rqMUsH7PRF@cluster0.0mhcufk.mongodb.net/?appName=Cluster0";

mongoose
  .connect(mongoDBURL)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error("Connection Error:", err));

app.post("/create", async (req, res) => {
  console.log("req", req.body);

  const dbdata = User(req.body);

  const resData = await dbdata.save();

  res.status(201).json({ resData, message: "Data insert successfully done" });
});

app.get("/create", async (req, res) => {
  const find = await User.find();
  res.status(201).json({ find, message: "Data Get successfully done" });
});

app.get("/create/:id", async (req, res) => {
  console.log(req.params.id);
  const param = req.params.id;
  const allData = await User.findById(param);
  res.status(201).json({ allData, message: "Data Get successfully done" });
});

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

app.put("/create/:id", async (req, res, next) => {
  console.log("req", req.body);

  const userId = req.params.id;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    updateData,
    { new: true, runValidators: true } // Options: return new document, run schema validators
  );

  res
    .status(201)
    .json({ updatedUser, message: "User Data update successfully" });
});

app.delete("/create/:id", async (req, res) => {
  const parmas = req.params.id;
  const deleteUser = await User.findByIdAndDelete(parmas);

  res
    .status(201)
    .json({ deleteUser, message: "User Data Delete successfully" });
});

// app.all("/*", (req, res) => {
//   console.log("Node.js server running..");
// });

app.listen(port, () => {
  console.log(`Express server running.... http://localhost:${port}`);
});

// name
// description
// status
