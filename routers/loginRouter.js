const express = require("express");
const login = require("../middlewares/login");
const db = require("../db");

const router = express.Router();

router.post("/LoginCreate", (req, res) => {
    const loginInsertQuery = `
        INSERT INTO login (
            id,
            password,
            nickname
        ) VALUES (
            "",
            "",
            ""
)
        `;
  
    try {
      db.query(loginInsertQuery, (error, login) => {
        if (error) {
          console.error(error);
        }
        res.redirect("/sign_up");
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  });






module.exports = router;