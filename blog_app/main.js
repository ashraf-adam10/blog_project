let textBox = document.querySelector(".textBox");
let imgBox = document.querySelector(".imgBox");
let postInput = document.getElementById("postInput");
let textInput = document.getElementById("textInput");
let addPostBtn = document.getElementById("addPostBtn");
let mainTitle = document.getElementById("mainTitle");


addPostBtn.addEventListener("click", () => {
    let title = textInput.value.trim();
    let content = postInput.value.trim();

    if (title === "" && content == "") {
        alert("من فضلك أضف محتوى قبل النشر");
        return;
    }

    let newPost = document.createElement("div");
    newPost.className = "containerText";

    let newImgBox = document.createElement("div");
    newImgBox.className = "imgBox hide";


    let titleElement = document.createElement("h2");
    titleElement.id = "mainTitle";
    titleElement.textContent = title;

    let textBoxElement = document.createElement("div");
    textBoxElement.className = "textBox";

    let paragraph = document.createElement("p");
    paragraph.textContent = content;

    textBoxElement.appendChild(paragraph);
    newImgBox.appendChild(titleElement);
    newImgBox.appendChild(textBoxElement);
    newPost.appendChild(newImgBox);

    document.getElementById("postsContainer").prepend(newPost);

    textInput.value = "";
    postInput.value = "";
    preview.src = "";
    input.value = "";
});


imgBox.addEventListener("click", ()=> {
    textBox.classList.toggle('hide');
});
