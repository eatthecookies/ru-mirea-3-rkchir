var list = document.getElementById("cmd-list");
var items = list.querySelectorAll('img');

list.addEventListener("click", function(event){
    if (!event.ctrlKey){
      if (event.target.tagName == "IMG")
        {
            items.forEach(element => {
                element.classList.remove("selected");
            });
            event.target.classList.add("selected"); 
        }
        else{
            items.forEach(element => {
                element.classList.remove("selected");
            });
        }
    } else {
        if (event.target.tagName == "IMG")
            event.target.classList.add("selected"); 
    }
    
})

list.addEventListener('mousedown', function(event) {
    event.preventDefault();
});