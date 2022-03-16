
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);


document.addEventListener("DOMContentLoaded",function (event) {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".bub-fill", {
            scrollTrigger: {
                Trigger: "",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: "top",
                end: 1000,
            },
            fill: 'rgba(106, 76, 144, 1)'
        });
        gsap.to(".img-1", {
            scrollTrigger: {
                Trigger: "",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: 0,
                end: 1000,
            },
            x:1000,
        });
        gsap.to(".p-layout-animation", {
            scrollTrigger: {
                Trigger: "",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: 0,
                end: 1000,
            },
            x:-1000,
        });

        let fadeInTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".an-bub",
                start: "center 80%",
                end: "center 50%",
                toggleActions: "play reverse restart reverse",
                scrub: 0.4,
            },
        });
        
        let fadeOutTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".an-bub",
                start: 1080,
                end: 2200,
                toggleActions: "play reverse restart reverse",
                scrub: true,
            },
        });
        
        fadeInTimeline
            .fromTo(
                ".an-bub",
                { y: 0,},
                { y: 800,scale:30,}
            );
        
        fadeOutTimeline
            .fromTo(
                ".an-bub",
                { y:0},
                { y:2000,scale:0,},
            );
        
            let section2in = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-2",
                    start: 1500,
                    end: 2000,
                    toggleActions: "play reverse restart reverse",
                    scrub: true,
                },
            });
            section2in
                .fromTo(
                    ".section-2",
                    { y: 0,},
                    { width: 1920,left:0,height:1000,}
                );



            let section3in = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-3",
                    start: 2500,
                    end: 3000,
                    toggleActions: "play reverse restart reverse",
                    scrub: true,
                },
            });
            section3in
                .fromTo(
                    ".section-3",
                    { y: 0,},
                    { rotate:360,x:1920,}
                );
        gsap.to(".section-4", {
            scrollTrigger: {
                Trigger: "",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: 3500,
                end: 4000,
            },
            backgroundColor:'rgba(41, 72, 121, 1)',
        });
        gsap.to(".section-5", {
            scrollTrigger: {
                Trigger: "",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: 4500,
                end: 5000,
            },
            backgroundColor:'rgba(68, 149, 71, 1)',
        });
    });