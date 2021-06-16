class Paper {

    constructor(x, y, r) {
     
       var options = {
           isStatic:false,
           resistution:0.3,
           friction:0,
           density:1.2

       }
        
     this.x = 50;
     this.y = 100;
     this.r = 5;
     World.add(world, this.body);

    };
    display(){
        var pos = this.body.position;
        Push();
        Pop();
    }
}