

// Добавляем обработчик события для каждой карточки товара
function addEventListenersToCards(categoryId)
{
    const productCards = document.getElementById(categoryId).querySelectorAll('.card');

    productCards.forEach(function(card) {
        const productId = card.dataset.productId; // Получаем идентификатор товара
        const quantityP = card.querySelector('#quantity');
        const increaseQuantityBtn = card.querySelector('#plus');
        const decreaseQuantityBtn = card.querySelector('#minus');
        
        
        increaseQuantityBtn.addEventListener('click', function(e) {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            quantityP.innerHTML = ++storedProducts[productId];
            localStorage.setItem('productsData', JSON.stringify(storedProducts));
            
            let x = (e.target.offsetLeft +  e.target.offsetRight) / 2;
            let y = e.target.offsetTop;

            let ripple = document.createElement("span");
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.id = "ripple";
            this.appendChild(ripple);

            let start = Date.now();


            let timer = setInterval(function(){
                let timePassed = Date.now() - start;
                if (timePassed >= 600){
                    clearInterval(timer);
                    return;
                }
                ripple.style.width = timePassed + 100+ 'px';
                ripple.style.height = timePassed + 100+ 'px';
                ripple.style.top = y - timePassed - 100+ 'px';
                ripple.style.opacity = 0.8 - timePassed / 600 ;
            }, 0.02)
            setTimeout(() => this.removeChild(ripple), 700);   
        });

        decreaseQuantityBtn.addEventListener('click', function() {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            if ((storedProducts[productId] - 1) != -1)
            {
                quantityP.innerHTML = --storedProducts[productId];
                localStorage.setItem('productsData', JSON.stringify(storedProducts));
            }
        });
    });
}