class CelestialBody extends CanvasItem {
    constructor(id, img, type, x, y, options) {
        super();
        this.id = id;
        this.type = type;
        this.img = img;
        this.x = x;
        this.y = y;
        this.options = options;
    }

    draw = (ctx)=>{
        switch(this.type) {
            case 'orb':
                ctx.drawImage(
                    this.img,
                    this.x - this.options.radius,
                    this.y - this.options.radius,
                    this.options.radius * 2,
                    this.options.radius * 2
                );
            break;
            case 'saturn':
                ctx.drawImage(
                    this.img, 
                    this.x - (this.options.radius * 2.36), 
                    this.y - this.options.radius, 
                    (this.options.radius * 2.36) * 2, 
                    this.options.radius * 2
                );
            break;
            case 'asteroid':
                ctx.drawImage(
                    this.img, 
                    this.x - (this.options.radius * 1.2), 
                    this.y - this.options.radius, 
                    (this.options.radius * 1.2) * 2, 
                    this.options.radius * 2
                );
            break;
            case 'comet':
                ctx.drawImage(
                    this.img,
                    this.x - (this.options.width / 2),
                    this.y - (this.options.height / 2),
                    this.options.width,
                    this.options.height
                );
            break;
        }
    }

    isAt = (ctx, x, y)=>{
        switch(this.type) {
            case 'orb':
                const orb = new Path2D();
                orb.arc(this.x, this.y, this.options.radius, 0, 2 * Math.PI);
                return ctx.isPointInPath(orb, x, y);
            break;
            case 'saturn':
                const saturn = new Path2D();
                saturn.arc(this.x, this.y, this.options.radius, 0, 2 * Math.PI);
                return ctx.isPointInPath(saturn, x, y);
            break;
            // case 'asteroid':
            // break;
            // case 'comet':
            // break;
            default:
                return false;
        }
        
    }

}