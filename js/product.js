//button
let btndesctiption = document.getElementById('desctiption');
let btnfulldescription = document.getElementById('full-description');
let btncomments = document.getElementById('comments');

//section
let rowdesctiption = document.getElementById('row1');
let rowfulldescription = document.getElementById('row2');
let rowcomments = document.getElementById('row3');

(function offsections() {
    rowdesctiption.classList.add("active");
    btndesctiption.classList.add("active-btn");
    rowdesctiption.style.display = "block";
})();

/* Function Style Btn */
function stbtn(btn1, btn2, btn3) {
    btn1.classList.add("active-btn");
    btn2.classList.remove("active-btn");
    btn3.classList.remove("active-btn");
}

/* Function Style Section */
function sttime(el, el2, el3) {
    el.style.display = "block";

    requestAnimationFrame(() => {
        el.classList.add("active");
        el2.classList.remove("active");
        el3.classList.remove("active");
    });
}

btndesctiption.addEventListener('click', function () {

    rowfulldescription.style.display = "none";
    rowcomments.style.display = "none";
    stbtn(btndesctiption, btnfulldescription, btncomments);
    sttime(rowdesctiption, rowfulldescription, rowcomments);
});

btnfulldescription.addEventListener('click', function () {


    rowdesctiption.style.display = "none";
    rowcomments.style.display = "none";
    stbtn(btnfulldescription, btndesctiption, btncomments);
    sttime(rowfulldescription, rowdesctiption, rowcomments);
});


btncomments.addEventListener('click', function () {

    rowdesctiption.style.display = "none";
    rowfulldescription.style.display = "none";
    stbtn(btncomments, btnfulldescription, btndesctiption);
    sttime(rowcomments, rowdesctiption, rowfulldescription);
});

