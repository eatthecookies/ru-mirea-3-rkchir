const cardsData = [
    {
        id: 1, 
        title: "Мороженое1 ",
        cost: 3040,
    },
    {
        id: 2, 
        title: "Мороженое2",
        cost: 200,
    },
    {
        id: 3, 
        title: "Мороженое3 ",
        cost: 6000,
    },
    {
        id: 4, 
        title: "Мороженое4 ",
        cost: 1000,
    },
    {
        id: 5, 
        title: "Мороженое5 ",
        cost: 10,
    },
    {
        id: 6, 
        title: "Мороженое6 ",
        cost: 2000,
    },
    {
        id: 7, 
        title: "Мороженое7 ",
        cost: 2500,
    },
    {
        id: 8, 
        title: "Мороженое8 ",
        cost: 1300,
    },
    {
        id: 9, 
        title: "Мороженое9 ",
        cost: 200,
    },
    {
        id: 10, 
        title: "Мороженое10 ",
        cost: 3230,
    },
]
const arrayAsString = JSON.stringify(cardsData);
// Пример данных о товарах
const products = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
};

// Преобразуем объект в строку JSON и сохраняем его в Local Storage
if (localStorage.getItem('productsData') === null)
    localStorage.setItem('productsData', JSON.stringify(products));
