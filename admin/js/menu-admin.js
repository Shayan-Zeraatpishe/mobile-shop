const menuadmin = document.getElementById('menuadmin');
const btnmenu = document.getElementById('btnmenu');

const over = document.getElementById('over');

btnmenu.addEventListener('click', function () {
    menuadmin.classList.toggle('ul-list-active');
    document.body.classList.add('no-scroll');

    over.classList.add('active-over');
});

over.addEventListener('click', function () {
    menuadmin.classList.remove('ul-list-active');
    over.classList.remove('active-over');
    document.body.classList.remove('no-scroll');
});

