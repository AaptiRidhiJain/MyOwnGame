class Heart{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
            //restitution: 1
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("heart.png");
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

     bounceOff(ob1,ob2){
        if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
          && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
          ob1.velocityX = ob1.velocityX * (-1);
          ob2.velocityX = ob2.velocityX * (-1);
          }
         
         
           if(ob1.y - ob2.y < ob2.height/2 + ob1.height/2
              && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
           ob1.velocityY = ob1.velocityY * (-1);
           ob2.velocityY = ob2.velocityY * (-1);
          }
      }
}

