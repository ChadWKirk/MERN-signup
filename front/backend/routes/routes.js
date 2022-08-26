const express = require("express");
const router = express.Router();
const signupTemplateCopy = require("../models/signupTemplate");

router.post("/SignedUp", (req, res) => {
  const newUser = new signupTemplateCopy({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  newUser.save().then((savedData) => {
    //.save() saves it to db. savedData is the data going to db.
    res.end("yes");
  });
});

module.exports = router;
