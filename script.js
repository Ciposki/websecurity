
gsap.registerPlugin(ScrollSmoother) 


ScrollSmoother.create({
  smooth: 1,
  effects: true,
});


document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin) 
gsap.registerPlugin(ScrambleTextPlugin) 



  const titlesResize = document.querySelectorAll('.sez h1')
  titlesResize.forEach(title => (
      fitText(title)
  ))

  let nav = document.querySelector(".nav")
  let titles = document.querySelector(".title").querySelectorAll("h1");
  let subtitle = document.querySelector(".subtitle");
  console.log
  gsap.registerPlugin(ScrollTrigger)
  var startTl = gsap.timeline({defaults: {ease: "expo.out"}})
  

  startTl.fromTo(titles[0],{x:"-120%"},{duration:1,x:0,delay:0.3})
  startTl.fromTo(titles[1],{x:"100%"},{duration:1,x:0},">-0.8")
  startTl.fromTo(nav,{y:"-100%"},{duration:1,y:0},">-0.2")
  startTl.fromTo(subtitle, {opacity:0}, {duration:1.5,opacity:1},">-0.6")

  let danger_title=document.querySelector(".list_container_RIGHT_CONTAINER").querySelectorAll("h2");
  let danger_text=document.querySelector(".sez_list_right").querySelectorAll("p");
  //I'm adding another gsap timeline so I can do stuff with the easing functions
  var expanim=gsap.timeline({defaults: {ease: "expo.out"}})
  gsap.set(danger_text,{scaleY:"0",x:1920})
  gsap.set(danger_title,{yPercent:"+40",x:1920,opacity:"0"});
  gsap.set(".square",{scale:0})


  let opened=[false,false,false,false,false,false];
//Unfortunately this is the fastest way to write this as for loops don't work...
  danger_title[0].addEventListener("click",function(){
    if (opened[0]==false){
    gsap.to(danger_title[0],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[0],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[0]=true;
      }
    else{
      gsap.to(danger_text[0],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[0],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
      opened[0]=false;

    }
  });

  danger_title[1].addEventListener("click",function(){
    if (opened[1]==false){
    gsap.to(danger_title[1],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[1],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[1]=true;
      }
    else{
      gsap.to(danger_text[1],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[1],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
            opened[1]=false;

    }
  });

  danger_title[2].addEventListener("click",function(){
    if (opened[2]==false){
    gsap.to(danger_title[2],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[2],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[2]=true;
      }
    else{
      gsap.to(danger_text[2],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[2],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
            opened[2]=false;

    }
  });


  danger_title[3].addEventListener("click",function(){
    if (opened[3]==false){
    gsap.to(danger_title[3],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[3],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[3]=true;
      }
    else{
      gsap.to(danger_text[3],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[3],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
            opened[3]=false;

    }
  });


  danger_title[4].addEventListener("click",function(){
    if (opened[4]==false){
    gsap.to(danger_title[4],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[4],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[4]=true;
      }
    else{
      gsap.to(danger_text[4],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[4],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
            opened[4]=false;

    }
  });
  
  danger_title[5].addEventListener("click",function(){
    if (opened[5]==false){
    gsap.to(danger_title[5],{yPercent:"0",duration:"0.5",ease: "power4.out"});
    gsap.to(danger_text[5],{scaleY:"1",delay:"0.5",ease: "power4.out"})
      opened[5]=true;
      }
    else{
      gsap.to(danger_text[5],{scaleY:"0",duration:"0.5",ease: "power4.out"})
      gsap.to(danger_title[5],{yPercent:"+40",delay:"0.5",ease: "power4.out"});
        opened[5]=false;

    }
  });
    gsap.to(".square", {
    motionPath: {
      path: [{x: 0, y: 1450}], // straight down 500px

    },
    ease: "sine.in",
    scrollTrigger: {
      trigger: ".square",
      start: "top center+=100",
      end: "+=1450", 
      scrub: 0.6
    }
  });
gsap.to(".square", {
  scrollTrigger: {
    trigger: ".square",
      start: "top bottom-=350",
      end: "+=300", 
      scrub: 1
  },
  motionPath: [
    {scale:"0",rotation:"0"},
    { scale: "0.75", rotation: "45" }
  ],
  delay: 0.5,
  ease: "power4.inOut" 
});

//once again i have to suffer
for (let i =0;i<6;i++){
  gsap.to(danger_title[i], {
    motionPath: {
      path: [{x:1920,y:0,opacity:-5},{x: 0,y:0,opacity:1}], // straight down 500px

    },
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: danger_title[i],
      start: "top bottom-=70",
      end: "+=800", // 500px of scroll
      scrub: 0.5
    }
  });
  gsap.to(danger_text[i], {
    motionPath: {
      path: [{x:1920,y:0,opacity:-5},{x: 0,y:0,opacity:1}], // straight down 500px

    },
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: danger_text[i],
      start: "top bottom-=70",
      end: "+=400", // 500px of scroll
      scrub: 0.5
    }
  });
}


 });

window.onscroll = function() {progress()

let crittografia_title= document.querySelector(".sez_center").querySelectorAll("h1");

let done=false;

ScrollTrigger.create({
  trigger: crittografia_title,
  start: "top bottom-=350",
  end: "+=1", 
  onUpdate: self => {
    if (done==false){
    done=true;
    gsap.to(crittografia_title, {  
  duration: 5, 
  scrambleText: "La Crittografia",
  rightToLeft:"true",
});
    }
    
  }
});










};

function progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").value = scrolled;
}
