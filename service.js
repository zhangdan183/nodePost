var http = require("http");
var url = require("url");

function start(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("接收到的pathname:" + pathname);
		var datatype = request.method;
		console.log(datatype);

		route(pathname, request, response);

		// response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		// response.write("正常进入");
		// response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('服务器已启动');
}

exports.startservice = start;