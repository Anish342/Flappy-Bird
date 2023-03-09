var hole = document.getElementById("hole");
var game = document.getElementById("game");
var score = 0;
var result = document.getElementById("result");
var text = document.getElementById("text");
var jumping=0;



hole.addEventListener("animationiteration",Ranhole)

function Ranhole(){
    var random = -((Math.random()*400)+150);
    hole.style.top = random+"px";
    score+=1;
}

var fall = setInterval(function(){
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0)
    {
        bird.style.top = (birdtop+4)+"px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var htop = (500+holetop);
   
    if ((birdtop>450) || ((blockleft<50) && (blockleft>-50) && ((birdtop<htop)||(birdtop>htop+100)))){
        result.style.display="block";
        text.innerText = "Your Final Score is: "+score;
        game.style.display='none';
        
    }

},10)

window.addEventListener("keydown",hop)

function hop(){
    jumping=1;
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdtop > 6){
        bird.style.top = (birdtop-60)+'px';      
    }
    setTimeout(function(){
        jumping=0;
    },100)
}