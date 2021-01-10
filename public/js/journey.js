async function journey(bg, mid, mid1, mid2, fg){
    const celestialBodies = [
        {
            name: 'sun',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/sun.png',
            x: getX(50),
            y: getY(50),
            w: getWidth(300),
            h: getHeight(300),
        },
        {
            name: 'mercury',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mercury-cropped.png',
            x: getX(200),
            y: getY(420),
            w: getWidth(30),
            h: getHeight(30),
        },
        {
            name: 'venus',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/venus-cropped.png',
            x: getX(250),
            y: getY(520),
            w: getWidth(40),
            h: getHeight(40),
        },
        {
            name: 'earth',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/earth.png',
            x: getX(340),
            y: getY(620),
            w: getWidth(50),
            h: getHeight(50),
        },
        {
            name: 'mars',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mars-cropped.png',
            x: getX(470),
            y: getY(700),
            w: getWidth(50),
            h: getHeight(50),
        },
        {
            name: 'jupiter',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/jupiter-cropped.png',
            x: getX(900),
            y: getY(800),
            w: getWidth(100),
            h: getHeight(100),
        },
        {
            name: 'saturn',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/saturn-cropped.png',
            x: getX(1210),
            y: getY(870),
            w: getWidth(80),
            h: getHeight(80),
        },
        {
            name: 'uranus',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/uranus-cropped.png',
            x: getX(1530),
            y: getY(890),
            w: getWidth(75),
            h: getHeight(75),
        },
        {
            name: 'neptune',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/neptune-cropped.png',
            x: getX(1750),
            y: getY(900),
            w: getWidth(70),
            h: getHeight(70),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(650),
            y: getY(750),
            w: getWidth(15),
            h: getHeight(15),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(600),
            y: getY(780),
            w: getWidth(18),
            h: getHeight(18),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(550),
            y: getY(830),
            w: getWidth(12),
            h: getHeight(12),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(650),
            y: getY(810),
            w: getWidth(10),
            h: getHeight(10),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(720),
            y: getY(610),
            w: getWidth(15),
            h: getHeight(15),
        },
        {
            name: 'asteroid',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png',
            x: getX(650),
            y: getY(670),
            w: getWidth(10),
            h: getHeight(10),
        },
        {
            name: 'comet',
            url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/comet_PNG38%20%281%29.png',
            x: getX(1250),
            y: getY(150),
            w: getWidth(10),
            h: getHeight(60),
        },
    ];

    const loadBackground = async () => {
        const img = await loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/BACKGROUND].jpg')
        await bg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: bg.canvas.width, height: bg.canvas.height}));
        await bg.draw();
    }

    const loadCelestialBodies = () => {
        return Promise.all(
            celestialBodies.map(async (item)=>{
                const img = await loadImg(item.url)
                await bg.addItem(new CanvasImage({img: img, x: item.x, y: item.y, width: item.w, height: item.h}));
                await bg.draw();
            })
        )
    }

    for (;;) {
        bg.clear();
        mid.clear();
        mid1.clear();
        mid2.clear();
        fg.clear();    
        await loadBackground();
        await loadCelestialBodies();
        break;
    }

    return "next";
