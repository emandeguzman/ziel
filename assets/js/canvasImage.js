class CanvasImage extends CanvasItem {
    constructor(options) {
        super();
        this.options = options;
    }

    draw = (ctx)=>{
        ctx.drawImage(this.options.img, this.options.x, this.options.y, this.options.width, this.options.height);
    }

    isAt = (x,y)=>true;
}