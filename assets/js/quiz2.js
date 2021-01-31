"use strict";

const quiz2=()=>{

    const targets = [
        {
            name: "mercury",
            type: "arc",
            x: 466,
            y: 455,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "venus",
            type: "arc",
            x: 643,
            y: 455,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "earth",
            type: "arc",
            x: 820,
            y: 455,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "mars",
            type: "arc",
            x: 997,
            y: 455,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "jupiter",
            type: "arc",
            x: 1238,
            y: 450,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "saturn",
            type: "arc",
            x: 1415,
            y: 450,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "uranus",
            type: "arc",
            x: 1592,
            y: 450,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "neptune",
            type: "arc",
            x: 1769,
            y: 450,
            r: 85,
            start: 0,
            end: 2 * Math.PI
        },
        {
            name: "jovian",
            type: "rect",
            x: 397,
            y: 576,
            width: 646,
            height: 137
        },
        {
            name: "terrestial",
            type: "rect",
            x: 1171,
            y: 575,
            width: 646,
            height: 137
        },
        {
            name: "base",
            type: "rect",
            x: 43,
            y: 762,
            width: 1832,
            height: 293
        }
    ];

    const draggables = [
        {
            name: 'uranus',
            url: '{{(resources.Get "/img/journey/uranus-cropped.png").Permalink}}',
            x: 100,
            y: 890,
            initX: 100,
            initY: 890,
            path: 'M 138.00,4.67 C 144.59,3.64 144.20,4.51 150.00,4.67 164.89,5.93 172.55,7.03 187.00,11.14 270.70,34.96 320.77,127.25 287.40,209.00 281.55,223.33 273.86,235.33 263.71,247.00 253.18,259.11 238.28,270.38 224.00,277.74 198.66,290.81 176.11,294.33 148.00,294.00 138.09,293.88 125.64,291.30 116.00,288.87 37.74,269.22 -15.82,188.44 4.13,109.00 7.19,96.81 12.02,84.82 18.45,74.00 37.49,42.01 67.24,19.52 103.00,9.43 110.36,7.35 119.38,5.90 127.00,5.17 127.00,5.17 138.00,4.67 138.00,4.67 Z',
            scaleX: 120 / 298,
            scaleY: 120 / 298,
            w: 120,
            h: 120,
        },
        {
            name: 'mars',
            url: '{{(resources.Get "/img/journey/mars-cropped.png").Permalink}}',
            x: 270,
            y: 890,
            initX: 270,
            initY: 890,
            path: 'M 79.00,0.21 C 79.00,0.21 91.00,0.21 91.00,0.21 101.59,0.02 114.26,2.70 124.00,6.87 134.49,11.36 145.91,18.89 153.83,27.09 180.26,54.45 185.85,98.72 167.69,132.00 158.99,147.94 146.83,159.43 131.00,168.14 114.48,177.22 101.24,178.21 83.00,178.00 52.14,177.64 21.07,155.65 8.31,128.00 0.23,110.50 -0.21,100.68 0.00,82.00 0.13,71.35 4.03,59.45 8.75,50.00 23.57,20.37 47.04,5.66 79.00,0.21 Z',
            scaleX: 120 / 179,
            scaleY: 120 / 179,
            w: 120,
            h: 120,
        },
        {
            name: 'saturn',
            url: '{{(resources.Get "/img/journey/saturn-cropped.png").Permalink}}',
            x: 430,
            y: 890,
            initX: 430,
            initY: 890,
            path: 'M 162.00,0.21 C 162.00,0.21 198.00,0.21 198.00,0.21 217.31,0.03 250.61,5.62 268.00,13.78 281.55,20.14 297.29,30.40 297.96,47.00 298.90,70.26 272.25,87.12 254.00,96.25 222.33,112.09 187.08,120.41 152.00,124.16 152.00,124.16 130.00,126.00 130.00,126.00 130.00,126.00 97.00,126.00 97.00,126.00 73.96,125.73 37.28,117.93 18.00,105.30 13.85,102.59 10.51,99.85 7.33,96.00 6.70,79.07 2.36,60.04 17.00,47.29 46.47,21.62 95.93,8.88 134.00,3.27 134.00,3.27 151.00,1.17 151.00,1.17 151.00,1.17 162.00,0.21 162.00,0.21 Z M 210.00,34.00 C 210.00,34.00 214.19,52.00 214.19,52.00 214.19,52.00 214.19,77.00 214.19,77.00 223.91,70.36 236.51,57.16 226.61,45.04 223.05,40.68 215.10,37.32 210.00,34.00 Z M 83.08,51.00 C 72.57,57.62 62.29,69.03 72.34,80.96 73.94,82.86 75.86,84.50 78.00,85.78 80.79,87.44 83.87,88.28 87.00,89.00 87.00,89.00 83.08,71.00 83.08,71.00 83.08,71.00 83.08,51.00 83.08,51.00 Z',
            scaleX: 240 / 298,
            scaleY: 120 / 126,
            w: 240,
            h: 120,
        },
        {
            name: 'neptune',
            url: '{{(resources.Get "/img/journey/neptune-cropped.png").Permalink}}',
            x: 710,
            y: 890,
            initX: 710,
            initY: 890,
            path: 'M 126.00,0.42 C 138.61,-1.11 161.88,2.91 174.00,7.00 188.67,11.95 200.82,18.93 213.00,28.42 225.01,37.79 230.61,44.47 239.00,57.00 274.15,109.50 268.21,181.47 223.91,226.96 216.53,234.54 205.14,242.96 196.00,248.40 182.48,256.44 158.77,264.92 143.00,265.24 143.00,265.24 130.00,265.24 130.00,265.24 130.00,265.24 115.00,264.71 115.00,264.71 88.60,261.28 63.41,248.96 44.09,230.72 -8.95,180.61 -9.23,90.41 42.09,39.09 56.84,24.34 78.86,11.14 99.00,5.43 107.86,2.92 116.93,1.72 126.00,0.42 Z',
            scaleX: 120 / 266,
            scaleY: 120 / 266,
            w: 120,
            h: 120,
        },
        {
            name: 'mercury',
            url: '{{(resources.Get "/img/journey/mercury-cropped.png").Permalink}}',
            x: 880,
            y: 890,
            initX: 880,
            initY: 890,
            path: 'M 79.00,0.21 C 79.00,0.21 103.00,0.21 103.00,0.21 111.34,0.00 121.95,-0.31 130.00,1.76 143.56,5.25 159.93,15.49 169.99,25.09 180.88,35.49 193.82,57.00 196.54,72.00 198.55,83.11 198.05,97.56 198.00,109.00 197.96,116.40 196.84,126.00 194.48,133.00 187.06,155.08 170.97,174.67 151.00,186.55 128.66,199.84 110.87,198.29 86.00,198.00 47.10,197.54 12.68,165.39 2.43,129.00 -0.47,118.71 -0.02,101.01 0.00,90.00 0.01,85.80 0.97,73.86 1.90,70.00 9.39,38.72 37.81,9.66 69.00,1.76 69.00,1.76 79.00,0.21 79.00,0.21 Z',
            scaleX: 120 / 198,
            scaleY: 120 / 198,
            w: 120,
            h: 120,
        },
        {
            name: 'jupiter',
            url: '{{(resources.Get "/img/journey/jupiter-cropped.png").Permalink}}',
            x: 1045,
            y: 890,
            initX: 1045,
            initY: 890,
            path: 'M 91.00,5.43 C 142.16,-0.89 192.94,31.26 205.63,82.00 207.22,88.38 209.21,100.58 208.96,107.00 208.09,129.48 199.22,150.65 185.20,168.00 176.18,179.14 164.74,187.38 152.00,193.75 132.25,203.63 118.63,205.25 97.00,205.00 87.79,204.89 75.63,201.67 67.00,198.42 26.01,183.00 -0.51,145.93 0.00,102.00 0.10,93.41 3.59,79.13 6.54,71.00 19.87,34.26 53.56,11.56 91.00,5.43 Z',
            scaleX: 120 / 209,
            scaleY: 120 / 209,
            w: 120,
            h: 120,
        },
        {
            name: 'venus',
            url: '{{(resources.Get "/img/journey/venus-cropped.png").Permalink}}',
            x: 1210,
            y: 890,
            initX: 1210,
            initY: 890,
            path:'M 148.00,0.42 C 204.79,-6.51 250.33,32.98 272.77,82.00 281.23,100.48 284.81,113.94 287.28,134.00 287.28,134.00 289.00,151.00 289.00,151.00 289.45,190.10 272.67,234.15 244.91,261.91 232.10,274.72 212.24,286.65 195.00,292.33 182.43,296.47 169.26,299.15 156.00,299.00 143.03,298.84 126.32,295.11 114.00,291.00 98.13,285.71 83.31,277.95 70.00,267.76 41.42,245.91 22.50,214.07 15.45,179.00 12.58,164.73 12.98,155.23 13.00,141.00 13.03,124.05 20.19,100.38 27.31,85.00 43.12,50.83 76.61,21.29 112.00,8.70 123.67,4.54 135.80,2.27 148.00,0.42 Z',
            scaleX: 120 / 299,
            scaleY: 120 / 299,
            w: 120,
            h: 120,
        },
        {
            name: 'earth',
            url: '{{(resources.Get "/img/journey/earth.png").Permalink}}',
            x: 1380,
            y: 890,
            initX: 1380,
            initY: 890,
            path:'M 200.00,130.00 C 200.00,130.00 223.09,107.97 223.09,107.97 223.09,107.97 229.58,103.65 229.58,103.65 229.58,103.65 244.84,92.58 244.84,92.58 244.84,92.58 257.09,81.63 257.09,81.63 257.09,81.63 267.17,75.61 267.17,75.61 267.17,75.61 277.74,70.76 277.74,70.76 277.74,70.76 282.26,67.17 282.26,67.17 282.26,67.17 304.09,55.17 304.09,55.17 304.09,55.17 311.96,52.05 311.96,52.05 311.96,52.05 318.17,48.74 318.17,48.74 318.17,48.74 326.00,46.01 326.00,46.01 326.00,46.01 335.17,41.76 335.17,41.76 335.17,41.76 347.96,37.62 347.96,37.62 347.96,37.62 354.17,34.80 354.17,34.80 354.17,34.80 376.09,27.45 376.09,27.45 376.09,27.45 393.91,22.82 393.91,22.82 393.91,22.82 403.42,18.67 403.42,18.67 403.42,18.67 416.09,14.83 416.09,14.83 416.09,14.83 444.91,9.75 444.91,9.75 444.91,9.75 450.17,8.22 450.17,8.22 450.17,8.22 498.99,2.95 498.99,2.95 504.97,2.51 502.08,1.02 512.00,0.96 512.00,0.96 525.00,0.96 525.00,0.96 525.00,0.96 536.00,0.00 536.00,0.00 536.00,0.00 553.00,0.00 553.00,0.00 553.00,0.00 565.00,0.96 565.00,0.96 565.00,0.96 580.00,0.96 580.00,0.96 586.70,1.10 585.51,2.33 590.04,3.02 590.04,3.02 598.00,3.02 598.00,3.02 598.00,3.02 612.00,4.83 612.00,4.83 612.00,4.83 629.00,6.18 629.00,6.18 629.00,6.18 645.09,9.75 645.09,9.75 645.09,9.75 671.00,14.68 671.00,14.68 671.00,14.68 677.72,15.43 677.72,15.43 677.72,15.43 696.17,22.62 696.17,22.62 696.17,22.62 712.96,27.04 712.96,27.04 722.71,30.22 732.79,34.55 742.00,39.09 742.00,39.09 762.09,51.33 762.09,51.33 767.45,54.18 769.70,53.62 772.91,55.00 772.91,55.00 778.17,58.18 778.17,58.18 778.17,58.18 785.83,61.49 785.83,61.49 785.83,61.49 795.74,67.11 795.74,67.11 795.74,67.11 801.13,71.47 801.13,71.47 801.13,71.47 807.96,74.55 807.96,74.55 807.96,74.55 820.91,81.31 820.91,81.31 820.91,81.31 826.17,84.95 826.17,84.95 826.17,84.95 832.96,88.38 832.96,88.38 832.96,88.38 840.09,92.86 840.09,92.86 845.81,96.30 847.11,95.41 850.58,96.76 858.72,99.96 866.69,103.68 873.91,108.68 873.91,108.68 893.28,125.52 893.28,125.52 893.28,125.52 900.58,131.24 900.58,131.24 900.58,131.24 917.17,146.52 917.17,146.52 917.17,146.52 931.56,158.30 931.56,158.30 931.56,158.30 942.52,171.83 942.52,171.83 942.52,171.83 953.47,182.59 953.47,182.59 953.47,182.59 957.11,187.58 957.11,187.58 957.11,187.58 968.41,200.75 968.41,200.75 968.41,200.75 972.96,205.24 972.96,205.24 972.96,205.24 983.86,220.83 983.86,220.83 983.86,220.83 997.05,239.83 997.05,239.83 1000.93,245.58 1008.45,255.63 1010.00,262.00 1018.18,262.29 1017.97,264.61 1018.00,272.00 1023.12,273.83 1022.30,277.42 1024.12,281.96 1024.12,281.96 1028.69,291.01 1028.69,291.01 1028.69,291.01 1037.00,308.96 1037.00,308.96 1037.00,308.96 1040.34,315.17 1040.34,315.17 1040.34,315.17 1042.46,322.00 1042.46,322.00 1042.46,322.00 1048.20,334.04 1048.20,334.04 1048.20,334.04 1051.83,344.91 1051.83,344.91 1051.83,344.91 1055.19,352.04 1055.19,352.04 1055.19,352.04 1063.26,375.00 1063.26,375.00 1063.26,375.00 1065.98,386.91 1065.98,386.91 1065.98,386.91 1070.25,396.42 1070.25,396.42 1070.25,396.42 1073.93,409.17 1073.93,409.17 1073.93,409.17 1079.25,435.91 1079.25,435.91 1079.25,435.91 1081.74,444.01 1081.74,444.01 1081.74,444.01 1084.29,463.00 1084.29,463.00 1084.29,463.00 1085.98,473.00 1085.98,473.00 1085.98,473.00 1085.98,480.96 1085.98,480.96 1086.73,485.99 1087.95,483.83 1088.00,492.00 1088.00,492.00 1088.00,496.00 1088.00,496.00 1088.00,496.00 1089.00,510.00 1089.00,510.00 1089.00,510.00 1089.00,576.00 1089.00,576.00 1089.00,576.00 1087.76,597.83 1087.76,597.83 1087.76,597.83 1086.13,604.04 1086.13,604.04 1086.13,604.04 1083.71,629.00 1083.71,629.00 1083.71,629.00 1080.80,646.83 1080.80,646.83 1080.80,646.83 1078.25,657.00 1078.25,657.00 1078.25,657.00 1075.41,673.00 1075.41,673.00 1075.06,675.14 1074.71,678.67 1073.18,680.26 1071.38,682.12 1068.37,681.94 1066.00,682.00 1066.00,693.00 1066.74,704.66 1061.61,714.83 1058.55,720.90 1051.29,728.86 1050.69,730.13 1050.69,730.13 1047.28,740.83 1047.28,740.83 1047.28,740.83 1044.13,747.04 1044.13,747.04 1044.13,747.04 1039.54,759.72 1039.54,759.72 1039.54,759.72 1036.71,765.04 1036.71,765.04 1036.71,765.04 1034.96,772.00 1034.96,772.00 1034.96,772.00 1028.30,786.55 1028.30,786.55 1028.30,786.55 1024.28,790.25 1024.28,790.25 1021.38,793.37 1022.45,794.47 1018.00,796.00 1017.84,799.41 1017.61,802.81 1015.73,805.79 1014.13,808.33 1012.01,809.13 1010.72,812.10 1009.69,814.47 1009.60,819.20 1007.72,822.91 1007.72,822.91 1001.67,832.54 1001.67,832.54 1001.67,832.54 997.64,837.30 997.64,837.30 997.64,837.30 995.04,842.91 995.04,842.91 995.04,842.91 991.12,848.17 991.12,848.17 991.12,848.17 987.86,854.91 987.86,854.91 987.86,854.91 982.75,861.09 982.75,861.09 982.75,861.09 975.58,874.04 975.58,874.04 974.62,876.72 975.23,879.78 973.15,882.74 973.15,882.74 967.71,888.09 967.71,888.09 967.71,888.09 952.78,905.72 952.78,905.72 952.78,905.72 943.32,915.28 943.32,915.28 943.32,915.28 937.48,922.58 937.48,922.58 937.48,922.58 924.42,935.68 924.42,935.68 924.42,935.68 917.17,941.52 917.17,941.52 917.17,941.52 895.15,961.28 895.15,961.28 895.15,961.28 888.24,967.36 888.24,967.36 888.24,967.36 883.74,972.05 883.74,972.05 883.74,972.05 850.08,995.06 850.08,995.06 850.08,995.06 822.83,1012.75 822.83,1012.75 822.83,1012.75 814.13,1016.53 814.13,1016.53 814.13,1016.53 807.87,1021.47 807.87,1021.47 807.87,1021.47 771.83,1039.27 771.83,1039.27 771.83,1039.27 761.04,1043.09 761.04,1043.09 761.04,1043.09 752.96,1047.18 752.96,1047.18 752.96,1047.18 741.09,1050.95 741.09,1050.95 741.09,1050.95 729.00,1055.93 729.00,1055.93 729.00,1055.93 697.17,1065.43 697.17,1065.43 697.17,1065.43 673.91,1073.17 673.91,1073.17 673.91,1073.17 648.00,1077.43 648.00,1077.43 648.00,1077.43 639.83,1079.80 639.83,1079.80 639.83,1079.80 621.00,1082.71 621.00,1082.71 621.00,1082.71 595.04,1085.13 595.04,1085.13 589.42,1085.83 592.66,1086.98 583.00,1087.00 583.00,1087.00 512.00,1087.00 512.00,1087.00 502.08,1086.98 504.92,1085.48 498.99,1084.98 498.99,1084.98 491.00,1084.98 491.00,1084.98 491.00,1084.98 460.00,1081.42 460.00,1081.42 460.00,1081.42 452.04,1080.53 452.04,1080.53 452.04,1080.53 444.91,1078.25 444.91,1078.25 444.91,1078.25 419.04,1073.71 419.04,1073.71 419.04,1073.71 412.83,1071.46 412.83,1071.46 412.83,1071.46 405.17,1069.93 405.17,1069.93 405.17,1069.93 388.99,1064.17 388.99,1064.17 388.99,1064.17 352.17,1053.05 352.17,1053.05 352.17,1053.05 345.96,1050.11 345.96,1050.11 345.96,1050.11 336.09,1046.66 336.09,1046.66 336.09,1046.66 328.96,1043.04 328.96,1043.04 328.96,1043.04 318.17,1039.26 318.17,1039.26 318.17,1039.26 301.83,1031.12 301.83,1031.12 301.83,1031.12 294.04,1027.82 294.04,1027.82 294.04,1027.82 282.26,1020.95 282.26,1020.95 282.26,1020.95 276.87,1016.70 276.87,1016.70 276.87,1016.70 267.28,1012.21 267.28,1012.21 267.28,1012.21 253.83,1003.17 253.83,1003.17 253.83,1003.17 235.28,991.95 235.28,991.95 235.28,991.95 221.91,981.49 221.91,981.49 221.91,981.49 216.28,978.25 216.28,978.25 216.28,978.25 206.43,970.97 206.43,970.97 206.43,970.97 187.28,951.46 187.28,951.46 187.28,951.46 172.96,939.69 172.96,939.69 169.58,937.38 168.49,938.14 164.72,934.76 164.72,934.76 151.76,921.72 151.76,921.72 151.76,921.72 140.68,908.16 140.68,908.16 140.68,908.16 121.27,886.24 121.27,886.24 121.27,886.24 111.68,875.58 111.68,875.58 111.68,875.58 106.55,867.17 106.55,867.17 106.55,867.17 94.53,850.03 94.53,850.03 94.53,850.03 89.79,843.83 89.79,843.83 89.79,843.83 80.77,829.04 80.77,829.04 76.86,822.94 73.14,818.63 72.00,811.00 65.74,809.02 67.05,806.25 64.63,801.17 64.63,801.17 60.90,794.96 60.90,794.96 60.90,794.96 57.65,787.17 57.65,787.17 57.65,787.17 49.53,772.83 49.53,772.83 49.53,772.83 46.25,763.01 46.25,763.01 38.54,745.15 31.47,726.84 26.42,708.00 26.42,708.00 21.81,695.83 21.81,695.83 21.81,695.83 20.22,690.28 20.22,690.28 20.22,690.28 16.07,680.83 16.07,680.83 16.07,680.83 11.04,653.04 11.04,653.04 11.04,653.04 8.44,643.99 8.44,643.99 8.44,643.99 6.29,630.00 6.29,630.00 6.29,630.00 5.49,622.00 5.49,622.00 3.74,613.39 2.02,614.70 2.00,605.00 2.00,605.00 2.00,592.00 2.00,592.00 2.00,592.00 0.00,562.00 0.00,562.00 0.00,562.00 0.00,519.00 0.00,519.00 0.00,519.00 2.24,491.17 2.24,491.17 2.24,491.17 6.39,477.00 6.39,477.00 6.39,477.00 7.43,468.04 7.43,468.04 8.25,464.96 9.88,464.08 10.72,460.91 10.72,460.91 15.33,437.04 15.33,437.04 15.33,437.04 17.73,429.91 17.73,429.91 17.73,429.91 18.30,419.09 18.30,419.09 19.01,416.08 20.75,415.06 21.57,411.96 21.57,411.96 22.24,405.17 22.24,405.17 22.24,405.17 27.40,389.04 27.40,389.04 27.40,389.04 31.30,381.91 31.30,381.91 31.30,381.91 33.04,372.00 33.04,372.00 33.04,372.00 36.38,361.28 36.38,361.28 36.38,361.28 39.91,354.00 39.91,354.00 39.91,354.00 42.66,344.17 42.66,344.17 42.66,344.17 45.34,338.91 45.34,338.91 46.38,336.29 46.36,334.11 48.32,330.04 50.41,325.73 52.75,324.16 53.67,319.00 53.67,319.00 54.37,308.00 54.37,308.00 55.51,301.99 60.69,291.82 63.95,286.58 66.83,281.95 66.35,278.88 72.00,277.00 73.10,267.16 76.99,267.55 80.59,263.73 80.59,263.73 84.48,258.42 84.48,258.42 84.48,258.42 93.14,249.74 93.14,249.74 93.14,249.74 102.45,231.09 102.45,231.09 110.67,218.13 118.14,213.23 128.35,202.78 134.61,196.38 145.92,184.47 154.00,181.00 154.00,181.00 151.00,176.00 151.00,176.00 151.00,176.00 169.00,160.00 169.00,160.00 160.35,165.86 154.24,172.65 146.58,179.41 146.58,179.41 136.72,188.05 136.72,188.05 134.80,190.01 128.55,198.04 125.60,195.92 123.12,194.14 125.77,191.17 127.11,189.73 127.11,189.73 140.15,176.72 140.15,176.72 140.15,176.72 164.07,155.58 164.07,155.58 171.49,149.65 179.94,144.58 186.25,137.42 186.25,137.42 195.72,125.87 195.72,125.87 196.97,124.45 198.77,121.75 200.95,122.03 205.88,122.66 201.24,128.39 200.00,130.00 Z',
            scaleX: 120 / 1089,
            scaleY: 120 / 1087,
            w: 120,
            h: 120,
        },
        {
            name: 'jovian',
            url: '{{(resources.Get "img/quiz2/jovian_planets.png").Permalink}}',
            x: 1611,
            y: 940,
            initX: 1611,
            initY: 940,
            path: 'M 0.00,0.00 C 0.00,0.00 406.00,0.00 406.00,0.00 406.00,0.00 406.00,76.00 406.00,76.00 406.00,76.00 0.00,76.00 0.00,76.00 0.00,76.00 0.00,0.00 0.00,0.00 Z',
            scaleX: 182 / 406,
            scaleY: 34 / 76,
            w: 182,
            h: 34,
        },
        {
            name: 'terrestial',
            url: '{{(resources.Get "img/quiz2/terrestial_planets.png").Permalink}}',
            x: 1545,
            y: 858,
            initX: 1545,
            initY: 858,
            path: 'M 0.00,0.00 C 0.00,0.00 548.00,0.00 548.00,0.00 548.00,0.00 548.00,84.00 548.00,84.00 548.00,84.00 0.00,84.00 0.00,84.00 0.00,84.00 0.00,0.00 0.00,0.00 Z',
            scaleX: 247 / 548,
            scaleY: 38 / 84,
            w: 247,
            h: 38,
        },
    ];


    const clearCanvas = ()=>{
        bg.removeAllItems();
        mid.removeAllItems();
        fg.removeAllItems();
    
        bg.clear();
        mid.clear();
        fg.clear();
    }

    const drawBg=async()=>{
        const canvas = bg;
        canvas.addItem(new CanvasImage(await image.load('{{(resources.Get "/img/quiz2/bg.jpg").Permalink}}'), 0, 0, 1920, 1080));
        canvas.draw();
    }

    const drawTargets = ()=>{
        const ctx = bg.ctx;
        targets.map(t=>{
            switch(t.type) {
                case "arc":
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, t.r, t.start, t.end);
                    ctx.stroke(); 
                break;
                case "rect":
                    ctx.beginPath();
                    ctx.rect(t.x, t.y, t.width, t.height);
                    ctx.stroke(); 
                break;
            }
        })
    }

    const drawDraggables = ()=>{
        const canvas = mid;
        return Promise.all(
            draggables.map((draggable)=>{
                return image.load(draggable.url)
                .then(img=>{
                    const canvasItem = new CanvasImage(img, draggable.x, draggable.y, null, null, draggable.name, draggable.scaleX, draggable.scaleY, draggable.path);
                    canvas.addItem(canvasItem);
                })
                .catch(err => {
                    console.error(err)
                })
            })
        )
        .then(()=>canvas.draw())
    }

    const undrawDraggable =(draggable)=>{
        const item = mid.items.find(item=>item.id == draggable.name);
        mid.removeItem(item);
        mid.clear();
        mid.draw();
    }

    const drawDraggable =(draggable)=>{
        const canvas = mid;
        return image.load(draggable.url)
        .then(img=>{
            const canvasItem = new CanvasImage(img, draggable.x, draggable.y, null, null, draggable.name, draggable.scaleX, draggable.scaleY, draggable.path);
            canvas.addItem(canvasItem);
            canvas.draw();
        })
        .catch(err => {
            console.error(err)
        })
    }

    //#region MAIN
    return new Promise(resolve=>{
        (async()=>{
            await clearCanvas();
            await drawBg();

            await drawTargets();
            await drawDraggables();

            // fg.addEventListener("mousedown", (e)=>{
            //     const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth);
            //     const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight);

            //     const ctx = fg.ctx;

            //     targets.map(t=>{
            //         ctx.beginPath();
            //         if (t.type == "arc") ctx.arc(t.x, t.y, t.r, t.start, t.end);
            //         else if (t.type == "rect") ctx.rect(t.x, t.y, t.width, t.height);

            //         if (ctx.isPointInPath(x,y)) console.log(`Point is in target ${t.name}`);
            //     })

            //     draggables.map(t=>{
            //         ctx.save();
        
            //         ctx.translate(t.x, t.y);
        
            //         const p = new Path2D(t.path);
            //         ctx.scale(t.scaleX, t.scaleY);
        
            //         if (ctx.isPointInPath(p,x,y)) console.log(`Point is in ${t.name}`);
            //         ctx.restore();
            //     })

            // });

            await (()=>{
                let dragging;

                fg.addEventListener("mousedown", (e)=>{
                    const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth);
                    const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight);

                    //#region get clicked item
                    const ctx = fg.ctx;
                    dragging = draggables.find(t=>{
                        let retval = false;

                        ctx.save();
                        ctx.translate(t.x, t.y);
                        const p = new Path2D(t.path);
                        ctx.scale(t.scaleX, t.scaleY);
                        retval = ctx.isPointInPath(p,x,y);
                        ctx.restore();

                        return retval;
                    });
                    //#endregion

                    console.log(dragging)

                    if (dragging) undrawDraggable(dragging);
                });

                fg.addEventListener("mouseup", (e)=>{
                    const x = Math.round(e.offsetX * 1920 / fg.canvas.offsetWidth);
                    const y = Math.round(e.offsetY * 1080 / fg.canvas.offsetHeight);

                    console.log(`mouse up ${x}, ${y}`);

                    if (!dragging) return;

                    const dragged = draggables.find(d=>d.name == dragging.name)
                    dragging = undefined;

                    (async ()=>{
                        //#region get target of draggable
                        const target = targets.find(t=>{
                            const ctx = fg.ctx;
                            ctx.beginPath();
                            if (t.type == "arc") ctx.arc(t.x, t.y, t.r, t.start, t.end);
                            else if (t.type == "rect") ctx.rect(t.x, t.y, t.width, t.height);

                            return ctx.isPointInPath(x,y);
                        })
                        //#endregion

                        //#region is valid target -> move dragged item to target
                        if (target) {
                            //#region position dragged item in its new target location
                            if (target.name == "base") {
                                dragged.x = dragged.initX;
                                dragged.y = dragged.initY;
                            }
                            else if (target.type == "arc") {
                                dragged.x = target.x - (dragged.w/2);
                                dragged.y = target.y - (dragged.h/2);
                            }
                            else {  //target type == "rect"
                                console.log(`x: ${target.x}, y: ${target.y}, w: ${target.w}, h: ${target.h}`)
                                dragged.x = target.x + (target.width/2) - (dragged.w/2);
                                dragged.y = target.y + (target.height/2) - (dragged.h/2);
                            }
                            //#endregion

                            //#region removed current draggable of target, if any
                            if (target.draggable && target.draggable != dragged) {
                                undrawDraggable(target.draggable);

                                //#region move target's draggable to its original location
                                target.draggable.x = target.draggable.initX;
                                target.draggable.y = target.draggable.initY;
                                drawDraggable(target.draggable);
                                //#endregion
                            }
                            //#endregion

                            //#region remove dragged as draggable of its previous target container
                            targets.map(t=>{if (t.draggable == dragged) t.draggable = undefined})
                            target.draggable = dragged;
                            //#endregion
                        }
                        //#endregion

                        drawDraggable(dragged);

                    })();

                })


            })();

        })();
    })
    //#endregion
}