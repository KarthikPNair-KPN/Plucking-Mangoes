class mango {
    constructor(x,y,r){
        var options ={
            isStatic:true,
            restitution:0.2,
            friction:1,
            density:1.2
        };
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image=loadImage("mango.png");

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        pos.x=this.body.position.x
        pos.y=this.body.position.y

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,110,100);
    }
}
