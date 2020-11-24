class ground {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        };
        this.x=x
        this.y=y
        this.width=width
        this.height=height 
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)

        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(128,128,128);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}