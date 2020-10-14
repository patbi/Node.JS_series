*The Complete Node.js Course *

# Table of Contents

## Module 2: Introduction to Node.js and NPM

```bash
	 Welcome - Hello Welcome to this complete Node.Js, Express and MongoDB.
	 I'm really happy to welcome you to this huge course today.
```

```bash
✍️ WHAT IS NODE.JS ?

	 NODE.JS is a JavaScript runtime built on Google's 
	 open source V8 JavaScript engine.


✍️ WHY TO USE NODE.JS

	 ✅ Single-threaded, based on event driven, non blocking I/O model;

	 ✅ Perfect for building fast and scalable data-intensive apps.

	 ✅ Companies like THENAVIGO, SEE-DOCS, NETFLIX, UBER, PayPal ebay have started using node in production;

	 ✅ JavaScript across the entire stack: faster and more efficient development;

	 ✅ NPM huge library of open-source packages available for everyone for free;

	 ✅ Very active developer community. 




✍️ WHEN TO USE NODE.JS

	 ✅ API with database behind it (preferably NoSQL);

	 ✅ Data streaming (think Youtube);

	 ✅ Real-time chat application;

	 ✅ Server-side web application.



✍️ DON'T USE 

	 ✅ Applications with heavy server-side processing (CPU-intensive)

	 (RAILS, PHP, PYTHON)

```


```bash
✍️ Running JavaScript Outside the Browser

	✅ step1 : Open Your terminal

	✅ step2 : run: `node` 

	✅ step3 : run: this example: const name="Patrick"

	✅ step4 : run:  `name` 	 

	✅ step5 : run: `.exit`

	✅ for more informations run `tab*2`
```


```bash
✍️ Using Modules Core Modules

	 ✅ Create file like this: `touch index.js`

	 ✅ write this code (look index.js file)

	 ✅ execute code like this `node index.js` 

			const fs = require('fs');
			const hello = "Hello world";
			console.log(hello);
```

✍️ for more informations on 👇

 [Using Modules Core Modules](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html) 


```bash
✍️ Reading and Writing Files

	 👉 create input.text file and write text

	 ✅ write this code (look index.js file)

	 ✅ execute code like this `node index.js`

	 👉 look txt folder

```


```bash
✍️ Blocking and Non-Blocking Asynchronous Nature of Node.js

	 ✅ SYNCHRONOUS (BLOCKING) 👇

	 // Blocking execution
	 
	 const fs = require('fs');
	 const input = fs.readFileSync('input.txt', 'utf-8');
	 console.log(input)


	 ✅ ASYNCHRONOUS CODE (NON-BLOCKING) 👇

	  const fs = require('fs');
		 fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
		 console.log(data);
	  });
	  console.log('Reading file...');

```


```bash
✍️ Reading and Writing Files Asynchronously

 ✅ Reading Files Asynchronously 👇

const fs = require('fs');
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
	console.log(data);
});
console.log('Will read file');


 ✅ Writing Files Asynchronously 👇

 fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
	 fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
		console.log(data2);
		fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
	 		console.log(data3);

	 	fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
			 	console.log('Your file has been written ❤');
			 });
 		});
	});
});
 console.log('Will read file');	 

```


```bash
✍️ Creating a Simple Web Server

	✅ step1 : add http module like this 👉 const http = require('http');

	✅ step2 : write this code 👇

	const server = http.createServer((req, res) => {
	console.log(req); //refresh your browser url
	res.end('Hello from the server');
	});

	server.listen(8000, '127.0.0.1', () => {
		console.log('Listening to requests on port 8000');
	})

	✅ step3 : execute like this 👉 node index.js


	✅ step4 : watch the result on your console and on your browser: 127.0.0.1:8000

```


```bash
✍️ Routing

✅ step1 : add http module like this 👉 const url = require('url');


✅ step2 : write this code 👇


	const server = http.createServer((req, res) => {
	const pathName = req.url;

	if(pathName === '/' || pathName=== '/overview') {
		res.end('This is the OVERVIEW');	
	} else if (pathName === '/product') {
		res.end('This is the PRODUCT');
	} else {
		res.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'hello-world'
		});
		res.end('<h1>Page not found!</h1>');
		}
	});

	server.listen(8000, '127.0.0.1', () => {
		console.log('Listening to requests on port 8000');
	})

	✅ step3 : execute like this 👉 node index.js


	✅ step4 : watch the result on your console and on your browser: 127.0.0.1:8000/product || /overview || /patrick see devtools results.

```




```bash
✍️ Building a (Very) Simple API

	✅ step1 : mkdir dev-data && touch data.json


	✅ step2 : paste this content 👉 look /dev-data/data.json


	✅ step3 : before const server = http.createServer((req, res) => {}

	paste code : 

	👉	const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
		const dataObj = JSON.parse(data);


	✅ step4 : add another route like this  👇

	👉 else if (pathName === '/api') {

		res.writeHead(200, { 'Content-type': 'application/json'});
		res.end(data);

	}


	✅ step5 : run node index.js and see results 👉 localhost:8000/api 


```


```bash
✍️ HTML Templating Building the Templates | HTML Templating Filling the Templates | Parsing Variables from URLs | Using Modules 2 Our Own Modules


✅ step1 : mkdir templates && cd templates && touch card.html overview.html product.html


✅ step2 : mkdir modules && cd modules && touch replaceTemplate.js


✅ step3 : browse the json file to retrieve the data and display it dynamically


✅ step4 : see results with nodemon index.js
   

```


```bash
✍️ Introduction to NPM and the package.json File

👉 see documentation about all modules 👇

✅ initialize package with :  npm init -y

```
[NPM and the package](npmjs.com) 



```bash
✍️ Types of Packages and Installs

So the two types of packages that we can install 
are simple dependencies or development dependencies.


✅ install simply dependencies

	👉 npm install slugify


✅ install	development dependencies

	👉 npm install nodemon --save-dev | yarn add nodemon


✅ see 👉 # in your package.json (dependencies & Devdependencies)


✅ global install

👉 (sudo) npm i nodemon --global


✅ start server like this 👉 nodemon index.js | npm run start | npm start

restart server with 👉 rs

```


```bash
✍️ Using Modules 3 3rd Party Modules

look at the use of slugify in 👉 index.js 

```
[package/slugify](https://www.npmjs.com/package/slugify) 




```bash
✍️ Package Versioning and Updating

✅ npm outdated

✅ npm i slugify@1.0.0

✅ npm outdated

if you change slugify version in your packege.json like this 👇

"slugify": "~1.0.0"

✅ run 👉 npm outdated

✅ run 👉 npm update slugify


✅ delete packege : npm uninstall express

✅ install dependencies packeges 👉 npm i

```



```bash
✍️ Setting up Prettier in VS Code

✅ install Prettier - Code formatter
✅ enable Format On save Save (Settings)
✅ touch .prettierrc and paste this code: {"singleQuote": true}

```




