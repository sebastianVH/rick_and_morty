const http = require('http')
const characters = require('./utils/data.js')


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const partes = req.url.split('/')
    const URL = partes.slice(0,partes.length-1).join('/')

    switch (URL) {
        case '/rickandmorty/character':
            const charNumber = req.url[req.url?.length - 1]
            let character = characters.filter((char)=>char.id === parseInt(charNumber))[0]
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(JSON.stringify(character))
    }


}).listen(3001,'localhost')