var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'rm-bp1333h332uqhzjtc00o.mysql.rds.aliyuncs.com',
  user     : 'zhangdan',
  password : 'Zhangdan',
  database : 'testceshi1'
});
 
connection.connect();
console.log('重新连接一次');

exports.connect = connection;
