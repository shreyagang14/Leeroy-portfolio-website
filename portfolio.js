const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function skewer() {
    var dim = document.querySelector(".slide").getBoundingClientRect();
    var prev = dim.left;

    document.querySelector("#page2-box").addEventListener("scroll", function (dets) {
        var dim2 = document.querySelector(".slide").getBoundingClientRect();
        diff = prev - dim2.left;
        document.querySelectorAll(".slide").forEach(function (allSlide) {
            allSlide.style.transform = `skewX(${diff * 0.5}deg)`
            prev = dim2.left;
        })
    })
}
function slideCircle() {
    document.querySelectorAll(".slide").forEach(function (slide) {
        slide.addEventListener("mousemove", function (dets) {
            var dim = slide.getBoundingClientRect();
        slide.children[1].style.clipPath = `circle(20% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })   
        slide.addEventListener("mouseleave", function (dets) {
            var dim = slide.getBoundingClientRect();
            slide.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })   
    })
}
slideCircle();
skewer();




var tl = gsap.timeline()
tl.from("#nav", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})
tl.from("#top", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})
tl.from("#top-right", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})

tl.from("#circle", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})

tl.from("#home img", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})
tl.from("#bottom", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1
})
tl.from("#page2", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1,
    delay:1
})
tl.from("#page3 #page-left", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1,
    delay:6

})
tl.from("#page3 #page-right1", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1,
    delay:0.5

})
tl.from("#page4", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 1,
    delay:1

})
