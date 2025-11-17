const express = require("express");
const app = express();

const port = 3900;

app.listen(port, () => {
  console.log(`Express server running.... http://loclhost:${port}`);
});
