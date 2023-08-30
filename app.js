

// gsao plugging
gsap.registerPlugin(ScrollTrigger);
const abouta = document.querySelector(".about");
gsap.defaults({ ease: "none", duration: 500000 });
const tl = gsap.timeline();
// About qui apparait sur la droite
  // set les dispaly none des img
  // About
tl.set(".AboutContainer", {display:"block"}) 
  .set(".AboutContainer", {className: "ContainerPresentation"})
  .from(".AboutContainer", { x: innerWidth })
  .to(".me", {opacity:0})
  .to( ".AboutContainer", { x: innerWidth} , "-=1")
  .set(".AboutContainer", {display:"none"}) 
  .to(".me", { display: "none" })
  
  // School


  .set(".schoolimg", {display:"block"})
  .set(".schoolimg", {opacity:0})
  .to(".schoolimg", {opacity:1})
  .set(".schoolContainer", {display:"block"})
  .set(".schoolContainer", {className: "ContainerPresentation"})
  .from(".schoolContainer", { x: innerWidth})
  .to(".schoolimg", {opacity:0})
  .to( ".schoolContainer", { x: innerWidth})
  .set(".schoolContainer", {display:"none"})
  .set(".schoolimg", {display:"none"})

  // Epereinces

  .set(".experienceimg", {display:"block"})
  .set(".experienceimg", {opacity:0})
  .to(".experienceimg", {opacity:1})
  .set(".ExperienceContainer", {display:"block"})
  .set(".ExperienceContainer", {className: "ContainerPresentation"})
  .from(".ExperienceContainer", { x: innerWidth })
  .to(".experienceimg", {opacity:0})
  .to(".ExperienceContainer", { x: innerWidth})
  .set(".ExperienceContainer", {display:"none"})
  .set(".experienceimg", {display:"none"})

  // Projects

  .set(".projectsimg", {display:"block"})
  .set(".projectsimg", {opacity:0})
  .to(".projectsimg", {opacity:1})
  .set(".projectsContainer", {display:"block"})
  .set(".projectsContainer", {className: "ContainerPresentation"})
  .from(".projectsContainer", { x: innerWidth });
  

ScrollTrigger.create({
  animation: tl,
  trigger: ".sectionnavbar",
  start: "top top",
  end: "1000% 10%",
  scrub: true,
  pin: true,
  antticipatePin: 1,
});


