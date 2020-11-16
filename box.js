class Box{
    constructor(x,y,width,height){
        var option={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        // this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
    // display1(){
    //     var pos = this.body.position;
    //     rectMode(CENTER);
    //     fill("white");
    //     rect(pos.x, pos.y, this.width, this.height);
    // }
}

// class dustbin extends BaseClass{
//     constructor(x,y,width,height){
//         super(x,y,width,height, {isStatic: true,});
//         this.image = loadImage("dustbingreen.png");
//     }
// }