
gsap.registerPlugin(ScrollSmoother) 
ScrollSmoother.create({
  smooth: 1,
  effects: true,
});


document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin) 
gsap.registerPlugin(ScrambleTextPlugin)
    gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(SplitText) 





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
  var rmTit = gsap.timeline({
    scrollTrigger:{
      trigger: '.intro',
      pin:true,
      start:"top top",
      end: "+=1000",
      scrub:true,
      snap:{
        snapTo:  'labels',
        duration:{min:0.2, max: 5},
        delay:0.2,
        ease: 'sine.out'
      }
    }
  })
  
  rmTit.addLabel("rm")
  .to(titles[0],{x:"-120%",delay:0.3})
  .to(titles[1],{x:"100%"},">-25%")
  .to(subtitle,{scale:0,rotation:180,opacity:0})
  
  const leftSlides=document.querySelectorAll(".sezL")
  const leftTitles=document.querySelectorAll(".h1_L")
  const leftP=document.querySelectorAll(".p_L")
  const leftImg=document.querySelectorAll(".img_L")
  console.log(leftSlides) 

  
  function addTimelineLeft(slide, index) {
      const slideLT = gsap.timeline({
        scrollTrigger:{
          trigger: slide,
          pin:true,
          start:"top top",
          end: "+=1000",
          scrub:true,
          snap:{
            snapTo:  'labels',
            duration:{min:0.2, max: 5},
            delay:1,
            ease: 'sine.out'
          }
        }
      }).addLabel("Show")
      .fromTo(leftTitles[index],{x:"-120%"},{x:0})
      .fromTo(leftP[index],{y:"100%"},{y:"0"},">-25%")
      .fromTo(leftImg[index],{x:"120%"},{x:0},">-50%")
  }

  leftSlides.forEach(addTimelineLeft)

  const rightSlides=document.querySelectorAll(".sezR")
  const rightTitles=document.querySelectorAll(".h1_R")
  const rightP=document.querySelectorAll(".p_R")
  const rightImg=document.querySelectorAll(".img_R")
  console.log(leftSlides) 
  
  function addTimelineRight(slide, index) {
      const slideRT = gsap.timeline({
        scrollTrigger:{
          trigger: slide,
          pin:true,
          start:"top top",
          end: "+=1000",
          scrub:true,
          snap:{
            snapTo:  'labels',
            duration:{min:0.2, max: 5},
            delay:1,
            ease: 'sine.out'
          }
        }
      }).addLabel("Show")
      .fromTo(rightTitles[index],{x:"120%"},{x:0})
      .fromTo(rightP[index],{y:"100%"},{y:"0"},">-25%")
      .fromTo(rightImg[index],{x:"-120%"},{x:0},">-50%")
  }

  rightSlides.forEach(addTimelineRight) 
  let danger_title=document.querySelector(".list_container_RIGHT_CONTAINER").querySelectorAll("h2");
  let danger_text=document.querySelector(".sez_list_right").querySelectorAll("p");
  //I'm adding another gsap timeline so I can do stuff with the easing functions
  var expanim=gsap.timeline({defaults: {ease: "expo.out"}})
  // gsap.set(danger_text,{scaleY:"0",x:1920})
  // gsap.set(danger_title,{yPercent:"+40",x:1920,opacity:"1"});
  gsap.set(".square",{scale:0})

  let listTimeline  = gsap.timeline({
    scrollTrigger:{
      trigger: '.sez_list_right',
      pin:true,
      start:"top top",
      end: "+=8000",
      scrub:true,
      snap:{
        snapTo:  'labels',
        duration:{min:0.2, max: 5},
        delay:0.5,
        ease: 'sine.out'
      }
    }
  })
  

  listTimeline.addLabel('square')
    .fromTo(".titleList",{x:"-120%"},{x:0})
    .fromTo('.square',{scale:"0", rotation:"0"},{scale:"0.75",rotation:"45"})
    .fromTo('.list_container_RIGHT_CONTAINER',{opacity:0,paddingTop:"30%",y:"0%"},{opacity:"1",paddingTop:"0"})
    .addLabel("seeSection1")
    .fromTo(danger_title[0],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[0], {text:""},{text:"Malware che danneggiano o rallentano i sistemi.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-20vh"})
    .addLabel("seeSection2")
    .to(danger_text[0],{text:""})
    .to(danger_title[0],{fontsize:"5em",opacity:0.3,color:"#AEAAA6"})
    .fromTo(danger_title[1],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[1], {text:""},{text:"Software maligno che raccoglie informazioni senza autorizzazione.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-40vh"})    
    .addLabel("seeSection3")
    .to(danger_text[1],{text:""})
    .to(danger_title[1],{fontsize:"5em",opacity:0.3,color:"#AEAAA6"})
    .fromTo(danger_title[2],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[2], {text:""},{text:"Attacco su vulnerabilità sconosciute agli sviluppatori.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-60vh"})    
    .addLabel("seeSection4")
    .to(danger_text[2],{text:""})
    .to(danger_title[2],{fontsize:"5em",opacity:0.3,color:"#AEAAA6"})
    .fromTo(danger_title[3],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[3], {text:""},{text:"Attacco che blocca un servizio saturando server o rete con traffico eccessivo.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-80vh"})
    .addLabel("seeSection5")
    .to(danger_text[3],{text:""})
    .to(danger_title[3],{fontsize:"5em",opacity:0.3,color:"#AEAAA6"})
    .fromTo(danger_title[4],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[4], {text:""},{text:"Accesso illecito ai dati, passivo se limitato alla lettura, attivo se comporta modifica.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-100vh"})
    .addLabel("seeSection6")
    .to(danger_text[4],{text:""})
    .to(danger_title[4],{fontsize:"5em",opacity:0.3,color:"#AEAAA6"})
    .fromTo(danger_title[5],{fontSize:"5em",opacity:"0.3",color:"#AEAAA6"},{fontSize:"3em",duration:2,opacity:"1",color:"#F18010"})
    .fromTo(danger_text[5], {text:""},{text:"Attacco effettuato tramite phishing o bruteforce, finalizzato al furto d'identità.",duration:1.5})
    .to('.list_container_RIGHT_CONTAINER',{y:"-120vh"})
    .addLabel("end")
    .to(".square", {scale:0,rotation:0})

    
  

