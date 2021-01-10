class CelestialBody extends CanvasItem {
    constructor(id, img, x, y, w, h) {
        super(img, x, y, w, h);
        this.id = id;
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx){
        switch(this.id) {
            case 'sun':
            case 'mercury':
            case 'venus':
            case 'earth':
            case 'mars':
            case 'jupiter':
            case 'uranus':
            case 'neptune':
                ctx.drawImage(
                    this.img,
                    this.x,
                    this.y,
                    this.w,
                    this.h
                );
            break;
            // case 'saturn':
            //     ctx.drawImage(
            //         this.img, 
            //         this.x - (this.options.radius * 2.36), 
            //         this.y - this.options.radius, 
            //         (this.options.radius * 2.36) * 2, 
            //         this.options.radius * 2
            //     );
            // break;
            // case 'asteroid':
            //     ctx.drawImage(
            //         this.img, 
            //         this.x - (this.options.radius * 1.2), 
            //         this.y - this.options.radius, 
            //         (this.options.radius * 1.2) * 2, 
            //         this.options.radius * 2
            //     );
            // break;
            // case 'comet':
            //     ctx.drawImage(
            //         this.img,
            //         this.x - (this.options.width / 2),
            //         this.y - (this.options.height / 2),
            //         this.options.width,
            //         this.options.height
            //     );
            // break;
        }
    }

    isAt(ctx, x, y){
        switch(this.id) {
            case 'sun':
            case 'mercury':
            case 'venus':
            case 'earth':
            case 'mars':
            case 'jupiter':
            case 'uranus':
            case 'neptune':
                const circ = new Path2D();
                circ.arc(this.x + (this.w / 2), this.y + (this.h / 2), this.w / 2, 0, 2 * Math.PI);
                return ctx.isPointInPath(circ, x, y);
            // break;
            // case 'saturn':
            //     const saturn = new Path2D();
            //     saturn.arc(this.x, this.y, this.options.radius, 0, 2 * Math.PI);
            //     return ctx.isPointInPath(saturn, x, y);
            // break;
            // // case 'asteroid':
            // // break;
            // // case 'comet':
            // // break;
            default:
                return false;
        }
        
    }

}