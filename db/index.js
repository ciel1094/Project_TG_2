const mysql2 = require("mysql2");

const db = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    database: "",
    user: "root",
    password: "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"
});

module.exports = db;