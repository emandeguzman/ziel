"use strict";

async function intro() {
    const imgList = [
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/1-%20COVER.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/2-%20Preface.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/3-%20TRANSITION.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/4-%20SOLAR%20SYSTEM%206.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/5-SS%201.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/5-SS%202.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/5-SS%203.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/6-PLANETS%20.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/7-%203%20CRITERIA.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/8-%20PLUTO.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/9-%20Terrestrial%20Planets%201.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/9-%20Terrestrial%20Planets%202.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/10-ASTEROID%20BELT%201.png',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/11-Jovian%20Planets%201.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/11-Jovian%20Planets%202.jpg',
        'http://localhost:1313/.eman/ziel/solarsystem2/isableFastRender/img/lecture/12-KUIPER%20BELT.png'
    ];
    
    for (let i = 0; i < imgList.length; i++) {
        const img = await image.load(imgList[i]);
        fg.removeAllItems();
        fg.addItem(new CanvasImage(img, 0, 0, 1920, 1080));
        fg.draw();
        await new Promise(resolve=>{
            fg.addEventListener(
                "click",
                ()=>resolve(),
                {once: true}
            );
        })
    }
}

