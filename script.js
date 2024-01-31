let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function display() {
    alert("this is your website");

}
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// function display() {
//     alert("this is your website");
// }


// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');
// let menuOverlay = document.querySelector('.menu-overlay');

// menu.onclick = () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
//   menuOverlay.classList.toggle('active');
// }

// window.onscroll = () => {
//   if (window.scrollY > 50) {
//     menu.style.display = 'none';
//     navbar.style.display = 'block';
//   } else {
//     menu.style.display = 'block';
//     navbar.style.display = 'none';
//   }
// }

// function display() {
//   if (window.innerWidth < 768) {
//     menu.style.display = 'block';
//     navbar.style.display = 'none';
//     menuOverlay.style.display = 'block';
//   } else {
//     menu.style.display = 'none';
//     navbar.style.display = 'block';
//     menuOverlay.style.display = 'none';
//   }
// }

// display();

// window.addEventListener('resize', display);
