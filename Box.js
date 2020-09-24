class Box {
    constructor(x,y,w,h)
    {
        var options = {
            restitution : 0.8,
            friction : 20.3,
            density : 15.0
        }
        this.body = Bodies.rectangle(x,y,w,h);
        this.width = w;
        this.height = h;

        World.add(world,this.body);
    }

    display()
    {
        fill("blue");
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

};