var mysql      = require('mysql');
const config = require("../config/config.default")
var connection = mysql.createConnection({
  host     : config.DB_HOST,
  user     : config.DB_USER,
  password : config.DB_PASSWORD
});

connection.connect(function(err) {
  if (err) {
    console.error('database error connecting: ' + err.stack);
    return;
  }

  console.log('database connected as id ' + connection.threadId);
});

module.exports = connection
