document.addEventListener("DOMContentLoaded", (event) => {
  
  let titles = document.querySelector(".title").querySelectorAll("h1");
  let subtitle = document.querySelector(".subtitle");
  let nav = document.querySelector(".nav")
  gsap.registerPlugin(ScrollTrigger)
  var startTl = gsap.timeline({defaults: {ease: "expo.out"}})
  

  startTl.fromTo(titles[0],{x:"-120%"},{duration:1,x:0,delay:0.3})
  startTl.fromTo(titles[1],{x:"100%"},{duration:1,x:0},">-0.8")
  startTl.fromTo(nav,{y:"-100%"},{duration:1,y:0},">-0.2")
  startTl.fromTo(subtitle, {opacity:0}, {duration:1.5,opacity:1},">-0.6")
 });
