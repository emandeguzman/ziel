function journey(bg, mid, fg) {
    return new Promise((resolve,reject)=>{
        loadImg('{{(resources.Get "/img/lecture/BACKGROUND].jpg").Permalink}}')
        .then((img)=>{
            fg.clear();
            mid.clear();
            bg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: bg.canvas.width, height: bg.canvas.height}));
            bg.draw();
            resolve();
        })
    })
    .then(()=>{
        return Promise.all([
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/sun.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("sun", img, "orb", 200, 200, {radius: 150}));
                    fg.draw();
                    resolve();
                })
                // fg.addItem(sun);
                // fg.draw();
                // resolve();
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/mercury-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("mercury", img, "orb", 200, 420, {radius: 30}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/venus-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("venus", img, "orb", 250, 520, {radius: 40}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/earth.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("earth", img, "orb", 340, 620, {radius: 50}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/mars-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("mars", img, "orb", 470, 700, {radius: 50}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/jupiter-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("jupiter", img, "orb", 900, 800, {radius: 100}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/saturn-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("saturn", img, "saturn", 1210, 870, {radius: 80}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/uranus-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("uranus", img, "orb", 1530, 890, {radius: 75}));
                    fg.draw();
                    resolve();
                })
            }),
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/neptune-cropped.png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("neptune", img, "orb", 1750, 900, {radius: 70}));
                    fg.draw();
                    resolve();
                })
            }),
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
            new Promise(resolve=>{
                loadImg('{{(resources.Get "/img/journey/comet_PNG38 (1).png").Permalink}}')
                .then((img)=>{
                    fg.addItem(new CelestialBody("comet", img, "comet", 1250, 270, {width: 150, height: 60}));
                    fg.draw();
                    resolve();
                })
            }),
        ])
    })
    .then(()=>{
        tracking("Waiting for user click");
        return new Promise(resolve=>{
            !function waitForClick(){
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{
                        const celestialBody = fg.getItemAt(e.offsetX, e.offsetY);
                        if (celestialBody) {
                            resolve(celestialBody);
                            return;
                        }
                        else {
                            waitForClick();
                        }

                        // tracking("clicked");
                        // if (clickCount > 5) {
                        //     resolve();
                        //     return;                            
                        // }
                        // ++clickCount;
                        // waitForClick();

                        // resolve(e);
                        // return;
                    },
                    {once: true}
                );
            }();
        })
    })
    .then((celestialBody)=>{
        tracking("Show conversation with astronaut")
        return new Promise(resolve => {
            loadImg('{{(resources.Get "/img/journey/astronaut.png").Permalink}}')
            .then((img)=>{
                const duration = 1000;
                const start = performance.now();

                requestAnimationFrame(function animate(time) {
                    // timeFraction goes from 0 to 1
                    let timeFraction = (time - start) / duration;
                    if (timeFraction > 1) timeFraction = 1;

                    fg.canvas.style.opacity = 1 - timeFraction;

                    mid.removeAllItems();
                    mid.addItem(new CanvasImage({
                        img: img,
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
        });
    })
    .then(()=>"next")
}
