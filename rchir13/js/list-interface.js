
function showNotification(text){
    let notifications = document.getElementById("notifications");
    let note = document.createElement("div");
    note.setAttribute('id', 'notification');
    note.textContent = text;
    notifications.appendChild(note);
    setTimeout(()=>notifications.removeChild(note), 1500);
}
showNotification("Я уведомление!");