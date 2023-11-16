
function Accumulator(startVal){
    this.value = startVal;
    this.read = function(){
        let delta = prompt("Сколько мороженого еще хотите приобрести?", "");
        this.value+= Number(delta);
    }
}

let acc = new Accumulator(0);
let counter = document.getElementById("accumulator-block-counter");
counter.innerText = acc.value;

document.getElementById('acBtn').onclick = function(){
    acc.read();
    counter.innerText = acc.value;
}