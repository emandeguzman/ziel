const answerkey = async (fg, image, clearAllCanvas) => {
    const imgList = [
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%201.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%202.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%203/01.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%203/02.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%203/03.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%203/04.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%203/05.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/1.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/2.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/3.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/4.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/5.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%204/6.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%205/1.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%205/2.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%205/3.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%205/4.png',
        'https://emandeguzman.github.io/ziel/img/ANSWER%20KEY/Level%205/5.png'
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