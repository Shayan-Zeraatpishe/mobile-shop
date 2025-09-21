function normalizePersian(text) {
    return text
        .replace(/ي/g, "ی")  // تبدیل "ي" عربی به "ی" فارسی
        .replace(/ك/g, "ک")  // تبدیل "ك" عربی به "ک" فارسی
        .normalize("NFKD")    // نرمال‌سازی
        .toLowerCase();       // تبدیل به حروف کوچک برای تطابق بهتر
}

function toggleOptions(event) {
    event.stopPropagation();
    let optionsContainer = document.querySelector(".options-container");
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
}

function selectOption(element) {
    document.querySelector(".select-box").innerText = element.innerText;
    document.querySelector(".options-container").style.display = "none";
}

function filterOptions() {
    let input = normalizePersian(document.querySelector(".search-box").value);
    let options = document.querySelectorAll(".option");
    options.forEach(option => {
        let optionText = normalizePersian(option.innerText);
        option.style.display = optionText.includes(input) ? "block" : "none";
    });
}

function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, arguments), delay);
    };
}

const debouncedFilterOptions = debounce(filterOptions, 300);

function closeOptions(event) {
    if (!document.querySelector(".custom-select").contains(event.target)) {
        document.querySelector(".options-container").style.display = "none";
    }
}

function selectOption(element) {
    document.querySelector(".select-box").innerText = element.innerText; // نمایش مقدار انتخاب‌شده
    document.getElementById("selectedOptionInput").value = element.getAttribute("data-value"); // مقدار را در input مخفی قرار بده
    document.querySelector(".options-container").style.display = "none"; // بستن لیست
}