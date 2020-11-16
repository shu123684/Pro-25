// class BaseClass{
//     constructor(x,y,width,height){
//         var option={
//             restitution: 0.8,
//             friction: 0.8,
//             density: 1.3,
//         }
//         this.body = Bodies.rectangle(x,y,width,height,option);
//         this.width = width;
//         this.height = height;
//         this.image = loadImage("dustbingreen.png");
//         World.add(world, this.body);
//     }
//     display(){
//         var angle = this.body.position;
//         var pos = this.body.position;
//         push();
//         translate(pos.x, pos.y);
//         rotate(angle);
//         imageMode(CENTER);
//         image(this.image, 0, 0, this.width, this.height)
//         pop();
//     }
// }