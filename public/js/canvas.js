class Canvas {
    constructor(canvas, width, height){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.items = [];

        // this.width = this.canvas.parentElement.clientWidth;
        // this.height = this.canvas.parentElement.clientHeight;
        // this.width = 1920;
        // this.height = 1080;
        this.canvas.width = width;
        // this.canvas.height = height;
        this.canvas.height = Math.round(width * 1080 / 1920);
        this.canvas.style.height = this.canvas.height;
        console.log(this.canvas.width, this.canvas.height);
    }

    addItem(item){
        this.items.push(item);
    }

//     getItemAt = (x,y)=>{
//         return this.items.find((item)=>{
//             return item.isAt(this.ctx, x, y);
//         });
//     }

    removeAllItems = ()=>{
        this.items = [];
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    draw(){
        this.clear();
        this.items.map((item)=>{
            item.draw(this.ctx, this.canvas);
        })
    } 

    addEventListener(event, handler, options){
        this.canvas.addEventListener(event, handler, options);
    }
}
