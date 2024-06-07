
let selectNumber = 0;
const selectedMBTIs = new Array();
const classImgLists = document.querySelectorAll("#mbti")

function selectMbti(event) {
    if (event.target.getAttribute("class") === "unselected") {
        event.target.setAttribute("class", "selected");
    } else {
        event.target.setAttribute("class", "unselected");
    }
}

for (let index = 0; index < classImgLists.length; index++) {
    classImgLists[index].addEventListener('click', selectMbti);
}