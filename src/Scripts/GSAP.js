gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();
timeline.to(
  ".name",
  {
    xPercent: -50,
    duration: 1,
    ease: "power1.out",
  },
  3
);
timeline.to("#Faceimage", {
  xPercent: -50,
  duration: 1,
  ease: "power1.out",
});
timeline.to("#IntoTXT", {
  xPercent: -50,
  duration: 1,
  ease: "power1.out",
});
// timeline.to(".name", {xPercent: 100});

ScrollTrigger.create({
  animation: timeline,
  trigger: "#splash",
  start: "top top",
  end: "+=200%",
  scrub: 2,
  pin: true,
  pinSpacing: true,
  markers: true,
  toggleActions: "restart reverse reset reset",
});

// if (ScrollTrigger.isTouch === 1) {
//     ScrollTrigger.kill(true, true);
//     };
