class Paper{
    constructor(x,y){
        var bounce={
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,20,bounce)
        //ellipseMode(x,y,10,10)
        World.add(world,this.body)
        this.paper=loadImage('paper.png')
    }
    display(){
        //rectMode(CENTER)
        var pos = this.body.position;
        imageMode(CENTER)
        fill("white")
        image(this.paper,pos.x,pos.y,40,40)
    }
}