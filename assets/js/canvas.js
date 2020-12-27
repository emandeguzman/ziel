class Canvas {
    constructor(selector){
        this.canvas = document.querySelector(selector);
        this.ctx = this.canvas.getContext('2d');
        this.items = [];

        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
    }

    addItem = (item)=>{
        this.items.push(item);
    }

    getItemAt = (x,y)=>{
        return this.items.find((item)=>{
            return item.isAt(this.ctx, x, y);
        });
    }

    removeAllItems = ()=>{
        this.items = [];
    }

    clear = ()=>{
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw = ()=>{
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clear();
        this.items.forEach((item)=>{
            item.draw(this.ctx);
        })
    } 
}
