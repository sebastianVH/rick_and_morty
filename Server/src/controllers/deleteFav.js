const {Favorite} = require("../DB_connection")

const deleteFav = async (req,res) => {
    const {id} = req.params
    try {
        await Favorite.destroy({
            where: {
                id: id
            }
        })
        const allCharacters = await Favorite.findAll()
        return res.status(203).json(allCharacters)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = deleteFav