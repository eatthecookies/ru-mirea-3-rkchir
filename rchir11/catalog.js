const catalog = document.querySelector(".cards");
const btnDown = document.getElementById("down-to");
const btnUp = document.getElementById("to-up");

function compareByCost(a, b){
    if (a.cost > b.cost) return 1;
    if (a.cost == b.cost) return 0;
    if (a.cost < b.cost) return -1;
}

function generateCards(cardsData, sort){
    
    if (sort == "y"){
        cardsData.sort(compareByCost);
    } else if (sort == "r"){
        cardsData.sort(compareByCost);
        cardsData.reverse();
    }

    const cards = [];
    for (let i = 0; i < cardsData.length; i++){

        let quantity = JSON.parse(localStorage.getItem('productsData'))[i+1]

        cards.push(`<div class="card" data-product-id=${cardsData[i].id}>
                        <div class="food-image"><img src="images/cards/DR_ChocolateVanillaMalt_Scoop_pixian_ai.png" alt=""></div>
                        
                        <p class="food-title">${cardsData[i].title}</p>
                        <p class="rate"><i class='bx bxs-star'></i>4.8</p>
                        <p class="price">${cardsData[i].cost} <span>руб.</span></p>
                    
                        <div id="container-btns">
                            <button id="minus"><p>-</p></button>
                            <p id="quantity">${quantity}</p>
                            <button id="plus"><p>+</p></button>
                        </div>
                </div>`)
    }
    return cards;
}

catalog.innerHTML = generateCards(cardsData, "").join("");


btnDown.addEventListener("click", function(e){
    catalog.innerHTML = generateCards(cardsData, "r").join("");
})

btnUp.addEventListener("click", function(e){
    catalog.innerHTML = generateCards(cardsData, "y").join("");
})