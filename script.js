//create 2 fields and a button reverse
let inputLeft = document.querySelector('.text_left');
let inputRight = document.querySelector('.text_right');
let btnReverse = document.querySelector('.reverse_btn');

btnReverse.addEventListener('click', reverseText);

function reverseText() {
    let textRight = inputRight.value;
    let textLeft = inputLeft.value;
    inputRight.value = textLeft;
    inputLeft.value = textRight;
}