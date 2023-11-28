const trash = document.getElementById("trash-cards")
const resultCost = document.getElementById("result-cost")

function generateCards(cardsData){
    const cards = [];
    let price = 0;
    
    for (let i = 0; i < cardsData.length; i++){
        
        let quantity = JSON.parse(localStorage.getItem('productsData'))[i+1]
        price += parseInt(cardsData[i].cost) * parseInt(quantity);
        if (parseInt(quantity) > 0){
            cards.push(`<div class="card" data-product-id=${cardsData[i].id}>
            <div class="food-image"><img src="images/cards/DR_ChocolateVanillaMalt_Scoop_pixian_ai.png" alt=""></div>
            
            <p class="food-title">${cardsData[i].title}</p>
            <button id="remove" class="rate"><p ><i class='bx bx-trash'></i></p></button>

            
            <p class="price">${cardsData[i].cost} <span>руб.</span></p>
            <div id="container-btns">
                <button id="minus"><p>-</p></button>
                <p id="quantity">${quantity}</p>
                <button id="plus"><p>+</p></button>
            </div>
            </div>`)
        }

        resultCost.innerHTML = price;
    }
    return cards;
}

trash.innerHTML = generateCards(cardsData).join("");


