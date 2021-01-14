class CanvasImage extends CanvasItem {
    constructor(img, x, y, w, h, id) {
        super();
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.id = id;
    }

    // get x() {return this._x;}
    // set x(value) {this._x = value;}

    // draw(ctx){
    //     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // }
}