const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.to(".ContainerLogo", {opacity:1, duration:10} )
    .to(".div1", {x: "50%", duration: 5, ease: "power2.out"})
    .to(".div2", {x: "-50%", duration: 5, ease: "power2.out"})
    .to(".div1", {opacity:0, duration:5})
    .to(".div2", {opacity:0, duration:10})



  