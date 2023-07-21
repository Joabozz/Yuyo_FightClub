/*
dropdown btn
*/
const toggleBtn = document.querySelector('.togle_btn');
const toggleBtnIcon = document.querySelector('.togle_btn i');
const drownDown = document.querySelector('.dropdown');

toggleBtn.onclick = function(){
    drownDown.classList.toggle('open');
    const isOpen = drownDown.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-light fa-xmark'
    : 'fa-solid fa-light fa-bars'
}