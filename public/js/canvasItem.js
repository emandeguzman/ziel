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

        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        console.log(this.id,this.x,this.y,this.w,this.h);
    }

    isAt(ctx, x, y){return false};
}
