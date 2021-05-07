require('dotenv').config();
const textToSpeechApi = require('../authenticatorApi');
const fs = require('fs');


exports.getComentarios = function(req,res){
    const recebeTexto = req.params.comentarios;
    var valor = 0;
    
        if(recebeTexto != null ){
            
            //Raising the voice 
                const getVoiceParams = {
                    voice: process.env.WATSON_LINGUAGE,
                };
            
                textToSpeechApi.textToSpeech.getVoice(getVoiceParams)
                    .then(voice => {
                        console.log(JSON.stringify(voice, null, 2));
                        })
                    .catch(err => {
                        console.log('error:', err);
                });
            //Recebendo a Voice     
                const synthesizeParams = {
                    text: recebeTexto,
                    accept: 'audio/wav',
                    voice: process.env.WATSON_LINGUAGE,
                };
                
                textToSpeechApi.textToSpeech.synthesize(synthesizeParams)
                    .then(response => {
                        return textToSpeechApi.textToSpeech.repairWavHeaderStream(response.result);
                     })
                    .then(buffer => {
                        fs.writeFileSync('comentario.wav', buffer);
                    })
                    .catch(err => {
                        console.log('error:', err);
                    });
                    res.redirect('/escutar');

        }else(function(erro){
            res.send("Houve um erro:"+erro)
        })
};

