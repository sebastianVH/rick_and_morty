const {User} = require("../DB_connection")

const postUser = async(req,res) => {
    const {email,password} = req.body
    if(!email || !password) return res.status(400).json({error: "Faltan Datos"})
    try {
        const createdUser = await User.create({
            email: email,
            password: password
        })
        res.status(201).json(createdUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postUser