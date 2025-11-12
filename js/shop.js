const btnfiltershop = document.getElementById('btnfiltershop');

const overshop = document.getElementById('over');

const btnclosefilter = document.getElementById('btnclosefilter');

btnfiltershop.addEventListener('click', function() {
    const filtershop = document.getElementById('secright');
    
    filtershop.classList.toggle('active-right');
    overshop.classList.add('active-over');
});

overshop.addEventListener('click', function(){
    const filtershop = document.getElementById('secright');
    
    filtershop.classList.remove('active-right');
    overshop.classList.remove('active-over');
});

btnclosefilter.addEventListener('click', function(){
    const filtershop = document.getElementById('secright'); 
    filtershop.classList.remove('active-right');
    overshop.classList.remove('active-over');
});

