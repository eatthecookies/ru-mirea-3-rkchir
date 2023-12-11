var list = document.getElementById("img-list");
var head = document.getElementById("head");
list.addEventListener("click", function(event){
    if (event.target.src != null)
        head.src = event.target.src;
})