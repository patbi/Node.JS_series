*The Complete Node.js Course *

# Table of Contents

1. [Module 4: How Node.js Works A Look Behind the Scenes]()


```bash
	 Welcome - it's time to dive really deep into how Node.js actually works behind the scenes. all about Node.js architecture, events and the event loop. streams, modules, and more.
```


```bash
	 Node, V8, Libuv and C++ - let's start by learning a bit about Node architecture. 


	 THE NODE.JS ARCHITECTURE BEHIND THE SCENES 👇
```

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/nodejsarch.JPG)


```bash
	 Processes, Threads and the Thread Pool - So in this lecture, you're gonna learn all about threads and thread pool.


	  NODE PROCESS AND THREADS 👇
```

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/NPT.JPG)



```bash
	 The Node.js Event Loop - .


	  THE Node.js Event Loop 👇
```

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/NEL.JPG)


👉 THE Event Loop IN DETAIL 👇

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/ELID.JPG)


👉 THE EVENT LOOP: NODE VS. OTHERS 👇

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/NVO.JPG)


```bash
	 The Event Loop in Practice - 

	   👉 touch event-loop.js

	   👉 write this code 👇

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));


fs.readFile("text-file.txt", () => {
	console.log("I/O finished");
	console.log("-------------");


	setTimeout(() => console.log("Timer 2 finished"), 0);
	setTimeout(() => console.log("Timer 3 finished"), 3000);
	setImmediate(() => console.log("Immediate 2 finished"));


	process.nextTick(() => console.log("Process.nextTick"));

	crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
	console.log(Date.now() - start, "Password encrypted");

	crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
	console.log(Date.now() - start, "Password encrypted");

	crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
	console.log(Date.now() - start, "Password encrypted");

	crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
	console.log(Date.now() - start, "Password encrypted");

	crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
	console.log(Date.now() - start, "Password encrypted");

	// crypto.pbkdf2('password', 'salt', 100000, 1024, "sha512", () => {
	// 	console.log(Date.now() - start, "Password encrypted")
	// });

	// crypto.pbkdf2('password', 'salt', 100000, 1024, "sha512", () => {
	// 	console.log(Date.now() - start, "Password encrypted")
	// });

	// crypto.pbkdf2('password', 'salt', 100000, 1024, "sha512", () => {
	// 	console.log(Date.now() - start, "Password encrypted")
	// });
});

console.log("Hello from the top-level code");


	👉 run node event-loop.js

```


```bash
	 Events and Event-Driven Architecture -	👇  
```

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/EDA.JPG)


```bash
	 Events in Practice -	👇 

	 👉 touch events.js

	 👉 write this code 👇


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

👉 run node events.js
```


```bash
	 Introduction to Streams - 

	 Streams are yet another fundamental concept in Node.JS.
	 So let's now learn all about them. 👇
```

![Preview](https://github.com/patbi/Node.JS_series/blob/main/HowNode.jsWorksALookBehindtheScenes/SF.JPG)



```bash
	 Streams in Practice - 

	 see you tomorrow.
```