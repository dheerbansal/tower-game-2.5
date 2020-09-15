class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.1
        
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        //this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed>3){
            World.add(world,this.body)
            tint(255,this.visibility);
           // image(this.image,this.body.position.x,this.body.position.y,50,50);
        }
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill(" yellow");
           rect(0, 0, this.width, this.height);
           // image(this.image,0,0,this.width, this.height)
            pop();
          } 
        
    
}