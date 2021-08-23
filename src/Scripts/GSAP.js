gsap.registerPlugin(ScrollTrigger);

let timeline1 = gsap.timeline();
timeline1.to(
    ".typeout", { duration: 1, opacity: 0, ease: "power2.out" },
    ".name", { xPercent: -100 }
);
timeline1.to("#Faceimage", { xPercent: -100 });
timeline1.to(".name", { xPercent: 100 });

// timeline1.to("#intro", {
//     x: 200,
//     rotation: 360,
//     duration: 2,
// });

ScrollTrigger.create({
    animation: timeline1,
    trigger: "#splash",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
    pinSpacing: true,
    markers: true,
    toggleActions: "restart reverse reset reset",
});