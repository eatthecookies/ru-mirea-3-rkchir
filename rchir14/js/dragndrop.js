let carts = document.querySelectorAll(".cart");
let cards = document.querySelectorAll(".card");
let item; 

cards.forEach(element => {
    element.addEventListener("dragstart", function(e){
        item = e.target;
    })
});

document.addEventListener("dragend", function(e){
    e.preventDefault();
})    


carts.forEach(element => {
    element.addEventListener("dragenter", function(e){
        e.preventDefault();

        setTimeout(() => {
            element.style.transform = "scale(1.2)";
        }, 100);
    });

    element.addEventListener("dragleave", function(e){
        e.preventDefault();
        element.style.transform = "scale(1)";
    });

    element.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    element.addEventListener("drop", function(e){
        e.preventDefault();
        let card = item;
        const productId = card.dataset.productId; 
        const quantityP = card.querySelector('#quantity');

        const storedProducts = JSON.parse(localStorage.getItem('productsData'));
        quantityP.innerHTML = ++storedProducts[productId];
        localStorage.setItem('productsData', JSON.stringify(storedProducts));

        element.style.transform = "scale(1)";

        // item.style.background = "black";
        // item.querySelector("#added").style.transform = "translateY(40px)";

        let start = Date.now();
        let timer = setInterval(function(){
            let timePassed = Date.now() - start;
            if (timePassed >= 1200){
                clearInterval(timer);
                return;
            }
            console.log('puk', timePassed);
            item.querySelector("#added").style.top = -40 + timePassed / 20 + 'px';
        }, 1);

        
    });
});


