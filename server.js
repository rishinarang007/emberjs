var connect = require("connect");

connect.createServer(
		connect.static("../static-demo")
).listen(3000);
