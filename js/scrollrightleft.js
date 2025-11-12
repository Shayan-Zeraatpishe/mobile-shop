const container = document.querySelector('.discount-left');
let isDown = false;
let startX;
let scrollLeft;
let isRTL = getComputedStyle(container).direction === 'rtl';

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 2;

  // در حالت rtl باید جهت اسکرول برعکس باشه
  container.scrollLeft = isRTL ? scrollLeft - walk : scrollLeft - walk;
});
