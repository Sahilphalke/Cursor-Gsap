// gsap.to("#box1", {
//   x: 1385,
//   y: 540,
//   duration: 2,
//   delay: 1,
//   TimeRanges: "0.5",
//   backgroundColor: "crimson",
//   rotate: 360,
//   borderRadius: "50%",
//   ease: "bounce",
//   yoyo: true,
//   repeat: -1,
// });

// gsap.to("#box2", {
//   x: -1385,
//   y: 540,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blueviolet",
//   rotate: 360,
//   borderRadius: "50%",
//   ease: "bounce",
//   yoyo: true,
//   repeat: -1,
// });

const tl = gsap.timeline();

tl.from(".header h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from(".nav h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

tl.from(".text h1 , .text p", {
  color: "red",
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 1,
});

gsap.from(".page2 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".page2 #box",
    // markers: true,
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".page3 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".page3 #box",
    // markers: true,
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.to(".page3 h1", {
  transform: "translate(-250%)",
  scrollTrigger: {
    trigger: ".page3",
    markers: true,
    scroller: "body",
    start: "top 0%",
    end: "top -250%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#name h1", {
  x: 600,
  duration: 1,
  scale: 0.5,
  opacity: 0,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#name h1",
    // markers: true,
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

// Animate "Web Development Company" with slide-in from left
gsap.from("#name p", {
  x: -600,
  duration: 1,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#name p",
    // markers: true,
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});
