function preload(){    
imagee2=loadImage("ironman.png");
imagee3=loadImage("batman (1).png");
imagee4=loadImage("mask.png");
imagee5=loadImage("captainamerica.png");
imaged2=loadImage("spell.png");
imaged3=loadImage("spell2.png");
imaged4=loadImage("spell3.png");
imaged5=loadImage("spell4.png");
imaged6=loadImage("spell5.png");
imagei=loadImage("gif1.gif");
imagei=loadImage("gif2.gif");



}
nosex=0;
nosey=0;
eyex=0;
eyey=0;
next3=0;
rightwristx=0;
leftwristx=0;
rightwristy=0;
difference=0;
next1=0;
next11=0;
function setup(){
canvas=createCanvas(650,650);
canvas.center();
Video=createCapture(VIDEO);
Video.size(600,650)
Video.hide();
posenet=ml5.poseNet(Video,modeloaded);
posenet.on("pose",gotresult);

}
function gotresult(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
eyex=results[0].pose.leftEye.x;
eyey=results[0].pose.leftEye.y;
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
difference=floor(leftwristx-rightwristx);
console.log(difference);

}
}
function modeloaded(){
    console.log("model is loaded");
    
}
function save1(){
save("anyname.png");

}
function draw(){
image(Video,0,0,650,650);
//image(imaged2,rightwristx-05,rightwristx-05,difference);

if(next11==1){
    image(imaged2,rightwristx,rightwristy-250,difference);
    //next1=next1=2;
    console.log("bruh");
}
if (next11==2){
    image(imaged3,rightwristx,rightwristy-250,difference);
   // next1=next1=3;
    console.log(next1);
}
 if(next11==3){
    image(imaged4,rightwristx,rightwristy-250,difference);
   // next1=next1=4;
   console.log(next1);

}
 if(next11==4){
    image(imaged5,rightwristx,rightwristy-250,difference);
    }
 if(next11==5){
        image(imaged6,rightwristx,rightwristy-250,difference);
        }
    




 if(next1==1){
    image(imagee2,nosex-138,nosey-265,320,380);
    //next1=next1=2;
    console.log(next1);
}
if (next1==2){
    image(imagee3,nosex-280,nosey-345,600,460);
   // next1=next1=3;
    console.log(next1);
}
 if(next1==3){
    image(imagee4,nosex-125,nosey-280,290,500);
   console.log(next1);

}
 if(next1==4){
    image(imagee5,nosex-80,nosey-250,240,260);
    }
    


//next1=next1+1;



}
img1=document.getElementById("img1");

function next(){
    next1=next1+1;
if(next1==1){
    img1.src="ironman.png"  ;
  
    console.log(next1);
}
 if(next1==2){
    img1.src="batman (1).png";

   // next1=next1=3;
    console.log(next1);
}
if(next1==3){
    img1.src="mask.png";
   // next1=next1=4;


}
if(next1==4){
    img1.src="captainamerica.png";
    

}
if(next1>4){
    next1=0;
}



}
function next2(){
    next11=next11+1;   
    if(next11==1){
        img2.src="spell.png"  ;
        
        
    }
     if(next11==2){
        img2.src="spell2.png";
       // next1=next1=3;
       
    }
    if(next11==3){
        img2.src="spell3.png";
       // next1=next1=4;
    
    
    }
    if(next11==4){
        img2.src="spell4.png";
        
    
    }
    if(next11==5){
        img2.src="spell5.png";
        
    
    }
    if(next11>5){
        next11=0;
    }
}
 
