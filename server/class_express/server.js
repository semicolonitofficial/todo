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

app.get("/create/:id", (req, res) => {
  console.log(req.params.id);
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

app.post("/create", (req, res) => {
  console.log("req", req.body);
  res.send(req.body);
});

app.put("/create", (req, res) => {
  console.log("req", req.body);
  res.send("Put Api created.");
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
