let list = document.getElementById("bell-notifications").querySelector("ul");
function updateCounter(){
    
    let counter = document.getElementById("bell-counter");
    
    counter.textContent = list.getElementsByTagName('li').length;
}

updateCounter();

function addNotification(){
    let counter = document.getElementById("bell-counter");

    let li = document.createElement("li");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    // p.style.border;
    btn.textContent = "x";
    btn.setAttribute('id', 'delBtn');
    p.textContent = "Привет, John!";
    li.appendChild(p);
    li.appendChild(btn);
    list.appendChild(li);
    updateCounter();
}




function interval() {
    id = setInterval(addNotification, 3000, 1);
}

function delayDecorator(func, delay){
    return function(){
        clearInterval(id);
        setTimeout(func, delay);
    }
}

function handleNotificationClick(){
    let delayedInterval = delayDecorator(interval, 10000);
    delayedInterval(); 
    console.log('Clicked');
}

let id;
let bellBtn = document.querySelector(".bell");

interval();

bellBtn.addEventListener("click", handleNotificationClick);