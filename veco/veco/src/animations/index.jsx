import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const load= gsap.timeline({
    paused:"true"
});


// Preloader Animation
export const preLoaderAnim = () => {
    load.to("#percent , #bar", {
        duration: .2,
        opacity: 0,
        zIndex: -1
    })
    load.to(".progress",{
        duration: .8,
        width: "0%"
    })
    load.from(".content", {
        duration: .8,
        opacity: 0,
        ease: "Power4.out"
    }, "-=.5")
    load.from(".content h1", {
        duration: .5,
        y: 50,
        skewY: 10,
        opacity: 0
    },"-=1")
    
    var id, width = 1;
    function loading(){
        id = setInterval(frame, 25);
    }
    function frame(){
        if(width>=100){
            clearInterval(id)
            load.play();
        }
        else{
            width++;
            document.getElementById("barconfirm").style.width = width + '%';
            document.getElementById("percent").innerHTML = width + '%';
        }
    }
    window.onload = function(){
        loading();
    }
};

// export const openMenu = () => {
//   const tl = gsap.timeline();
//   tl.to("body", {
//     duration: 0.1,
//     css: { overflowY: "hidden" },
//     ease: "power3.out",
//   })
//     .to(".hamburger-menu", {
//       duration: 0.1,
//       css: { display: "block" },
//     })
//     .to(".header-item", {
//       duration: 0.1,
//       css: { background: "none" },
//     })
//     .to(".cls-1", {
//       duration: 0.1,
//       delay: 0.3,
//       css: { fill: "#ffffff" },
//     })
//     .to(
//       [".nav-secondary", ".nav-primary"],
//       {
//         duration: 0.8,
//         height: "100%",
//         transformOrigin: "right top",
//         stagger: {
//           amount: 0.1,
//         },
//         ease: "power3.inOut",
//       },
//       "-=.5"
//     )
//     .from(
//       ".nav-link",
//       {
//         duration: 0.5,
//         x: -80,
//         opacity: 0,
//         stagger: {
//           amount: 0.5,
//         },
//         ease: "Power3.in",
//       },
//       "-=.3"
//     );

//   // change cursor color when nav is open
//   // tl.to(".cursor", {
//   //   delay: -1,
//   //   css: { className: "+=cursor-active" },
//   // }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
// };

// export const closeMenu = () => {
//   const tl = gsap.timeline();
//   tl.to("body", {
//     duration: 0.05,
//     css: { overflowY: "scroll" },
//     ease: "power3.inOut",
//   })
//     .to([".nav-primary", ".nav-secondary"], {
//       duration: 0.8,
//       height: "0",
//       transformOrigin: "right top",
//       stagger: {
//         amount: 0.1,
//       },
//       ease: "power3.inOut",
//     })
//     .to(".cls-1", {
//       duration: 0.1,
//       delay: -0.3,
//       css: { fill: "#08e7f3" },
//     })
//     .to(".header-item", {
//       duration: 0.5,
//       css: { background: "rgba(11,11,15,.8)" },
//     })
//     .to(".hamburger-menu", {
//       duration: 0.05,
//       css: { display: "none" },
//     });

//   // tl.to(".cursor-active", {
//   //   css: { className: "+=cursor" },
//   // }).to(".cursor2-active", { css: { className: "+=cursor2" } });
// };

// // recurrent animations
// export const fadeUp = (el, delay = 0) => {
//   tl.from(el, {
//     y: 150,
//     duration: 1,
//     delay,
//     opacity: 0,
//     ease: "power3.Out",
//   });
// };

// export const mobileLanding = () => {
//   window.innerWidth < 763 &&
//     tl.from(".landing__main2", {
//       duration: 1,
//       delay: 0,
//       opacity: 0,
//       y: 80,
//       ease: "expo.easeOut",
//     });
// };

// const animateShapes = () => {
//   const infiniteTl = gsap.timeline({
//     repeat: -1,
//   });
//   infiniteTl
//     .to(".shapes .shape", {
//       duration: 4,
//       rotate: 360,
//       delay: -1,
//       ease: "power3.easeInOut",
//       stagger: 2,
//     })
//     .to(".shapes .shape-3", {
//       duration: 1,
//       rotate: 360,
//       delay: -2,
//       ease: "power3.easeInOut",
//     })
//     .to(".shapes .shape", {
//       duration: 3,
//       rotate: 0,
//       ease: "power3.easeInOut",
//       stagger: 1,
//     })
//     .to(".shapes .shape", {
//       duration: 1,
//       opacity: 0,
//       delay: -1,
//       ease: "power3.easeInOut",
//       stagger: 1,
//     })
//     .to(".shapes .shape", {
//       duration: 1.5,
//       opacity: 1,
//       ease: "power3.easeInOut",
//       stagger: 1,
//     });
// };

// const animateMainShape = () => {
//   const infiniteTl = gsap.timeline({
//     repeat: -1,
//   });
//   infiniteTl
//     .to(".shapes .main-circle", {
//       duration: 6,
//       x: -30,
//       y: -50,
//       ease: "expo.easeOut",
//     })
//     .to(".shapes .main-circle", {
//       duration: 6,
//       x: -30,
//       y: 50,
//       ease: "expo.easeOut",
//     })
//     .to(".shapes .main-circle", {
//       duration: 4,
//       x: 0,
//       y: 0,
//       ease: "expo.easeOut",
//     });
// };

// export const boxHover = (e) => {
//   const tl = gsap.timeline();
//   window.innerWidth >= 986 &&
//     tl
//       .to(e.target.querySelector(".link"), {
//         duration: 0,
//         opacity: 1,
//       })
//       .from(e.target.querySelectorAll(".box-anim"), {
//         duration: 0.3,
//         opacity: 0,
//         y: 30,
//         stagger: 0.1,
//         ease: "Power3.easeOut",
//       });
// };

// export const boxExit = (e) => {
//   window.innerWidth >= 986 &&
//     gsap.to(e.target.querySelector(".link"), {
//       duration: 0,
//       opacity: 0,
//     });
// };

// export const fadeIn = (el) => {
//   gsap.to(el, {
//     duration: 2,
//     opacity: 1,
//     y: -60,
//     ease: "power4.out",
//   });
// };

// export const fadeOut = (el) => {
//   gsap.to(el, {
//     duration: 1,
//     opacity: 0,
//     y: -20,
//     ease: "power4.out",
//   });
// };