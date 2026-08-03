// ===============================
// Elements
// ===============================

const gifts = document.querySelectorAll(".gift");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const shareBox = document.getElementById("shareBox");
const shareBtn = document.getElementById("shareBtn");
const giftMusic = document.getElementById("giftMusic");
const giftContent = document.getElementById("giftContent");

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

// ===============================
// Gift Data
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 700);

    }, 2500);

});


const giftData = [

    {
        title: "🎉 Surprise 1",
        image: "/assets/images/gift1.jpg",
        message: "❤️ Happy Birthday! Stay Happy Always ❤️"
    },

    {
        title: "🎂 Surprise 2",
        image: "../assets/images/gift2.jpg",
        message: "🎈 May Your Dreams Come True!"
    },

    {
        title: "🎁 Surprise 3",
        image: "../assets/images/gift3.jpg",
        message: "🥳 Enjoy Your Special Day!"
    },

    {
        title: "🌹 Surprise 4",
        image: "../assets/images/gift4.jpg",
        message: "🌹 Lots of Love & Happiness!"
    },

    {
        title: "💖 Surprise 5",
        image: "../assets/images/gift5.jpg",
        message: "❤️ Keep Smiling Forever!"
    },

    {
        title: "✨ Surprise 6",
        image: "../assets/images/gift6.jpg",
        message: "✨ Best Wishes!"
    },

    {
        title: "🎊 Surprise 7",
        image: "./assets/images/gift7.jpg",
        message: "🎊 Celebrate Every Moment!"
    },

    {
        title: "🎈 Surprise 8",
        image: "../assets/images/gift8.jpg",
        message: "🎈 Have Fun!"
    },

    {
        title: "🎉 Surprise 9",
        image: "../assets/images/gift9.jpg",
        message: "💝 You Are Amazing!"
    },

    {
        title: "👑 Surprise 10",
        image: "../assets/images/gift10.jpg",
        message: "👑 Happy Birthday Superstar!"
    }

];

// ===============================
// Popup
// ===============================

gifts.forEach((gift, index) => {

    gift.addEventListener("click", () => {

        popup.style.display = "flex";

        giftMusic.play().catch(() => { });

        loadGift(index);

        initScratch();

    });

});

// ===============================
// Close
// ===============================

closeBtn.onclick = () => {

    popup.style.display = "none";

    shareBox.style.display = "none";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

};

// ===============================
// Load Gift
// ===============================

function loadGift(index) {

    giftContent.innerHTML = `

<h1>${giftData[index].title}</h1>

<img src="${giftData[index].image}">

<p>${giftData[index].message}</p>

`;

}

// ===============================
// Scratch Card
// ===============================

function initScratch() {

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.globalCompositeOperation = "source-over";

    ctx.fillStyle = "#b0b0b0";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    ctx.font = "bold 30px Poppins";

    ctx.textAlign = "center";

    ctx.fillText(

        "Scratch Here",

        canvas.width / 2,

        canvas.height / 2

    );

}

let scratching = false;

canvas.addEventListener("mousedown", () => {

    scratching = true;

});

canvas.addEventListener("mouseup", () => {

    scratching = false;

    checkScratch();

});

canvas.addEventListener("mousemove", scratch);

canvas.addEventListener("touchstart", () => {

    scratching = true;

});

canvas.addEventListener("touchend", () => {

    scratching = false;

    checkScratch();

});

canvas.addEventListener("touchmove", scratch);

function scratch(e) {

    if (!scratching) return;

    const rect = canvas.getBoundingClientRect();

    let x, y;

    if (e.touches) {

        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;

    } else {

        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

    }

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();

    ctx.arc(x, y, 25, 0, Math.PI * 2);

    ctx.fill();

}

// ===============================
// Scratch Percentage
// ===============================

function checkScratch() {

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let transparent = 0;

    for (let i = 3; i < pixels.data.length; i += 4) {

        if (pixels.data[i] == 0) {

            transparent++;

        }

    }

    const percent =

        transparent /

        (canvas.width * canvas.height)

        * 100;

    if (percent > 60) {

        shareBox.style.display = "block";

    }

}

// ===============================
// Share
// ===============================

shareBtn.onclick = () => {

    if (navigator.share) {

        navigator.share({

            title: "Happy Birthday",

            text: "🎉 Check Out This Birthday Surprise!",

            url: window.location.href

        }).then(revealGift);

    } else {

        alert("Sharing Completed!");

        revealGift();

    }

};

// ===============================
// Reveal Gift
// ===============================

function revealGift() {

    canvas.style.display = "none";

    shareBox.style.display = "none";

    celebrate();

}

// ===============================
// Hearts
// ===============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =

        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 500);

// ===============================
// Sparkles
// ===============================

setInterval(() => {

    const star = document.createElement("div");

    star.className = "sparkle";

    star.innerHTML = "✨";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 3000);

}, 300);

// ===============================
// Celebration
// ===============================

function celebrate() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            confetti({

                particleCount: 150,

                spread: 120,

                origin: {

                    x: Math.random(),

                    y: Math.random() - 0.2

                }

            });

        }, i * 400);

    }

}


btn.addEventListener("click", () => {

    welcome.style.display = "none";

    video.style.display = "block";

    video.controls = false;

    video.muted = false;

    video.play();

    startBalloons();

    startHearts();

    startSparkles();

});
