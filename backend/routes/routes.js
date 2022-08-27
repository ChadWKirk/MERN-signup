const express = require("express");
const router = express.Router();
const signupTemplateCopy = require("../models/signupTemplate");

//when form is submitted, make new model and send to db
router.post("/SignedUp", (req, res) => {
  const newUser = new signupTemplateCopy({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  newUser.save().then((savedData) => {
    //.save() saves it to db. savedData is the data going to db.
    //this doesn't work. trying to send react file but it just loads plain html
    res.sendFile(
      "C:/Users/kirkch/Desktop/MERN-Projects/MERN-signup/front/src/Pages/SignedUp.js"
    );
  });
});

module.exports = router;
