document.addEventListener('DOMContentLoaded', () => {
  const previewContainer = document.querySelector('.gallery-preview');
  const sliderTrack = document.querySelector('.slider-track');
  const thumbsContainer = document.querySelector('.gallery-thumbnails');

  // ابتدا نُدها
  let slides = sliderTrack.querySelectorAll('.slide');
  let thumbnails = thumbsContainer.querySelectorAll('.thumbnail');

  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';

  // اگر صفحه RTL هست، ترتیب DOM رو برگردون (reverse) تا منطق اسلایدر یکسان بمونه
  if (isRTL) {
    Array.from(sliderTrack.children).reverse().forEach(child => sliderTrack.appendChild(child));
    Array.from(thumbsContainer.children).reverse().forEach(child => thumbsContainer.appendChild(child));

    // دوباره nodeListها رو بگیر
    slides = sliderTrack.querySelectorAll('.slide');
    thumbnails = thumbsContainer.querySelectorAll('.thumbnail');
  }

  let currentIndex = 0;
  const total = slides.length;

  function showImage(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    // از درصد استفاده می‌کنیم (واکنش‌گرا)
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    thumbnails.forEach(t => t.classList.remove('active'));
    if (thumbnails[currentIndex]) thumbnails[currentIndex].classList.add('active');
  }

  // کلیک روی thumbnail
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();
      showImage(i);
    });
  });

  // جلوگیری از drag پیش‌فرض مرورگر
  previewContainer.addEventListener('dragstart', e => e.preventDefault());
  slides.forEach(img => { img.draggable = false; });

  // swipe / drag با live move
  let startX = 0, endX = 0;
  let isDown = false, isDrag = false;

  function handleSwipe() {
    const diff = endX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        showImage(currentIndex + 1); // swipe به چپ -> بعدی
      } else {
        showImage(currentIndex - 1); // swipe به راست -> قبلی
      }
      isDrag = true;
    } else {
      // حرکت ناچیز -> برگرد سر جای قبلی
      showImage(currentIndex);
      isDrag = false;
    }
  }

  // ماوس: شروع
  previewContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    isDrag = false;
    startX = e.clientX;
    // غیرفعال کردن transition برای live-drag
    sliderTrack.style.transition = 'none';
    e.preventDefault();
  });

  // ماوس: حرکت زنده
  previewContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const diff = e.clientX - startX;
    const width = previewContainer.clientWidth || 1;
    // حرکت نسبی در درصد تا responsive باشه
    const percent = (diff / width) * 100;
    sliderTrack.style.transform = `translateX(${ -currentIndex * 100 + percent }%)`;
  });

  // ماوس: پایان
  previewContainer.addEventListener('mouseup', (e) => {
    if (!isDown) return;
    endX = e.clientX;
    // بازگرداندن transition (حذف inline به معنی برگشت به CSS)
    sliderTrack.style.transition = '';
    handleSwipe();
    isDown = false;

    // فقط اگر drag نبود، modal باز کن (کلیک واقعی)
    if (!isDrag) {
      modal.style.display = 'block';
      modalImg.src = slides[currentIndex].src;
    }
  });

  // اگر موس از preview خارج شد در حین drag
  previewContainer.addEventListener('mouseleave', (e) => {
    if (!isDown) return;
    // مثل mouseup رفتار کن
    endX = e.clientX || startX;
    sliderTrack.style.transition = '';
    handleSwipe();
    isDown = false;
  });

  // لمس: شروع
  previewContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDrag = false;
    sliderTrack.style.transition = 'none';
  }, { passive: true });

  // لمس: حرکت زنده
  previewContainer.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientX - startX;
    const width = previewContainer.clientWidth || 1;
    const percent = (diff / width) * 100;
    sliderTrack.style.transform = `translateX(${ -currentIndex * 100 + percent }%)`;
  }, { passive: true });

  // لمس: پایان
  previewContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    sliderTrack.style.transition = '';
    handleSwipe();

    if (!isDrag) {
      modal.style.display = 'block';
      modalImg.src = slides[currentIndex].src;
    }
  });

  // modal close
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

  // در resize مجدد محاسبه کن تا transform درست باشه
  window.addEventListener('resize', () => {
    sliderTrack.style.transition = 'none';
    showImage(currentIndex);
    // اندکی تاخیر تا transition CSS برگرده
    setTimeout(() => sliderTrack.style.transition = '', 30);
  });

  // شروع با اولین تصویر
  showImage(0);
});
