var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "liz2007",
  database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;