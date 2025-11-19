const express = require("express");
const app = express();

const port = 3900;
app.use(express.json());
// app.get("/users", (req, res) => {
//   res.send("users Server is running...");
// });

// app.get("/user", (req, res) => {
//   res.send("user Server is running...");
// });

// app.get("/home", (req, res) => {
//   res.send("Home Server is running...");
// });

app.get("/create", (req, res) => {
  res.send("Get Api created.");
});

app.post("/create", (req, res) => {
  console.log("req", req.body);
  res.send(req.body);
});

app.put("/create", (req, res) => {
  console.log("req", req.body);
  res.send("Put Api created.");
});

app.delete("/create", (req, res) => {
  res.send("Delete Api created.");
});

app.listen(port, () => {
  console.log(`Express server running.... http://localhost:${port}`);
});
