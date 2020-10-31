const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection(
    process.env.JAWSDB_URL ||
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "bottomlessbox"
    }
);

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;