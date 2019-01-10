var querystring = require('querystring');
var util = require("util");
function login(req, res){
	var post = '';
	req.on('data', function(chunk){
		post += chunk;
	});

	var requsetmsg = {};

	req.on('end', function(){    
        post = querystring.parse(post);
        console.log(post);
        requsetmsg = {successmsg: 'ok'};
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        res.write(util.inspect(requsetmsg));
		//res.write(requsetmsg);
		res.end();
    });
}

exports.login = login;