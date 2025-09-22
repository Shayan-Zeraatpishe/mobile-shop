let btnrep = document.querySelectorAll(".btn-rep");
let btndis = document.querySelectorAll(".btn-rep-not");

btnrep.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let parent = this.closest(".sec-comment");
        let cont = parent.querySelector(".replace-comment");
        cont.classList.toggle("replace-comment-active");
    });
});

btndis.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let parent = this.closest(".sec-comment");
        let cont = parent.querySelector(".replace-comment");
        cont.classList.remove("replace-comment-active");
    });
});
