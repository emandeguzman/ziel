"use strict";

const quiz3 = async ()=>{
    const imgs = {
        splashscreen: {
            url: '{{(resources.Get "img/quiz3/4 words, 1 picture.jpg").Permalink}}',
        },
        quizzes: {
            q1: {
                url: '{{(resources.Get "img/quiz3/Q1 .png").Permalink}}',
            },
            q2: {
                url: '{{(resources.Get "img/quiz3/Q2.png").Permalink}}',
            },
            q3: {
                url: '{{(resources.Get "img/quiz3/Q3.png").Permalink}}',
            },
            q4: {
                url: '{{(resources.Get "img/quiz3/Q4.png").Permalink}}',
            },
            q5: {
                url: '{{(resources.Get "img/quiz3/Q5.png").Permalink}}',
            },
            q6: {
                url: '{{(resources.Get "img/quiz3/Q6.png").Permalink}}',
            },
            q7: {
                url: '{{(resources.Get "img/quiz3/Q7.png").Permalink}}',
            },
            q8: {
                url: '{{(resources.Get "img/quiz3/Q8.png").Permalink}}',
            },
            q9: {
                url: '{{(resources.Get "img/quiz3/Q9.png").Permalink}}',
            },
            q10: {
                url: '{{(resources.Get "img/quiz3/Q10.png").Permalink}}',
            },
        },
        answers: {
            ans1: {
                id: "1",
                url: '{{(resources.Get "img/quiz3/Q1A.png").Permalink}}',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
            },
            ans2: {
                id: "2",
                url: '{{(resources.Get "img/quiz3/Q2A.png").Permalink}}',
                w: 816,
                h: 678,
                scaleX: 370 / 816,
                scaleY: 307 / 678,
            },
            ans3: {
                id: "3",
                url: '{{(resources.Get "img/quiz3/Q3A.png").Permalink}}',
                w: 1120,
                h: 461,
                scaleX: 370 / 1120,
                scaleY: 152 / 461,
            },
            ans4: {
                id: "4",
                url: '{{(resources.Get "img/quiz3/Q4A.png").Permalink}}',
                w: 250,
                h: 100,
                scaleX: 370 / 250,
                scaleY: 148 / 100,
            },
            ans5: {
                id: "5",
                url: '{{(resources.Get "img/quiz3/Q5A.png").Permalink}}',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
            },
            ans6: {
                id: "6",
                url: '{{(resources.Get "img/quiz3/Q6A.png").Permalink}}',
                w: 379,
                h: 379,
                scaleX: 370 / 379,
                scaleY: 370 / 379,
            },
            ans7: {
                id: "7",
                url: '{{(resources.Get "img/quiz3/q7a.png").Permalink}}',
                w: 454,
                h: 76,
                scaleX: 370 / 454,
                scaleY: 62 / 76,
            },
            ans8: {
                id: "8",
                url: '{{(resources.Get "img/quiz3/Q8A.png").Permalink}}',
                w: 269,
                h: 269,
                scaleX: 370 / 269,
                scaleY: 370 / 269,
            },
            ans9: {
                id: "9",
                url: '{{(resources.Get "img/quiz3/Q9A.png").Permalink}}',
                w: 209,
                h: 53,
                scaleX: 370 / 209,
                scaleY: 94 / 53,
            },
            ans10: {
                id: "10",
                url: '{{(resources.Get "img/quiz3/Q10A.png").Permalink}}',
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

    const random = (min, max)=>{
        return Math.round(Math.random() * (max - min) + min);
    }

    //#region MAIN
    await clearCanvas();
    // await drawBg();

    await new Promise(resolve=>{
        (async()=>{
            const canvas = bg;
            canvas.removeAllItems();
            canvas.clear();

            for (let q = 1; q <= 10; q++) {
                //#region build choices
                const ansPos = random(0,3);
                console.log(`ansPos`, ansPos)
                const ansItem = imgs.answers[`ans${q}`];
                console.log(`ansItem.id`, ansItem.id)
                const choices = []
                while(choices.length < ansPos) {
                    const choice = imgs.answers[`ans${random(1,10)}`];
                    if (ansItem == choice) continue;

                    if (!choices.find(i=>{
                        return i.id == choice.id;
                    })) {
                        choices.push(choice);
                    }
                }
                choices.push(ansItem);
                while(choices.length < 4) {
                    const choice = imgs.answers[`ans${random(1,10)}`];
                    if (ansItem == choice) continue;

                    if (!choices.find(item=>{
                        return item.id == choice.id;
                    })) {
                        choices.push(choice);
                    }
                }
                //#endregion

                canvas.addItem(new CanvasImage(await image.load(imgs.quizzes[`q${q}`].url), 0, 0, 1920, 1080));
                const startx = 370;
                const inc = 395;
                for (let i = 0; i < 4; i++){
                    const ans = choices[i];
                    canvas.addItem(
                        new CanvasImage(
                            await image.load(ans.url),
                            startx + (inc * i) - ans.w * ans.scaleX / 2,
                            843 - ans.h * ans.scaleY / 2,
                            ans.w,
                            ans.h,
                            ans.id,
                            ans.scaleX,
                            ans.scaleY
                        )
                    );
                }

                canvas.draw();

                await new Promise(resolve=>{
                    fg.addEventListener("click", (e)=>{
                        resolve()
                        }
                        , {once: true}
                    );
                })
            }

            resolve();

            //     canvas.addItem(new CanvasImage(await image.load(choices[i].url), 0, 0, 1920, 1080));
            //     const startx = 370;
            //     const inc = 395;
            //     ans = imgs.answers[`ans5`];
            //     canvas.addItem(
            //         new CanvasImage(
            //             await image.load(ans.url),
            //             startx + (inc * 1) - ans.w * ans.scaleX / 2,
            //             843 - ans.h * ans.scaleY / 2,
            //             ans.w,
            //             ans.h,
            //             ans.id,
            //             ans.scaleX,
            //             ans.scaleY
            //         )
            //     );
            // }

            // let ans;

            // canvas.addItem(new CanvasImage(await image.load(imgs.quizzes[`q1`].url), 0, 0, 1920, 1080));
            // const startx = 370;
            // const inc = 395;
            // ans = imgs.answers[`ans5`];
            // canvas.addItem(
            //     new CanvasImage(
            //         await image.load(ans.url),
            //         startx - ans.w * ans.scaleX / 2,
            //         843 - ans.h * ans.scaleY / 2,
            //         ans.w,
            //         ans.h,
            //         ans.id,
            //         ans.scaleX,
            //         ans.scaleY
            //     )
            // );
            // ans = imgs.answers[`ans6`];
            // canvas.addItem(
            //     new CanvasImage(
            //         await image.load(ans.url),
            //         startx + (inc * 1) - ans.w * ans.scaleX / 2,
            //         843 - ans.h * ans.scaleY / 2,
            //         ans.w,
            //         ans.h,
            //         ans.id,
            //         ans.scaleX,
            //         ans.scaleY
            //     )
            // );
            // ans = imgs.answers[`ans7`];
            // canvas.addItem(
            //     new CanvasImage(
            //         await image.load(ans.url),
            //         startx + (inc * 2) - ans.w * ans.scaleX / 2,
            //         843 - ans.h * ans.scaleY / 2,
            //         ans.w,
            //         ans.h,
            //         ans.id,
            //         ans.scaleX,
            //         ans.scaleY
            //     )
            // );
            // ans = imgs.answers[`ans3`];
            // canvas.addItem(
            //     new CanvasImage(
            //         await image.load(ans.url),
            //         startx + (inc * 3) - ans.w * ans.scaleX / 2,
            //         843 - ans.h * ans.scaleY / 2,
            //         ans.w,
            //         ans.h,
            //         ans.id,
            //         ans.scaleX,
            //         ans.scaleY
            //     )
            // );

            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1210 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 810 - (ansItem.w /2), 900 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1210 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));
            // ansItem = imgs.answers[`ans2`];
            // canvas.addItem(new CanvasImage(await image.load(ansItem.url), 1610 - (ansItem.w /2), 880 - (ansItem.h / 2), ansItem.w, ansItem.h, "ans", ansItem.scaleX, ansItem.scaleY));

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

            // fg.addEventListener("click", (e)=>{
            //     console.log(e.offsetX, e.offsetY)
            //     resolve()
            //     }
            //     , {once: true}
            // );
        })()
    })
}