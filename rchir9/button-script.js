"use strict";

var button1 = document.getElementById('button-page-1') ;
button1.style.backgroundColor == 'black';

button1.onclick = function(){
    if (button1.style.backgroundColor == 'black')
    {
        button1.style.backgroundColor = 'white';
        button1.style.color = 'black';
    } else {
        button1.style.backgroundColor = 'black';
        button1.style.color = 'white';
    }
};


var button2 = document.getElementById("button-page-2");
var isDrawing = false;

button2.onclick = function()
{
    if (!isDrawing) {
        isDrawing = true;
        button2.textContent = "не рисовать";
        document.addEventListener("mousemove", draw);
    } else {
        isDrawing = false;
        button2.textContent = "рисовать";
        document.removeEventListener("mousemove", draw);
    }
};

function draw(e) {
    var iceCream = document.createElement('img');
    iceCream.style.position = "absolute";
    iceCream.style.zIndex = "-1";
    iceCream.style.left = e.clientX + "px";
    iceCream.style.top = e.clientY + "px";
    iceCream.style.width = "64px";
    iceCream.style.height = "64px";
    iceCream.src = "images/favicon.png";
    document.body.appendChild(iceCream);
};
    
