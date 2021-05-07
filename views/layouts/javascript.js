(function readyJS(win,doc){
    'use strict';
    
    let form = doc.querySelector('#form');
    let comentarios = doc.querySelector('#comentarios');
    let response=doc.querySelector('.response');
    
    //Envia o formulário ao nodejs
    function sendForm(event){
        event.preventDefault();
        let ajax = new XMLHttpRequest();
        let params = 'comentario='+comentario.value;  
        
        ajax.open('POST',process.env.AJAX_LOCAL);
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax.onreadystatechange=function(){
            if(ajax.status == 200 && ajax.readyState==4){
                console.log(ajax.responseText);
            }
        }
        ajax.send(params);
    }
    form.addEventListener('submit',sendForm,false);

})(window.document);