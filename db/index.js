const mysql2 = require("mysql2");

const db = mysql2.createPool({
    host: "127.0.0.1",
    port: "3306",
    database: "TG_db",
    user: "root",
    password: "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"
});

module.exports = db;