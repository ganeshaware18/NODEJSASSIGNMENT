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
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  /*
  PS D:\NODEJSASSIGNMENT\NODEJSASSIGNMENT\ASSIGNMENT 2> node "d:\NODEJSASSIGNMENT\NODEJSASSIGNMENT\ASSIGNMENT 2\DisplayRecord.js"
[
  RowDataPacket { name: 'Company Inc', address: 'Highway 37' },
  RowDataPacket { name: 'uality hardware', address: 'nashik 15' },
  RowDataPacket { name: 'Amy', address: 'Apple st 652' },
  RowDataPacket { name: 'Michael', address: 'Canyon 123' },
  RowDataPacket { name: 'Sandy', address: 'Ocean blvd 2' },
  RowDataPacket { name: 'Betty', address: 'Green Grass 1' },
  RowDataPacket { name: 'Richard', address: 'Sky st 331' },
  RowDataPacket { name: 'Susan', address: 'One way 98' },
  RowDataPacket { name: 'Vicky', address: 'Yellow Garden 2' },
  RowDataPacket { name: 'Ben', address: 'Park Lane 38' },
  RowDataPacket { name: 'William', address: 'Central st 954' },
  RowDataPacket { name: 'Chuck', address: 'Main Road 989' },
  RowDataPacket { name: 'Viola', address: 'Sideway 1633' }
]

  */ 