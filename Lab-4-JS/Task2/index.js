
var intervalSetter = {};
var index = 1;
var imageElement = document.getElementsByClassName("imgStlye");
var nextBtnElement = document.getElementById("nextbtn");

function PreviousImage() {
    if (index == 0) {
        index = 3;
        imageElement[0].setAttribute("src", `./Images/${index}-img.jpeg`);
    } else {
        imageElement[0].setAttribute("src", `./Images/${index--}-img.jpeg`);
    }
}

function NextImage() {
    if (index == 4) {
        index = 1;
        imageElement[0].setAttribute("src", `./Images/${index}-img.jpeg`);
    } else {
        imageElement[0].setAttribute("src", `./Images/${index++}-img.jpeg`);
    }
}

function playImages() {
    intervalSetter = setInterval(NextImage, 1000);
}
function stopPlayImages() {
    clearInterval(intervalSetter);
}