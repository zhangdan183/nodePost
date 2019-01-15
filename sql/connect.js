var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.0.101',
    user: 'root',
    password: 'zhangdan183',
    database: 'test'
});

connection.connect();

