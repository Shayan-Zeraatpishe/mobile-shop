const btnclose = document.getElementById('btnclose');
const contanerchat = document.getElementById('contanerchat');
const floatbtnchat = document.getElementById('floatbtnchat');

btnclose.addEventListener('click' , function(){

    contanerchat.classList.remove('container-chatbot-active');
     contanerchat.classList.add('container-chat-hide');
});

floatbtnchat.addEventListener('click' , function(){
    contanerchat.classList.remove('container-chat-hide');
    contanerchat.classList.add('container-chatbot-active');

});