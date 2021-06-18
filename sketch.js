var canvas, backgroundImage;

var invisibleGround

var score=0
var lives=5

var citymap, boystanding, girlstanding,virus,soap,vac1,sanitizer, roaday , roadnight,mask2, hospital,hosback2
var citymap_img, boystanding_img, girlstnading_img,virus_img, soap_img, vac1_img, sanitizer_img , roaday_img , roadnight_img,mask2_img,hospital_img, hosback2_img

function preload(){
citymap_img=loadImage("images/citymap.jpg");
boystanding_img=loadImage("images/boystanding.png");
girlstanding_img=loadImage("images/girlstanding.png");
virus_img=loadImage("images/virus.png")
vac1_img=loadImage("images/vac1.png");
soap_img=loadImage("images/soap.png")
sanitizer_img=loadImage("images/sanitizer.png")
roaday_img=loadImage("images/roaday.jpg")
mask2_img=loadImage("images/mask2.png")
hosback2_img=loadImage("images/hosback2.jpg")
hospital_img=loadImage("images/hospimg.png")

}


function setup() {
  createCanvas(displayWidth-20,displayHeight-150);


  boystanding=createSprite(displayWidth/2 , displayHeight-265)
  boystanding.addImage("boystanding",boystanding_img)
     //if (boystanding.isTouching(virus)) {
      // boystanding.scale=-0.5
  //  } else {
       //boystanding.scale=2
   //  }

 invisibleGround = createSprite(displayWidth-20,displayHeight-150);
invisibleGround.visible = false;
//invisibleGround.velocityY=(6 + 3*score/100);

  if (frameCount%60===0) {
    virus=createSprite(displayWidth/2 , displayHeight/2)
    virus.addImage("virus",virus_img)
    virus.scale=0.05
    //virus.velocityX=2
    virus.velocityY=1
  virus.lifeTime=100
  }
  if (virus.y>height) {
   virus.velocityX=-2
  }  



if (frameCount%80===0) {
  vac1=createSprite(displayWidth/4, displayHeight/1.5)
  vac1.addImage("vac1",vac1_img)
  vac1.scale=0.5

}

if (frameCount%80===0) {
  soap=createSprite(displayWidth/3 , displayHeight/1.5)
  soap.addImage("soap",soap_img)
  soap.scale=0.5
}
 
if (frameCount%80===0) {
  mask2=createSprite(displayWidth/2 , displayHeight/1.5)
  mask2.addImage("mask2",mask2_img)
  mask2.scale=0.5

  if (frameCount%80===0) {
    sanitizer=createSprite(displayWidth/1.5 , displayHeight/1.5)
    sanitizer.addImage("sanitizer",sanitizer_img)
    sanitizer.scale=0.5
}
}
if (frameCount%80===0) {
  hospital=createSprite(displayWidth/1.2 , displayHeight/1.5)
 hospital.addImage("hospital",hospital_img)
 hospital.scale=0.5
}

}

function draw() {
  background(citymap_img)
  textSize(30)
  text("SCORE:"+score,displayWidth-190,displayHeight/9-50)

  textSize(30)
  text("LIVES:5",displayWidth-1500,displayHeight/9-50)
  drawSprites()
  boystanding.display()

if (boystanding.isTouching(soap)) {
score=score+1

}

if (boystanding.isTouching(vac1)) {
score=score+1
  
  }

  if (boystanding.isTouching(mask2)) {
    score=score+1
    
    }
     
    if (boystanding.isTouching(sanitizer)) {
      score=score+1
      
      }
       
   

if (boystanding.isTouching(virus)) {
  lives=lives+1
  
}

//if (boystanding.isTouching(hosback2)) {
  //changeBackground(hosback2_img)
//}
}

function keyPressed(){
  if (keyCode===LEFT_ARROW) {
    boystanding.x=boystanding.x-250
  
}
if (keyCode===RIGHT_ARROW) {
  boystanding.x=boystanding.x+250
}
}