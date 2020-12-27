class CanvasShape extends CanvasItem {
    constructor(type, options) {
        super();
        this.type = type;
        this.options = options;
    }

    draw = (ctx)=>{
        switch(this.type){
            case "rect":
                ctx.save();
                if (this.options.color) {
                    ctx.strokeStyle = this.options.color;
                }
                if (this.options.lineWidth) {
                    ctx.lineWidth = this.options.lineWidth;
                }
                ctx.strokeRect(this.options.x, this.options.y, this.options.width, this.options.height);
                ctx.restore();
        }
    }
}