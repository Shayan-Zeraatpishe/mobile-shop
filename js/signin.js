  const input = document.getElementById("numberphone");
  const error = document.getElementById("error");

 
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); 

    if (this.value.length > 11) {
      this.value = this.value.slice(0, 11);
    }
  });

  input.addEventListener("blur", function () {
    if (this.value.length !== 11) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  });