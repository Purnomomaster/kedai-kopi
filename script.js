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
// start anim
const handleMouseMove = e => {
    const { currentTarget: target } = e
    const rect = target.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top
    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}
for (const card of document.querySelectorAll(".menu-card")) {
    card.onmousemove = e => handleMouseMove(e)
}