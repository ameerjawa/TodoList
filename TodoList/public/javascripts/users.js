'use strict';


var goToIndexPageButton = document.querySelector(".goToIndexPageButton");

goToIndexPageButton.addEventListener('click', onGoToIndexPageButtonClick)

function onGoToIndexPageButtonClick() {

    window.location.href = '/';
    console.log("pressed");
}