class umbrella{
constructor(x,y)
{

this.body = Bodies.circle(x,y,0,{isStatic:true});
this.radius = 100;
this.image = loadImage("images/Walking/walking_8.png")
World.add(world,this.body)

}

display(){
var pos = this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,400,450)

}

}