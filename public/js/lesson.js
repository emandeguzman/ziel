"use strict";

async function lesson() {
    bg.removeAllItems();
    mid.removeAllItems();
    fg.removeAllItems();


    const solarsystem = await image.load('http://localhost/img/lecture/BACKGROUND].jpg');
    bg.addItem(new CanvasImage(solarsystem, 0, 0, 1920, 1080));
    bg.draw();


    const celestialBodies = [
        {
            name: 'sun',
            url: 'http://localhost/img/journey/sun.png',
            x: 50,
            y: 50,
            w: 300,
            h: 300,
            conversations: [
                'http://localhost/img/lecture/Sun%201.png',
                'http://localhost/img/lecture/Sun%202.png'
            ]
        },
        {
            name: 'mercury',
            url: 'http://localhost/img/journey/mercury-cropped.png',
            x: 170,
            y: 390,
            w: 60,
            h: 60
        },
        {
            name: 'venus',
            url: 'http://localhost/img/journey/venus-cropped.png',
            x: 210,
            y: 480,
            w: 80,
            h: 80,
        },
        {
            name: 'earth',
            url: 'http://localhost/img/journey/earth.png',
            x: 290,
            y: 570,
            w: 100,
            h: 100,
        },
        {
            name: 'mars',
            url: 'http://localhost/img/journey/mars-cropped.png',
            x: 420,
            y: 650,
            w: 100,
            h: 100,
        },
        {
            name: 'jupiter',
            url: 'http://localhost/img/journey/jupiter-cropped.png',
            x: 780,
            y: 700,
            w: 200,
            h: 200,
        },
        {
            name: 'saturn',
            url: 'http://localhost/img/journey/saturn-cropped.png',
            x: 1050,
            y: 765,
            w: 300,
            h: 160,
        },
        {
            name: 'uranus',
            url: 'http://localhost/img/journey/uranus-cropped.png',
            x: 1435,
            y: 785,
            w: 150,
            h: 150,
        },
        {
            name: 'neptune',
            url: 'http://localhost/img/journey/neptune-cropped.png',
            x: 1680,
            y: 800,
            w: 140,
            h: 140,
        },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 635,
        //     y: 735,
        //     w: 30,
        //     h: 30,
        // },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 592,
        //     y: 772,
        //     w: 36,
        //     h: 36,
        // },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 538,
        //     y: 818,
        //     w: 24,
        //     h: 24,
        // },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 640,
        //     y: 800,
        //     w: 20,
        //     h: 20,
        // },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 705,
        //     y: 595,
        //     w: 30,
        //     h: 30,
        // },
        // {
        //     name: 'asteroid',
        //     url: 'http://localhost/img/journey/asteroid.png',
        //     x: 640,
        //     y: 660,
        //     w: 20,
        //     h: 20,
        // },
        {
            name: 'comet',
            url: 'http://localhost/img/journey/comet_PNG38%20%281%29.png',
            x: 1240,
            y: 280,
            w: 270,
            h: 50,
        },
    ];

    for (let i = 0; i < celestialBodies.length; i++) {
        const cb = celestialBodies[i];
        const img = await image.load(cb.url);
        mid.addItem(new CanvasImage(img, cb.x, cb.y, cb.w, cb.h, cb.name));
        mid.draw();
        // await new Promise(resolve=>{
        //     fg.addEventListener(
        //         "click",
        //         ()=>{resolve()},
        //         {once: true}
        //     );
        // })
    }

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
 