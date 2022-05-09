//idk what this even is lol
var supportedFlag = $.keyframe.isSupported();
$.keyframe.define([
  {
    name: "trapdoor-sequence",
    "0%": { height: "70px" },
    "30%": { height: "10px" },
    "60%": { height: "30px" },
    "100%": { height: "10px" },
  },
]);

$.keyframe.define([
  {
    name: "typewriter",
    "0%": {
      width: "0",
      "border-right": "1px solid ",
    },
    "100%": {
      width: "24em",
      "border-right": "0px",
    },
  },
  {
    name: "blinkTextCursor",
    "0%": { "border-color": "transparent" },
    "50%": { "border-color": "rgba(255, 255, 255, .75)" },
    "100%": { "border-color": "transparent" },
  },
]);

$().playKeyframe({
  name: "trapdoor-sequence", // name of the keyframe you want to bind to the selected element
  duration: "4s", // [optional, default: 0, in ms] how long you want it to last in milliseconds
  timingFunction: "linear", // [optional, default: ease] specifies the speed curve of the animation
  delay: "0s", //[optional, default: 0s]  how long you want to wait before the animation starts
  iterationCount: "infinite", //[optional, default:1]  how many times you want the animation to repeat
  direction: "normal", //[optional, default: 'normal']  which direction you want the frames to flow
  fillMode: "forwards", //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
  complete: function () {}, //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
});

//animation on scroll
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});

//Type.js

var typed = new Typed("#typed", {
  strings: [
    "A Full Stack Developer, A Computer Engineer",
    "A Full Stack Developer, A Computer Scientist",
    "A Full Stack Developer, A Web Developer",
    "A  <i>Visionary</i> and A <i>Leader</i> in the field of <br>Computer Science.^1000",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  smartBackspace: true,
  backDelay: 10,

  onComplete: function (self) {
    //remove the cursor
    $(".typed-cursor").remove();
  },
});
