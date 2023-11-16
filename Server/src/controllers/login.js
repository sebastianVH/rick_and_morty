const {User }= require("../DB_connection")
const bcrypt = require('bcrypt')


const login = async (req,res) => {
    const {email, password} = req.body
    if(!email || !password) return res.status(400).json({error:"Missing Data. Please complete the form."})
    try {
        const searchedUser =  await User.findOne({
            where:{
                email: email
            } 
        });
        if(!searchedUser) return res.status(404).json({error:"User not found"})
        const matchPass = await bcrypt.compare(password,searchedUser.password)
        if(!matchPass) return res.status(403).json({error:"Invalid Password"})
        res.status(200).json({user: searchedUser.email, access: true})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = login