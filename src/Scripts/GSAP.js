gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();
timeline.to(".name", {xPercent: 100, duration: 1, opacity: 0, ease: "power2.inout" });
timeline.to("#Faceimage", { xPercent: -200 , duration: 1, ease: "power1.inOut"});
timeline.to(".typeout", { duration: 1, opacity: 0, ease: "power2.out" });
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