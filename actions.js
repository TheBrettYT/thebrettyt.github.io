import Textify from 'https://cdn.jsdelivr.net/npm/textify.js/+esm'
import gsap from "https://esm.sh/gsap";

console.log("JavaScript Loaded");

/* Start animation for everything */
setTimeout(() => {
    // new Textify({
    //     el: '.animationstart',
    //     animation: {
    //         stagger: 0.13,
    //         duration: 0.8,
    //         ease: 'expo.Out',
    //         animateProps: {"z":"-100%","opacity":0}
    //     }
    // },gsap)
    
    console.log("Textify initialized");

    const directorys = document.getElementById("otherdirectory").children

    for (let i = 0; i < directorys.length; i++) {
        setTimeout(() => {
            directorys[i].style.opacity = 1
            directorys[i].style.transform = "translateY(0px)"
        }, 300 * i)
    }
}, 800);

setTimeout(() => {
    document.getElementsByClassName('footer')[0].style.transform = "translateY(0px)"
    document.getElementsByClassName('footer')[0].style.opacity = 1
    document.getElementsByTagName('header')[0].style.opacity = 1
}, 700);

// setTimeout(() => {
//     let c = 0;

//     while (c<4) {
//         loop2(c);
//         c++
//     }

//     function loop2(c){
//         setTimeout(function(){
//             document.getElementById(`animation${c + 1}`).style.opacity = 1
//             document.getElementById(`animation${c + 1}`).style.transform = "translateY(0px)"
//         }, 400 * c)
//     }
// }, 1700);