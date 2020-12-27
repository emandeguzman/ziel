function intro(bg, mid, fg) {
    return new Promise((resolve,reject)=>{
        loadImg('{{(resources.Get "/img/lecture/1- COVER.png").Permalink}}')
        .then((img)=>{
            fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
            fg.draw();
            fg.canvas.addEventListener(
                "click",
                (e)=>{resolve()},
                {once: true}
            );
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/2- Preface.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/3- TRANSITION.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/4- SOLAR SYSTEM 6.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/5-SS 1.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/5-SS 2.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/5-SS 3.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/6-PLANETS .jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/7- 3 CRITERIA.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/8- PLUTO.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/9- Terrestrial Planets 1.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/9- Terrestrial Planets 2.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/10-ASTEROID BELT 1.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/11-Jovian Planets 1.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/11-Jovian Planets 2.jpg").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>{
        return new Promise((resolve,reject)=>{
            loadImg('{{(resources.Get "/img/lecture/12-KUIPER BELT.png").Permalink}}')
            .then((img)=>{
                fg.addItem(new CanvasImage({img: img, x: 0, y: 0, width: fg.canvas.width, height: fg.canvas.height}));
                fg.draw();
                fg.canvas.addEventListener(
                    "click",
                    (e)=>{resolve()},
                    {once: true}
                );
            })
        })
    })
    .then(()=>"next")
}