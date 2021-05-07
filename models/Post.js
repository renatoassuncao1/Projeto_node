const db = require('./db')

const Post = db.sequelize.define(process.env.DB_TABLE,{
    comentarios: {
        type: db.Sequelize.TEXT 
    }
})

//Post.sync({force: true})

module.exports = Post