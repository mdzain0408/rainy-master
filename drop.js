class drop{
constructor(x,y){
    this.body = Bodies.circle(x,y,5);
this.r = 5;
this.colour = color(13, 50, 232)
World.add(world,this.body)

}


display(){
var pos = this.body.position
    fill(this.colour);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r)
    console.log(pos.y)


}

update(){

if(this.body.position.y>height){

Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,400)})

}

}

}