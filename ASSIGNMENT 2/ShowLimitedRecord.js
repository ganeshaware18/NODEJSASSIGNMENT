var mysql =require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root123",
    database: "mydb"
  });

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/*
PS D:\NODEJSASSIGNMENT\NODEJSASSIGNMENT\ASSIGNMENT 2> node "d:\NODEJSASSIGNMENT\NODEJSASSIGNMENT\ASSIGNMENT 2\ShowLimitedRecord.js"
[
  RowDataPacket { name: 'Company Inc', address: 'Highway 37' },
  RowDataPacket { name: 'uality hardware', address: 'nashik 15' },
  RowDataPacket { name: 'Amy', address: 'Apple st 652' },
  RowDataPacket { name: 'Michael', address: 'Canyon 123' },
  RowDataPacket { name: 'Sandy', address: 'Ocean blvd 2' }
]
*/