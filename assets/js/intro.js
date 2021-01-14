"use strict";

async function intro() {
    const imgList = [
        '{{(resources.Get "/img/lecture/1- COVER.png").Permalink}}',
        '{{(resources.Get "/img/lecture/2- Preface.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/3- TRANSITION.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/4- SOLAR SYSTEM 6.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/5-SS 1.png").Permalink}}',
        '{{(resources.Get "/img/lecture/5-SS 2.png").Permalink}}',
        '{{(resources.Get "/img/lecture/5-SS 3.png").Permalink}}',
        '{{(resources.Get "/img/lecture/6-PLANETS .jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/7- 3 CRITERIA.png").Permalink}}',
        '{{(resources.Get "/img/lecture/8- PLUTO.png").Permalink}}',
        '{{(resources.Get "/img/lecture/9- Terrestrial Planets 1.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/9- Terrestrial Planets 2.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/10-ASTEROID BELT 1.png").Permalink}}',
        '{{(resources.Get "/img/lecture/11-Jovian Planets 1.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/11-Jovian Planets 2.jpg").Permalink}}',
        '{{(resources.Get "/img/lecture/12-KUIPER BELT.png").Permalink}}'
    ];
    
    for (let i = 0; i < imgList.length; i++) {
        const img = await image.load(imgList[i]);
        fg.removeAllItems();
        fg.addItem(new CanvasImage(img, 0, 0, 1920, 1080));
        fg.draw();
        await new Promise(resolve=>{
            fg.addEventListener(
                "click",
                ()=>{resolve()},
                {once: true}
            );
        })
    }
}

