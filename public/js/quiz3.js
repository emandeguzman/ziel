"use strict";

const quiz3 = async ()=>{
    const imgs = {
        splashscreen: {
            url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/4%20words,%201%20picture.jpg',
        },
        quizzes: {
            q1: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q1%20.png',
            },
            q2: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q2.png',
            },
            q3: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q3.png',
            },
            q4: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q4.png',
            },
            q5: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q5.png',
            },
            q6: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q6.png',
            },
            q7: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q7.png',
            },
            q8: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q8.png',
            },
            q9: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q9.png',
            },
            q10: {
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q10.png',
            },
        },
        answers: {
            // ans11: {
            //     id: "Q1",
            //     url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q1%20.png',
            //     w: 2048,
            //     h: 1152,
            //     // w: 500,
            //     // h: 281,
            //     scaleX: 370 / 2048,
            //     scaleY: 281 / 1152,
            // },
            ans1: {
                id: "1",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q1A.png',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
            },
            ans2: {
                id: "2",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q2A.png',
                w: 816,
                h: 678,
                scaleX: 370 / 816,
                scaleY: 307 / 678,
            },
            ans3: {
                id: "3",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q3A.png',
                w: 1120,
                h: 461,
                scaleX: 370 / 1120,
                scaleY: 152 / 461,
            },
            ans4: {
                id: "4",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q4A.png',
                w: 250,
                h: 100,
                scaleX: 370 / 250,
                scaleY: 148 / 100,
            },
            ans5: {
                id: "5",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q5A.png',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
            },
            ans6: {
                id: "6",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q6A.png',
                w: 379,
                h: 379,
                scaleX: 370 / 379,
                scaleY: 370 / 379,
            },
            ans7: {
                id: "7",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/q7a.png',
                w: 454,
                h: 76,
                scaleX: 370 / 454,
                scaleY: 62 / 76,
            },
            ans8: {
                id: "8",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q8A.png',
                w: 269,
                h: 269,
                scaleX: 370 / 269,
                scaleY: 370 / 269,
            },
            ans9: {
                id: "9",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q9A.png',
                w: 209,
                h: 53,
                scaleX: 370 / 209,
                scaleY: 94 / 53,
            },
            ans10: {
                id: "10",
                url: 'http://wa.lan/.eman/emandeguzman.github.io/ziel/public/img/quiz3/Q10A.png',
                w: 1919,
                h: 1784,
                scaleX: 370 / 1919,
                scaleY: 344 / 1784,
            },
        }        
    }
    const clearCanvas = ()=>{
        bg.removeAllItems();
        mid.removeAllItems();
        fg.removeAllItems();
    
        bg.clear();
        mid.clear();
        fg.clear();
    }

    const drawBg = ()=>{
        return new Promise((resolve)=>{
            (async ()=>{
                const canvas = bg;
                canvas.addItem(new CanvasImage(await image.load(imgs.splashscreen.url), 0, 0, 1920, 1080));
                canvas.draw();
                fg.addEventListener("click", ()=>resolve(), {once: true});
            })();
        });
    }


    //#region MAIN
    await clearCanvas();
    // await drawBg();

    await new Promise(resolve=>{
        (async()=>{
            const canvas = bg;
            canvas.removeAllItems();
            canvas.clear();

            // return Math.random() * (max - min) + min;

            // ctx.drawImage(await image.load(imgs.quizzes[`q1`].url),0,0,1920,1080);

            // let ansItem;
            // const ctx = bg.ctx;
            // ctx.save();
            // ansItem = imgs.answers[`ans1`];
            // ctx.translate(100, 800 );
            // ctx.scale(ansItem.scaleX, ansItem.scaleY);
            // ctx.drawImage(await image.load(ansItem.url),0,0,ansItem.w,ansItem.h);
            // ctx.restore();
    
            let ans;
            // constructor(img, x, y, w, h, id, scaleX, scaleY, path) {
            canvas.addItem(new CanvasImage(await image.load(imgs.quizzes[`q1`].url), 0, 0, 1920, 1080));
            const startx = 370;
            const inc = 395;
            ans = imgs.answers[`ans5`];
            canvas.addItem(
                new CanvasImage(
                    await image.load(ans.url),
                    startx - ans.w * ans.scaleX / 2,
                    843 - ans.h * ans.scaleY / 2,
                    ans.w,
                    ans.h,
                    ans.id,
                    ans.scaleX,
                    ans.scaleY
                )
            );
            ans = imgs.answers[`ans6`];
            canvas.addItem(
                new CanvasImage(
                    await image.load(ans.url),
                    startx + (inc * 1) - ans.w * ans.scaleX / 2,
                    843 - ans.h * ans.scaleY / 2,
                    ans.w,
                    ans.h,
                    ans.id,
                    ans.scaleX,
                    ans.scaleY
                )
            );
            ans = imgs.answers[`ans7`];
            canvas.addItem(
                new CanvasImage(
                    await image.load(ans.url),
                    startx + (inc * 2) - ans.w * ans.scaleX / 2,
                    843 - ans.h * ans.scaleY / 2,
                    ans.w,
                    ans.h,
                    ans.id,
                    ans.scaleX,
                    ans.scaleY
                )
            );
            ans = imgs.answers[`ans3`];
            canvas.addItem(
                new CanvasImage(
                    await image.load(ans.url),
                    startx + (inc * 3) - ans.w * ans.scaleX / 2,
                    843 - ans.h * ans.scaleY / 2,
                    ans.w,
                    ans.h,
                    ans.id,
                    ans.scaleX,
                    ans.scaleY
                )
            );
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1210 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 810 - (ansItem.w /2), 900 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1210 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1610 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            canvas.draw();

            // let ctx = canvas.ctx;
            // ctx.save();
            // ansItem = imgs.answers[`ans1`];
            // ctx.scale(ansItem.scaleX, ansItem.scaleY);
    
            // // ctx.translate(this.x, this.y);
            // ctx.beginPath();
            // ctx.rect(1210 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h);
            // ctx.stroke();

            // ctx.beginPath();
            // ctx.rect(5, 880, 500, 250);
            // ctx.fill();
            // ctx.restore();

            fg.addEventListener("click", (e)=>{
                console.log(e.offsetX, e.offsetY)
                resolve()
                }
                , {once: true}
            );
        })()
    })
}