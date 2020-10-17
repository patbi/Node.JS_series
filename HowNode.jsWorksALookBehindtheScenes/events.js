const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

myEmitter.on("newScale", () => {
	console.log('There was a new sale!');
});

myEmitter.on("newScale", () => {
	console.log("Costumer name: Patrick Biyaga");
});

myEmitter.on("newScale", stock => {
	console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newScale", 9);

/////////////

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('Request received!')
	console.log(req.url);
	res.end('Request received');
});

server.on("request", (req, res) => {
	console.log("Another request");
});

server.on("close", () => {
	console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Waiting for request...");
});