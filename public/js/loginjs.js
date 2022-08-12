const LoginAnimation = ()=>{
    let ball1= document.querySelectorAll(".login-svg-4")[0];
    let ball2=document.querySelectorAll(".login-svg-4")[1];
    let ball3=document.querySelectorAll(".login-svg-4")[2];
    let ball4=document.querySelectorAll(".login-svg-4")[3];
    let le= [0,0,0];
    le[0]=10;
    le[1]=40;
    le[2]=80;
    le[3]=4;
    let inc=[.2,.3,.15,.25]
    let to=[0,0,0,0];
    let rnd=[0,0,0,0];
    let size=[4,5,6,4];
    let animationId1 = requestAnimationFrame(function AnimateBall(){
      if (ball1) {
        to[3]+=inc[3];
        to[0]+=inc[0];
        to[1]+=inc[1];
        to[2]+=inc[2];
        //console.log((Math.floor(Math.random()*4)));
        if(to[0]>125){
          to[0]=0;
          inc[0]=(Math.floor(Math.random()*1.8)+1.5)/10;
          le[0]=(Math.floor(Math.random()*20))+10;
          size[0]=(Math.floor(Math.random()*2))+4
  
        }
        if(to[1]>125){
          to[1]=0;
          inc[1]=(Math.floor(Math.random()*1.8)+1.5)/10;
          le[1]=(Math.floor(Math.random()*30))+40;
          size[1]=(Math.floor(Math.random()*2))+4
        }
        if(to[2]>125){
          to[2]=0;
          inc[2]=(Math.floor(Math.random()*1.8)+1.5)/10;
          le[2]=(Math.floor(Math.random()*10))+80;
          size[2]=(Math.floor(Math.random()*2))+4
  
        }
        if(to[3]>125){
          to[3]=0;
          inc[3]=(Math.floor(Math.random()*1.8)+1.5)/10;
          le[3]=(Math.floor(Math.random()*5));
          size[3]=(Math.floor(Math.random()*2))+4
        }
        ball1.setAttribute("style", `left:${le[0]}%;top:${to[0]}%;width:${size[0]}%;height:${size[0]}%;`);
        ball2.setAttribute("style", `left:${le[1]}%;top:${to[1]}%;width:${size[1]}%;height:${size[1]}%;`);
        ball3.setAttribute("style", `left:${le[2]}%;top:${to[2]}%;width:${size[2]}%;height:${size[2]}%;`);
        ball4.setAttribute("style", `left:-${le[3]}%;top:${to[3]}%;width:${size[3]}%;height:${size[3]}%;`);
        requestAnimationFrame(AnimateBall);
      }
    })
}
  document.addEventListener('DOMContentLoaded',()=>{
    LoginAnimation();
    console.log("dfdfs");
  })