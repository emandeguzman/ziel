function journey(bg, mid, mid1, mid2, fg){
    // return new Promise(resolve =>{
    const animDuration = 500;

    const celestialBodies = [
        {
            name: 'sun',
            url: '{{(resources.Get "/img/journey/sun.png").Permalink}}',
            x: getX(50),
            y: getY(50),
            w: getWidth(300),
            h: getHeight(300),
            conversations: [
                '{{(resources.Get "/img/lecture/Sun 1.png").Permalink}}',
                '{{(resources.Get "/img/lecture/Sun 2.png").Permalink}}'
            ]
        },
        {
            name: 'mercury',
            url: '{{(resources.Get "/img/journey/mercury-cropped.png").Permalink}}',
            x: getX(170),
            y: getY(390),
            w: getWidth(60),
            h: getHeight(60)
        },
        {
            name: 'venus',
            url: '{{(resources.Get "/img/journey/venus-cropped.png").Permalink}}',
            x: getX(210),
            y: getY(480),
            w: getWidth(80),
            h: getHeight(80),
        },
        {
            name: 'earth',
            url: '{{(resources.Get "/img/journey/earth.png").Permalink}}',
            x: getX(290),
            y: getY(570),
            w: getWidth(100),
            h: getHeight(100),
        },
        {
            name: 'mars',
            url: '{{(resources.Get "/img/journey/mars-cropped.png").Permalink}}',
            x: getX(420),
            y: getY(650),
            w: getWidth(100),
            h: getHeight(100),
        },
        {
            name: 'jupiter',
            url: '{{(resources.Get "/img/journey/jupiter-cropped.png").Permalink}}',
            x: getX(780),
            y: getY(700),
            w: getWidth(200),
            h: getHeight(200),
        },
        {
            name: 'saturn',
            url: '{{(resources.Get "/img/journey/saturn-cropped.png").Permalink}}',
            x: getX(1050),
            y: getY(765),
            w: getWidth(300),
            h: getHeight(160),
        },
        {
            name: 'uranus',
            url: '{{(resources.Get "/img/journey/uranus-cropped.png").Permalink}}',
            x: getX(1435),
            y: getY(785),
            w: getWidth(150),
            h: getHeight(150),
        },
        {
            name: 'neptune',
            url: '{{(resources.Get "/img/journey/neptune-cropped.png").Permalink}}',
            x: getX(1680),
            y: getY(800),
            w: getWidth(140),
            h: getHeight(140),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(635),
            y: getY(735),
            w: getWidth(30),
            h: getHeight(30),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(592),
            y: getY(772),
            w: getWidth(36),
            h: getHeight(36),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(538),
            y: getY(818),
            w: getWidth(24),
            h: getHeight(24),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(640),
            y: getY(800),
            w: getWidth(20),
            h: getHeight(20),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(705),
            y: getY(595),
            w: getWidth(30),
            h: getHeight(30),
        },
        {
            name: 'asteroid',
            url: '{{(resources.Get "/img/journey/asteroid.png").Permalink}}',
            x: getX(640),
            y: getY(660),
            w: getWidth(20),
            h: getHeight(20),
        },
        {
            name: 'comet',
            url: '{{(resources.Get "/img/journey/comet_PNG38 (1).png").Permalink}}',
            x: getX(1240),
            y: getY(280),
            w: getWidth(270),
            h: getHeight(50),
        },
    ];

    const loadBackground = async () => {
        const img = await loadImg('{{(resources.Get "/img/lecture/BACKGROUND].jpg").Permalink}}')
        await bg.addItem(new CanvasImage(img, 0, 0, bg.canvas.width, bg.canvas.height));
        await bg.draw();
    }

    const loadCelestialBodies = () => {
        return Promise.all(
            celestialBodies.map(async (item)=>{
                const img = await loadImg(item.url)
                await fg.addItem(new CelestialBody(item.name, img, item.x, item.y, item.w, item.h));
                await fg.draw();
            })
        )
    }

    const getConversations = (name) => {
        const celestialBody = celestialBodies.find(item => item.name == name);
        return celestialBody?.conversations;
    }

    const initializeCelestialBodyConversation = (celestialBody, conversations) => {
        tracking("initializeCelestialBodyConversation start");
    //                     conversationIndex = 0;
        //#region load conversations
        return new Promise(resolve => {
            if (conversations) {
                resolve(
                    Promise.all(
                        conversations.map(item => loadImg(item))
                    )
                );
            }
            else {
                resolve();
            }
        })
        //#endregion
        .then(()=>{
            mid1.removeAllItems();
            mid1.addItem(new CanvasImage(celestialBody.img, getX(1450), getY(80), getWidth(400), getHeight(400)));
            mid1.draw();
            mid1.canvas.style.opacity = 0;

            mid2.removeAllItems();
            if (conversations) {
                return loadImg(conversations[0])
                .then(conversation => {
                    mid2.addItem(new CanvasImage(conversation, getX(0), getY(0), getWidth(mid2.canvas.width/2), getHeight(mid2.canvas.height/2)))
                    mid2.draw();
                    mid2.canvas.style.opacity = 0;
                })
            }
        })
        //#region load astronaut image
        .then(()=>{
            return loadImg('{{(resources.Get "/img/journey/astronaut.png").Permalink}}')
        })
        //#endregion
        .then(astronaut =>{
            console.log(astronaut)
            return new Promise(resolve => {
                const start = performance.now();
                requestAnimationFrame(function animate(time) {
                    // timeFraction goes from 0 to 1
                    let timeFraction = (time - start) / animDuration;
                    if (timeFraction > 1) timeFraction = 1;

                    fg.canvas.style.opacity = 1 - timeFraction;
                    mid1.canvas.style.opacity = timeFraction;
                    mid2.canvas.style.opacity = timeFraction;


                    mid.removeAllItems();
                    mid.addItem(new CanvasImage(
                        astronaut,
                        0,
                        fg.canvas.height - (fg.canvas.height / 10 * 9 * timeFraction),
                        fg.canvas.height / 3 * 0.93,
                        fg.canvas.height / 3
                    ));
                    mid.clear();
                    mid.draw();

                    if (timeFraction < 1) {
                        requestAnimationFrame(animate);
                    }
                    else {
                        tracking("initializeCelestialBodyConversation end");
                        resolve();
                    }
                });
            })
        })
    }

    bg.clear();
    mid.clear();
    mid1.clear();
    mid2.clear();
    fg.clear();

    return loadBackground()
    .then(()=>{
        return loadCelestialBodies()
    })
    //#region main loop
    .then(()=>{
        return new Promise(resolve=>{
            const states = {
                busy: "BUSY",
                inSolarSystem: "IN SOLAR SYSTEM",
                inConversation: "IN CONVERSATION",
            } 
            let state = states.inSolarSystem;
            let celestialBody = null;
            let conversations = null;
            let conversationIndex = 0;



            fg.canvas.addEventListener("click", (event)=>{
                switch(state) {
                    case states.inSolarSystem:
                        state = states.busy;
                        (async ()=>{
                            celestialBody = fg.getItemAt(event.offsetX, event.offsetY);
                            if (celestialBody) {
                                conversations = getConversations(celestialBody.id);

                                await initializeCelestialBodyConversation(celestialBody, conversations);
                                state = states.inConversation;
                                conversationIndex = 0;
                            }
                            else {
                                state = states.inSolarSystem;
                            }
                        })();
                        break;
                    case states.inConversation:
                        state = states.busy;
                        (async ()=>{
                            switch(await nextConversation(conversations[++conversationIndex])) {
                                case "ended":
                                    mid.clear();
                                    mid1.clear();
                                    mid2.clear();
                                    fg.clear();
                                    await loadCelestialBodies();
                                    state = states.inSolarSystem;
                                break;
                                default:
                                    state = states.inConversation;
                            }
                        })();
                    case states.busy:
                        break;
                    default: 
                        console.error(`Unexpected state "${state}"`);
                }
            });
        })
    })
    //#endregion
    .then(()=>"next")

    //     .then(()=>{
    //         tracking("Start interacting with celestial bodies");
    //         return new Promise(resolve=>{

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

    //                     return loadImg('{{(resources.Get "/img/journey/astronaut.png").Permalink}}')
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

    //         })
//    })
//     .then(()=>"next")
}