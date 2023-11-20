a = [1, 2, 3, 4, 5, 6, 7]

function filter(array, a, b){
    newArray = [];
    for (let i = 0; i < array.length; i++){
        if (a <= array[i] && array[i] <= b){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(filter(a, 1, 4));