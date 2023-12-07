let bg = document.getElementById("bg");
let rocket = document.getElementById("rocket");
let planet = document.getElementById("planet");
window.addEventListener("scroll", function(){
    var value = this.window.scrollY;

    
    planet.style.top =  100 + value * 0.7 + 'px';
    planet.style.rotate = -value * 0.1 + 'deg';
    planet.style.left = 100 + value * 1 + 'px';

    rocket.style.rotate = -value * 0.1 + 'deg';
    rocket.style.left = 500 - value * 1 + 'px';
    rocket.style.top =  400 - value * 0.7 + 'px';
    bg.style.transform = `translateX(${value*0.09}px)`;

})
