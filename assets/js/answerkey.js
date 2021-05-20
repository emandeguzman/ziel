const answerkey = async (fg, image, clearAllCanvas) => {
    const imgList = [
        '{{(resources.Get "/img/ANSWER KEY/Level 1.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 2.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 3/01.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 3/02.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 3/03.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 3/04.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 3/05.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/1.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/2.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/3.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/4.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/5.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 4/6.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 5/1.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 5/2.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 5/3.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 5/4.png").Permalink}}',
        '{{(resources.Get "/img/ANSWER KEY/Level 5/5.png").Permalink}}'
    ];

    function raf(callback, duration = 400) {
        return new Promise(resolve=>{
            const start = performance.now();
            requestAnimationFrame(function animate(time) {
                const timeFraction = (time - start) / duration;

                if (timeFraction < 1) {
                    // if ((callback(Math.abs(base - fraction), false) === false)) resolve("interrupted");
                    // else requestAnimationFrame(animate);
                    if (callback(timeFraction) === false) {resolve("interrupted")}
                    else requestAnimationFrame(animate);
                }
                else {
                    if (callback(1) === false) {resolve("interrupted")}
                    resolve("finished");
                }
            });
        })
    }


    const canvasMain = fg;
    const ctxMain = fg.ctx;
    const canvasWidth = 1920;
    const canvasHeight = 1080;

    clearAllCanvas();


    //#region preload images
    imgList.map(imgurl=>{
        // loadImage(imgurl);
        image.load(imgurl);
    })
    //#endregion

    //#region display images
    await imgList.reduce(
        async (prevPromise, imgurl)=>{
            const prevImg = await prevPromise;
            // const img = await waitUntilImageIsLoaded(imgurl);
            const img = await image.load(imgurl);
            await raf((factor)=>{
                if (0 <= factor && factor <= 1) {
                    // console.log(`showing image ${factor} ${imgurl}`)
                    ctxMain.clearRect(0,0,canvasWidth,canvasHeight);
                    ctxMain.save();
                    if (prevImg !== undefined) {
                        ctxMain.globalAlpha = 1 - factor;
                        ctxMain.drawImage(prevImg,0,0,canvasWidth,canvasHeight);
                        // ctxMain.restore();
                    }
                    // ctxMain.save();
                    ctxMain.globalAlpha = factor;
                    ctxMain.drawImage(img,0,0,canvasWidth,canvasHeight);
                    ctxMain.restore();
                }
            });
            await new Promise(resolve=>{
                // setTimeout(()=>resolve(), 2000);
                canvasMain.addEventListener(
                    "click",
                    ()=>resolve(),
                    {once: true}
                );
            });
            return Promise.resolve(img);
        },
        Promise.resolve()
    );
    //#endregion

}