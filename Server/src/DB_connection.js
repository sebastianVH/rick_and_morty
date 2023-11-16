require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DBB, API_KEY_CLOUDINARY, API_SECRET_CLOUDINARY } = process.env;
const UserModel = require("./models/User")
const FavoriteModel = require("./models/Favorite")
const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: '',
  api_key: API_KEY_CLOUDINARY,
  api_secret: API_SECRET_CLOUDINARY,
  secure: true,
});

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DBB}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
UserModel(sequelize)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;


Favorite.belongsToMany(User,{through:"user_favorite"})
User.belongsToMany(Favorite,{through:"user_favorite"})


module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
