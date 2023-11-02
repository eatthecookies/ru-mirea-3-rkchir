"use strict";

const button1 = document.getElementById('button-page-1') ;
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


let isDrawing = false;
const button2 = document.getElementById('button-page-2') ;

button2.onclick = function(){
    if (!isDrawing) {
        isDrawing = true;
        button2.textContent = "Прекратить рисование";
        button2.style.backgroundColor = 'white';
        button2.style.color = 'black';
        document.addEventListener("mousemove", drawElement);
    } else {
        isDrawing = false;
        button2.textContent = "Рисовать";
        button2.style.backgroundColor = 'black';
        button2.style.color = 'white';
        document.removeEventListener("mousemove", drawElement);
    }
};

function drawElement(event) {
    const div = document.createElement("div");
    div.className = "drawn-element";
    div.style.left = (event.clientX - 10) + "px"; // Offset for better positioning
    div.style.top = (event.clientY - 10) + "px"; // Offset for better positioning
    document.body.appendChild(div);
}