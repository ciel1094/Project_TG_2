const express = require("express");
const db = require("../db")


const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("screens/main")
});

router.get("/review", (req, res, next) => {
    res.render("screens/review")
})

router.get("/sign_up", (req, res, next) => {
    res.render("screens/signUp")
});



module.exports = router;