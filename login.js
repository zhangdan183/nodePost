var querystring = require('querystring');
function login(req, res){
	var post = '';
	req.on('data', function(chunk){
		post += chunk;
	});
	req.on('end', function(){    
        post = querystring.parse(post);
        console.log(post);
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		res.write("正常进入");
		res.end();
    });
}

exports.login = login;