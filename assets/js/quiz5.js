"use strict";

const quiz5 = async ()=>{

    const imgs = {
        splashscreen: {
            url: '{{(resources.Get "img/quiz5/the planetary lab (2).jpg").Permalink}}',
        },
        quizzes: [
            //#region finished
            // {
            //     url: '{{(resources.Get "img/quiz5/1. MERCURY.png").Permalink}}',
            //     w: 2053,
            //     h: 1152,
            //     scaleX: 1920 / 2053,
            //     scaleY: 1080 / 1152,
            //     questions: [
            //         {
            //             answer: null,
            //             path: `M 828.00,650.00 C 828.00,650.00 1393.00,650.00 1393.00,650.00 1393.00,650.00 1393.00,736.00 1393.00,736.00 1393.00,736.00 828.00,736.00 828.00,736.00 828.00,736.00 828.00,650.00 828.00,650.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/01.Mercury-1.png").Permalink}}',
            //                 x: 774,
            //                 y: 688,
            //                 w: 706,
            //                 h: 344,
            //                 scaleX: 530 / 706,
            //                 scaleY: 258 / 344,
            //                 items: [
            //                     {
            //                         path: `M 2.00,1.00 C 2.00,1.00 704.00,1.00 704.00,1.00 704.00,1.00 704.00,85.00 704.00,85.00 704.00,85.00 2.00,85.00 2.00,85.00 2.00,85.00 2.00,1.00 2.00,1.00 Z`,
            //                         offsetY: -69,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 2.00,87.00 C 2.00,87.00 704.00,87.00 704.00,87.00 704.00,87.00 704.00,171.00 704.00,171.00 704.00,171.00 2.00,171.00 2.00,171.00 2.00,171.00 2.00,87.00 2.00,87.00 Z`,
            //                         offsetY: -133,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 2.00,173.00 C 2.00,173.00 704.00,173.00 704.00,173.00 704.00,173.00 704.00,257.00 704.00,257.00 704.00,257.00 2.00,257.00 2.00,257.00 2.00,257.00 2.00,173.00 2.00,173.00 Z`,
            //                         offsetY: -200,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 2.00,259.00 C 2.00,259.00 704.00,259.00 704.00,259.00 704.00,259.00 704.00,343.00 704.00,343.00 704.00,343.00 2.00,343.00 2.00,343.00 2.00,343.00 2.00,259.00 2.00,259.00 Z`,
            //                         offsetY: -263,
            //                         isAns: true
            //                     },
            //                 ]
            //             },
            //         },
            //         {
            //             answer: null,
            //             path: `M 1041.00,1043.00 C 1041.00,1043.00 1634.00,1043.00 1634.00,1043.00 1634.00,1043.00 1634.00,1127.00 1634.00,1127.00 1634.00,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1043.00 1041.00,1043.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/01.Mercury-2.png").Permalink}}',
            //                 x: 972,
            //                 y: 636,
            //                 w: 563,
            //                 h: 344,
            //                 scaleX: 557 / 563,
            //                 scaleY: 340 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 562.00,1.00 562.00,1.00 562.00,1.00 562.00,85.00 562.00,85.00 562.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 343,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 562.00,87.00 562.00,87.00 562.00,87.00 562.00,171.00 562.00,171.00 562.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 259,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 562.00,173.00 562.00,173.00 562.00,173.00 562.00,257.00 562.00,257.00 562.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 173,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 562.00,259.00 562.00,259.00 562.00,259.00 562.00,343.00 562.00,343.00 562.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 87,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },                
            //     ]
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/2. VENUS.png").Permalink}}',
            //     w: 2053,
            //     h: 1152,
            //     scaleX: 1920 / 2053,
            //     scaleY: 1080 / 1152,
            //     questions: [
            //         {
            //             answer: null,
            //             path: `M 977.00,750.00 C 977.00,750.00 1757.00,750.00 1757.00,750.00 1757.00,750.00 1757.00,834.00 1757.00,834.00 1757.00,834.00 977.00,834.00 977.00,834.00 977.00,834.00 977.00,750.00 977.00,750.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/02.Venus-1.png").Permalink}}',
            //                 x: 912,
            //                 y: 380,
            //                 w: 597,
            //                 h: 344,
            //                 scaleX: 732 / 597,
            //                 scaleY: 322 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 596.00,1.00 596.00,1.00 596.00,1.00 596.00,85.00 596.00,85.00 596.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 325,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 596.00,87.00 596.00,87.00 596.00,87.00 596.00,171.00 596.00,171.00 596.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 240,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 596.00,173.00 596.00,173.00 596.00,173.00 596.00,257.00 596.00,257.00 596.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 165,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 596.00,259.00 596.00,259.00 596.00,259.00 596.00,343.00 596.00,343.00 596.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 80,
            //                         isAns: true
            //                     },
            //                 ]
            //             },
            //         },
            //         {
            //             answer: null,
            //             path: `M 1041.00,1043.00 C 1041.00,1043.00 1628.00,1043.00 1628.00,1043.00 1628.00,1043.00 1799.00,1043.00 1799.00,1043.00 1803.89,1042.98 1816.68,1040.72 1820.36,1044.01 1822.03,1045.49 1821.31,1048.07 1821.22,1050.00 1821.22,1050.00 1821.22,1066.00 1821.22,1066.00 1821.22,1066.00 1821.22,1088.00 1821.22,1088.00 1821.22,1088.00 1821.22,1112.00 1821.22,1112.00 1821.22,1112.00 1821.22,1127.00 1821.22,1127.00 1821.22,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1043.00 1041.00,1043.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/02.Venus-2.png").Permalink}}',
            //                 x: 972,
            //                 y: 649,
            //                 w: 566,
            //                 h: 344,
            //                 scaleX: 733 / 566,
            //                 scaleY: 327 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 565.00,1.00 565.00,1.00 565.00,1.00 565.00,85.00 565.00,85.00 565.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 328,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 565.00,87.00 565.00,87.00 565.00,87.00 565.00,171.00 565.00,171.00 565.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 246,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 565.00,173.00 565.00,173.00 565.00,173.00 565.00,257.00 565.00,257.00 565.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 164,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 565.00,259.00 565.00,259.00 565.00,259.00 565.00,343.00 565.00,343.00 565.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 82,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },                
            //     ]
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/3. EARTH (2).png").Permalink}}',
            //     w: 2053,
            //     h: 1152,
            //     scaleX: 1920 / 2053,
            //     scaleY: 1080 / 1152,
            //     questions: [
            //         {
            //             answer: null,
            //             path: `M 702.00,354.00 C 702.00,354.00 1125.00,354.00 1125.00,354.00 1125.00,354.00 1125.00,438.00 1125.00,438.00 1125.00,438.00 702.00,438.00 702.00,438.00 702.00,438.00 702.00,354.00 702.00,354.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/03.Earth-1.png").Permalink}}',
            //                 x: 655,
            //                 y: 412,
            //                 w: 604,
            //                 h: 344,
            //                 scaleX: 399 / 604,
            //                 scaleY: 325 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 603.00,1.00 603.00,1.00 603.00,1.00 603.00,85.00 603.00,85.00 603.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: -82,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 603.00,87.00 603.00,87.00 603.00,87.00 603.00,171.00 603.00,171.00 603.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: -164,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 603.00,173.00 603.00,173.00 603.00,173.00 603.00,257.00 603.00,257.00 603.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: -246,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 603.00,259.00 603.00,259.00 603.00,259.00 603.00,343.00 603.00,343.00 603.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: -328,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },
            //         {
            //             answer: null,
            //             path: `M 977.00,750.00 C 977.00,750.00 1410.00,750.00 1410.00,750.00 1410.00,750.00 1410.00,834.00 1410.00,834.00 1410.00,834.00 977.00,834.00 977.00,834.00 977.00,834.00 977.00,750.00 977.00,750.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/03.Earth-2.png").Permalink}}',
            //                 x: 912,
            //                 y: 371,
            //                 w: 604,
            //                 h: 344,
            //                 scaleX: 408 / 604,
            //                 scaleY: 330 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 603.00,1.00 603.00,1.00 603.00,1.00 603.00,85.00 603.00,85.00 603.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 328,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 603.00,87.00 603.00,87.00 603.00,87.00 603.00,171.00 603.00,171.00 603.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 246,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 603.00,173.00 603.00,173.00 603.00,173.00 603.00,257.00 603.00,257.00 603.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 164,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 603.00,259.00 603.00,259.00 603.00,259.00 603.00,343.00 603.00,343.00 603.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 82,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },                
            //     ]
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/4. MARS.png").Permalink}}',
            //     w: 2053,
            //     h: 1152,
            //     scaleX: 1920 / 2053,
            //     scaleY: 1080 / 1152,
            //     questions: [
            //         {
            //             answer: null,
            //             path: `M 977.00,750.00 C 977.00,750.00 1428.00,750.00 1428.00,750.00 1428.00,750.00 1428.00,834.00 1428.00,834.00 1428.00,834.00 977.00,834.00 977.00,834.00 977.00,834.00 977.00,750.00 977.00,750.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/04.Mars-1.png").Permalink}}',
            //                 x: 912,
            //                 y: 380,
            //                 w: 603,
            //                 h: 344,
            //                 scaleX: 425 / 603,
            //                 scaleY: 322 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 602.00,1.00 602.00,1.00 602.00,1.00 602.00,85.00 602.00,85.00 602.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 322,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 602.00,87.00 602.00,87.00 602.00,87.00 602.00,171.00 602.00,171.00 602.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 240,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 602.00,173.00 602.00,173.00 602.00,173.00 602.00,257.00 602.00,257.00 602.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 161,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 602.00,259.00 602.00,259.00 602.00,259.00 602.00,343.00 602.00,343.00 602.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 80,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },
            //         {
            //             answer: null,
            //             path: `M 1041.00,1043.00 C 1041.00,1043.00 1634.00,1043.00 1634.00,1043.00 1634.00,1043.00 1634.00,1127.00 1634.00,1127.00 1634.00,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1127.00 1041.00,1043.00 1041.00,1043.00 Z`,
            //             choices: {
            //                 imgurl: '{{(resources.Get "img/quiz5/04.Mars-2.png").Permalink}}',
            //                 x: 972,
            //                 y: 649,
            //                 w: 681,
            //                 h: 344,
            //                 scaleX: 557 / 681,
            //                 scaleY: 327 / 344,
            //                 items: [
            //                     {
            //                         path: `M 1.00,1.00 C 1.00,1.00 680.00,1.00 680.00,1.00 680.00,1.00 680.00,85.00 680.00,85.00 680.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
            //                         offsetY: 328,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,87.00 C 1.00,87.00 680.00,87.00 680.00,87.00 680.00,87.00 680.00,171.00 680.00,171.00 680.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
            //                         offsetY: 246,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,173.00 C 1.00,173.00 680.00,173.00 680.00,173.00 680.00,173.00 680.00,257.00 680.00,257.00 680.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
            //                         offsetY: 164,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: `M 1.00,259.00 C 1.00,259.00 680.00,259.00 680.00,259.00 680.00,259.00 680.00,343.00 680.00,343.00 680.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
            //                         offsetY: 82,
            //                         isAns: true
            //                     },
            //                 ]
            //             },
            //         },                
            //     ]
            // },
            //#endregion
            //#region template
            // {
            //     url: '{ {(resources.Get "img/quiz5/.png").Permalink}}',
            //     w: 2053,
            //     h: 1152,
            //     scaleX: 1920 / 2053,
            //     scaleY: 1080 / 1152,
            //     questions: [
            //         {
            //             answer: null,
            //             path: ``,
            //             choices: {
            //                 imgurl: '{ {(resources.Get "img/quiz5/.png").Permalink}}',
            //                 x: 912,
            //                 y: 380,
            //                 w: 597,
            //                 h: 344,
            //                 scaleX: 732 / 597,
            //                 scaleY: 322 / 344,
            //                 items: [
            //                     {
            //                         path: ``,
            //                         offsetY: 325,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 240,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 165,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 80,
            //                         isAns: true
            //                     },
            //                 ]
            //             },
            //         },
            //         {
            //             answer: null,
            //             path: ``,
            //             choices: {
            //                 imgurl: '{ {(resources.Get "img/quiz5/.png").Permalink}}',
            //                 x: 972,
            //                 y: 649,
            //                 w: 566,
            //                 h: 344,
            //                 scaleX: 733 / 566,
            //                 scaleY: 327 / 344,
            //                 items: [
            //                     {
            //                         path: ``,
            //                         offsetY: 328,
            //                         isAns: true
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 246,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 164,
            //                         isAns: false
            //                     },
            //                     {
            //                         path: ``,
            //                         offsetY: 82,
            //                         isAns: false
            //                     },
            //                 ]
            //             },
            //         },                
            //     ]
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/6. SATURN.png").Permalink}}',
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/7. URANUS.png").Permalink}}',
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/8. NEPTUNE.png").Permalink}}',
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/9. SUN .png").Permalink}}',
            // },
            // {
            //     url: '{{(resources.Get "img/quiz5/10. MOON (2).png").Permalink}}',
            // }
            //#endregion 
            {
                url: '{{(resources.Get "img/quiz5/5. JUPITER.png").Permalink}}',
                w: 2053,
                h: 1152,
                scaleX: 1920 / 2053,
                scaleY: 1080 / 1152,
                questions: [
                    {
                        answer: null,
                        path: `M 700.00,552.00 C 700.00,552.00 1609.00,552.00 1609.00,552.00 1609.00,552.00 1609.00,636.00 1609.00,636.00 1609.00,636.00 700.00,636.00 700.00,636.00 700.00,636.00 700.00,552.00 700.00,552.00 Z`,
                        choices: {
                            imgurl: '{{(resources.Get "img/quiz5/05.Jupiter-1.png").Permalink}}',
                            x: 653,
                            y: 186,
                            w: 618,
                            h: 344,
                            scaleX: 854 / 618,
                            scaleY: 330 / 344,
                            items: [
                                {
                                    path: `M 1.00,1.00 C 1.00,1.00 617.00,1.00 617.00,1.00 617.00,1.00 617.00,85.00 617.00,85.00 617.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
                                    offsetY: 330,
                                    isAns: false
                                },
                                {
                                    path: `M 1.00,87.00 C 1.00,87.00 617.00,87.00 617.00,87.00 617.00,87.00 617.00,171.00 617.00,171.00 617.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
                                    offsetY: 247,
                                    isAns: true
                                },
                                {
                                    path: `M 1.00,173.00 C 1.00,173.00 617.00,173.00 617.00,173.00 617.00,173.00 617.00,257.00 617.00,257.00 617.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
                                    offsetY: 165,
                                    isAns: false
                                },
                                {
                                    path: `M 1.00,259.00 C 1.00,259.00 617.00,259.00 617.00,259.00 617.00,259.00 617.00,343.00 617.00,343.00 617.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
                                    offsetY: 82,
                                    isAns: false
                                },
                            ]
                        },
                    },
                    {
                        answer: null,
                        path: `M 799.00,849.00 C 799.00,849.00 1557.00,849.00 1557.00,849.00 1557.00,849.00 1557.00,933.00 1557.00,933.00 1557.00,933.00 799.00,933.00 799.00,933.00 799.00,933.00 799.00,849.00 799.00,849.00 Z`,
                        choices: {
                            imgurl: '{{(resources.Get "img/quiz5/05.Jupiter-2.png").Permalink}}',
                            x: 745,
                            // x: 795,
                            y: 472,
                            w: 641,
                            h: 344,
                            scaleX: 713 / 641,
                            scaleY: 323 / 344,
                            items: [
                                {
                                    path: `M 1.00,1.00 C 1.00,1.00 640.00,1.00 640.00,1.00 640.00,1.00 640.00,85.00 640.00,85.00 640.00,85.00 1.00,85.00 1.00,85.00 1.00,85.00 1.00,1.00 1.00,1.00 Z`,
                                    offsetY: 323,
                                    isAns: true
                                },
                                {
                                    path: `M 1.00,87.00 C 1.00,87.00 640.00,87.00 640.00,87.00 640.00,87.00 640.00,171.00 640.00,171.00 640.00,171.00 1.00,171.00 1.00,171.00 1.00,171.00 1.00,87.00 1.00,87.00 Z`,
                                    offsetY: 242,
                                    isAns: false
                                },
                                {
                                    path: `M 1.00,173.00 C 1.00,173.00 640.00,173.00 640.00,173.00 640.00,173.00 640.00,257.00 640.00,257.00 640.00,257.00 1.00,257.00 1.00,257.00 1.00,257.00 1.00,173.00 1.00,173.00 Z`,
                                    offsetY: 162,
                                    isAns: false
                                },
                                {
                                    path: `M 1.00,259.00 C 1.00,259.00 640.00,259.00 640.00,259.00 640.00,259.00 640.00,343.00 640.00,343.00 640.00,343.00 1.00,343.00 1.00,343.00 1.00,343.00 1.00,259.00 1.00,259.00 Z`,
                                    offsetY: 81,
                                    isAns: false
                                },
                            ]
                        },
                    },                
                ]
            },

        ]
    }
    /////////////////////////////////////////////////////////////
    const testquestionIndex = 1;
    const testAnswerIndex = 3;
    const testquestion = imgs.quizzes[0].questions[testquestionIndex];
    const testdata = {
        question: null,
        answer: null,
        showQuestionTarget: false,
        showAnswerTarget: false,
        ... {
            // question: testquestion,
            // answer: testquestion.choices.items[testAnswerIndex],
            // answer: imgs.quizzes[0].questions[1].choices.items[0],
            // showQuestionTarget: true,
            // showAnswerTarget: true,
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    await clearAllCanvas();
    // await drawSplash(imgs.splashscreen.url);

    await imgs.quizzes.reduce(async (prevPromise, quiz) => {
        await prevPromise;

        bg.clear();

        //#region show quiz background
        await (async()=>{
            const canvas = bg;
            canvas.removeAllItems();
            canvas.addItem(new CanvasImage(await image.load(quiz.url), 0, 0, quiz.w, quiz.h, "quiz", quiz.scaleX, quiz.scaleY));
            canvas.draw();
        })();
        //#endregion

        //#region show clickable questions
        await (async()=>{
            if (!testdata.showQuestionTarget) return;

            const ctx = bg.ctx;
            ctx.save();
            ctx.scale(quiz.scaleX, quiz.scaleY);
            quiz.questions.map(q=>{
                const p = new Path2D(q.path);
                ctx.fill(p);
            });
            ctx.restore();
        })()
        //#endregion


        for (;;) {
            //#region get question
            const question = await new Promise(resolve=>{
                (async()=>{
                    if (testdata.question && testdata.question.answer == null){
                        resolve(testdata.question);
                        return;
                    } 
                    // console.log("start loop")
                    for (;;){
                        // console.log("start question for loop")
                        const clicked = await new Promise(resolve=>{
                            fg.addEventListener(
                                "click",
                                (e)=>{
                                    const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth);
                                    const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight);
                                    // console.log(x, y, e.offsetX, e.offsetY)
                
                                    const clicked = quiz.questions.find(q=>{
                                        // return isInPath(x, y, q.path, fg.ctx, 0, 0, 1920 / quizbg.width, 1080 / quizbg.height);
                                        return isInPath(x, y, q.path, fg.ctx, 0, 0, quiz.scaleX, quiz.scaleY);
                                    })
                                    resolve(clicked);

                                },
                                {once: true}
                            );
                            // })();
                        });
                        console.log('clicked question', clicked);
                        if (clicked) {
                            resolve(clicked);
                            break;
                        }
                    }
                })();
            })
            // console.log(`question`, question)
            //#endregion

            //#region display choices
            await (async()=>{
                const choices = question.choices;
                mid.addItem(new CanvasImage(await image.load(choices.imgurl), choices.x, choices.y, choices.w, choices.h, "choices", choices.scaleX, choices.scaleY));
                mid.draw();
            })();
            //#endregion

            //#region show clickable answer
            await (async()=>{
                if (!testdata.showAnswerTarget) return;
                const ctx = fg.ctx;
                ctx.save();
                ctx.translate(question.choices.x, question.choices.y);
                // ctx.scale(question.scaleX, question.scaleY);
                ctx.scale(question.choices.scaleX, question.choices.scaleY);
                ctx.fillStyle = "#ff7777";
                question.choices.items.map(q=>{
                    const p = new Path2D(q.path);
                    ctx.fill(p);
                });
                ctx.restore();
            })()
            //#endregion

            //#region get answer
            const answer = await new Promise(resolve=>{
                (async()=>{
                    if (testdata.answer) {
                        resolve(testdata.answer);
                        return;
                    }
                    console.log("start get answer loop")
                    for (;;){
                        const clicked = await new Promise(resolve=>{
                            fg.addEventListener(
                                "click",
                                (e)=>{
                                    const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth); // - question.choices.x;
                                    const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight); // - question.choices.y;
                                    console.log(x, y, e.offsetX, e.offsetY)
                
                                    const clicked = question.choices.items.find(ans=>{
                                        // return isInPath(x, y, q.path, fg.ctx, 0, 0, 1920 / quizbg.width, 1080 / quizbg.height);
                                        return isInPath(x, y, ans.path, fg.ctx, question.choices.x, question.choices.y, question.choices.scaleX, question.choices.scaleY);
                                    })
                                    resolve(clicked);
                                },
                                {once: true}
                            );
                            // })();
                        });
                        console.log('clicked answer', clicked);
                        if (clicked) {
                            resolve(clicked);
                            console.log("break from get answer loop");
                            break;
                        }
                    }
                    console.log("out of get answer loop");
                })();
            })
            console.log(`answer`, answer)
            question.answer = answer;
            //#endregion

            //#region remove choices
            mid.removeAllItems();
            mid.clear();
            console.log("mid cleared")
            //#endregion

            //#region display answer
            await (async()=>{
                // mid.addItem(new CanvasImage(await image.load(choices.imgurl), choices.x, choices.y, choices.w, choices.h, "choices", choices.scaleX, choices.scaleY));
                const ctx = bg.ctx;

                ctx.save();

                // console.log(question.choices.x, question.choices.y);
                ctx.translate(question.choices.x, question.choices.y + answer.offsetY);
                // console.log(question.choices.scaleX, question.choices.scaleY);
                ctx.scale(question.choices.scaleX, question.choices.scaleY);
                console.log(question.choices.imgurl,question.choices.x,question.choices.y,question.choices.w,question.choices.h);
                // ctx.drawImage(await image.load(question.choices.imgurl),0,0,question.choices.w,question.choices.h);

                const p = new Path2D(answer.path);
                ctx.clip(p);
                ctx.drawImage(await image.load(question.choices.imgurl),0,0,question.choices.w,question.choices.h);
        
        
                // if (this.path) {
                //     ctx.fill(new Path2D(this.path));
                // }
        
                ctx.restore();
            })()
            //#endregion

            //#region exit if all questions are answered
            const unanswered = quiz.questions.find(q=>{
                return q.answer == null;
            })

            if (!unanswered) break;
            //#endregion
        }
    }, Promise.resolve());


}