"use strict";

// foiegras20121223!

const showScores = async (fg, bg, image, scores, clearAllCanvas)=>{
    const imgs = {
        bg: 'https://emandeguzman.github.io/ziel/img/quiz5/Scoreboard.png',
    }

    const answerKeyPath = `M 1020.00,1061.16 C 1020.00,1061.16 541.00,1061.16 541.00,1061.16 538.76,1061.00 536.16,1060.91 534.00,1061.17 530.67,1062.40 520.91,1068.77 507.00,1072.10 480.03,1078.57 450.01,1069.61 430.28,1050.42 395.08,1016.17 396.56,958.34 434.00,926.30 442.63,918.92 451.31,914.26 462.00,910.67 470.70,907.74 480.79,905.81 490.00,906.01 504.79,906.35 519.23,911.02 532.00,918.34 544.62,925.57 544.29,931.97 557.00,932.00 557.00,932.00 1019.00,932.00 1019.00,932.00 1019.00,932.00 1019.00,1026.00 1019.00,1026.00 1019.00,1026.00 1020.00,1039.00 1020.00,1039.00 1020.00,1039.00 1020.00,1061.16 1020.00,1061.16 Z`;

    clearAllCanvas();

    await new Promise((resolve)=>{
        (async ()=>{
            const canvas = bg;
            canvas.addItem(new CanvasImage(await image.load(imgs.bg), 0, 0, 1920, 1080));
            canvas.draw();

            scores.total = scores.quiz1 + scores.quiz2 + scores.quiz3 + scores.quiz4 + scores.quiz5;
            const ctx = canvas.ctx;
            ctx.textAlign = "center";
            ctx.font = "100px Arial";
            ctx.fillText(`${scores.quiz1} / 8`, 1345, 160);
            ctx.fillText(`${scores.quiz2} / 10`, 1345, 333);
            ctx.fillText(`${scores.quiz3} / 10`, 1345, 507);
            ctx.fillText(`${scores.quiz4} / 12`, 1345, 692);
            ctx.fillText(`${scores.quiz5} / 20`, 1345, 860);
            ctx.fillText(`${scores.total} / 60`, 1345, 1024);

            let f;
            (f = async ()=>{
                fg.addEventListener(
                    "click",
                    (evt)=>{
                        (async()=>{
                            // console.log("main click loop");
                            //#region convert clicked coordinates
                            const clickX = Math.round(evt.offsetX * 1920 / fg.canvas.offsetWidth);
                            const clickY = Math.round(evt.offsetY * 1080 / fg.canvas.offsetHeight);
                            //#endregion
    

                            //#region resolve if answerkey button is clicked
                            const ctx = fg.ctx;
                    
                            ctx.save();
                    
                            // ctx.translate(0, 0);
                            // ctx.scale(exit.scaleX, exit.scaleY);
                    
                            const p = new Path2D(answerKeyPath);
                    
                            const pointInPath = ctx.isPointInPath(p, clickX, clickY);
                            ctx.restore();
                    
                            if (pointInPath) {
                                resolve();
                                return;
                            }
                            //#endregion

                            f();
                        })();
                    },
                    {once: true}
                );
            })();
        })();
    });

}


