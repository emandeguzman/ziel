"use strict";

async function quiz1() {
    const items = [
        {   name: "mercury",
            type: "planet",
            point: {x:547,y:211},
            path: `M 68.00,136.00 C 68.00,136.00 69.00,136.00 69.00,136.00 69.00,136.00 68.00,137.00 68.00,137.00 68.00,137.00 68.00,136.00 68.00,136.00 Z M 542.00,178.00 C 542.58,181.56 544.82,184.64 546.18,188.00 548.49,193.71 551.24,202.90 551.83,209.00 554.59,237.45 535.03,260.95 506.00,261.00 506.00,261.00 69.00,261.00 69.00,261.00 42.95,260.96 28.64,246.37 21.86,222.17 19.34,213.15 20.43,203.67 19.40,201.09 17.54,196.44 13.06,197.07 6.71,187.00 1.94,173.29 1.16,153.53 14.00,143.53 26.06,134.14 44.33,135.01 55.82,144.90 61.41,149.71 63.08,156.05 66.26,157.98 68.29,159.21 71.66,159.00 74.00,159.00 74.00,159.00 351.00,159.00 351.00,159.00 351.00,159.00 505.00,159.00 505.00,159.00 515.10,159.02 522.69,161.09 530.83,167.40 530.83,167.40 537.70,173.25 537.70,173.25 539.59,175.31 539.36,177.01 542.00,178.00 Z`,
            ans: null,
        },
        {   name: "venus",
            type: "planet",
            point: {x:592,y:327},
            path: `M 93.00,271.00 C 93.00,271.00 95.00,271.00 95.00,271.00 95.00,271.00 97.00,276.00 97.00,276.00 97.00,276.00 98.00,272.00 98.00,272.00 98.00,272.00 101.00,272.00 101.00,272.00 101.00,272.00 101.00,275.00 101.00,275.00 111.37,273.14 133.41,274.00 145.00,274.00 145.00,274.00 224.00,274.00 224.00,274.00 224.00,274.00 471.00,274.00 471.00,274.00 471.00,274.00 551.00,274.00 551.00,274.00 561.11,274.02 581.83,279.60 584.00,291.00 589.42,293.87 591.73,300.35 593.41,306.00 596.51,316.40 596.92,329.25 595.83,340.00 595.83,340.00 594.53,348.00 594.53,348.00 594.05,353.48 596.96,358.69 591.61,364.89 586.73,370.55 581.55,369.35 577.00,370.63 565.23,373.93 566.09,376.98 551.00,377.00 551.00,377.00 182.00,377.00 182.00,377.00 182.00,377.00 115.00,377.00 115.00,377.00 93.32,376.90 75.59,362.49 71.75,341.00 69.48,328.32 68.84,331.96 69.00,318.00 69.07,312.15 70.24,306.42 72.45,301.00 75.51,293.50 77.57,294.58 76.00,288.00 76.00,288.00 82.00,286.00 82.00,286.00 78.46,285.38 78.20,285.42 77.00,282.00 77.00,282.00 85.00,284.00 85.00,284.00 85.00,284.00 81.00,276.00 81.00,276.00 81.00,276.00 87.00,279.00 87.00,279.00 87.00,279.00 85.00,274.00 85.00,274.00 85.00,274.00 89.00,273.00 89.00,273.00 89.00,273.00 92.00,279.00 92.00,279.00 92.00,279.00 93.00,271.00 93.00,271.00 Z M 88.00,279.00 C 88.00,279.00 87.00,279.00 87.00,279.00 87.00,279.00 88.00,280.00 88.00,280.00 88.00,280.00 88.00,279.00 88.00,279.00 Z`,
            ans: null,
        },
        {   name: "earth",
            type: "planet",
            point: {x:522,y:448},
            path: `M 14.00,494.00 C 5.70,484.36 1.17,480.74 1.00,467.00 0.81,450.81 2.97,454.47 4.03,447.59 5.19,440.16 4.09,434.03 6.75,426.00 12.52,408.57 28.87,397.03 47.00,397.00 47.00,397.00 416.00,397.00 416.00,397.00 416.00,397.00 484.00,397.00 484.00,397.00 507.42,397.04 525.96,415.57 526.00,439.00 526.00,439.00 526.00,456.00 526.00,456.00 525.96,481.13 505.50,498.88 481.00,499.00 481.00,499.00 266.00,499.00 266.00,499.00 266.00,499.00 270.00,506.00 270.00,506.00 270.00,506.00 259.00,499.00 259.00,499.00 259.00,499.00 259.00,509.00 259.00,509.00 259.00,509.00 256.00,509.00 256.00,509.00 256.00,509.00 255.00,499.00 255.00,499.00 250.88,501.94 249.18,504.95 244.00,505.00 244.00,505.00 249.00,499.00 249.00,499.00 249.00,499.00 127.00,499.00 127.00,499.00 114.48,498.98 116.65,494.55 107.00,489.56 103.36,487.69 97.11,487.00 93.00,487.01 74.64,487.04 76.08,498.97 60.00,498.96 60.00,498.96 45.00,498.96 45.00,498.96 39.17,498.49 40.47,497.81 33.00,497.95 24.61,498.11 23.24,496.37 19.00,496.34 19.00,496.34 0.00,499.00 0.00,499.00 0.00,499.00 0.00,496.00 0.00,496.00 0.00,496.00 14.00,494.00 14.00,494.00 Z`,
            ans: null,
        },
        {   name: "mars",
            type: "planet",
            point: {x:618,y:564},
            path: `M 93.00,486.71 C 101.73,486.92 109.30,489.23 115.83,495.32 120.80,499.96 123.25,506.70 127.10,508.83 129.62,510.21 133.19,510.00 136.00,510.00 136.00,510.00 248.00,510.00 248.00,510.00 248.00,510.00 258.42,509.49 258.42,509.49 258.42,509.49 269.00,510.00 269.00,510.00 269.00,510.00 358.00,510.00 358.00,510.00 358.00,510.00 456.00,510.00 456.00,510.00 456.00,510.00 574.00,510.00 574.00,510.00 596.91,510.04 611.31,521.88 618.85,543.04 621.84,551.45 622.99,551.77 623.00,561.00 623.00,561.00 623.00,572.00 623.00,572.00 622.91,578.83 620.80,585.11 617.38,591.00 608.15,606.95 593.99,613.98 576.00,614.00 576.00,614.00 128.00,614.00 128.00,614.00 111.53,613.97 96.71,606.66 88.44,591.99 86.20,588.00 84.20,582.34 82.61,578.00 80.18,571.34 79.09,571.79 78.76,564.00 78.97,561.28 79.46,555.30 78.76,553.09 76.68,548.78 71.58,548.22 66.10,540.00 57.91,527.69 57.54,511.55 67.30,500.00 70.05,496.75 73.33,493.53 77.00,491.35 82.28,488.22 86.96,487.14 93.00,486.71 Z`,
            ans: null,
        },
        {   name: "jupiter",
            type: "planet",
            point: {x:521,y:671},
            path: `M 16.00,715.00 C 8.58,713.17 2.04,706.59 0.20,699.00 0.20,699.00 0.20,680.00 0.20,680.00 0.12,670.21 2.56,671.96 3.70,666.91 4.73,662.38 2.77,658.44 6.22,648.00 11.66,631.50 26.67,620.03 44.00,619.93 44.00,619.93 168.00,619.93 168.00,619.93 168.00,619.93 214.00,619.93 214.00,619.93 214.00,619.93 224.00,619.93 224.00,619.93 224.00,619.93 233.00,619.93 233.00,619.93 233.00,619.93 411.00,619.93 411.00,619.93 411.00,619.93 485.00,619.93 485.00,619.93 509.75,620.04 525.72,641.52 526.00,665.00 526.00,665.00 526.00,679.00 526.00,679.00 525.92,685.00 524.48,689.51 522.13,695.00 513.98,713.98 497.89,721.97 478.00,722.00 478.00,722.00 267.00,722.00 267.00,722.00 267.00,722.00 270.00,727.00 270.00,727.00 270.00,727.00 259.00,722.00 259.00,722.00 259.00,722.00 258.00,727.00 258.00,727.00 258.00,727.00 256.00,727.00 256.00,727.00 256.00,727.00 255.00,722.00 255.00,722.00 248.83,724.91 250.37,726.76 243.00,727.00 243.00,727.00 247.00,722.00 247.00,722.00 247.00,722.00 145.00,722.00 145.00,722.00 145.00,722.00 136.02,720.40 136.02,720.40 136.02,720.40 128.00,714.00 128.00,714.00 128.00,714.00 127.00,712.00 127.00,712.00 127.00,712.00 128.00,711.00 128.00,711.00 128.00,711.00 115.00,706.76 115.00,706.76 115.00,706.76 100.00,704.00 100.00,704.00 97.32,707.58 90.14,710.09 86.09,712.62 78.09,717.62 82.13,721.93 71.00,722.00 71.00,722.00 29.00,719.91 29.00,719.91 29.00,719.91 20.00,718.34 20.00,718.34 16.87,718.23 11.73,720.99 0.00,721.00 0.00,721.00 0.00,718.00 0.00,718.00 0.00,718.00 16.00,715.00 16.00,715.00 Z M 129.00,712.00 C 129.00,712.00 128.00,712.00 128.00,712.00 128.00,712.00 129.00,713.00 129.00,713.00 129.00,713.00 129.00,712.00 129.00,712.00 Z`,
            ans: null,
        },
        {   name: "saturn",
            type: "planet",
            point: {x:632,y:786},
            path: `M 611.00,733.00 C 611.00,733.00 624.47,746.19 624.47,746.19 628.24,751.75 633.88,765.52 634.96,772.00 634.96,772.00 634.96,785.00 634.96,785.00 635.05,789.02 635.99,793.02 634.96,797.00 632.33,809.12 621.08,821.63 610.00,826.88 602.67,830.36 592.09,831.79 584.00,831.74 584.00,831.74 577.00,831.74 577.00,831.74 577.00,831.74 571.00,831.74 571.00,831.74 571.00,831.74 564.00,831.18 564.00,831.18 564.00,831.18 552.00,832.00 552.00,832.00 552.00,832.00 328.00,832.00 328.00,832.00 328.00,832.00 204.00,832.00 204.00,832.00 204.00,832.00 189.00,831.00 189.00,831.00 189.00,831.00 140.00,831.00 140.00,831.00 123.14,830.97 111.44,822.94 102.32,809.16 100.18,805.94 97.80,802.75 96.64,799.00 96.64,799.00 93.16,784.00 93.16,784.00 92.84,779.99 93.50,774.59 91.69,771.04 89.67,767.10 85.92,765.82 82.30,761.91 76.89,756.07 73.21,748.00 73.01,740.00 72.59,722.51 85.93,706.09 104.00,706.00 108.79,705.98 112.31,705.82 117.00,707.17 125.91,709.74 136.12,718.77 138.00,728.00 138.00,728.00 488.00,728.00 488.00,728.00 488.00,728.00 586.00,728.00 586.00,728.00 586.00,728.00 600.00,729.62 600.00,729.62 600.00,729.62 611.00,733.00 611.00,733.00 Z`,
            ans: null,
        },
        {   name: "uranus",
            type: "planet",
            point: {x:527,y:897},
            path: `M 28.00,846.00 C 28.15,841.83 27.79,840.48 32.00,839.00 32.00,839.00 33.00,843.00 33.00,843.00 33.00,843.00 34.00,839.00 34.00,839.00 34.00,839.00 37.00,839.00 37.00,839.00 39.69,842.96 41.79,841.37 46.00,841.02 46.00,841.02 62.00,841.02 62.00,841.02 62.00,841.02 138.00,841.02 138.00,841.02 138.00,841.02 421.00,841.02 421.00,841.02 421.00,841.02 486.00,841.02 486.00,841.02 494.38,841.01 509.81,844.07 514.00,852.00 520.55,853.26 524.78,861.46 527.16,867.25 531.09,876.83 533.02,888.66 533.00,899.00 533.00,899.00 530.81,919.00 530.81,919.00 531.09,926.34 530.32,933.67 521.99,936.35 521.99,936.35 513.00,937.81 513.00,937.81 513.00,937.81 506.00,941.13 506.00,941.13 499.13,944.11 491.44,944.99 484.00,945.00 484.00,945.00 302.00,945.00 302.00,945.00 302.00,945.00 270.00,945.00 270.00,945.00 270.00,945.00 57.00,945.00 57.00,945.00 50.28,944.99 41.25,944.00 35.00,941.54 22.87,936.75 12.77,926.62 9.04,914.00 9.04,914.00 7.14,904.00 7.14,904.00 5.98,898.08 4.66,890.99 5.09,885.00 5.32,881.77 6.68,874.00 7.76,871.00 10.06,864.56 13.20,861.99 12.00,855.00 12.00,855.00 16.00,853.00 16.00,853.00 16.00,853.00 13.00,852.00 13.00,852.00 13.00,852.00 13.00,850.00 13.00,850.00 13.00,850.00 20.00,850.00 20.00,850.00 17.80,846.76 17.52,846.91 18.00,843.00 18.00,843.00 23.00,846.00 23.00,846.00 23.00,846.00 21.00,841.00 21.00,841.00 21.00,841.00 25.00,840.00 25.00,840.00 25.00,840.00 28.00,846.00 28.00,846.00 Z`,
            ans: null,
        },
        {   name: "neptune",
            type: "planet",
            point: {x:612,y:1012},
            path: `M 110.00,959.07 C 110.00,959.07 155.00,959.07 155.00,959.07 155.00,959.07 241.00,959.07 241.00,959.07 241.00,959.07 504.00,959.07 504.00,959.07 504.00,959.07 550.00,959.07 550.00,959.07 550.00,959.07 572.00,959.07 572.00,959.07 592.03,959.10 609.20,972.00 615.48,991.00 617.53,997.18 617.99,1000.56 618.00,1007.00 618.02,1016.71 618.02,1031.02 614.20,1040.00 613.09,1042.61 610.87,1045.63 609.19,1047.96 599.01,1062.14 585.00,1066.97 568.00,1067.00 568.00,1067.00 356.00,1067.00 356.00,1067.00 356.00,1067.00 339.00,1066.00 339.00,1066.00 339.00,1066.00 167.00,1066.00 167.00,1066.00 167.00,1066.00 156.00,1066.81 156.00,1066.81 156.00,1066.81 147.00,1066.23 147.00,1066.23 147.00,1066.23 136.00,1066.23 136.00,1066.23 136.00,1066.23 131.00,1066.23 131.00,1066.23 131.00,1066.23 119.00,1066.23 119.00,1066.23 119.00,1066.23 101.00,1064.95 101.00,1064.95 97.85,1064.99 95.10,1065.09 92.00,1064.29 89.15,1063.56 84.70,1061.29 82.00,1059.88 73.58,1055.48 64.99,1044.97 65.82,1035.00 65.82,1035.00 65.82,1023.00 65.82,1023.00 66.14,1013.24 69.44,1014.40 70.73,1008.00 71.64,1003.47 69.87,1001.99 73.03,992.00 78.68,974.15 91.67,962.87 110.00,959.07 Z M 155.00,1068.00 C 155.00,1068.00 156.00,1068.00 156.00,1068.00 156.00,1068.00 155.00,1069.00 155.00,1069.00 155.00,1069.00 155.00,1068.00 155.00,1068.00 Z`,
            ans: null,
        },
        {   name: "ans_mercury",
            type: "desc",
            point: {x:1010,y:665},
            path: `M 1833.00,631.00 C 1838.03,631.00 1845.92,630.02 1848.82,635.13 1851.32,639.50 1847.50,650.01 1846.35,655.00 1846.35,655.00 1837.42,689.00 1837.42,689.00 1836.44,693.36 1834.49,704.79 1832.28,707.94 1829.20,712.32 1825.76,711.99 1821.00,712.00 1821.00,712.00 1737.00,712.00 1737.00,712.00 1724.72,711.85 1730.97,708.03 1718.00,708.00 1718.00,708.00 1176.00,708.00 1176.00,708.00 1176.00,708.00 1058.00,708.00 1058.00,708.00 1036.26,707.97 1015.29,693.55 1009.76,672.00 1008.71,667.90 1008.95,661.38 1009.00,657.00 1009.12,646.96 1010.98,643.43 1017.20,635.96 1028.45,622.45 1040.42,617.03 1058.00,617.00 1058.00,617.00 1507.00,617.00 1507.00,617.00 1507.00,617.00 1648.00,617.00 1648.00,617.00 1648.00,617.00 1718.00,617.00 1718.00,617.00 1727.44,616.82 1725.24,612.17 1733.00,610.20 1733.00,610.20 1767.00,610.20 1767.00,610.20 1781.07,610.17 1776.12,616.82 1789.00,617.00 1789.00,617.00 1821.00,617.00 1821.00,617.00 1824.42,617.02 1828.03,616.85 1830.69,619.43 1833.65,622.30 1833.00,627.20 1833.00,631.00 Z`
        },
        {   name: "ans_venus",
            type: "desc",
            point: {x:1020,y:549},
            path: `M 1723.09,497.02 C 1728.98,494.99 1752.31,495.96 1760.00,496.00 1774.19,496.07 1765.78,500.97 1780.00,501.00 1780.00,501.00 1808.00,501.00 1808.00,501.00 1813.36,501.01 1818.14,501.08 1820.40,507.00 1821.28,509.30 1820.72,512.41 1822.31,514.18 1825.00,517.18 1832.76,514.16 1835.82,519.23 1838.37,523.44 1834.33,535.17 1833.13,540.00 1833.13,540.00 1830.26,553.00 1830.26,553.00 1830.26,553.00 1824.37,574.00 1824.37,574.00 1823.30,578.29 1822.44,585.60 1819.57,588.77 1816.34,592.35 1812.38,591.99 1808.00,592.00 1808.00,592.00 1201.00,592.00 1201.00,592.00 1201.00,592.00 1066.00,592.00 1066.00,592.00 1059.77,591.99 1051.83,591.15 1046.00,588.88 1032.84,583.75 1022.23,570.54 1018.76,557.00 1017.65,552.68 1017.95,543.78 1018.00,539.00 1018.10,530.63 1020.18,527.63 1025.01,521.00 1034.89,507.46 1045.23,502.03 1062.00,502.00 1062.00,502.00 1545.00,502.00 1545.00,502.00 1545.00,502.00 1671.00,502.00 1671.00,502.00 1671.00,502.00 1712.00,502.00 1712.00,502.00 1718.54,501.88 1718.14,500.49 1723.09,497.02 Z`
        },
        {   name: "ans_earth",
            type: "desc",
            point: {x:1009,y:226},
            path: `M 1708.00,180.00 C 1709.05,170.91 1713.97,170.04 1722.00,170.00 1722.00,170.00 1750.00,170.00 1750.00,170.00 1765.23,170.19 1757.08,176.97 1772.00,177.00 1772.00,177.00 1803.00,177.00 1803.00,177.00 1814.45,177.02 1816.42,179.94 1815.00,191.00 1820.58,191.00 1828.82,190.02 1831.79,196.05 1833.57,199.68 1829.50,213.64 1828.29,218.00 1828.29,218.00 1819.12,254.00 1819.12,254.00 1818.10,258.54 1817.08,266.35 1813.61,269.49 1810.50,272.31 1805.91,271.99 1802.00,272.00 1802.00,272.00 1720.00,272.00 1720.00,272.00 1720.00,272.00 1705.00,271.00 1705.00,271.00 1705.00,271.00 1437.00,271.00 1437.00,271.00 1437.00,271.00 1280.00,271.00 1280.00,271.00 1271.91,271.14 1275.47,272.98 1265.00,273.00 1265.00,273.00 1137.00,273.00 1137.00,273.00 1128.86,272.88 1132.54,271.02 1122.00,271.00 1122.00,271.00 1092.00,271.00 1092.00,271.00 1092.00,271.00 1075.00,270.00 1075.00,270.00 1065.87,269.99 1048.24,270.53 1040.00,268.12 1035.00,266.66 1032.14,264.58 1028.00,261.58 1014.33,251.67 1008.81,239.61 1009.00,223.00 1009.06,218.38 1009.76,214.40 1011.22,210.00 1012.93,204.83 1016.29,200.02 1019.95,196.04 1032.63,182.27 1045.69,182.03 1063.00,182.00 1063.00,182.00 1080.00,181.00 1080.00,181.00 1080.00,181.00 1470.00,181.00 1470.00,181.00 1470.00,181.00 1647.00,181.00 1647.00,181.00 1647.00,181.00 1662.00,180.00 1662.00,180.00 1662.00,180.00 1708.00,180.00 1708.00,180.00 Z`
        },
        {   name: "ans_mars",
            type: "desc",
            point: {x:1024,y:990},
            path: `M 1834.00,955.00 C 1838.64,955.00 1846.09,954.57 1848.82,959.22 1851.19,963.25 1847.08,974.24 1845.99,979.00 1845.99,979.00 1837.23,1013.00 1837.23,1013.00 1836.12,1017.69 1835.05,1026.33 1831.61,1029.57 1828.65,1032.36 1824.76,1031.99 1821.00,1032.00 1821.00,1032.00 1204.00,1032.00 1204.00,1032.00 1204.00,1032.00 1066.00,1032.00 1066.00,1032.00 1059.84,1031.97 1049.55,1030.54 1044.00,1027.96 1031.74,1022.26 1018.19,1004.87 1018.00,991.00 1018.00,991.00 1018.00,979.00 1018.00,979.00 1018.25,958.83 1038.62,942.03 1058.00,942.00 1058.00,942.00 1512.00,942.00 1512.00,942.00 1512.00,942.00 1654.00,942.00 1654.00,942.00 1654.00,942.00 1725.00,942.00 1725.00,942.00 1733.84,941.83 1731.89,938.90 1738.04,936.23 1741.20,934.85 1744.63,935.01 1748.00,935.17 1748.00,935.17 1776.00,935.17 1776.00,935.17 1783.32,936.80 1782.38,940.85 1793.00,941.00 1793.00,941.00 1821.00,941.00 1821.00,941.00 1824.90,941.05 1828.72,941.17 1831.57,944.28 1834.34,947.30 1833.99,951.21 1834.00,955.00 Z`
        },
        {   name: "ans_jupiter",
            type: "desc",
            point: {x:1023,y:880},
            path: `M 1833.00,850.00 C 1837.18,850.00 1845.42,849.08 1848.07,852.43 1851.65,856.42 1849.04,863.60 1848.07,868.00 1848.07,868.00 1837.88,906.00 1837.88,906.00 1836.54,911.67 1834.94,926.14 1829.89,928.98 1827.73,930.19 1824.44,930.00 1822.00,930.00 1822.00,930.00 1736.00,930.00 1736.00,930.00 1726.05,929.86 1728.36,926.60 1723.79,924.02 1721.62,922.79 1718.45,923.00 1716.00,923.00 1716.00,923.00 1182.00,923.00 1182.00,923.00 1182.00,923.00 1067.00,923.00 1067.00,923.00 1060.03,922.99 1051.40,921.50 1045.00,918.65 1030.51,912.21 1018.19,896.10 1018.00,880.00 1018.00,880.00 1018.00,876.00 1018.00,876.00 1018.12,865.87 1020.40,859.14 1026.37,851.00 1036.22,837.61 1048.68,833.03 1065.00,833.00 1065.00,833.00 1510.00,833.00 1510.00,833.00 1510.00,833.00 1649.00,833.00 1649.00,833.00 1649.00,833.00 1719.00,833.00 1719.00,833.00 1728.84,832.82 1725.44,829.15 1736.00,829.00 1736.00,829.00 1767.00,829.00 1767.00,829.00 1769.44,829.00 1772.72,828.86 1774.99,829.74 1780.65,831.91 1778.47,834.84 1787.00,835.00 1787.00,835.00 1820.00,835.00 1820.00,835.00 1823.62,835.02 1826.87,834.85 1829.77,837.43 1833.55,840.78 1833.00,845.45 1833.00,850.00 Z`
        },
        {   name: "ans_saturn",
            type: "desc",
            point: {x:1020,y:772},
            path: `M 1181.00,721.00 C 1186.62,725.12 1190.33,724.00 1197.00,724.00 1197.00,724.00 1225.00,724.00 1225.00,724.00 1225.00,724.00 1341.00,724.00 1341.00,724.00 1341.00,724.00 1458.00,724.00 1458.00,724.00 1458.00,724.00 1469.00,723.34 1469.00,723.34 1469.00,723.34 1480.00,724.00 1480.00,724.00 1480.00,724.00 1785.00,724.00 1785.00,724.00 1792.09,724.01 1797.35,724.77 1804.00,727.45 1804.00,727.45 1815.00,732.51 1815.00,732.51 1818.96,733.58 1823.33,732.14 1826.77,734.74 1831.17,738.06 1828.93,742.74 1831.60,745.40 1834.75,748.55 1841.89,745.03 1844.40,751.11 1846.22,755.51 1843.51,764.45 1842.37,769.00 1842.37,769.00 1833.47,804.00 1833.47,804.00 1832.65,807.24 1830.86,816.65 1829.26,818.87 1826.08,823.31 1820.84,822.99 1816.00,823.00 1816.00,823.00 1744.00,823.00 1744.00,823.00 1740.64,822.96 1735.02,822.56 1732.13,820.84 1729.13,819.05 1728.77,816.42 1726.59,815.02 1724.65,813.77 1721.27,814.00 1719.00,814.00 1719.00,814.00 1184.00,814.00 1184.00,814.00 1184.00,814.00 1065.00,814.00 1065.00,814.00 1051.30,813.93 1043.70,811.07 1033.00,802.55 1031.02,800.98 1027.00,797.73 1025.56,795.83 1024.48,794.42 1020.09,784.90 1019.47,783.00 1017.47,776.87 1017.93,768.53 1018.00,762.00 1018.11,752.91 1020.21,749.04 1025.81,742.00 1027.84,739.45 1031.75,734.55 1034.17,732.63 1041.44,726.87 1053.89,724.01 1063.00,723.78 1063.00,723.78 1138.00,723.78 1138.00,723.78 1138.00,723.78 1148.00,723.78 1148.00,723.78 1148.00,723.78 1158.00,723.78 1158.00,723.78 1158.00,723.78 1166.00,723.78 1166.00,723.78 1172.00,723.67 1176.18,725.75 1181.00,721.00 Z`
        },
        {   name: "ans_uranus",
            type: "desc",
            point: {x:1010,y:330},
            path: `M 1813.00,299.00 C 1820.47,299.00 1829.57,298.40 1828.52,309.00 1828.52,309.00 1816.74,356.00 1816.74,356.00 1815.63,360.03 1814.10,370.02 1811.57,372.70 1808.27,376.21 1802.44,375.99 1798.00,376.00 1798.00,376.00 1192.00,376.00 1192.00,376.00 1192.00,376.00 1051.00,376.00 1051.00,376.00 1048.29,376.00 1045.66,376.07 1043.00,375.47 1029.59,372.44 1013.75,358.29 1009.94,345.00 1008.56,340.20 1008.94,328.49 1009.00,323.00 1009.11,313.99 1010.98,311.02 1016.42,304.00 1026.17,291.44 1038.18,286.02 1054.00,286.00 1054.00,286.00 1496.00,286.00 1496.00,286.00 1496.00,286.00 1635.00,286.00 1635.00,286.00 1635.00,286.00 1704.00,286.00 1704.00,286.00 1712.46,285.84 1710.40,283.01 1716.01,280.17 1718.75,278.79 1722.01,279.00 1725.00,279.00 1725.00,279.00 1751.00,279.00 1751.00,279.00 1763.51,279.17 1759.20,284.80 1770.00,285.00 1770.00,285.00 1801.00,285.00 1801.00,285.00 1804.94,285.06 1808.69,285.42 1811.43,288.68 1813.55,291.22 1813.00,295.83 1813.00,299.00 Z`
        },
        {   name: "ans_neptune",
            type: "desc",
            point: {x:1010,y:439},
            path: `M 1816.00,406.00 C 1821.78,406.00 1828.71,404.77 1831.81,411.02 1833.43,414.28 1830.40,424.91 1829.49,429.00 1829.49,429.00 1820.47,462.00 1820.47,462.00 1820.47,462.00 1816.44,480.00 1816.44,480.00 1813.78,486.91 1810.54,486.99 1804.00,487.00 1804.00,487.00 1722.00,487.00 1722.00,487.00 1706.36,486.81 1714.38,481.03 1700.00,481.00 1700.00,481.00 1324.00,481.00 1324.00,481.00 1324.00,481.00 1158.00,481.00 1158.00,481.00 1158.00,481.00 1143.00,480.00 1143.00,480.00 1143.00,480.00 1074.00,480.00 1074.00,480.00 1061.23,480.00 1045.96,481.14 1034.00,476.24 1022.74,471.63 1011.70,456.85 1009.23,445.00 1008.82,441.58 1008.96,434.72 1009.23,431.00 1009.26,409.78 1030.29,391.03 1051.00,391.00 1051.00,391.00 1494.00,391.00 1494.00,391.00 1494.00,391.00 1632.00,391.00 1632.00,391.00 1632.00,391.00 1701.00,391.00 1701.00,391.00 1710.30,390.82 1708.92,386.79 1716.00,385.17 1716.00,385.17 1750.00,385.17 1750.00,385.17 1762.24,385.17 1759.40,390.82 1774.00,391.00 1774.00,391.00 1803.00,391.00 1803.00,391.00 1806.80,391.03 1809.61,390.95 1812.61,393.72 1816.30,397.14 1815.99,401.41 1816.00,406.00 Z M 2050.00,708.00`
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

    const intro = async ()=>{
        bg.addItem(new CanvasImage(await image.load('{{(resources.Get "/img/quiz1/TRANSITION LECTURE TO GAME.png").Permalink}}'), 0, 0, 1920, 1080));
        bg.draw();
        await new Promise(resolve=>{
            fg.addEventListener("click", ()=>resolve());
        })
    
        bg.removeAllItems();
        bg.addItem(new CanvasImage(await image.load('{{(resources.Get "/img/quiz1/front wanderers (2).jpg").Permalink}}'), 0, 0, 1920, 1080));
        bg.draw();
        await new Promise(resolve=>{
            fg.addEventListener("click", ()=>resolve());
        })
    }

    const getAnswers = ()=>{
        return new Promise(resolve=>{
            (async()=>{
                const itemOnPoint = (x,y) => {
                    return items.find(item=>{
                        return fg.ctx.isPointInPath(new Path2D(item.path), x, y);
                    })
                }
            
                const drawLines = () => {
                    mid.clear();
                    items.map(item=>{
                        // if (item.type !== "planet") return;
                        if (!item.ans) return;
                        mid.ctx.save();
                        mid.ctx.beginPath();
                        mid.ctx.moveTo(item.point.x, item.point.y);
                        mid.ctx.lineTo(item.ans.point.x, item.ans.point.y);
                        mid.ctx.strokeStyle = strokeStyle;
                        mid.ctx.lineWidth = lineWidth;
                        mid.ctx.stroke(); 
                        mid.ctx.restore();
                    })
                }

                const removeEventListeners = ()=>{
                    fg.removeEventListener("mousemove", onMouseMove);
                    fg.removeEventListener("mouseup", onMouseUp);
                    fg.removeEventListener("mousedown", onMouseDown);            
                }

                const onMouseDown = (evt)=>{
                    console.log("mouse down")
                    sX = Math.round(evt.offsetX * 1920 / fg.canvas.offsetWidth);
                    sY = Math.round(evt.offsetY * 1080 / fg.canvas.offsetHeight);
                    // console.log("mousedown", evt.offsetX, evt.offsetY, sX, sY);

                    startItem = itemOnPoint(sX,sY);
                    console.log(`startItem ${startItem?.name}`);
                }

                const onMouseMove = (evt)=>{
                    console.log("mouse move")
                    if (!startItem) return;

                    // console.log("mousemove", evt.offsetX, evt.offsetY)

                    const eX = Math.round(evt.offsetX * 1920 / fg.canvas.offsetWidth);
                    const eY = Math.round(evt.offsetY * 1080 / fg.canvas.offsetHeight);

                    drawLines();
                    mid.ctx.save()
                    mid.ctx.beginPath();
                    mid.ctx.moveTo(startItem.point.x, startItem.point.y);
                    mid.ctx.lineTo(eX, eY);
                    mid.ctx.strokeStyle = strokeStyle;
                    mid.ctx.lineWidth = lineWidth;
                    mid.ctx.stroke();
                    mid.ctx.restore();
                }

                const onMouseUp = (evt)=>{
                    console.log("mouseup")
                    if (!startItem) return;

                    sX = Math.round(evt.offsetX * 1920 / fg.canvas.offsetWidth);
                    sY = Math.round(evt.offsetY * 1080 / fg.canvas.offsetHeight);

                    const endItem = itemOnPoint(sX,sY);

                    if (endItem === undefined) return;

                    if (startItem.type == endItem.type) return;

                    const planet = startItem.type == "planet" ? startItem : endItem;
                    const desc = startItem.type == "desc" ? startItem : endItem;

                    //#region remove redundant point to desc
                    items.map(item=>{
                        if (item.ans == desc) item.ans = undefined;
                    })
                    //#endregion

                    planet.ans = desc;

                    startItem = undefined;
                    drawLines();

                    //#region check if all are answered
                    const answered = items.filter((item)=>item.type=="planet" && item.ans);
                    if (answered.length == 8) {
                        removeEventListeners();
                        resolve();
                    }
                    //#endregion
                }

                const addEventListeners = ()=>{
                    fg.addEventListener("mousemove", onMouseMove);
                    fg.addEventListener("mouseup", onMouseUp);
                    fg.addEventListener("mousedown", onMouseDown);            
                }


                bg.removeAllItems();
                bg.addItem(
                    new CanvasImage(
                        await image.load('{{(resources.Get "/img/quiz1/1- GAME.jpg").Permalink}}'),
                        0,
                        0,
                        1920,
                        1080
                    )
                );
                bg.draw();

                const strokeStyle = "#FFFFFF";
                const lineWidth = 10;

                let startItem = null;
                let sX, sY;

                addEventListeners();


            })();
        })
    }

    const submitAnswers = ()=>{
        return new Promise(resolve=>{
            console.log("append dialog")
            document.body.appendChild(document.querySelector("#template-dialog").content.cloneNode(true));
            const dialog = document.querySelector("#dialog");
            console.log(dialog);
            dialog.querySelector("#btnYes").addEventListener("click", ()=>{
                dialog.remove();
                resolve(true);
            });
            dialog.querySelector("#btnNo").addEventListener("click", ()=>{
                dialog.remove();
                resolve(false);
            });
        })
    }

    /*
     * MAIN STARTS HERE
     */
    clearCanvas();
    await intro();
    do {
        await getAnswers();
        if (await submitAnswers()) break;
    } while(true);
}