// gsap.to(".square", {
//   scrollTrigger: {
//     trigger: ".square",
//       start: "top bottom-=350",
//       end: "+=300", 
//       scrub: 1
//   },
//   motionPath: [
//     {scale:"0",rotation:"0"},
//     { scale: "0.75", rotation: "45" }
//   ],
//   delay: 0.5,
//   ease: "power4.inOut" 
// });
//
// //once again i have to suffer
// for (let i =0;i<6;i++){
//   gsap.to(danger_title[i], {
//     motionPath: {
//       path: [{x:1920,y:0,opacity:-5},{x: 0,y:0,opacity:1}], // straight down 500px
//
//     },
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: danger_title[i],
//       start: "top bottom-=70",
//       end: "+=800", // 500px of scroll
//       scrub: 0.5
//     }
//   });
//   gsap.to(danger_text[i], {
//     motionPath: {
//       path: [{x:1920,y:0,opacity:-5},{x: 0,y:0,opacity:1}], // straight down 500px
//
//     },
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: danger_text[i],
//       start: "top bottom-=70",
//       end: "+=400", // 500px of scroll
//       scrub: 0.5
//     }
//   });
// }

//Crittografia Simmetrica Moderna
gsap.from(".block1", {
  scrollTrigger: {
    trigger: ".block1",
    start: "top bottom-=150",
    end: "top center-=200",
    scrub:2
  },  x: -700,opacity:0,ease: "power4.out"
});
gsap.from(".block3", {
  scrollTrigger: {
    trigger: ".block3",
    start: "top bottom-=150",
    end: "top center-=200",
    scrub:2
  },  x: -700,opacity:0,ease: "power4.out"
});
gsap.from(".block2", {
  scrollTrigger: {
    trigger: ".block2",
    start: "top bottom-=150",
    end: "top center-=200",
    scrub:2
  },  x: +700,opacity:0,ease: "power4.out"
});
gsap.from(".block4", {
  scrollTrigger: {
    trigger: ".block4",
    start: "top bottom-=150",
    end: "top center-=200",
    scrub:2
  },  x: +700,opacity:0,ease: "power4.out"
});

var split = new SplitText(".animate_title", {type: "chars"});
gsap.from(split.chars, {
scrollTrigger: {
    trigger: ".sezfinal",
    start: "top bottom",
    scrub:false
  },

  duration: 1, 
  y: 100, 
  autoAlpha: 0, 
  stagger: 0.05,
  ease: "power4.inOut" 
});
var split2 = new SplitText(".animatep", { type: "words" });
gsap.from(split2.words, {
scrollTrigger: {
    trigger: ".sezfinal",
    start: "top bottom",
    scrub:false
  },
  duration: 1, 
  x: 300, 
  ease: "power4.inOut",
  autoAlpha: 0, 
  stagger: 0.05,
});


var split3 = new SplitText(".tanim", { type: "lines" });
gsap.from(split3.lines, {
scrollTrigger: {
    trigger: ".tanim",
    start: "top bottom",
    scrub:false
  },
  duration: 2, 
  y: 300, 
  ease: "power4.inOut",
  autoAlpha: 0, 
  stagger: 1,
});



var split4 = new SplitText(".leftanim", { type: "chars" });

gsap.from(split4.chars, {
scrollTrigger: {
    trigger: ".leftanim",
    start: "top bottom",
    scrub:false
  },
  duration: 1, 
  scaleY: 0, 
  ease: "power4.inOut",
  stagger: 0.03,
});

var split5 = new SplitText(".ranim", { type: "chars" });

gsap.from(split5.chars, {
scrollTrigger: {
    trigger: ".ranim",
    start: "top bottom",
    scrub:false
  },
  duration: 1, 
  scaleY: 0, 
  ease: "power4.inOut",
  stagger: 0.03,
});



























 });

window.onscroll = function() {progress()

let crittografia_title= document.querySelector(".sez_center").querySelector("h1");

let done=false;

  crittografia_title.addEventListener("click",function(){
    if (done==false){
    gsap.to(crittografia_title,{scrambleText: "La Crittografia",duration:5})
    done=true;
    console.log(done)
    }
  });



};

function progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").value = scrolled;
}
