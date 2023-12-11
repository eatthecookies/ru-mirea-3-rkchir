var contents = document.getElementById("list");

contents.addEventListener("click", function(e){
    var n = prompt("Хотите перейти по ссылке?");
    if (n == "Да"){
        return true;
    }
    else e.preventDefault();;
})