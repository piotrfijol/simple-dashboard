let mouse = {
    x: 0,
    y: 0,
    isDrag: false
}

let queueSize = document.querySelectorAll(".items-container .item");
let itemSize = (parseInt(getComputedStyle(queueSize[0]).width) + parseInt(getComputedStyle(queueSize[0]).marginLeft));
queueSize = queueSize.length * itemSize;

document.querySelector("#carousel .items-container").style.width = queueSize + 200 + "px";

let items = document.querySelectorAll("#carousel");
items.forEach(el => {

    el.addEventListener('mousedown', ev => {
    ev.preventDefault();
    mouse.x = ev.clientX;
    mouse.isDrag = true;
})

el.addEventListener('mousemove', ev => {
    ev.preventDefault();
    if(mouse.isDrag) {
        let container = document.getElementById("carousel").querySelector('.items-container');

        
        if(Number.isNaN(parseInt(container.style.marginLeft)))
            container.style.marginLeft = "0px";


        if(parseInt(container.style.marginLeft)){
            container.style.marginLeft = parseInt(getComputedStyle(container).marginLeft) + ev.clientX - mouse.x + 'px'
            mouse.x = ev.clientX;
        } 

        if(parseInt(container.style.marginLeft) < (-queueSize) + (3 * itemSize)) {
            
            container.style.marginLeft = (-queueSize) + (3* itemSize) + 1 + 'px';
            return;
        } else if (parseInt(container.style.marginLeft) > 15) {
            container.style.marginLeft = "15px"
            return;
        }
        container.style.marginLeft = parseInt(getComputedStyle(container).marginLeft) + ev.clientX - mouse.x + 'px'
        mouse.x = ev.clientX;
    }
})

el.addEventListener('mouseup', ev => {
    ev.preventDefault();
    mouse.isDrag = false;
})

el.addEventListener('mouseleave', ev => {
    ev.preventDefault();
    mouse.isDrag = false;
})



el.addEventListener('touchstart', ev => {
    ev.preventDefault();
    mouse.x = ev.targetTouches[0].clientX;
    mouse.isDrag = true;
})

el.addEventListener('touchmove', ev => {
    ev.preventDefault();
    if(mouse.isDrag) {
        let container = document.getElementById("carousel").querySelector('.items-container');

        
        if(Number.isNaN(parseInt(container.style.marginLeft)))
            container.style.marginLeft = "0px";


        if(parseInt(container.style.marginLeft)){
            container.style.marginLeft = parseInt(getComputedStyle(container).marginLeft) + ev.targetTouches[0].clientX - mouse.x + 'px'
            mouse.x = ev.targetTouches[0].clientX;
        } 

        if(parseInt(container.style.marginLeft) < (-queueSize) + (3 * itemSize)) {
            
            container.style.marginLeft = (-queueSize) + (3* itemSize) + 1 + 'px';
            return;
        } else if (parseInt(container.style.marginLeft) > 15) {
            container.style.marginLeft = "15px"
            return;
        }
        container.style.marginLeft = parseInt(getComputedStyle(container).marginLeft) + ev.targetTouches[0].clientX - mouse.x + 'px'
        mouse.x = ev.targetTouches[0].clientX;
    }
})

el.addEventListener('touchend', ev => {
    ev.preventDefault();
    mouse.isDrag = false;
})

el.addEventListener('touchcancel', ev => {
    ev.preventDefault();
    mouse.isDrag = false;
})
})