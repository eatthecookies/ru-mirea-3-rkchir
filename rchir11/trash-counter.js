
function addEventListenersToCards()
{
    const productCards = document.querySelectorAll('.card');

// Добавляем обработчик события для каждой карточки товара
    productCards.forEach(function(card) {

        const productId = card.dataset.productId; // Получаем идентификатор товара
        const quantityP = card.querySelector('#quantity');
        const increaseQuantityBtn = card.querySelector('#plus');
        const decreaseQuantityBtn = card.querySelector('#minus');
        const removeFromCard = card.querySelector('#remove');

        
        increaseQuantityBtn.addEventListener('click', function() {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            quantityP.innerHTML = ++storedProducts[productId];
            localStorage.setItem('productsData', JSON.stringify(storedProducts));
            
            trash.innerHTML = generateCards(cardsData).join("");
            addEventListenersToCards();
        });

        removeFromCard.addEventListener('click', function() {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            storedProducts[productId] = 0;
            localStorage.setItem('productsData', JSON.stringify(storedProducts));

            trash.innerHTML = generateCards(cardsData).join("");
            addEventListenersToCards();
        });

        decreaseQuantityBtn.addEventListener('click', function() {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            if ((storedProducts[productId] - 1) != -1)
            {
                quantityP.innerHTML = --storedProducts[productId];
                localStorage.setItem('productsData', JSON.stringify(storedProducts));
                
                trash.innerHTML = generateCards(cardsData).join("");
                addEventListenersToCards();
            }
            
        });

    });
}

addEventListenersToCards(); 