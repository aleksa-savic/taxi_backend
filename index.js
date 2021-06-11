const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use("/api", require("./routes/User").router);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
