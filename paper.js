class Paper{
constructor(x,y,r){
    var options = {
        isStatic: false,
        restitution:0.3,
        friction:0,
        density:1.2
    };
    this.body=Bodies.circle(x,y,r,options);
    this.x=x;
    this.y=y;
    this.r=10;
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2, options);
    this.image=loadImage("paper.png");
    world.add(world, this.body);
};
display(){
var pos=this.body.postion;
var angle= this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("white");
ellipse(0,0,this.r,this.r);
pop();
}
}