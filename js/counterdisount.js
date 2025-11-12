const spans = document.querySelectorAll('.counter-dicsount span');

// گرفتن زمان اولیه از span‌ها
let hours = parseInt(spans[0].textContent);
let minutes = parseInt(spans[1].textContent);
let seconds = parseInt(spans[2].textContent);

// تبدیل به ثانیه
let totalSeconds = hours * 3600 + minutes * 60 + seconds;

const updateDisplay = () => {
  let h = Math.floor(totalSeconds / 3600);
  let m = Math.floor((totalSeconds % 3600) / 60);
  let s = totalSeconds % 60;

  spans[2].textContent = String(h).padStart(2, '0');
  spans[1].textContent = String(m).padStart(2, '0');
  spans[0].textContent = String(s).padStart(2, '0');
};

updateDisplay(); // نمایش اولیه

const countdown = setInterval(() => {
  if (totalSeconds <= 0) {
    clearInterval(countdown);
    // می‌تونی اینجا یه پیام بزاری مثل "تخفیف تمام شد"
    return;
  }

  totalSeconds--;
  updateDisplay();
}, 1000);
