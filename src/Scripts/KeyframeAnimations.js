var supportedFlag = $.keyframe.isSupported();
$.keyframe.define([{
    name: "trapdoor-sequence",
    "0%": { height: "70px" },
    "30%": { height: "10px" },
    "60%": { height: "30px" },
    "100%": { height: "10px" },
}, ]);

$.keyframe.define([{
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
    complete: function() {}, //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
});