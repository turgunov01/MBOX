/*!
 * SnowFlakes Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- https://codepen.io/tholman/full/oYJQZx
 */

// (function snowflakeCursor() {

//     var possibleEmoji = ["🎧", "🎤", "🎬"]
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     var cursor = {
//         x: width / 2,
//         y: width / 2
//     };
//     var particles = [];

//     function init() {
//         bindEvents();
//         loop();
//     }

//     // Bind events that are needed
//     function bindEvents() {
//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('touchmove', onTouchMove);
//         document.addEventListener('touchstart', onTouchMove);

//         window.addEventListener('resize', onWindowResize);
//     }

//     function onWindowResize(e) {
//         width = window.innerWidth;
//         height = window.innerHeight;
//     }

//     function onTouchMove(e) {
//         if (e.touches.length > 0) {
//             for (var i = 0; i < e.touches.length; i++) {
//                 addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
//             }
//         }
//     }

//     function onMouseMove(e) {
//         cursor.x = e.clientX;
//         cursor.y = e.clientY;

//         addParticle(cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
//     }

//     function addParticle(x, y, character) {
//         var particle = new Particle();
//         particle.init(x, y, character);
//         particles.push(particle);
//     }

//     function updateParticles() {

//         // Updated
//         for (var i = 0; i < particles.length; i++) {
//             particles[i].update();
//         }

//         // Remove dead particles
//         for (var i = particles.length - 1; i >= 0; i--) {
//             if (particles[i].lifeSpan < 0) {
//                 particles[i].die();
//                 particles.splice(i, 1);
//             }
//         }

//     }

//     function loop() {
//         requestAnimationFrame(loop);
//         updateParticles();
//     }

//     /**
//      * Particles
//      */

//     function Particle() {

//         this.initialStyles = {
//             "position": "absolute",
//             "display": "block",
//             "pointerEvents": "none",
//             "z-index": "10000000",
//             "fontSize": "16px",
//             "will-change": "transform"
//         };

//         // Init, and set properties
//         this.init = function (x, y, character) {

//             this.velocity = {
//                 x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
//                 y: (1 + Math.random())
//             };

//             this.lifeSpan = 120 + Math.floor(Math.random() * 60); //ms

//             this.position = {
//                 x: x - 20,
//                 y: y - 20
//             };

//             this.element = document.createElement('span');
//             this.element.innerHTML = character;
//             applyProperties(this.element, this.initialStyles);
//             this.update();

//             document.body.appendChild(this.element);
//         };

//         this.update = function () {
//             this.position.x += this.velocity.x;
//             this.position.y += this.velocity.y;

//             this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75;
//             this.velocity.y -= Math.random() / 400;

//             this.lifeSpan--;

//             this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 180) + ") rotate(" +
//                 (2 * this.lifeSpan) + "deg)";

//         }


//         this.die = function () {
//             this.element.parentNode.removeChild(this.element);
//         }

//     }

//     /**
//      * Utils
//      */

//     // Applies css `properties` to an element.
//     function applyProperties(target, properties) {
//         for (var key in properties) {
//             target.style[key] = properties[key];
//         }
//     }

//     init();
// })();



// var main = document.querySelector(".wrapper");
// //main.insertAdjacentHTML( 'beforeend', 'content' );

// var lineCount = 40;
// var minCharCount = 20;
// var maxCharCount = 40;
// var topPos = (maxCharCount - 1) / 2 * 10;
// var mainWidth = main.offsetWidth;
// var mainHeight = main.offsetHeight;

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function getLineChar(length) {
//     var result = "";
//     var characters = "01";
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// function animate(index, charCount, opacity, potition, tick) {
//     var elem = document.querySelector("#line" + index);
//     var pos = -mainHeight;
//     var id = setInterval(frame, random(1, 10));
//     var lineChar = getLineChar(charCount);
//     var id2 = setInterval(function () {
//         var lineChar2 = getLineChar(charCount);
//         var textWidth = getTextWidth(lineChar2, "bold 16px Consolas");
//         elem.querySelector("span").innerHTML = lineChar2;
//         elem.querySelector("div").style.width = textWidth + "px";
//     }, tick);

//     function frame() {
//         var textWidth = getTextWidth(lineChar, "bold 16px Consolas");
//         if (pos == mainHeight + topPos) {
//             clearInterval(id);
//             clearInterval(id2);
//             elem.style.top = -mainHeight + "px";
//             animate(index, charCount, opacity, potition, tick);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//         }
//     }
// }

// function generateLine(index, charCount, opacity, potition, tick) {
//     var html = "";
//     html += `<div class="lines" `;
//     html += `style="opacity:0.${opacity}; `;
//     html += `left:${position}px; `;
//     html += `top:-${topPos}px;" `;
//     html += `id="line${index}">`;
//     html += `<div>⠀</div>`;
//     html += `<span>${getLineChar(charCount)}<span>`;
//     html += `</div>`;
//     setTimeout(function () {
//         main.insertAdjacentHTML("beforeend", html);
//         animate(index, charCount, opacity, potition, tick);
//     }, tick + index * 100);
// }

// for (i = 0; i < lineCount; i++) {
//     var index = i;
//     var charCount = random(minCharCount, maxCharCount);
//     var opacity = random(6, 9);
//     var position = random(0, mainWidth);
//     var tick = random(300, 500);

//     generateLine(index, charCount, opacity, position, tick);
// }

// function getTextWidth(text, font) {
//     // re-use canvas object for better performance
//     var canvas =
//         getTextWidth.canvas ||
//         (getTextWidth.canvas = document.createElement("canvas"));
//     var context = canvas.getContext("2d");
//     context.font = font;
//     var metrics = context.measureText(text);
//     return metrics.width;
// }

// console.log(getTextWidth("hello there!", "bold 12px arial"));





















var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        500: {
            slidesPerGroup: 2,
            slidesPerView: 3
        },
        800: {

        },
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    slidesPerGroup: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerGroup: 3,
            loop: true,
            slidesPerView: 2,
        },
        600: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            loop: false
        },
    }
});
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 6,
    slidesPerGroup: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerGroup: 2,
            spaceBetween: 20,
            slidesPerView: 2,
        },
        600: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
    }
});


let logo = document.querySelector('.click-logo')
let aside = document.querySelector('.aside')
let asideLink = document.querySelectorAll('.aside__link')


logo.addEventListener('click', function () {
    console.log('Success')
    aside.style.transform = 'translateY(0)'
})

