let textBox = document.querySelector(".textBox");
let imgBox = document.querySelector(".imgBox");
let input = document.getElementById("file-input");
let preview = document.getElementById("preview");


imgBox.onclick = function(){
    textBox.classList.toggle('hide');
}

input.addEventListener("change", () => {
    let file = input.files[0];
    preview.src = URL.createObjectURL(file);
});