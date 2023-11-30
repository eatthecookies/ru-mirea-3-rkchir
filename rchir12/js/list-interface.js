
let btn = document.getElementById("create");

let list = document.getElementById("list");

function creating(){
    let text = prompt();
    while (text !== null){
        let li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        text = prompt();
    }
}

btn.addEventListener("click", creating);


function showNotification(text){
    let notifications = document.getElementById("notifications");
    let note = document.createElement("div");
    note.setAttribute('id', 'notification');
    note.textContent = text;
    notifications.appendChild(note);
    setTimeout(()=>notifications.removeChild(note), 1500);
}
showNotification("Я уведомление!");