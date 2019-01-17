var querystring = require('querystring');
var util = require("util");
function login(req, res, connect){
	var post = '';
	req.on('data', function(chunk){
		post += chunk;
	});

	var requsetmsg = {};

	req.on('end', function(){    
        post = querystring.parse(post);
		console.log(post);
		
		connect.connect.query('SELECT * FROM user WHERE name = "zhangdan"', function (error, results, fields) {
		  if (error) throw error;
		  console.log('The solution is: ', results[0].pass);
		  requsetmsg = {successmsg: results[0].pass};
		  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		  res.write(util.inspect(requsetmsg));
		  //res.write(requsetmsg);
		  res.end();
		});
    });
}

exports.login = login;