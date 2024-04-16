const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var temp;
window.addEventListener("mousemove", (dets) => {
    temp = dets.clientY;
    gsap.to(".circle", {
        y: dets.pageY,
        x: dets.pageX,
        translate: '-50% -50%',
        rotate: `${(dets.pageY + dets.pageX) / 5}deg`
    });
});