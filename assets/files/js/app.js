
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);


document.addEventListener("DOMContentLoaded",function (event) {

        gsap.registerPlugin(ScrollTrigger);

        // gsap.to(".an-bub", {
        //     scrollTrigger: {
        //         Trigger: "",
        //         toggleActions:"restart resume reverse resume",
        //         scrub: true,
        //         start: "top",
        //         end: 1000,
        //         // markers:true,
        //     },
        //     scale:30,
        //     y:700,
        //     duration: 2,
        // });
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
        // gsap.to(".an-bub-2", {
        //     scrollTrigger: {
        //         Trigger: "",
        //         toggleActions:"restart resume reverse resume",
        //         scrub: true,
        //         start: "1500vh",
        //         end: "2000vh",
        //         markers:true,
        //     },
        //     scale:30,
        //     duration: 2,
        //     // y:,
        // });

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
        gsap.to(".content-ly", {
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
                markers: true,
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

    });