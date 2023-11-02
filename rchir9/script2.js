"use strict";

let answer = prompt('Логин');
if (answer == "Админ") {
    let password = prompt('Введите пароль');
    if (password == "Я главный") 
        alert("Здравствуйте!")
    else 
        alert("Неверный пароль")
}
else if (answer == "" || answer == null) 
        alert('Отменено');
    else 
        alert("Я вас не знаю")
