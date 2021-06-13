const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

const User = require("../models/User");

router.get("/users", (req, res) => {
  User.query().then((users) => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  User.query()
    .where("id", id)
    .then((user) => {
      res.json(user);
    });
});

module.exports = {
  router: router,
};
