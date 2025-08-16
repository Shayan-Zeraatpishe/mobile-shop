var swiper = new Swiper(".mySwiper", {
    loop: true, // برای تکرار بی‌نهایت
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000, // هر چند میلی‌ثانیه یک‌بار عوض بشه (اینجا 3 ثانیه)
        disableOnInteraction: false, // وقتی کاربر کلیک کرد، همچنان ادامه بده
         pauseOnMouseEnter: true
    }
});
