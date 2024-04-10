const nav = document.querySelector('.nav')
document.querySelector('#menu', onclick = () => {
    nav.classList.toggle('active')
})
// klik di luar sidebar
const menu = document.querySelector('#menu')
document.addEventListener('click', function (e) {
    if (menu.contains(e.target) && nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})