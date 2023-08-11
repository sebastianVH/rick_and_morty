const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoincrement:true,
         allowNull:false,
         primaryKey:true
      },
      name:{
         type: DataTypes.STRING,
         allowNull:false
      },
      status:{
         type:DataTypes.ENUM,
         values:["Alive","Dead","unknown"],
         allowNull:false
      },
      species:{
         type: DataTypes.STRING,
         allowNull:false
      },
      gender:{
         type: DataTypes.ENUM,
         values:["Female","Male","Genderless","unknown"],
         allowNull:false
      },
      origin:{
         type: DataTypes.JSON,
         allowNull: false
      },
      image:{
         type: DataTypes.STRING,
         allowNull:true
      }
   }, { timestamps: false });
};
