class CanvasItem {
    // draw(ctx){}
    draw(ctx, canvas){
        // const ht = canvas.height * (1920 / canvas.width);
        // const wt = canvas.width;
        // const ht = canvas.width * 1080 / 1920;
        // console.log(canvas.width, canvas.height);
// 
        // const x = this.x * canvas.width / 1920;
        // // if (this.id == "sun") console.log(this.id, x, this.x, canvas.width, canvas.height)
        // const y = this.y * canvas.height / 1080;
        // if (this.id == "neptune") console.log(this.id, y, this.y, canvas.width, canvas.height)

        // // const w = this.w * canvas.width / 1920;
        // // const h = this.h * canvas.height / 1080;
        // const w = canvas.width * this.w / 1920;
        // const h = canvas.height * this.h / 1080;
        // ctx.drawImage(this.img, x, y, w, h);

        // ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        console.log(this.id,this.x,this.y,this.w,this.h);

        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

        if (this.id == "saturn") {
            ctx.save();

            // ctx.translate(this.x - (this.w/2), this.y - (this.h));
            ctx.translate(this.x, this.y);
            
            const p = new Path2D(`M 163.00,1.21 C 163.00,1.21 198.00,1.21 198.00,1.21 217.30,1.09 250.71,6.90 268.00,15.26 280.65,21.37 295.95,31.48 296.91,47.00 298.20,68.00 271.46,86.00 255.00,94.25 222.51,110.53 187.03,119.31 151.00,123.16 151.00,123.16 129.00,125.00 129.00,125.00 129.00,125.00 98.00,125.00 98.00,125.00 74.96,124.73 38.28,116.93 19.00,104.30 14.85,101.59 11.51,98.85 8.33,95.00 5.40,78.43 3.78,60.68 18.00,48.29 47.47,22.62 96.93,9.88 135.00,4.27 135.00,4.27 152.00,2.17 152.00,2.17 152.00,2.17 163.00,1.21 163.00,1.21 Z M 213.00,78.00 C 224.54,74.72 235.52,58.90 229.55,47.00 226.44,40.82 214.61,34.34 208.00,33.00 208.00,33.00 213.71,55.00 213.71,55.00 213.71,55.00 213.00,78.00 213.00,78.00 Z M 84.08,50.00 C 72.40,53.15 62.85,67.52 69.28,79.00 73.24,86.09 80.23,89.30 88.00,90.00 88.00,90.00 84.08,70.00 84.08,70.00 84.08,70.00 84.08,50.00 84.08,50.00 Z`);

            // ctx.scale(300/298,160/126);
            ctx.scale(.9,.9);

            ctx.fill(p);
            ctx.restore();

        }
        // if (this.id == "sun") console.log(this.id)
        // console.log("canvasItem")
    }

    // isAt(ctx, x, y){return false};

    isAt(ctx, x, y){
        // switch(this.id) {
        //     case 'sun':
        //     case 'mercury':
        //     case 'venus':
        //     case 'earth':
        //     case 'mars':
        //     case 'jupiter':
        //     case 'uranus':
        //     case 'neptune':
        //         const circ = new Path2D();
        //         circ.arc(this.x + (this.w / 2), this.y + (this.h / 2), this.w / 2, 0, 2 * Math.PI);
        //         return ctx.isPointInPath(circ, x, y);
        //     // break;
        //     // case 'saturn':
        //     //     const saturn = new Path2D();
        //     //     saturn.arc(this.x, this.y, this.options.radius, 0, 2 * Math.PI);
        //     //     return ctx.isPointInPath(saturn, x, y);
        //     // break;
        //     // // case 'asteroid':
        //     // // break;
        //     // // case 'comet':
        //     // // break;
        //     default:
        //         return false;
        // }

        let retval = false;
        ctx.save();

        // ctx.translate(this.x - (this.w/2), this.y - (this.h));
        // ctx.translate(this.x, this.y);
        ctx.translate(1050, 765);

        const p = new Path2D(`M 163.00,1.21 C 163.00,1.21 198.00,1.21 198.00,1.21 217.30,1.09 250.71,6.90 268.00,15.26 280.65,21.37 295.95,31.48 296.91,47.00 298.20,68.00 271.46,86.00 255.00,94.25 222.51,110.53 187.03,119.31 151.00,123.16 151.00,123.16 129.00,125.00 129.00,125.00 129.00,125.00 98.00,125.00 98.00,125.00 74.96,124.73 38.28,116.93 19.00,104.30 14.85,101.59 11.51,98.85 8.33,95.00 5.40,78.43 3.78,60.68 18.00,48.29 47.47,22.62 96.93,9.88 135.00,4.27 135.00,4.27 152.00,2.17 152.00,2.17 152.00,2.17 163.00,1.21 163.00,1.21 Z M 213.00,78.00 C 224.54,74.72 235.52,58.90 229.55,47.00 226.44,40.82 214.61,34.34 208.00,33.00 208.00,33.00 213.71,55.00 213.71,55.00 213.71,55.00 213.00,78.00 213.00,78.00 Z M 84.08,50.00 C 72.40,53.15 62.85,67.52 69.28,79.00 73.24,86.09 80.23,89.30 88.00,90.00 88.00,90.00 84.08,70.00 84.08,70.00 84.08,70.00 84.08,50.00 84.08,50.00 Z`);
        ctx.scale(.9,.9);

        retval = ctx.isPointInPath(p, x, y);
        ctx.restore();

        return retval;
    
    }

}
