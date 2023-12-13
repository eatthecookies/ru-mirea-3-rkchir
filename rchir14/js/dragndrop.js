
carts = document.querySelectorAll(".cart");

document.addEventListener("DOMContentLoaded", function(e){

    carts.forEach(element => {
        element.addEventListener("drop", function(e){
            element.style.color= 'black';
            let item = document.querySelector(".dragging");
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            quantityP.innerHTML = ++storedProducts[productId];
            localStorage.setItem('productsData', JSON.stringify(storedProducts));
            
            item.classList.remove("dragging");
        })
    });
    document.addEventListener("dragstart", function(e){
        e.target.classList.add("dragging");
    })
})