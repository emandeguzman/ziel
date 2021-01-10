function intro(bg, mid, fg) {
    return new Promise((resolve,reject)=>{
        loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/1-%20COVER.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/2-%20Preface.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/3-%20TRANSITION.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/4-%20SOLAR%20SYSTEM%206.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/5-SS%201.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/5-SS%202.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/5-SS%203.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/6-PLANETS%20.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/7-%203%20CRITERIA.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/8-%20PLUTO.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/9-%20Terrestrial%20Planets%201.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/9-%20Terrestrial%20Planets%202.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/10-ASTEROID%20BELT%201.png')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/11-Jovian%20Planets%201.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/11-Jovian%20Planets%202.jpg')
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
            loadImg('http://wa.lan/.eman/ziel/solarsystem2/public/img/lecture/12-KUIPER%20BELT.png')
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