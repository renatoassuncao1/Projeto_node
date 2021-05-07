const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


require('dotenv').config();

//Watson Text to Speech
    //Authenticator API
        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
            apikey: process.env.WATSON_API_KEY,
            }),
            serviceUrl: process.env.WATSON_URL,
        }); 

module.exports = {
    TextToSpeechV1:TextToSpeechV1,
    textToSpeech: textToSpeech,
    IamAuthenticator: IamAuthenticator
}