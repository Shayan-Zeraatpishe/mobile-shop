function addColor() {
    let color = document.getElementById("colorInput").value;
    let ul = document.getElementById("colorList");

    let li = document.createElement("li");

    li.innerHTML = `
            <span class="span-color" style="width:20px;height:20px;background:${color};"></span>
            <input type="hidden" name="ProductColors" value="${color}" />
            <span style="margin-right:10px;">${color}</span>
            <button type="button" class="btn-color" onclick="this.parentElement.remove()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
            </button>
        `;

    ul.appendChild(li);
}


let specIndex = 0;

function addSpec() {
    let container = document.getElementById("specContainer");

    let div = document.createElement("div");
    div.classList.add("divinput");
    div.style.marginBottom = "5px";

    div.innerHTML = `
            <input type="text" name="Specs[${specIndex}].Key" placeholder="عنوان مشخصه" />
            <input type="text" name="Specs[${specIndex}].Value" placeholder="مقدار مشخصه" />
            <button type="button" class="btn-remove" onclick="this.parentElement.remove()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg></button>
        `;

    container.appendChild(div);
    specIndex++;
}



let specIndex1 = 0;

function addAdditional() {
    let container = document.getElementById("specContainer1");

    let div = document.createElement("div");
    div.classList.add("divinput");
    div.style.marginBottom = "5px";

    div.innerHTML = `
            <input type="text" name="Specs[${specIndex1}].Key" placeholder="عنوان مشخصه" />
            <input type="text" name="Specs[${specIndex1}].Value" placeholder="مقدار مشخصه" />
            <button type="button" class="btn-remove" onclick="this.parentElement.remove()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg></button>
        `;

    container.appendChild(div);
    specIndex1++;
}



/* Show img thmnail */
function addImage() {
    let input = document.getElementById("imageInput");
    let files = input.files;

    if (files.length === 0) return;

    let container = document.getElementById("imageList");

    for (let file of files) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let div = document.createElement("div");
            div.style.position = "relative";
            div.style.width = "100px";
            div.style.height = "100px";

            div.innerHTML = `
                    <img src="${e.target.result}" class="img-thmnail" />
                    <input type="hidden" name="ProductImagesBase64" value="${e.target.result}" />
                    <button type="button" class="btn-openimg" onclick="this.parentElement.remove()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                    </button>
                `;

            container.appendChild(div);
        };
        reader.readAsDataURL(file);
    }

    input.value = "";
}