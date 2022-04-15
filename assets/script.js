var nr_of_balls = window.prompt("Introduceti nr. de bile: ");
alert("Introduceti dimensiunea mesei de biliard: ");
var table_width = window.prompt("Latimea: ");
var table_height = window.prompt("Inaltimea: ");
var velocity = window.prompt("Introduceti viteza bilelor(1-5): ");
var diameter = window.prompt("Introduceti diametrul bilelor: ");



var mycanvas =document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");
var w=table_width,h=table_height;
//canvas styles
mycanvas.height=h;
mycanvas.width=w;

//balls array
var ball=[];
//Class for ball
function Ball(x,y,r,c,vx,vy){
  this.x=x; //starting x coordinate
  this.y=y; //starting x coordinate
  this.r=r; //radius  
  this.c=c; //color 
  this.vx=vx; // x direction speed
  this.vy=vy; // y direction speed
  this.update=function(){
        ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fillStyle = this.c;
		ctx.fill();
		ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
        //changing direction on hitting wall
        if(this.y>=(w-10)||this.y<=10){
        this.vy=-this.vy;
         }
        if(this.x>=(h-10)||this.x<=10){
        this.vx=-this.vx;
         }

}
}

//clearing canvas
function clearCanvas(){
ctx.clearRect(0, 0, w, h);
}

var color = ["red","blue","yellow","black",,"orange","pink","white","maroon"];//colors for balls

//adding balls
function addBalls(){
  for(count=0; count<nr_of_balls;count++) {
  var rndColor=Math.floor((Math.random() * 9) + 1); //random color
  var rndX=Math.floor((velocity * 8) + 1);     //random starting velocity
  var rndY=Math.floor((velocity * 8) + 1);     //random starting velocity
  ball[count]= new Ball(Math.floor((Math.random() * 490) + 1),Math.floor((Math.random() * 490)+1),diameter/2,color[rndColor],rndX,rndY);
  }
}


//updating canvas
function update(){
  var i;
  clearCanvas();
  for(i=0;i<count;i++){
  ball[i].update();
}
}

//reload page
function reload(){
  location.reload();
}

setInterval(update, 1000/60);