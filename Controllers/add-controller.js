const Post = require('../models/Post');

exports.postAddComentario = function(req,res){
    Post.create({
        comentarios: req.body.comentarios
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
}