const mysql2 = require("mysql2");

const db = mysql2.createPool({
    host: "127.0.0.1",
    port: "3306",
    database: "TG_db",
    user: "root",
    password: "4leaf0309"
});

module.exports = db;