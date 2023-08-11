const {User }= require("../DB_connection")


const login = async (req,res) => {
    const {email, password} = req.query
    if(!email || !password) res.status(400).json({message:"Faltan Datos"})
    try {
        const [searchedUser, created] =  await User.findOrCreate({
            where:{
                email: email
            },
            defaults:{
                password:password
            }
        });
        console.log(searchedUser);
        if(!searchedUser) res.status(404).json({message:"Usuario no encontrado"})
        if(searchedUser.password !== password) return res.status(403).json({message:"Contraseña Incorrecta"})
        res.status(200).json({access: true})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = login