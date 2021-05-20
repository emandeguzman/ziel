"use strict";

class Image {
    constructor(){
        this.images = [];
    }

    load(imgurl){
        return new Promise(resolve => {
            const found = this.images.find(img=>img.src == imgurl);
            if (found) {
                (function f(){
                    if (found.getAttribute("data-status") == "loaded") resolve(found);
                    else setTimeout(f, 100);
                })();
            }
            else {
                // console.log(`loading ${imgurl}`);
                const img = document.createElement("IMG");
                img.setAttribute("status", "not-loaded");
                // document.body.appendChild(img);
                // img.style.display = "none";
                img.addEventListener(
                    "load", 
                    ()=>{
                        // console.log('LOADED ', imgurl, img.width);
                        img.setAttribute("data-status", "loaded");
                        resolve(img);
                    },
                    {once: true}
                );
                img.src = imgurl;
                this.images.push(img);
            }
        })
    }    
}
