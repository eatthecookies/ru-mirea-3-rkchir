let slider = document.getElementById("slide");
let line = document.getElementById("line-way");


slider.onmousedown = function(event) {
    let shiftX = event.pageX - slider.getBoundingClientRect().left;

    
    slider.style.position = "absolute";
    slider.style.zIndex = 1000;
    document.body.append(slider);

    moveAt(event.pageX);
    
    function moveAt(pageX) {
        let move = pageX - shiftX;
        if (move >= line.getBoundingClientRect().left && move <= line.getBoundingClientRect().right - slider.offsetWidth) {
            slider.style.left = move + 'px';
        }
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }

    document.addEventListener('mousemove', onMouseMove);
    
    slider.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        slider.onmouseup = null;
    };
};

