//mnue
const btnmenu = document.getElementById('btnmenu');
const over = document.getElementById('over');
const accordionRight = document.getElementById('accordionright');


//accrodiaon
const btnorder = document.getElementById('btnorder');
const btndetailsaccount = document.getElementById('btndetailsaccount');
const containerOrders = document.querySelector('.container-orders');
const containerDetailsAccount = document.querySelector('.container-edit-account');


//mnue
btnmenu.addEventListener('click', () => {
    accordionRight.classList.toggle('accordion-right-active');
    over.classList.add('active-over');
});

over.addEventListener('click', () => {
    accordionRight.classList.remove('accordion-right-active');
    over.classList.remove('active-over');
});

containerOrders.classList.add('active-orders');

//accrodiaon
btnorder.addEventListener('click', () => {
    containerOrders.classList.add('active-orders');
    containerDetailsAccount.classList.remove('active-details-account');


    accordionRight.classList.remove('accordion-right-active');
    over.classList.remove('active-over');

});
btndetailsaccount.addEventListener('click', () => {
    containerOrders.classList.remove('active-orders');
    containerDetailsAccount.classList.add('active-details-account');

    accordionRight.classList.remove('accordion-right-active');
    over.classList.remove('active-over');
});











