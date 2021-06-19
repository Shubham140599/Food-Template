gsap.fromTo(
  '.content .textBox a',
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 1.5, opacity: 1, scale: 1, rotation: 0 }
)

gsap.fromTo(
  '.logo',
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 1.5, opacity: 1, scale: 1, rotation: 0 }
)
AOS.init()
// change image on click
function imgSlider(anything) {
  document.querySelector('.fruits').src = anything
}

//change background image

function changeBgColor(color) {
  const bg = document.querySelector('.bg')
  bg.style.background = color
}

//change onclick image
let el = document.querySelectorAll('.thumb li')
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function () {
    var c = 0
    while (c < el.length) {
      el[c++].className = 'check'
    }
    el[i].className = 'check active'
  }
}
