const express = require("express");
const checkLogin = require("../middlewares/checkLogin");
const db = require("../db");

const router = express.Router();

router.post("/userCreate", (req, res) => {
    const userinsertQuery = `
        INSERT INTO login (
            id,
            password,
            nickname
        ) VALUES (
            "${req.body.id}",
            "${req.body.password}",
            "${req.body.nickname}"
        )
        `;
  
    try {
      db.query(userinsertQuery, (error, checkLogin) => {
        if (error) {
          console.error(error);
        }
        res.redirect("/signup");
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  });
console.log()

module.exports = router;