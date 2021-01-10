function journey(bg, mid, mid1, mid2, fg) {
    //#region render solar system background
    return new Promise((resolve,reject)=>{
        tracking("Render solar system background image");
        loadImg('{{(resources.Get "/img/lecture/BACKGROUND].jpg").Permalink}}')
        .then((solarsystem)=>{
            fg.clear();
            mid.clear();
            bg.addItem(new CanvasImage({img: solarsystem, x: 0, y: 0, width: bg.canvas.width, height: bg.canvas.height}));
            bg.draw();
            resolve();
        })
    })
    //#endregion
    //#region render celestial bodies
    .then(()=>{
        tracking("Render planets and other heavenly bodies");
        return Promise.all([
            //#region sun
            new Promise(resolve=>{
                const conversations = [
                    {img: null, url: '{{(resources.Get "/img/lecture/Sun 1.png").Permalink}}'},
                    {img: null, url: '{{(resources.Get "/img/lecture/Sun 2.png").Permalink}}'}
                ];
                loadImg('{{(resources.Get "/img/journey/sun.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("sun", img, "orb", 200, 200, {
                        radius: 150,
                        conversations: conversations
                    }));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region mercury
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/mercury-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("mercury", img, "orb", 200, 420, {radius: 30}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region venus
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/venus-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("venus", img, "orb", 250, 520, {radius: 40}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region earth
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/earth.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("earth", img, "orb", 340, 620, {radius: 50}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region mars
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/mars-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("mars", img, "orb", 470, 700, {radius: 50}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region jupiter
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/jupiter-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("jupiter", img, "orb", 900, 800, {radius: 100}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region saturn
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/saturn-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("saturn", img, "saturn", 1210, 870, {radius: 80}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region uranus
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/uranus-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("uranus", img, "orb", 1530, 890, {radius: 75}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region neptune
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/neptune-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("neptune", img, "orb", 1750, 900, {radius: 70}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region asteroids
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 750, {radius: 15}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 600, 780, {radius: 18}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 550, 830, {radius: 12}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 810, {radius: 10}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 720, 610, {radius: 15}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/asteroid.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("asteroid", img, "asteroid", 650, 670, {radius: 10}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
            //#region comet
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/comet_PNG38 (1).png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("comet", img, "comet", 1250, 270, {width: 150, height: 60}));
                    fg.draw();
                    resolve();
                })
            }),
            //#endregion
        ])
    })
    //#endregion
    .then(()=>{
        tracking("Start interacting with celestial bodies");
        return new Promise(resolve=>{
            const animDuration = 500;
            const states = {
                busy: "BUSY",
                inSolarSystem: "IN SOLAR SYSTEM",
                astronautConversing: "ASTRONAUT CONVERSING",
            } 
            let state = states.inSolarSystem;
            let astronaut = null;
            let celestialBody = null;
            let conversations = null;
            let conversationIndex = 0;

            //#region onSolarSystemClick
            const onSolarSystemClick = (event) => {
                // show astronaut conversation when a celestial body is clicked
                state = states.busy;

                celestialBody = fg.getItemAt(event.offsetX, event.offsetY);
                conversations = celestialBody.options.conversations;
                if (!celestialBody) {
                    state = states.inSolarSystem;
                    return;
                }

                //#region load astronaut image
                new Promise(resolve => {
                    if (astronaut) {
                        resolve();
                        return;
                    }

                    return loadImg('{{(resources.Get "/img/journey/astronaut.png").Permalink}}')
                    .then((img)=>{
                        astronaut = img;
                        resolve();
                    })
                })
                //#endregion
                //#region load conversation images
                .then(()=>{
                    return Promise.all(
                        conversations.map(async (item)=>{
                            return loadImg(item.url)
                            .then(img=>{
                                item.img = img;
                            })
                        })
                    )
                })
                //#endregion
                //#region animate start of conversation
                .then(()=>{
                    conversationIndex = 0;
                    const start = performance.now();

                    mid1.removeAllItems();
                    mid1.addItem(new CelestialBody(celestialBody.id, celestialBody.img, "orb", getX(1600), getY(270), {radius: getRadius(250)}));
                    mid1.draw();
                    mid1.canvas.style.opacity = 0;

                    mid2.removeAllItems();
                    mid2.addItem(new CanvasImage({img: conversations[conversationIndex++].img, x: getX(0), y: 0, width: mid2.canvas.width/2, height: mid2.canvas.height/2}));
                    mid2.draw();
                    mid2.canvas.style.opacity = 0;


                    return new Promise(resolve =>{
                        requestAnimationFrame(function animate(time) {
                            // timeFraction goes from 0 to 1
                            let timeFraction = (time - start) / animDuration;
                            if (timeFraction > 1) timeFraction = 1;
        
                            fg.canvas.style.opacity = 1 - timeFraction;
                            mid1.canvas.style.opacity = timeFraction;
                            mid2.canvas.style.opacity = timeFraction;

        
                            mid.removeAllItems();
                            mid.addItem(new CanvasImage({
                                img: astronaut,
                                x: 0,
                                y: fg.canvas.height - (fg.canvas.height / 10 * 9 * timeFraction),
                                width: fg.canvas.height / 3 * 0.93,
                                height: fg.canvas.height / 3
                            }));
                            mid.clear();
                            mid.draw();
        
                            if (timeFraction < 1) {
                                requestAnimationFrame(animate);
                            }
                            else {
                                tracking("resolved")
                                resolve();
                            }
                        });
                    })
                })
                //#endregion
                //#region update state to astronautConversing
                .then(()=>{
                    state = states.astronautConversing
                })
                //#endregion
            }
            //#endregion

            //#region nextConversation
            const nextConversation = (event) => {
                state = states.busy;

                if (conversations[conversationIndex]) {
                    //#region with next conversation -> show next conversation

                    .then(()=>{
                        const start = performance.now();
    
                        mid1.removeAllItems();
                        mid1.addItem(new CelestialBody(celestialBody.id, celestialBody.img, "orb", getX(1600), getY(270), {radius: getRadius(250)}));
                        mid1.draw();
                        mid1.canvas.style.opacity = 0;
    
                        mid2.removeAllItems();
                        mid2.addItem(new CanvasImage({img: conversations.shift(), x: getX(0), y: 0, width: mid2.canvas.width/2, height: mid2.canvas.height/2}));
                        mid2.draw();
                        mid2.canvas.style.opacity = 0;
    
    
                        return new Promise(resolve =>{
                            requestAnimationFrame(function animate(time) {
                                // timeFraction goes from 0 to 1
                                let timeFraction = (time - start) / animDuration;
                                if (timeFraction > 1) timeFraction = 1;
            
                                fg.canvas.style.opacity = 1 - timeFraction;
                                mid1.canvas.style.opacity = timeFraction;
                                mid2.canvas.style.opacity = timeFraction;
    
            
                                mid.removeAllItems();
                                mid.addItem(new CanvasImage({
                                    img: astronaut,
                                    x: 0,
                                    y: fg.canvas.height - (fg.canvas.height / 10 * 9 * timeFraction),
                                    width: fg.canvas.height / 3 * 0.93,
                                    height: fg.canvas.height / 3
                                }));
                                mid.clear();
                                mid.draw();
            
                                if (timeFraction < 1) {
                                    requestAnimationFrame(animate);
                                }
                                else {
                                    tracking("resolved")
                                    resolve();
                                }
                            });
                        })
                    })
                    .then(()=>{
                        state = states.astronautConversing
                    })
                    //#endregion
                }
            }
            //#endregion

            const mainLoop = (event) => {
                switch(state) {
                    case states.inSolarSystem:
                        onSolarSystemClick(event);
                        break;
                    case states.astronautConversing:
                        nextConversation(event);
                        return;
                    case states.busy:
                        break;
                    default: 
                        console.error(`Unexpected state "${state}"`);
                }
            }

            fg.canvas.addEventListener("click", mainLoop);
        })
    })
    .then(()=>"next")
}
