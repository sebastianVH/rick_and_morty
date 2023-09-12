const {User} = require("../DB_connection")

const postUser = async(req,res) => {
    const {email,password} = req.body
    const registeredUser = await User.findOne({where:{email}})
    if (registeredUser) return res.status(400).json({error: "El usuario ya se encuentra registrado"})
    if(!email || !password) return res.status(400).json({error: "Faltan Datos"})
    try {
        const createdUser = await User.create({
            email: email,
            password: password
        })
        res.status(201).json({createdUser,access:true})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postUser