const {User} = require("../DB_connection")
const bcrypt = require('bcrypt')
const saltRounds = 10

const postUser = async(req,res) => {
    const {email,password} = req.body
    const registeredUser = await User.findOne({where:{email}})
    if (registeredUser) return res.status(400).json({error: "User is already registered"})
    if(!email || !password) return res.status(400).json({error: "Missing data. Please, complete the form"})
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPass = await bcrypt.hash(password,salt)
        const createdUser = await User.create({
            email: email,
            password: hashedPass
        })
        res.status(201).json({createdUser: createdUser.id,access:true})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postUser