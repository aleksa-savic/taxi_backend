const express = require("express");
require("dotenv").config();
const dbSetup = require("./db/db-setup");
const User = require("./controllers/User");

dbSetup();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  user.query().then((users) => {
    res.json(users);
  });
});

app.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//app.use("/api", require("./routes/User").router);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
