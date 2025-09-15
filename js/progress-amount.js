  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updatePrices() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
    }

    minPrice.textContent = formatNumber(minVal) + " تومان";
    maxPrice.textContent = formatNumber(maxVal) + " تومان";
  }

  minRange.addEventListener("input", updatePrices);
  maxRange.addEventListener("input", updatePrices);

  updatePrices();