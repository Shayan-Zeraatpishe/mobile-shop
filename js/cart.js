    document.querySelectorAll(".method").forEach(method => {
        method.addEventListener("click", function () {
            let input = this.querySelector("input[type=radio]");
            input.checked = true; // انتخاب بشه
        });
    });