class boy {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        };
        this.x=x
        this.y=y
        this.width=width
        this.height=height 
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image=loadImage("boy.png");
    }

    display(){
        var pos = this.body.position
        pos.x = this.body.position.x
        pos.y = this.body.position.y

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
