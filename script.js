/* =========================
   STICKY NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

window.addEventListener(
"load",
revealOnScroll
);

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters(){

    if(countersStarted) return;

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const top =
    statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        countersStarted = true;

        counters.forEach(counter => {

            const target =
            Number(counter.dataset.target);

            let current = 0;

            const increment =
            target / 120;

            const update = () => {

                current += increment;

                if(current < target){

                    counter.textContent =
                    Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    if(target === 4){
                        counter.textContent = "4.9";
                    } else {
                        counter.textContent = target + "+";
                    }

                }

            };

            update();

        });

    }

}

window.addEventListener(
"scroll",
startCounters
);

window.addEventListener(
"load",
startCounters
);

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(!target) return;

e.preventDefault();

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

});

});

/* =========================
   HERO ENTRANCE
========================= */

window.addEventListener(
"load",
() => {

const hero =
document.querySelector(".hero-content");

if(hero){

hero.style.opacity = "0";
hero.style.transform =
"translateY(40px)";

setTimeout(() => {

hero.style.transition =
"all 1.2s ease";

hero.style.opacity = "1";
hero.style.transform =
"translateY(0)";

},150);

}

});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 180;

const sectionHeight =
section.offsetHeight;

if(
pageYOffset >= sectionTop &&
pageYOffset <
sectionTop + sectionHeight
){
current =
section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){
link.classList.add("active");
}

});

}
);

/* =========================
   GLOW PARALLAX
========================= */

const glowBlue =
document.querySelector(
".glow-blue"
);

const glowPurple =
document.querySelector(
".glow-purple"
);

window.addEventListener(
"mousemove",
(e) => {

const x =
e.clientX /
window.innerWidth;

const y =
e.clientY /
window.innerHeight;

if(glowBlue){

glowBlue.style.transform =
`translate(
${x * 40}px,
${y * 40}px
)`;

}

if(glowPurple){

glowPurple.style.transform =
`translate(
${-x * 40}px,
${-y * 40}px
)`;

}

}
);

/* =========================
   CARD TILT EFFECT
========================= */

const cards =
document.querySelectorAll(
".service-card, .price-card, .testimonial-card"
);

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
(y - centerY) / 25;

const rotateY =
(centerX - x) / 25;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

}
);

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
`
perspective(1000px)
rotateX(0)
rotateY(0)
translateY(0)
`;

}
);

});

/* =========================
   FLOATING PARTICLES
========================= */

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add(
"particle"
);

particle.style.left =
Math.random() *
window.innerWidth + "px";

particle.style.width =
Math.random() * 5 + 2 + "px";

particle.style.height =
particle.style.width;

particle.style.opacity =
Math.random();

particle.style.animationDuration =
Math.random() * 10 + 10 + "s";

document.body.appendChild(
particle
);

setTimeout(() => {

particle.remove();

},20000);

}

setInterval(
createParticle,
400
);