// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 700);

    }, 2500);

});

// ===============================
// Typing Animation
// ===============================

new Typed("#typing", {

    strings: [

        "🎂 Wishing You Happiness...",
        "🎉 Have a Wonderful Birthday...",
        "❤️ May All Your Dreams Come True...",
        "🥳 Let's Celebrate..."

    ],

    typeSpeed: 60,
    backSpeed: 35,
    loop: true

});

// ===============================
// Cursor Glow
// ===============================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ===============================
// Hearts Animation
// ===============================

const heartContainer = document.querySelector(".heart-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);

// ===============================
// Confetti
// ===============================

setInterval(() => {

    confetti({

        particleCount: 120,

        spread: 100,

        origin: { y: 0.6 }

    });

}, 5000);

// ===============================
// GSAP Animation
// ===============================

gsap.from(".glass", {

    y: 80,

    opacity: 0,

    duration: 1.5,

    ease: "power3.out"

});

gsap.from(".balloon", {

    y: 300,

    stagger: .15,

    duration: 2

});

// ===============================
// Background Music
// ===============================

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {

    music.play();

}, { once: true });

// ===============================
// Fireworks Effect
// ===============================

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {

    canvas.width = innerWidth;
    canvas.height = innerHeight;

});

let particles = [];

function random(min, max) {

    return Math.random() * (max - min) + min;

}

function firework() {

    let x = random(100, canvas.width - 100);

    let y = random(80, canvas.height / 2);

    for (let i = 0; i < 60; i++) {

        particles.push({

            x,

            y,

            dx: random(-4, 4),

            dy: random(-4, 4),

            life: 100

        });

    }

}

setInterval(firework, 1800);

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        ctx.beginPath();

        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

        ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;

        ctx.fill();

        p.x += p.dx;

        p.y += p.dy;

        p.life--;

        if (p.life <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

// ===============================


// Celebrate Button
// ===============================

document.getElementById("celebrateBtns").addEventListener("click", () => {

    confetti({

        particleCount: 300,

        spread: 180

    });

    gsap.to(".glass", {

        scale: 1.1,

        duration: .5,

        yoyo: true,

        repeat: 1

    });

    setTimeout(() => {
        console.log("Button Clicked")
        window.location.href = "./html/gifts.html";

    }, 1800);

});
