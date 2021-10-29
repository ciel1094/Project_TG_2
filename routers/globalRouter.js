const express = require("express");
const db = require("../db")

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("screens/main")
});

router.get("/review", async (req, res, next) => {

    let result1 = null;
    let result2 = null;

    //데이터가오기
    const query1 = `
    `;
    const query2 = `
    `;

    try {
        db.query(query1, (error, result) => {
            if(error) {
                return console.error(error);
            }
            result1 = result;

            db.query(query2, (error, result) => {
                if(error) {
                    return console.error(error);
                }
                result2 = result;

                console.log(result1[0]);
                console.log(result2);

                res.render("screens/review", {
                    result1:result1[0],
                    result2:result2,
                });
            });
        });

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;