const {Favorite} = require("../DB_connection")

const postFav = async (req,res) => {
    const {id,name,origin,status,image,species,gender} = req.body
    if(!name || !origin || !status || !image || !species || !gender) return res.status(401).json({message:"Faltan Datos"})
    try {
        const character = await Favorite.create({
                id:id,
                name: name,
                origin: origin,
                status: status,
                image: image,
                species: species,
                gender: gender
        }) 
        if(character){
            const allCharacters = await Favorite.findAll()
            return res.status(203).json(allCharacters)
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = postFav