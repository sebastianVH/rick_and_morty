const axios = require('axios')
const express = require('express')

// const URL = 'https://rickandmortyapi.com/api/character'

// const getCharById = (res,id) => {
//     axios(`${URL}/${id}`)
//     .then(({data}) =>{
//         const {name,gender,species,origin,image,status} = data
//         res.writeHead(200,{'Content-Type':'application/json'})
//         res.end(JSON.stringify({name,gender,species,origin,image,status}))
//     }).catch((error)=>{
//         res.writeHead(500,{'Content-Type':'text-plain'})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById

const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (req, res) => {
//     // const { id } = req.params
//     const id = parseInt(req.params.id)

//     axios(`${URL}${id}`)
//     .then(({ data }) => {

//         const { status, name, species, origin, image, gender } = data

//         const character = { id, status, name, species, origin, image, gender}

//         return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
//     })
//     .catch((error)=>{
//         return res.status(500).json({error:error.message})
//     })
// }

const getCharById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {data} = await axios(`${URL}${id}`)
        const { status, name, species, origin, image, gender } = data
        const character = { id, status, name, species, origin, image, gender}
        return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
    } catch (error) {
        return res.status(404).json({error: 'No existe el personaje buscado'})
    }

}

module.exports = getCharById