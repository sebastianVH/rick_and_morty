const {User }= require("../DB_connection")


const login = async (req,res) => {
    const {email, password} = req.query
    if(!email || !password) return res.status(400).json({error:"Faltan Datos"})
    try {
        const searchedUser =  await User.findOne({
            where:{
                email: email
            } 
        });
        if(!searchedUser) return res.status(404).json({error:"Usuario no encontrado"})
        if(searchedUser.password !== password) return res.status(403).json({error:"Contraseña Incorrecta"})
        res.status(200).json({access: true})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = login