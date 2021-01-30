"use strict";

async function quiz2() {

    const clearCanvas = ()=>{
        bg.removeAllItems();
        mid.removeAllItems();
        fg.removeAllItems();
    
        bg.clear();
        mid.clear();
        fg.clear();
    }

    const drawBg=()=>{
        bg.addItem(new CanvasImage(await image.load('{{(resources.Get "/img/quiz2/bg.jpg").Permalink}}'), 0, 0, 1920, 1080));
        bg.draw();
        await new Promise(resolve=>{
            fg.addEventListener("click", ()=>resolve());
        })
    }

    /*
     * MAIN STARTS HERE
     */


    clearCanvas();
    drawBg();
}