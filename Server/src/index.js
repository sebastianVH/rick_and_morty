const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')
const cors = require('cors')
const { conn } = require('./DB_connection');

const server = express()
const PORT = 3001;

server.use(morgan('dev'))
server.use(cors())

server.use(express.json())

/*
request --> morgan --> cors --> express.json() -> ruta ('/rickandmorty')
  req        req        req
*/

server.use('/rickandmorty', router)

conn.sync({force:true}).then(() => {
  server.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT}`);
  })
})


// server creado con http
// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const partes = req.url.split('/')
//     const URL = partes.slice(0,partes.length-1).join('/')

//     switch (URL) {
//         case '/rickandmorty/character':
//             const charNumber = req.url[req.url?.length - 1]
//             getCharById(res,charNumber)
//     }

// }).listen(3001,'localhost')