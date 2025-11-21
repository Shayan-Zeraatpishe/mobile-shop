//add to cart
const toggleButton = document.getElementById('container-card');
const toggleButtonCart = document.getElementById('addcart');

toggleButtonCart.addEventListener('click', function () {
    toggleButton.classList.toggle('active');
});


/* Open-close navbar */
const containerdark = document.getElementById('container-dark');
const btnmenu = document.getElementById('btnmenu');
const navbar = document.getElementById('navbar');

btnmenu.addEventListener('click', function () {
    containerdark.classList.toggle('active-dark');
    navbar.classList.toggle('active-navbar');
    document.body.classList.add('no-scroll');
});

containerdark.addEventListener('click', function () {
    navbar.classList.toggle('active-navbar');
    containerdark.classList.remove('active-dark');
    document.body.classList.remove('no-scroll');
});



/* Submenu */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btnsubment");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            const li = btn.closest("li");
            const submenu = li.querySelector(".submenu");
            submenu.classList.toggle("active-submenu");
        });
    });
});


const btnsearch = document.getElementById('btnsearch');
const containersearch = document.querySelector('.container-serach');
const closecontainersearch = document.getElementById('closecontainersearch');
btnsearch.addEventListener('click', function () {
    containersearch.classList.add("container-serach-show");
    document.body.classList.add('no-scroll');
});

closecontainersearch.addEventListener('click' , function(){
    containersearch.classList.remove("container-serach-show");
     document.body.classList.remove('no-scroll');
    
});




const searchajax = document.getElementById('searchajax');
const boxresultsearch = document.getElementById('boxresultsearch');

searchajax.addEventListener('focus' , function(){
    boxresultsearch.classList.add('box-result-search-active');
});

searchajax.addEventListener('blur' , function(){
    boxresultsearch.classList.remove('box-result-search-active');
});





