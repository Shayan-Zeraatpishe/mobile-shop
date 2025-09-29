//Img Preview

const imageInput = document.getElementById("logosite");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = "none";
  }
});


const imageInput1 = document.getElementById("minilogosite");
const imagePreview1 = document.getElementById("imagePreview1");

imageInput1.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview1.src = e.target.result;
      imagePreview1.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview1.style.display = "none";
  }
});
