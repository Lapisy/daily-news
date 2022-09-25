var mysql      = require('mysql');
const config = require("../config/config.default")
const Logger = require("../util/logger")
var connection = mysql.createConnection({
  host     : config.DB_HOST,
  user     : config.DB_USER,
  password : config.DB_PASSWORD,
  database : config.DB_DATABASE
});

connection.connect(function(err) {
  if (err) {
    Logger.error('database error connecting: ' + err.stack);
    return;
  }

  Logger.info('database connected as id ' + connection.threadId);
});

module.exports = connection
