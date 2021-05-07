'use strict';

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const cors = require('cors');
const path = require('path');
const mediaserver = require('mediaserver');


//Controllers
const apiController = require(process.env.C_API);
const addController = require(process.env.C_ADD);

require('dotenv').config();

//Config
    //Template Engine
        app.engine('handlebars',handlebars({defaultLayout: 'main'}));
        app.set('view engine','handlebars');
        app.use(express.static('styles'));
        app.use(cors());
        let urlencodedParser = bodyParser.urlencoded({extended:false});

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//Rotas
    
    //Lista todos comentários            
    app.get('/',function(req,res){
        Post.findAll().then(function(posts){
            res.render(__dirname+process.env.DR_COMENTARIO,{posts: posts})
        })
        
    })

    //Carrega comentarios.handlebars
    app.get('/',function(req,res){
        res.render(__dirname+process.env.DR_COMENTARIO)
    })
 
    //Envia novo comentário
    app.post('/addcomentario',addController.postAddComentario);
    
    //Lê comentário
    app.get('/geraaudio/:comentarios',apiController.getComentarios);

    app.get('/escutar',function(req, res){
        //Ouve o comentário
        var valor = 1;
        if(valor = 1){
            const recebeAudio = path.join(__dirname+process.env.DR_AUDIO);
            mediaserver.pipe(req, res, recebeAudio);
        }
    })

app.listen(process.env.port || 3000);
console.log("Server rodando na url http://localhost:3000");
