"use strict";

const quiz3 = async ()=>{
    const imgs = {
        splashscreen: {
            url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/4%20words,%201%20picture.jpg',
        },
        quizzes: {
            q1: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q1%20.png',
            },
            q2: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q2.png',
            },
            q3: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q3.png',
            },
            q4: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q4.png',
            },
            q5: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q5.png',
            },
            q6: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q6.png',
            },
            q7: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q7.png',
            },
            q8: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q8.png',
            },
            q9: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q9.png',
            },
            q10: {
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q10.png',
            },
        },
        answers: {
            ans1: {
                id: "1",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q1A.png',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
                path: `M 337.00,43.21 C 337.00,43.21 361.00,43.21 361.00,43.21 361.00,43.21 374.00,44.00 374.00,44.00 395.86,44.25 440.63,49.70 462.00,54.42 462.00,54.42 479.00,58.87 479.00,58.87 479.00,58.87 495.00,62.72 495.00,62.72 495.00,62.72 509.00,67.77 509.00,67.77 509.00,67.77 520.00,71.20 520.00,71.20 520.00,71.20 531.00,75.91 531.00,75.91 537.58,78.42 539.68,73.60 544.82,75.91 550.54,78.13 547.56,83.37 556.00,88.38 581.64,103.61 604.23,122.00 616.28,150.00 619.46,157.40 621.90,165.91 622.00,174.00 622.11,183.97 622.33,191.20 619.57,201.00 609.82,235.69 573.22,266.63 543.00,284.00 543.00,284.00 513.00,300.10 513.00,300.10 513.00,300.10 500.00,305.42 500.00,305.42 500.00,305.42 486.00,311.77 486.00,311.77 486.00,311.77 465.00,318.08 465.00,318.08 465.00,318.08 453.00,322.48 453.00,322.48 453.00,322.48 439.00,325.89 439.00,325.89 439.00,325.89 412.00,332.39 412.00,332.39 412.00,332.39 381.00,336.16 381.00,336.16 381.00,336.16 340.00,340.00 340.00,340.00 340.00,340.00 325.00,341.00 325.00,341.00 325.00,341.00 278.00,341.00 278.00,341.00 278.00,341.00 259.00,340.00 259.00,340.00 259.00,340.00 234.00,337.28 234.00,337.28 215.28,335.01 197.39,332.25 179.00,327.88 179.00,327.88 166.00,325.09 166.00,325.09 161.98,324.77 157.91,325.40 154.00,323.97 149.20,322.21 147.82,318.89 142.00,316.48 142.00,316.48 125.00,312.01 125.00,312.01 121.15,310.36 117.80,306.82 114.00,304.47 114.00,304.47 105.00,299.67 105.00,299.67 105.00,299.67 85.00,286.96 85.00,286.96 54.59,266.02 28.56,239.26 29.00,200.00 29.46,159.96 63.46,129.24 94.00,108.50 114.05,94.88 135.47,84.89 158.00,76.19 158.00,76.19 173.00,70.36 173.00,70.36 173.00,70.36 183.00,67.65 183.00,67.65 183.00,67.65 202.00,61.73 202.00,61.73 202.00,61.73 215.00,59.10 215.00,59.10 215.00,59.10 238.00,53.61 238.00,53.61 238.00,53.61 259.00,50.72 259.00,50.72 259.00,50.72 284.00,47.15 284.00,47.15 284.00,47.15 321.00,44.00 321.00,44.00 326.39,43.99 331.65,44.18 337.00,43.21 Z`
            },
            ans2: {
                id: "2",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q2A.png',
                w: 816,
                h: 678,
                scaleX: 370 / 816,
                scaleY: 307 / 678,
                path: `M 356.00,14.00 C 359.71,14.00 367.72,14.71 370.49,12.26 374.26,8.94 371.57,2.67 378.05,0.66 384.90,-1.46 391.38,4.48 398.00,5.00 398.00,5.00 408.09,13.31 408.09,13.31 408.09,13.31 412.74,14.87 412.74,14.87 412.74,14.87 418.13,18.07 418.13,18.07 418.13,18.07 430.00,18.07 430.00,18.07 431.12,10.62 435.50,10.04 442.00,10.00 453.09,9.94 451.18,8.81 456.00,8.49 456.00,8.49 466.00,9.00 466.00,9.00 468.10,9.01 472.77,8.69 474.39,10.02 476.32,11.62 475.35,14.89 475.00,17.00 481.76,13.37 483.82,14.11 491.00,14.83 492.85,15.02 495.79,14.85 497.28,15.99 498.46,16.90 498.51,17.79 499.00,19.00 499.00,19.00 507.20,15.69 507.20,15.69 507.20,15.69 517.66,15.69 517.66,15.69 517.66,15.69 524.00,17.81 524.00,17.81 524.00,17.81 535.83,18.70 535.83,18.70 535.83,18.70 548.09,26.99 548.09,26.99 548.09,26.99 559.00,28.00 559.00,28.00 559.00,28.00 559.00,31.00 559.00,31.00 559.00,31.00 569.00,28.23 569.00,28.23 574.03,28.24 582.61,36.12 587.00,39.00 588.86,36.24 590.45,35.53 593.56,37.43 589.53,34.96 610.12,49.69 607.07,47.20 609.33,49.04 611.07,51.85 614.10,52.27 620.34,53.12 625.35,51.62 631.00,56.00 635.00,51.17 640.14,54.83 645.00,56.00 645.00,56.00 645.00,53.00 645.00,53.00 645.00,53.00 650.00,53.00 650.00,53.00 650.00,53.00 650.00,58.00 650.00,58.00 650.00,58.00 660.00,57.00 660.00,57.00 660.00,57.00 665.00,61.00 665.00,61.00 667.59,65.46 670.24,65.55 674.42,68.20 674.42,68.20 685.84,74.28 685.84,74.28 685.84,74.28 699.58,84.37 699.58,84.37 699.58,84.37 717.27,98.76 717.27,98.76 717.27,98.76 724.00,103.67 724.00,103.67 724.00,103.67 736.67,116.61 736.67,116.61 736.67,116.61 740.55,122.72 740.55,122.72 740.55,122.72 752.52,135.00 752.52,135.00 752.52,135.00 761.37,145.87 761.37,145.87 761.37,145.87 768.29,153.25 768.29,153.25 768.29,153.25 780.66,171.29 780.66,171.29 780.66,171.29 785.87,186.01 785.87,186.01 785.87,186.01 787.87,194.91 787.87,194.91 788.89,197.59 793.90,204.23 797.31,213.42 797.31,213.42 800.45,229.83 800.45,229.83 800.45,229.83 806.76,249.16 806.76,249.16 807.62,254.42 804.71,255.96 805.54,259.85 805.54,259.85 807.68,265.09 807.68,265.09 807.68,265.09 810.57,276.28 810.57,276.28 810.57,276.28 812.44,287.99 812.44,287.99 814.52,296.21 815.98,291.93 816.00,304.00 816.00,304.00 816.00,397.00 816.00,397.00 815.99,405.71 814.26,409.86 811.55,417.91 811.55,417.91 809.26,424.09 809.26,424.09 809.26,424.09 807.67,440.96 807.67,440.96 807.67,440.96 802.48,455.83 802.48,455.83 802.48,455.83 799.81,461.09 799.81,461.09 797.66,466.46 796.05,472.49 792.90,477.41 792.90,477.41 783.54,489.28 783.54,489.28 777.68,497.63 771.84,506.69 764.38,513.79 764.38,513.79 755.80,520.84 755.80,520.84 755.80,520.84 746.87,529.44 746.87,529.44 740.22,534.97 739.34,533.96 734.75,537.27 734.75,537.27 721.41,548.57 721.41,548.57 721.41,548.57 703.26,561.13 703.26,561.13 700.85,562.96 700.41,564.50 698.45,566.37 698.45,566.37 682.71,580.01 682.71,580.01 682.71,580.01 668.58,587.40 668.58,587.40 668.58,587.40 657.28,591.66 657.28,591.66 657.28,591.66 641.83,601.89 641.83,601.89 641.83,601.89 631.05,607.40 631.05,607.40 631.05,607.40 617.75,618.25 617.75,618.25 617.75,618.25 610.39,625.96 610.39,625.96 610.39,625.96 594.43,639.29 594.43,639.29 594.43,639.29 588.71,644.24 588.71,644.24 588.71,644.24 572.91,653.76 572.91,653.76 572.91,653.76 551.17,659.34 551.17,659.34 547.40,661.01 545.92,663.92 542.71,665.60 542.71,665.60 537.04,667.47 537.04,667.47 529.88,669.91 529.73,671.27 521.00,672.00 521.00,672.00 521.00,675.00 521.00,675.00 521.00,675.00 507.00,675.00 507.00,675.00 507.00,675.00 502.00,671.00 502.00,671.00 502.00,671.00 501.00,677.00 501.00,677.00 501.00,677.00 479.00,677.00 479.00,677.00 475.30,676.98 469.63,676.65 466.26,675.14 463.33,673.82 462.81,671.71 458.00,670.53 458.00,670.53 434.00,670.00 434.00,670.00 427.30,669.90 428.49,668.68 423.96,668.13 423.96,668.13 397.28,665.57 397.28,665.57 397.28,665.57 373.96,659.13 373.96,659.13 365.29,658.05 362.85,662.29 354.17,660.76 354.17,660.76 345.00,658.43 345.00,658.43 345.00,658.43 335.04,657.67 335.04,657.67 335.04,657.67 327.91,655.27 327.91,655.27 327.91,655.27 312.00,653.58 312.00,653.58 305.77,652.71 302.47,650.79 296.00,651.02 289.09,651.26 288.16,654.86 276.00,655.00 258.20,655.20 249.21,651.52 232.83,647.47 229.63,646.67 224.89,647.50 215.04,644.75 210.65,643.53 208.49,641.02 204.58,639.19 204.58,639.19 195.09,636.74 195.09,636.74 195.09,636.74 188.91,633.23 188.91,633.23 181.61,629.54 165.70,625.28 163.00,617.00 154.83,615.93 153.17,612.22 146.85,608.19 129.00,596.83 135.25,597.54 125.25,587.78 125.25,587.78 105.36,568.71 105.36,568.71 101.73,564.71 102.43,563.22 99.72,560.63 99.72,560.63 92.08,554.82 92.08,554.82 92.08,554.82 79.82,543.20 79.82,543.20 75.00,538.17 75.78,536.18 71.52,532.02 71.52,532.02 63.97,525.77 63.97,525.77 63.97,525.77 47.87,501.39 47.87,501.39 42.17,493.75 35.06,487.03 30.46,478.58 30.46,478.58 24.80,465.96 24.80,465.96 24.80,465.96 23.74,459.09 23.74,459.09 23.74,459.09 18.57,440.17 18.57,440.17 16.94,434.87 14.88,433.04 13.34,429.72 13.34,429.72 9.39,417.72 9.39,417.72 8.19,413.71 6.02,399.26 6.00,395.00 5.93,379.84 0.14,375.36 0.00,366.00 0.00,366.00 0.00,339.00 0.00,339.00 0.10,332.30 1.33,333.49 1.87,328.96 1.87,328.96 2.46,318.00 2.46,318.00 2.46,318.00 5.77,306.91 5.77,306.91 8.05,297.14 8.86,288.97 9.00,279.00 9.10,272.68 10.40,272.91 11.41,267.00 11.41,267.00 12.47,258.04 12.47,258.04 12.47,258.04 21.46,233.28 21.46,233.28 21.46,233.28 43.22,208.39 43.22,208.39 43.22,208.39 50.44,198.47 50.44,198.47 53.33,195.07 55.06,193.98 57.54,189.72 57.54,189.72 69.10,166.28 69.10,166.28 69.10,166.28 74.83,156.83 74.83,156.83 81.52,143.23 83.06,138.32 93.42,126.13 93.42,126.13 118.61,102.24 118.61,102.24 118.61,102.24 126.27,96.61 126.27,96.61 126.27,96.61 135.43,88.24 135.43,88.24 135.43,88.24 143.92,82.61 143.92,82.61 143.92,82.61 156.75,72.43 156.75,72.43 156.75,72.43 164.42,67.32 164.42,67.32 170.58,62.31 170.41,60.16 173.34,58.25 173.34,58.25 190.72,50.41 190.72,50.41 196.78,47.05 202.52,43.04 209.17,40.82 216.35,38.41 226.65,41.80 230.96,40.27 230.96,40.27 237.17,36.80 237.17,36.80 237.17,36.80 244.00,35.67 244.00,35.67 244.00,35.67 252.17,31.97 252.17,31.97 252.17,31.97 257.91,30.46 257.91,30.46 261.66,28.94 262.95,26.51 271.28,24.43 271.28,24.43 295.00,21.35 295.00,21.35 295.00,21.35 304.00,22.93 304.00,22.93 307.52,22.82 308.04,21.12 315.00,20.94 315.00,20.94 325.96,20.94 325.96,20.94 325.96,20.94 333.09,19.11 333.09,19.11 335.43,18.85 338.65,19.27 340.79,18.42 343.73,17.24 345.49,13.55 348.44,11.95 350.63,10.77 353.57,11.01 356.00,11.00 356.00,11.00 356.00,14.00 356.00,14.00 Z`
            },
            ans3: {
                id: "3",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q3A.png',
                w: 1120,
                h: 461,
                scaleX: 370 / 1120,
                scaleY: 152 / 461,
                path: `M 694.00,107.00 C 700.94,107.75 725.72,101.52 734.00,99.65 734.00,99.65 807.00,84.28 807.00,84.28 807.00,84.28 915.00,63.39 915.00,63.39 915.00,63.39 973.00,52.43 973.00,52.43 973.00,52.43 1008.00,47.57 1008.00,47.57 1008.00,47.57 1034.00,42.46 1034.00,42.46 1034.00,42.46 1061.00,38.00 1061.00,38.00 1061.00,38.00 1098.00,32.01 1098.00,32.01 1103.18,31.90 1113.51,33.25 1105.85,40.48 1105.85,40.48 1102.00,43.33 1102.00,43.33 1092.88,49.53 1077.42,56.36 1067.00,60.78 1067.00,60.78 918.00,124.18 918.00,124.18 918.00,124.18 851.00,151.86 851.00,151.86 851.00,151.86 817.00,165.43 817.00,165.43 817.00,165.43 736.00,199.55 736.00,199.55 736.00,199.55 676.00,222.34 676.00,222.34 676.00,222.34 597.00,254.06 597.00,254.06 597.00,254.06 543.00,277.58 543.00,277.58 543.00,277.58 500.00,296.18 500.00,296.18 500.00,296.18 466.00,312.14 466.00,312.14 466.00,312.14 368.00,353.42 368.00,353.42 368.00,353.42 340.00,365.96 340.00,365.96 340.00,365.96 312.00,377.43 312.00,377.43 312.00,377.43 262.00,399.30 262.00,399.30 262.00,399.30 201.00,426.45 201.00,426.45 182.84,433.87 149.28,450.89 130.91,452.20 106.19,453.96 73.77,447.19 54.04,431.77 28.37,411.69 12.30,373.70 11.42,341.42 11.20,333.20 12.86,321.16 14.39,313.00 17.87,294.44 23.45,279.36 36.61,265.28 56.45,244.07 87.04,240.02 113.99,234.50 113.99,234.50 164.17,223.84 164.17,223.84 164.17,223.84 205.83,213.74 205.83,213.74 205.83,213.74 262.91,202.05 262.91,202.05 262.91,202.05 298.00,194.58 298.00,194.58 298.00,194.58 353.00,181.77 353.00,181.77 353.00,181.77 374.00,177.14 374.00,177.14 376.93,176.66 380.83,177.06 382.00,174.00 387.71,175.11 393.43,172.88 399.09,171.93 401.75,171.48 403.98,171.65 405.00,169.00 410.71,170.12 415.37,168.33 421.00,167.20 421.00,167.20 450.00,161.40 450.00,161.40 450.00,161.40 463.17,158.50 463.17,158.50 464.19,157.84 463.77,157.58 464.00,157.00 470.99,158.13 475.17,156.01 481.72,154.63 481.72,154.63 516.96,146.92 516.96,146.92 516.96,146.92 617.00,125.58 617.00,125.58 617.00,125.58 630.04,122.67 630.04,122.67 630.04,122.67 636.49,120.58 636.49,120.58 636.49,120.58 654.00,117.33 654.00,117.33 654.00,117.33 662.00,115.02 662.00,115.02 662.00,115.02 678.00,112.00 678.00,112.00 683.04,110.72 689.92,110.13 694.00,107.00 Z M 77.00,445.00 C 77.00,445.00 78.00,445.00 78.00,445.00 78.00,445.00 77.00,446.00 77.00,446.00 77.00,446.00 77.00,445.00 77.00,445.00 Z M 131.00,451.00 C 131.00,451.00 130.00,451.00 130.00,451.00 130.00,451.00 131.00,452.00 131.00,452.00 131.00,452.00 131.00,451.00 131.00,451.00 Z`
            },
            ans4: {
                id: "4",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q4A.png',
                w: 250,
                h: 100,
                scaleX: 370 / 250,
                scaleY: 148 / 100,
                path: `M 138.00,14.57 C 143.63,14.00 144.77,16.69 143.61,22.00 142.27,28.15 133.90,37.81 132.56,42.00 131.07,46.66 133.48,52.93 129.60,61.00 126.73,66.96 121.62,71.49 115.00,72.67 110.33,73.51 106.61,72.10 101.00,75.05 95.06,78.16 87.69,86.37 81.02,87.41 76.37,88.14 75.13,85.01 75.97,81.00 77.55,73.46 84.87,66.39 86.85,61.00 89.36,54.19 84.31,49.94 90.22,40.00 93.43,34.60 98.75,30.42 105.00,29.33 109.19,28.59 112.94,29.65 117.00,27.91 124.10,24.88 128.66,17.74 138.00,14.57 Z M 36.00,19.25 C 38.63,19.10 40.32,18.93 43.00,19.25 47.80,19.23 52.72,20.67 57.00,22.81 62.91,25.77 68.12,30.29 71.52,36.00 74.95,41.75 75.07,46.55 75.00,53.00 74.79,71.24 57.74,84.94 40.00,83.91 27.97,83.21 14.67,74.53 10.55,63.00 8.92,58.45 8.95,54.73 9.00,50.00 9.06,45.15 9.75,41.38 11.99,37.00 16.87,27.48 25.88,21.85 36.00,19.25 Z M 128.00,35.00 C 128.47,31.46 128.39,31.20 125.00,30.00 125.18,33.37 125.10,33.27 128.00,35.00 Z M 161.00,29.47 C 165.91,28.80 169.34,29.04 174.00,30.93 191.99,38.21 194.54,63.27 176.00,71.65 172.66,73.16 168.67,74.12 165.00,73.81 143.88,72.04 136.74,48.37 148.21,36.10 151.83,32.24 156.00,30.66 161.00,29.47 Z M 218.00,29.70 C 221.87,28.94 224.16,28.88 228.00,29.70 252.55,36.65 246.09,75.77 219.00,73.90 202.88,72.80 194.19,54.80 201.44,41.00 204.94,34.33 210.97,31.14 218.00,29.70 Z M 95.00,67.00 C 95.00,67.00 91.00,67.00 91.00,67.00 91.00,67.00 91.00,71.00 91.00,71.00 91.00,71.00 95.00,71.00 95.00,71.00 95.00,71.00 95.00,67.00 95.00,67.00 Z`
            },
            ans5: {
                id: "5",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q5A.png',
                w: 654,
                h: 382,
                scaleX: 370 / 654,
                scaleY: 216 / 382,
                path: `M 294.00,49.14 C 294.00,49.14 321.00,49.14 321.00,49.14 321.00,49.14 349.00,49.14 349.00,49.14 349.00,49.14 369.00,50.13 369.00,50.13 369.00,50.13 377.00,50.13 377.00,50.13 377.00,50.13 396.00,52.94 396.00,52.94 396.00,52.94 405.00,52.94 405.00,52.94 405.00,52.94 415.00,55.02 415.00,55.02 415.00,55.02 424.00,55.02 424.00,55.02 424.00,55.02 435.00,58.54 435.00,58.54 435.00,58.54 460.00,63.49 460.00,63.49 460.00,63.49 468.00,66.22 468.00,66.22 468.00,66.22 475.00,67.96 475.00,67.96 475.00,67.96 481.00,70.38 481.00,70.38 481.00,70.38 488.00,72.04 488.00,72.04 495.42,74.19 505.96,78.14 513.00,81.31 513.00,81.31 543.96,97.32 543.96,97.32 543.96,97.32 550.17,102.05 550.17,102.05 550.17,102.05 557.00,105.39 557.00,105.39 574.41,115.85 590.36,131.97 601.31,149.00 606.67,157.34 612.71,169.96 612.86,180.00 612.86,180.00 612.86,194.00 612.86,194.00 612.86,194.00 611.32,201.00 611.32,201.00 608.75,215.78 606.85,218.52 598.67,231.00 598.67,231.00 593.70,239.00 593.70,239.00 588.56,245.69 581.97,251.09 576.09,257.09 569.81,263.50 570.85,266.78 566.78,270.09 561.97,273.99 557.80,273.37 553.00,275.55 553.00,275.55 542.00,282.55 542.00,282.55 542.00,282.55 533.00,287.17 533.00,287.17 533.00,287.17 521.00,294.19 521.00,294.19 509.83,299.74 497.77,304.31 486.00,308.46 486.00,308.46 465.00,314.41 465.00,314.41 465.00,314.41 459.00,315.68 459.00,315.68 459.00,315.68 438.00,323.59 438.00,323.59 438.00,323.59 428.00,324.44 428.00,324.44 428.00,324.44 403.00,328.71 403.00,328.71 403.00,328.71 382.00,330.17 382.00,330.17 382.00,330.17 366.00,332.70 366.00,332.70 361.50,333.80 358.04,335.63 353.00,336.17 353.00,336.17 334.00,335.00 334.00,335.00 334.00,335.00 327.00,335.00 327.00,335.00 327.00,335.00 315.00,336.24 315.00,336.24 307.92,336.07 304.15,333.81 299.00,333.18 299.00,333.18 258.00,330.00 258.00,330.00 250.78,329.91 247.75,328.08 241.00,326.66 241.00,326.66 211.00,320.46 211.00,320.46 211.00,320.46 203.00,319.37 203.00,319.37 203.00,319.37 193.00,315.35 193.00,315.35 179.14,311.68 152.70,302.57 140.00,296.52 140.00,296.52 130.00,290.82 130.00,290.82 130.00,290.82 110.17,282.02 110.17,282.02 110.17,282.02 92.91,267.45 92.91,267.45 92.91,267.45 75.14,255.70 75.14,255.70 75.14,255.70 61.37,237.00 61.37,237.00 61.37,237.00 48.27,218.83 48.27,218.83 48.27,218.83 45.71,212.00 45.71,212.00 43.41,207.30 40.72,203.58 40.25,198.00 40.25,198.00 42.59,184.00 42.59,184.00 45.79,164.17 51.04,151.96 63.67,136.00 67.49,131.18 68.98,130.65 72.91,126.83 72.91,126.83 80.04,119.09 80.04,119.09 85.66,113.68 92.60,109.78 99.00,105.41 99.00,105.41 107.00,99.55 107.00,99.55 107.00,99.55 118.00,93.69 118.00,93.69 136.17,83.86 154.25,76.05 174.00,69.98 174.00,69.98 201.00,60.60 201.00,60.60 204.90,59.78 206.29,61.26 211.00,60.60 211.00,60.60 221.00,57.76 221.00,57.76 221.00,57.76 235.00,55.18 235.00,55.18 235.00,55.18 257.00,52.72 257.00,52.72 257.00,52.72 268.00,51.09 268.00,51.09 268.00,51.09 281.00,50.04 281.00,50.04 281.00,50.04 294.00,49.14 294.00,49.14 Z`
            },
            ans6: {
                id: "6",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q6A.png',
                w: 379,
                h: 379,
                scaleX: 370 / 379,
                scaleY: 370 / 379,
                path: `M 172.00,17.22 C 172.00,17.22 198.00,17.22 198.00,17.22 215.54,17.03 237.72,23.09 254.00,29.55 273.85,37.43 292.34,48.48 308.00,63.09 338.02,91.09 357.91,131.05 361.96,172.00 361.96,172.00 361.96,180.00 361.96,180.00 361.96,180.00 362.99,192.00 362.99,192.00 362.99,192.00 361.96,201.00 361.96,201.00 361.96,201.00 361.96,209.00 361.96,209.00 358.19,247.11 337.89,286.22 311.00,313.00 297.22,326.72 278.88,339.56 261.00,347.28 236.30,357.95 212.99,363.31 186.00,363.00 186.00,363.00 176.00,362.09 176.00,362.09 159.30,360.92 146.72,358.35 131.00,352.42 105.83,342.93 86.33,332.25 67.04,312.96 13.72,259.64 1.45,178.04 34.97,111.00 53.21,74.52 86.27,44.69 124.00,29.45 139.34,23.26 155.76,20.12 172.00,17.22 Z`
            },
            ans7: {
                id: "7",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/q7a.png',
                w: 454,
                h: 76,
                scaleX: 370 / 454,
                scaleY: 62 / 76,
                path: `M 354.00,0.00 C 356.28,14.49 345.43,20.01 342.56,29.00 340.89,34.21 344.75,47.55 332.96,56.20 324.28,62.57 318.96,57.87 311.00,62.05 311.00,62.05 295.00,73.52 295.00,73.52 292.88,74.87 289.13,76.89 286.74,75.00 284.49,73.23 285.35,69.29 286.10,67.00 288.71,59.12 295.00,53.05 296.85,48.00 299.41,41.04 294.04,36.17 300.85,26.00 304.16,21.06 309.08,17.37 315.00,16.33 319.88,15.47 323.17,16.90 328.00,14.43 337.44,9.61 342.27,0.37 354.00,0.00 Z M 246.00,6.25 C 248.63,6.10 250.32,5.93 253.00,6.25 257.80,6.23 262.72,7.67 267.00,9.81 272.91,12.77 278.12,17.29 281.52,23.00 284.95,28.75 285.07,33.55 285.00,40.00 284.79,58.24 267.74,71.94 250.00,70.91 226.83,69.56 211.17,45.16 221.99,24.00 226.87,14.48 235.88,8.85 246.00,6.25 Z M 54.00,12.47 C 59.47,11.70 64.82,11.76 70.00,13.95 91.89,23.23 91.73,55.40 68.00,63.25 64.85,64.29 61.33,65.09 58.00,64.81 27.53,62.29 23.86,19.65 54.00,12.47 Z M 113.00,15.53 C 118.66,14.60 124.85,14.73 130.00,17.56 149.24,28.10 143.43,54.35 123.00,59.10 108.85,62.39 94.82,49.28 96.20,35.00 97.18,24.77 103.45,18.38 113.00,15.53 Z M 338.00,22.00 C 338.47,18.46 338.39,18.20 335.00,17.00 335.18,20.37 335.10,20.27 338.00,22.00 Z M 371.00,16.47 C 375.91,15.80 379.34,16.04 384.00,17.93 401.99,25.21 404.54,50.27 386.00,58.65 382.66,60.16 378.67,61.12 375.00,60.81 353.88,59.04 346.74,35.37 358.21,23.10 361.83,19.24 366.00,17.66 371.00,16.47 Z M 428.00,16.47 C 432.20,15.89 434.90,15.91 439.00,17.22 464.91,25.51 454.93,62.69 429.00,60.90 412.88,59.80 404.19,41.80 411.44,28.00 414.94,21.33 420.97,18.14 428.00,16.47 Z M 185.00,20.53 C 191.75,19.42 198.61,20.08 203.61,25.33 213.45,35.65 207.51,52.37 194.00,55.47 171.74,60.58 162.09,27.68 185.00,20.53 Z M 8.00,27.65 C 12.27,26.81 16.24,26.94 19.43,30.39 23.32,34.59 23.62,44.62 15.00,47.35 6.29,50.10 -3.86,42.25 1.02,33.04 2.62,30.03 5.05,28.89 8.00,27.65 Z M 304.00,54.00 C 304.00,54.00 302.00,58.00 302.00,58.00 302.00,58.00 304.00,54.00 304.00,54.00 Z`
            },
            ans8: {
                id: "8",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q8A.png',
                w: 269,
                h: 269,
                scaleX: 370 / 269,
                scaleY: 370 / 269,
                path: `M 105.00,0.61 C 110.45,-0.42 117.34,-0.01 123.00,0.00 123.00,0.00 135.00,0.91 135.00,0.91 135.00,0.91 150.00,1.83 150.00,1.83 150.00,1.83 162.00,2.37 162.00,2.37 162.00,2.37 177.00,7.10 177.00,7.10 177.00,7.10 186.79,8.73 186.79,8.73 186.79,8.73 193.10,13.65 193.10,13.65 193.10,13.65 201.00,17.87 201.00,17.87 206.05,20.76 207.65,22.45 212.00,25.77 212.00,25.77 219.00,30.41 219.00,30.41 225.34,35.21 238.86,48.62 243.60,55.00 249.61,63.07 255.80,75.65 259.74,85.00 259.74,85.00 264.37,95.00 264.37,95.00 266.02,100.52 266.39,106.35 267.21,112.00 268.15,118.56 268.98,115.30 269.00,125.00 269.00,125.00 269.00,143.00 269.00,143.00 268.99,150.88 263.92,175.25 261.33,183.00 261.33,183.00 253.31,199.00 253.31,199.00 253.31,199.00 248.88,209.72 248.88,209.72 248.88,209.72 235.90,225.63 235.90,225.63 235.90,225.63 226.17,233.58 226.17,233.58 221.23,238.34 221.33,240.78 218.59,242.88 218.59,242.88 188.91,259.28 188.91,259.28 188.91,259.28 184.17,260.54 184.17,260.54 184.17,260.54 179.83,262.89 179.83,262.89 179.83,262.89 166.00,267.61 166.00,267.61 157.40,269.48 131.05,269.11 121.00,269.00 121.00,269.00 102.00,267.57 102.00,267.57 102.00,267.57 78.00,257.53 78.00,257.53 78.00,257.53 69.00,254.37 69.00,254.37 63.39,251.38 61.17,248.26 57.83,245.99 57.83,245.99 52.37,242.94 52.37,242.94 52.37,242.94 35.70,228.32 35.70,228.32 35.70,228.32 31.70,222.00 31.70,222.00 31.70,222.00 25.63,215.00 25.63,215.00 23.12,211.50 13.06,193.98 11.45,190.00 11.45,190.00 7.60,178.00 7.60,178.00 5.62,172.21 3.78,168.25 2.51,162.00 2.51,162.00 1.79,155.00 1.79,155.00 0.56,146.40 -0.02,149.55 0.00,139.00 0.02,126.84 1.75,128.47 2.98,121.00 2.98,121.00 2.98,110.00 2.98,110.00 2.98,110.00 8.96,86.00 8.96,86.00 8.96,86.00 13.02,78.00 13.02,78.00 13.02,78.00 16.68,70.00 16.68,70.00 16.68,70.00 27.32,54.00 27.32,54.00 30.40,49.35 30.07,46.88 32.43,44.41 32.43,44.41 43.00,36.83 43.00,36.83 50.86,29.86 59.03,22.37 68.17,17.08 68.17,17.08 80.83,11.06 80.83,11.06 80.83,11.06 87.04,6.90 87.04,6.90 87.04,6.90 105.00,0.61 105.00,0.61 Z`
            },
            ans9: {
                id: "9",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q9A.png',
                w: 209,
                h: 53,
                scaleX: 370 / 209,
                scaleY: 94 / 53,
                path: `M 51.00,0.81 C 54.95,-0.20 57.96,-0.06 62.00,0.00 67.41,0.10 69.49,1.04 74.00,4.09 86.91,12.84 90.29,30.59 80.47,42.98 77.70,46.49 73.97,49.10 70.00,51.10 65.64,53.29 62.73,53.06 58.00,53.00 39.60,52.76 28.74,32.29 35.12,16.00 38.04,8.53 43.92,4.04 51.00,0.81 Z M 113.00,3.53 C 117.94,2.72 123.29,2.69 128.00,4.61 147.61,12.58 145.26,39.59 126.00,46.24 123.21,47.20 119.95,47.97 117.00,47.66 99.09,45.82 89.46,24.05 101.53,10.18 104.61,6.65 108.61,4.84 113.00,3.53 Z M 185.00,8.53 C 192.54,7.29 199.20,8.35 204.67,14.18 214.65,24.83 207.31,40.42 194.00,43.47 171.74,48.58 162.09,15.68 185.00,8.53 Z M 8.00,15.65 C 12.27,14.81 16.24,14.94 19.43,18.39 23.32,22.59 23.62,32.62 15.00,35.35 6.29,38.10 -3.86,30.25 1.02,21.04 2.62,18.03 5.05,16.89 8.00,15.65 Z`
            },
            ans10: {
                id: "10",
                url: 'https://emandeguzman.github.io/ziel/public/img/quiz3/Q10A.png',
                w: 1919,
                h: 1784,
                scaleX: 370 / 1919,
                scaleY: 344 / 1784,
                path: `M 401.00,1610.00 C 390.00,1603.82 355.53,1577.57 344.00,1568.65 283.18,1521.60 232.52,1468.90 184.60,1409.00 166.54,1386.42 149.98,1362.80 135.06,1338.00 135.06,1338.00 130.18,1328.00 130.18,1328.00 130.18,1328.00 119.86,1313.00 119.86,1313.00 93.35,1267.89 68.88,1215.56 52.00,1166.00 33.16,1110.71 18.79,1054.09 11.85,996.00 11.85,996.00 6.91,942.00 6.91,942.00 6.91,942.00 5.96,931.00 5.96,931.00 5.96,931.00 5.96,918.00 5.96,918.00 5.96,918.00 5.00,906.00 5.00,906.00 5.00,906.00 5.00,876.00 5.00,876.00 5.00,876.00 5.96,864.00 5.96,864.00 5.96,864.00 5.96,850.00 5.96,850.00 5.96,850.00 6.91,840.00 6.91,840.00 8.75,813.10 11.43,786.70 15.58,760.00 27.11,685.71 49.95,611.30 81.31,543.00 81.31,543.00 92.75,521.00 92.75,521.00 92.75,521.00 107.31,492.00 107.31,492.00 132.12,446.13 157.93,407.00 190.21,366.00 321.04,199.86 507.85,86.16 712.00,35.13 754.33,24.54 798.59,16.24 842.00,11.83 842.00,11.83 853.00,10.17 853.00,10.17 853.00,10.17 874.00,8.83 874.00,8.83 874.00,8.83 925.00,6.00 925.00,6.00 925.00,6.00 942.00,5.00 942.00,5.00 942.00,5.00 975.00,5.00 975.00,5.00 975.00,5.00 990.00,6.00 990.00,6.00 1080.63,7.06 1183.60,25.73 1270.00,53.34 1471.56,117.77 1651.24,247.35 1769.00,424.00 1792.34,459.01 1813.74,495.75 1831.31,534.00 1852.04,579.15 1869.06,621.76 1881.48,670.00 1881.48,670.00 1888.12,693.00 1888.12,693.00 1897.88,734.11 1904.10,771.98 1908.17,814.00 1908.17,814.00 1910.09,839.00 1910.09,839.00 1910.09,839.00 1911.04,849.00 1911.04,849.00 1911.04,849.00 1911.04,862.00 1911.04,862.00 1911.04,862.00 1912.00,874.00 1912.00,874.00 1912.00,874.00 1912.00,908.00 1912.00,908.00 1912.00,908.00 1911.00,925.00 1911.00,925.00 1911.00,925.00 1908.17,968.00 1908.17,968.00 1900.54,1046.82 1883.84,1119.06 1855.19,1193.00 1836.79,1240.50 1815.58,1282.37 1789.40,1326.00 1697.78,1478.71 1557.79,1600.40 1398.00,1677.74 1340.08,1705.77 1279.19,1727.54 1217.00,1743.88 1167.47,1756.90 1116.95,1766.07 1066.00,1771.17 1066.00,1771.17 1032.00,1774.09 1032.00,1774.09 1032.00,1774.09 1022.00,1775.00 1022.00,1775.00 1022.00,1775.00 1003.00,1776.00 1003.00,1776.00 1003.00,1776.00 981.00,1776.00 981.00,1776.00 981.00,1776.00 960.00,1777.00 960.00,1777.00 960.00,1777.00 938.00,1777.00 938.00,1777.00 938.00,1777.00 925.00,1776.00 925.00,1776.00 900.19,1775.71 875.68,1773.63 851.00,1771.17 851.00,1771.17 807.00,1765.75 807.00,1765.75 802.32,1764.99 793.96,1764.59 790.00,1763.00 791.41,1762.77 792.55,1762.78 793.85,1761.98 802.01,1756.97 787.09,1749.30 787.83,1759.02 787.94,1760.38 788.56,1761.73 789.00,1763.00 789.00,1763.00 761.00,1757.45 761.00,1757.45 761.00,1757.45 704.00,1744.88 704.00,1744.88 629.28,1725.25 569.19,1702.85 500.00,1668.25 500.00,1668.25 435.00,1631.80 435.00,1631.80 428.42,1627.81 409.39,1616.69 405.00,1612.00 407.17,1611.51 408.01,1611.18 409.65,1609.49 410.87,1608.22 411.84,1606.69 412.34,1604.99 416.20,1591.62 394.45,1593.60 398.15,1604.99 398.60,1606.39 400.18,1608.69 401.00,1610.00 Z M 1785.00,66.00 C 1785.00,66.00 1786.00,66.00 1786.00,66.00 1786.00,66.00 1785.00,67.00 1785.00,67.00 1785.00,67.00 1785.00,66.00 1785.00,66.00 Z M 1917.00,868.00 C 1918.31,871.30 1918.31,873.70 1917.00,877.00 1917.00,877.00 1917.00,868.00 1917.00,868.00 Z M 1917.00,905.00 C 1918.31,908.30 1918.31,910.70 1917.00,914.00 1917.00,914.00 1917.00,905.00 1917.00,905.00 Z M 182.00,1673.00 C 182.00,1673.00 183.00,1673.00 183.00,1673.00 183.00,1673.00 182.00,1674.00 182.00,1674.00 182.00,1674.00 182.00,1673.00 182.00,1673.00 Z M 94.00,1771.00 C 94.00,1771.00 95.00,1771.00 95.00,1771.00 95.00,1771.00 94.00,1772.00 94.00,1772.00 94.00,1772.00 94.00,1771.00 94.00,1771.00 Z`
            },
        }        
    }

    const random = (min, max)=>{
        return Math.round(Math.random() * (max - min) + min);
    }

    //#region MAIN
    await clearAllCanvas();
    await drawSplash(imgs.splashscreen.url);

    let score = 0;

    await new Promise(resolve=>{
        (async()=>{
            const canvas = bg;
            canvas.removeAllItems();
            canvas.clear();

            for (let q = 1; q <= 10; q++) {
                //#region build choices
                const ansPos = random(0,3);
                // console.log(`ansPos`, ansPos)
                const ansItem = imgs.answers[`ans${q}`];
                // console.log(`ansItem.id`, ansItem.id)
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

                //#region draw question
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
                //#endregion

                await new Promise(resolve=>{
                    const f = ()=>{
                        fg.addEventListener(
                            "click",
                            (e)=>{
                                const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth);
                                const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight);

                                let clicked;
                                for (let i = 0; i < 4; i++) {
                                    const c = choices[i];
                                    const ctx = fg.ctx;

                                    ctx.save();

                                    ctx.translate(
                                        startx + (inc * i) - c.w * c.scaleX / 2,
                                        843 - c.h * c.scaleY / 2,
                                    );
                        
                                    const p = new Path2D(c.path);
                                    ctx.scale(c.scaleX, c.scaleY);
                        
                                    const isInPath = ctx.isPointInPath(p, x, y);
                                    ctx.restore();

                                    if (isInPath) {
                                        clicked = c;
                                        break;
                                    }
                                }

                                if (clicked) {
                                    // console.log(clicked)
                                    if (clicked.id == ansItem.id) score++;
                                    resolve();
                                    return;
                                }

                                f();
                            }
                            ,
                            {once: true}
                        );
                    };
                    f();
                })
            }

            resolve();
        })()
    })

    return score;
}