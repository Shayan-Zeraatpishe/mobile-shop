document.querySelectorAll('.sub-mega-menu > li').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.sub-sub-menu').forEach(sub => sub.classList.remove('active'));
        item.querySelector('.sub-sub-menu').classList.add('active');
    });
});