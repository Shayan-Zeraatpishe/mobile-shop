let containerdark = document.querySelector(".container-dark");
let btnyey = document.querySelectorAll(".btn-eye");
let modalorder = document.getElementById("modalorder");

btnyey.forEach(btn => {
    btn.addEventListener("click", MyFucntion);
});

function MyFucntion() {
    requestAnimationFrame(() => {
        modalorder.classList.add("modal-details-order-active");
        containerdark.classList.add("container-dark-active");
    });
}

function CloseModalbtn() {
    requestAnimationFrame(() => {
        containerdark.classList.remove("container-dark-active");
        modalorder.classList.remove("modal-details-order-active");
    });
}

    
    jalaliDatepicker.startWatch();
    