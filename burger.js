gsap.registerPlugin(ScrollTrigger);

const ContainerBurger = document.querySelector(".ContainerBurger");
const TransitionBurger = document.querySelector(".transitionBurger");
const tl = gsap.timeline();

ContainerBurger.addEventListener("click", () => {
  tl.to(".transitionBurger", {
    x: 0,
  });
});

const ContainerCross = document.querySelector(".ContainerCross");
const tl1 = gsap.timeline();
ContainerCross.addEventListener("click", () => {
  tl1
    .set(".transitionBurger", { display: "none" })
    .to(".transitionBurger", { x: innerWidth });

  function hideElement() {}
});
