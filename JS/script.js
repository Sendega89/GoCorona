const menuButton = document.querySelector('.menu__icon');
const menuEl = document.querySelector('.menu__body');
menuButton.onclick = () =>{
   menuEl.classList.toggle('active')
}
