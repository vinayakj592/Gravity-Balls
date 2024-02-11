const play = document.getElementById("play");
const restart = document.getElementById("restart");
const pause = document.getElementById("pause");
let ball = document.getElementById("ball");
let line = document.getElementById("line");
let positionY = 0 , velocity = 0;
restart.onclick = function(){
    velocity = 0;
    positionY = 0;
    ball.style.transform = "translateY(" + positionY + "px)";
    cancelAnimationFrame(animationId);
}
pause.onclick = function(){
    cancelAnimationFrame(animationId);
}
play.onclick = function (){
    function updateBall() {
        let restitution = Number(document.getElementById("restitution").value);
        let gravity = Number(document.getElementById("gravity").value);
        let drag = Number(document.getElementById("drag").value);
        velocity += (gravity)*0.1;
        if(velocity>0)
            velocity-=velocity*velocity*drag*0.001;
        else
            velocity+=velocity*velocity*drag*0.001;
        if(ball.getBoundingClientRect().bottom+velocity>line.getBoundingClientRect().top)
        {
            ball.style.transform="translateY(" + (line.getBoundingClientRect().top-128) + "px)";
            velocity = -velocity*restitution;
        }
        else{
            positionY += velocity;
            ball.style.transform = "translateY(" + positionY + "px)";
        }
        animationId = requestAnimationFrame(updateBall);
      }
      animationId = requestAnimationFrame(updateBall);
}