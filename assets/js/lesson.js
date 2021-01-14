"use strict";

async function lesson() {
    bg.removeAllItems();
    mid.removeAllItems();
    fg.removeAllItems();

    bg.clear();
    mid.clear();
    fg.clear();


    const solarsystem = await image.load('{{(resources.Get "/img/lecture/BACKGROUND].jpg").Permalink}}');
    bg.addItem(new CanvasImage(solarsystem, 0, 0, 1920, 1080));
    bg.draw();


    const celestialBodies = [
        {
            name: 'sun',
            url: '{{(resources.Get "/img/journey/sun.png").Permalink}}',
            x: 50,
            y: 50,
            w: 300,
            h: 300,
            conversations: [
                '{{(resources.Get "/img/lecture/Sun 1.png").Permalink}}',
                '{{(resources.Get "/img/lecture/Sun 2.png").Permalink}}'
            ]
        },
        {
            name: 'mercury',
            url: '{{(resources.Get "/img/journey/mercury-cropped.png").Permalink}}',
            x: 170,
            y: 390,
            w: 60,
            h: 60
        },
        {
            name: 'venus',
            url: '{{(resources.Get "/img/journey/venus-cropped.png").Permalink}}',
            x: 210,
            y: 480,
            w: 80,
            h: 80,
        },
        {
            name: 'earth',
            url: '{{(resources.Get "/img/journey/earth.png").Permalink}}',
            x: 290,
            y: 570,
            w: 100,
            h: 100,
        },
        {
            name: 'mars',
            url: '{{(resources.Get "/img/journey/mars-cropped.png").Permalink}}',
            x: 420,
            y: 650,
            w: 100,
            h: 100,
        },
        {
            name: 'jupiter',
            url: '{{(resources.Get "/img/journey/jupiter-cropped.png").Permalink}}',
            x: 780,
            y: 700,
            w: 200,
            h: 200,
        },
        {
            name: 'saturn',
            url: '{{(resources.Get "/img/journey/saturn-cropped.png").Permalink}}',
            x: 1050,
            y: 765,
            w: 300,
            h: 160,
        },
        {
            name: 'uranus',
            url: '{{(resources.Get "/img/journey/uranus-cropped.png").Permalink}}',
            x: 1435,
            y: 785,
            w: 150,
            h: 150,
        },
        {
            name: 'neptune',
            url: '{{(resources.Get "/img/journey/neptune-cropped.png").Permalink}}',
            x: 1680,
            y: 800,
            w: 140,
            h: 140,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 635,
            y: 735,
            w: 30,
            h: 30,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 592,
            y: 772,
            w: 36,
            h: 36,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 538,
            y: 818,
            w: 24,
            h: 24,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 640,
            y: 800,
            w: 20,
            h: 20,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 705,
            y: 595,
            w: 30,
            h: 30,
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: 640,
            y: 660,
            w: 20,
            h: 20,
        },
        {
            name: 'comet',
            url: '{{(resources.Get "/img/journey/comet_PNG38 (1).png").Permalink}}',
            x: 1240,
            y: 280,
            w: 270,
            h: 50,
        },
    ];
    await Promise.all(
        celestialBodies.map((cb)=>{
            return image.load(cb.url)
            .then(img=>{
                mid.addItem(new CanvasImage(img, cb.x, cb.y, cb.w, cb.h, cb.name));
            })
            .then(()=>{
                mid.draw();
            })
        })
    )
    
    await new Promise(resolve=>{
        fg.addEventListener(
            "click",
            ()=>{resolve()},
            {once: true}
        );
    })
}

    // const background = {
    //     img: ,
    //     x: 0,
    //     y: 0,
    //     w: screen.width,
    //     h: screen.height
    // }

    // //#region pre-load images
    // await imgman.load(background.img);
    // //#endregion

    // //#region draw background
    // await canvas.draw(bg, background);
    // //#endregion

    // //#region draw celestial bodies
    // //#endregion
        
    // //#region listen on events
    // await new Promise(resolve=>{
    //     const states = {
    //         busy: "BUSY",
    //         inSolarSystem: "IN SOLAR SYSTEM",
    //         inConversation: "IN CONVERSATION",
    //     } 
    //     let state = states.inSolarSystem;
    //     let celestialBody = null;
    //     let conversations = null;
    //     let conversationIndex = 0;
    
    
    //     fg.addEventListener("click", (event)=>{
    
    //     })
    
    // })
    // //#endregion
 