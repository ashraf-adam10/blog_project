let textBox = document.querySelector(".textBox");
let imgBox = document.querySelector(".imgBox");
let input = document.getElementById("file-input");
let preview = document.getElementById("preview");
let postInput = document.getElementById("postInput");
let textInput = document.getElementById("textInput");
let addPostBtn = document.getElementById("addPostBtn");
let mainTitle = document.getElementById("mainTitle");
let postImg = document.getElementById("postImg");


addPostBtn.addEventListener("click", ()=> {
    mainTitle.innerHTML = textInput.value;
    postImg.src = preview.src;
    textBox.innerHTML = postInput.value;
    textInput.value = "";
    preview.src = "";
    postInput.value = "";
});

imgBox.addEventListener("click", ()=> {
    textBox.classList.toggle('hide');
});

input.addEventListener("change", () => {
    let file = input.files[0];
    preview.src = URL.createObjectURL(file);
});