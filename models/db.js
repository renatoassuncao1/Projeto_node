const Sequelize = require('sequelize')
require('dotenv').config();
 

//Conexão com banco de dados MySql
    const sequelize = 
        new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DB_PASS,{
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}