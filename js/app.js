const mainImg = document.querySelector(".main-image");
const cardBox = document.querySelectorAll(".card-image");

cardBox.forEach(img =>{
    img.addEventListener('click',() => {
        mainImg.src = img.firstElementChild.src;
    });
})