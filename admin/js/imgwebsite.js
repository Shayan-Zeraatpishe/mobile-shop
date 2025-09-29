document.querySelectorAll(".imageInput").forEach((input, index) => {
    input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (ev) {
                input.closest(".slide-side").querySelector(".imgPreview").src = ev.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
