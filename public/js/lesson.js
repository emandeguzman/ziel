"use strict";

async function lesson() {
    bg.removeAllItems();
    mid.removeAllItems();
    fg.removeAllItems();

    bg.clear();
    mid.clear();
    fg.clear();


    //#region draw background
    const solarsystem = await image.load('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/BACKGROUND].jpg');
    bg.addItem(new CanvasImage(solarsystem, 0, 0, 1920, 1080));
    bg.draw();
    //#endregion

    //#region draw celestial bodies
    const celestialBodies = [
        {
            name: 'sun',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/sun.png',
            x: 50,
            y: 50,
            w: 300,
            h: 300,
            // w: null,
            // h: null,
            path: 'M 82.00,12.00 C 82.63,10.07 82.63,9.32 84.31,7.87 87.56,5.07 104.51,0.08 109.00,0.00 109.00,0.00 127.00,0.00 127.00,0.00 127.00,0.00 138.00,0.96 138.00,0.96 138.00,0.96 163.00,2.26 163.00,2.26 163.00,2.26 173.00,5.19 173.00,5.19 173.00,5.19 180.00,7.54 180.00,7.54 180.00,7.54 187.74,8.58 187.74,8.58 187.74,8.58 194.05,13.53 194.05,13.53 194.05,13.53 204.00,19.06 204.00,19.06 204.00,19.06 213.00,25.74 213.00,25.74 213.00,25.74 220.00,30.29 220.00,30.29 226.06,35.02 239.14,47.89 243.74,54.00 243.74,54.00 247.85,61.00 247.85,61.00 253.24,69.65 256.30,75.63 260.29,85.00 260.29,85.00 264.51,94.00 264.51,94.00 265.97,99.08 266.53,104.77 267.18,110.00 267.18,110.00 268.95,119.00 268.95,119.00 268.95,119.00 268.95,145.00 268.95,145.00 268.98,155.87 267.69,153.72 266.32,162.00 266.32,162.00 265.74,168.00 265.74,168.00 265.74,168.00 263.80,175.00 263.80,175.00 259.33,191.33 260.77,184.88 253.93,199.00 253.93,199.00 249.55,209.74 249.55,209.74 249.55,209.74 236.87,225.74 236.87,225.74 236.87,225.74 231.00,230.22 231.00,230.22 217.00,241.38 224.08,243.64 214.00,244.00 212.09,249.47 200.20,253.60 195.09,256.32 195.09,256.32 190.72,259.04 190.72,259.04 190.72,259.04 184.17,260.96 184.17,260.96 184.17,260.96 180.72,263.04 180.72,263.04 180.72,263.04 167.00,267.74 167.00,267.74 157.12,269.53 131.15,269.13 120.00,269.00 120.00,269.00 101.00,267.69 101.00,267.69 101.00,267.69 77.00,257.72 77.00,257.72 77.00,257.72 68.00,254.53 68.00,254.53 62.15,251.41 60.29,248.22 56.91,246.00 56.91,246.00 51.45,243.10 51.45,243.10 51.45,243.10 35.57,229.12 35.57,229.12 33.69,227.23 34.03,225.75 30.86,222.00 30.86,222.00 25.47,216.00 25.47,216.00 23.15,212.91 12.70,194.64 11.25,191.00 11.25,191.00 7.55,179.00 7.55,179.00 7.55,179.00 4.30,171.00 4.30,171.00 2.00,163.40 2.80,162.37 1.74,156.00 1.74,156.00 0.13,150.00 0.13,150.00 0.13,150.00 0.13,136.00 0.13,136.00 0.13,136.00 2.32,116.00 2.32,116.00 1.98,110.14 6.62,90.70 8.80,85.00 8.80,85.00 16.52,69.00 16.52,69.00 16.52,69.00 27.86,52.00 27.86,52.00 27.86,52.00 31.59,44.30 31.59,44.30 31.59,44.30 44.00,34.96 44.00,34.96 50.53,28.77 67.60,15.32 76.00,12.58 77.95,11.95 79.98,12.03 82.00,12.00 Z',
            scaleX: 1,
            scaleY: 1,
            conversations: [
                'http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/Sun%201.png',
                'http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/Sun%202.png'
            ]
        },
        {
            name: 'mercury',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mercury-cropped.png',
            x: 170,
            y: 390,
            w: 60,
            h: 60
        },
        {
            name: 'venus',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/venus-cropped.png',
            x: 210,
            y: 480,
            w: 80,
            h: 80,
        },
        {
            name: 'earth',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/earth.png',
            x: 290,
            y: 570,
            w: 100,
            h: 100,
        },
        {
            name: 'mars',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mars-cropped.png',
            x: 420,
            y: 650,
            w: 100,
            h: 100,
        },
        {
            name: 'jupiter',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/jupiter-cropped.png',
            x: 780,
            y: 700,
            w: 200,
            h: 200,
        },
        {
            name: 'saturn',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/saturn-cropped.png',
            x: 1050,
            y: 765,
            w: 300,
            h: 160,
            // w: 298,
            // h: 126
        },
        {
            name: 'uranus',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/uranus-cropped.png',
            x: 1435,
            y: 785,
            w: 150,
            h: 150,
        },
        {
            name: 'neptune',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/neptune-cropped.png',
            x: 1680,
            y: 800,
            w: 140,
            h: 140,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 635,
            y: 735,
            w: 30,
            h: 30,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 592,
            y: 772,
            w: 36,
            h: 36,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 538,
            y: 818,
            w: 24,
            h: 24,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 640,
            y: 800,
            w: 20,
            h: 20,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 705,
            y: 595,
            w: 30,
            h: 30,
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: 640,
            y: 660,
            w: 20,
            h: 20,
        },
        {
            name: 'comet',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/comet_PNG38%20%281%29.png',
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
                // console.log(img.src, cb.x, cb.y, cb.w, cb.h, cb.name);
                const canvasItem = new CanvasImage(img, cb.x, cb.y, cb.w, cb.h, cb.name, cb.scaleX, cb.scaleY, cb.path);
                fg.addItem(canvasItem);
                fg.draw(canvasItem);
            })
            .catch(err => {
                console.error(err)
            })
        })
    )
    //#endregion 

    //#region interact with user click
    await new Promise(resolve=>{
        fg.addEventListener(
            "click",
            (evt)=>{
                //#region convert clicked coordinates
                const clickX = Math.round(evt.offsetX * 1920 / fg.canvas.offsetWidth);
                const clickY = Math.round(evt.offsetY * 1080 / fg.canvas.offsetHeight);
                // //#endregion
                // console.log(evt.offsetX, evt.offsetY);
                // console.log(clickX, clickY);

               console.log(fg.getItemAt(clickX, clickY) )
            }
            // ()=>{resolve()},
            // {once: true}
        );
    })
    //#endregion
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
 