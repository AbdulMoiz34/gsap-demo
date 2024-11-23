const timeline = gsap.timeline();
timeline.from(".logo", {
    y: 20,
    delay: 0.5,
    duration: 1,
    opacity: 0
});
timeline.from(".nav-inner>span", {
    y: -20,
    duration: 1.5,
    opacity: 0,
    stagger: 0.3
});

timeline.from("main>.main-heading", {
    duration: 1,
    y: 30,
    opacity: 0,
    scale: 0.2
});