var login = require("./login");
var connect = require("./sql/connect");

function route(pathname, req, res){
	console.log('我是路由器，我接收到的地址名称为:'+pathname);
	if(pathname == '/login'){
		login.login(req, res, connect);
		console.log('用户准备登陆了');
	}
}

exports.routeluyou = route;