//     //#region render solar system background
//     return new Promise((resolve,reject)=>{
//         tracking("Render solar system background image");
//         loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/BACKGROUND].jpg')
//         .then((solarsystem)=>{
//             fg.clear();
//             mid.clear();
//             bg.addItem(new CanvasImage({img: solarsystem, x: 0, y: 0, width: bg.canvas.width, height: bg.canvas.height}));
//             bg.draw();
//             resolve();
//         })
//     })
//     //#endregion
//     //#region render celestial bodies
//     .then(()=>{
//         tracking("Render planets and other heavenly bodies");
//         return Promise.all([
//             //#region sun
//             new Promise(resolve=>{
//                 const conversations = [
//                     {img: null, url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/Sun%201.png'},
//                     {img: null, url: 'http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/Sun%202.png'}
//                 ];
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/sun.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("sun", img, "orb", 200, 200, {
//                         radius: 150,
//                         conversations: conversations
//                     }));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region mercury
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mercury-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("mercury", img, "orb", 200, 420, {radius: 30}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region venus
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/venus-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("venus", img, "orb", 250, 520, {radius: 40}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region earth
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/earth.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("earth", img, "orb", 340, 620, {radius: 50}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region mars
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/mars-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("mars", img, "orb", 470, 700, {radius: 50}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region jupiter
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/jupiter-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("jupiter", img, "orb", 900, 800, {radius: 100}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region saturn
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/saturn-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("saturn", img, "saturn", 1210, 870, {radius: 80}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region uranus
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/uranus-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("uranus", img, "orb", 1530, 890, {radius: 75}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region neptune
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/neptune-cropped.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("neptune", img, "orb", 1750, 900, {radius: 70}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region asteroids
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 750, {radius: 15}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 600, 780, {radius: 18}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 550, 830, {radius: 12}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 810, {radius: 10}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 720, 610, {radius: 15}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/asteroid.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 670, {radius: 10}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//             //#region comet
//             new Promise(resolve=>{
//                 loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/comet_PNG38%20%281%29.png')
//                 .then((img)=>{
//                     fg.addItem(new CelestialBody("comet", img, "comet", 1250, 270, {width: 150, height: 60}));
//                     fg.draw();
//                     resolve();
//                 })
//             }),
//             //#endregion
//         ])
//     })
//     //#endregion
//     .then(()=>{
//         tracking("Start interacting with celestial bodies");
//         return new Promise(resolve=>{
//             const animDuration = 500;
//             const states = {
//                 busy: "BUSY",
//                 inSolarSystem: "IN SOLAR SYSTEM",
//                 astronautConversing: "ASTRONAUT CONVERSING",
//             } 
//             let state = states.inSolarSystem;
//             let astronaut = null;
//             let celestialBody = null;
//             let conversations = null;
//             let conversationIndex = 0;

//             //#region onSolarSystemClick
//             const onSolarSystemClick = (event) => {
//                 // show astronaut conversation when a celestial body is clicked
//                 state = states.busy;

//                 celestialBody = fg.getItemAt(event.offsetX, event.offsetY);
//                 conversations = celestialBody.options.conversations;
//                 if (!celestialBody) {
//                     state = states.inSolarSystem;
//                     return;
//                 }

//                 //#region load astronaut image
//                 new Promise(resolve => {
//                     if (astronaut) {
//                         resolve();
//                         return;
//                     }

//                     return loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/journey/astronaut.png')
//                     .then((img)=>{
//                         astronaut = img;
//                         resolve();
//                     })
//                 })
//                 //#endregion
//                 //#region load conversation images
//                 .then(()=>{
//                     return Promise.all(
//                         conversations.map(async (item)=>{
//                             return loadImg(item.url)
//                             .then(img=>{
//                                 item.img = img;
//                             })
//                         })
//                     )
//                 })
//                 //#endregion
//                 //#region animate start of conversation
//                 .then(()=>{
//                     conversationIndex = 0;
//                     const start = performance.now();

//                     mid1.removeAllItems();
//                     mid1.addItem(new CelestialBody(celestialBody.id, celestialBody.img, "orb", getX(1600), getY(270), {radius: getRadius(250)}));
//                     mid1.draw();
//                     mid1.canvas.style.opacity = 0;

//                     mid2.removeAllItems();
//                     mid2.addItem(new CanvasImage({img: conversations[conversationIndex++].img, x: getX(0), y: 0, width: mid2.canvas.width/2, height: mid2.canvas.height/2}));
//                     mid2.draw();
//                     mid2.canvas.style.opacity = 0;


//                     return new Promise(resolve =>{
//                         requestAnimationFrame(function animate(time) {
//                             // timeFraction goes from 0 to 1
//                             let timeFraction = (time - start) / animDuration;
//                             if (timeFraction > 1) timeFraction = 1;
        
//                             fg.canvas.style.opacity = 1 - timeFraction;
//                             mid1.canvas.style.opacity = timeFraction;
//                             mid2.canvas.style.opacity = timeFraction;

        
//                             mid.removeAllItems();
//                             mid.addItem(new CanvasImage({
//                                 img: astronaut,
//                                 x: 0,
//                                 y: fg.canvas.height - (fg.canvas.height / 10 * 9 * timeFraction),
//                                 width: fg.canvas.height / 3 * 0.93,
//                                 height: fg.canvas.height / 3
//                             }));
//                             mid.clear();
//                             mid.draw();
        
//                             if (timeFraction < 1) {
//                                 requestAnimationFrame(animate);
//                             }
//                             else {
//                                 tracking("resolved")
//                                 resolve();
//                             }
//                         });
//                     })
//                 })
//                 //#endregion
//                 //#region update state to astronautConversing
//                 .then(()=>{
//                     state = states.astronautConversing
//                 })
//                 //#endregion
//             }
//             //#endregion

//             //#region nextConversation
//             const nextConversation = (event) => {
//                 state = states.busy;

//                 if (conversations[conversationIndex]) {
//                     //#region with next conversation -> show next conversation

//                     .then(()=>{
//                         const start = performance.now();
    
//                         mid1.removeAllItems();
//                         mid1.addItem(new CelestialBody(celestialBody.id, celestialBody.img, "orb", getX(1600), getY(270), {radius: getRadius(250)}));
//                         mid1.draw();
//                         mid1.canvas.style.opacity = 0;
    
//                         mid2.removeAllItems();
//                         mid2.addItem(new CanvasImage({img: conversations.shift(), x: getX(0), y: 0, width: mid2.canvas.width/2, height: mid2.canvas.height/2}));
//                         mid2.draw();
//                         mid2.canvas.style.opacity = 0;
    
    
//                         return new Promise(resolve =>{
//                             requestAnimationFrame(function animate(time) {
//                                 // timeFraction goes from 0 to 1
//                                 let timeFraction = (time - start) / animDuration;
//                                 if (timeFraction > 1) timeFraction = 1;
            
//                                 fg.canvas.style.opacity = 1 - timeFraction;
//                                 mid1.canvas.style.opacity = timeFraction;
//                                 mid2.canvas.style.opacity = timeFraction;
    
            
//                                 mid.removeAllItems();
//                                 mid.addItem(new CanvasImage({
//                                     img: astronaut,
//                                     x: 0,
//                                     y: fg.canvas.height - (fg.canvas.height / 10 * 9 * timeFraction),
//                                     width: fg.canvas.height / 3 * 0.93,
//                                     height: fg.canvas.height / 3
//                                 }));
//                                 mid.clear();
//                                 mid.draw();
            
//                                 if (timeFraction < 1) {
//                                     requestAnimationFrame(animate);
//                                 }
//                                 else {
//                                     tracking("resolved")
//                                     resolve();
//                                 }
//                             });
//                         })
//                     })
//                     .then(()=>{
//                         state = states.astronautConversing
//                     })
//                     //#endregion
//                 }
//             }
//             //#endregion

//             const mainLoop = (event) => {
//                 switch(state) {
//                     case states.inSolarSystem:
//                         onSolarSystemClick(event);
//                         break;
//                     case states.astronautConversing:
//                         nextConversation(event);
//                         return;
//                     case states.busy:
//                         break;
//                     default: 
//                         console.error(`Unexpected state "${state}"`);
//                 }
//             }

//             fg.canvas.addEventListener("click", mainLoop);
//         })
//    })
//     .then(()=>"next")
}