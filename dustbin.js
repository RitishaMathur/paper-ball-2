class Dustbin{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:0.05,
            restitution:0.5,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    
    rectMode(CENTER);
    fill("black");
    rect(pos.x,pos.y,this.width,this.height);
   
    }
}