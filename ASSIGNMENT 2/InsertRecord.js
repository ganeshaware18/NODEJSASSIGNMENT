var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  var sql1 = "INSERT INTO customers (name, address) VALUES ('uality hardware', 'nashik 15')";

  con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});