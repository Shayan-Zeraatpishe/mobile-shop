const products = document.querySelectorAll(".sec-listproduct");

products.forEach(product => {
    const input = product.querySelector(".counter");
    const plus = product.querySelector(".plus");
    const minus = product.querySelector(".minus");

    plus.addEventListener("click", () => {
        let value = parseInt(input.value) || 1;
        let max = parseInt(input.max);
        if (value < max) {
            input.value = value + 1;
        }
    });

    minus.addEventListener("click", () => {
        let value = parseInt(input.value) || 1;
        let min = parseInt(input.min);
        if (value > min) {
            input.value = value - 1;
        }
    });
});



// const input = document.getElementById("counter");
// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");

// plus.addEventListener("click", () => {
//     let value = parseInt(input.value) || 1;
//     let max = parseInt(input.max);
//     if (value < max) {
//         input.value = value + 1;
//     }
// });

// minus.addEventListener("click", () => {
//     let value = parseInt(input.value) || 1;
//     let min = parseInt(input.min);
//     if (value > min) {
//         input.value = value - 1;
//     }
// });
