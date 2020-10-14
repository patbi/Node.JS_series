// functions to save and read data from system

const fs = require('fs')
const http = require('http')
const url = require('url')
const host = '127.0.0.1'
const port = 8000

// friendly urls
const slugify = require('slugify')

let replaceTemplate = require('./modules/replaceTemplate')

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// const hello = 'hello'
// console.log(textIn)
// const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('synchronous File written')

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! xx')
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3)

//             fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, `utf-8`, err => {
//                 console.log('Your file has been written :D')
//             })
//         }, {})
//     }, {})
// }, {})

// console.log('Will read file!')

////////////////////////////
// Server

////////////////
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)
    //console.log(dataObj)
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // });
    // res.end(data);

const slugs = dataObj.map(el =>
    slugify(el.productName, {
        lower: true
    })
)
console.log(slugs)

// console.log(slugify(`Fresh Avocados`, { lower: true })) => fresh-avocados

/**
 * @param  {} (req
 * @param  {} res
 */
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true)

    // console.log(query);
    // console.log(pathname);

    /**
     * @param  {} pathname==='/'||pathname==='/overview'
     */
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output)

        /**
         * @param  {} pathname==='/product'
         */
    } else if (pathname === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        const product = dataObj[query.id]
        const output = replaceTemplate(tempProduct, product)
        res.end(output)

        /**
         * @param  {} pathname==='/api'
         */
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(data)

        // Not found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>')
    }
    //res.end('hello from the server')
})

/**
 * @param  {} port
 * @param  {} '127.0.0.1 => localhost'
 * @param  {} (
 */
server.listen(`${port}`, `${host}`, () => {
    console.log(`listening to requests on port ${host}:${port}`)
})