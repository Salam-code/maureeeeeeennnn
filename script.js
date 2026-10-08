// =========================
// YOUR MESSAGE
// =========================

const messageText = `
Maureen...

I don't even know exactly when it happened,
but somewhere along the way, you became someone
I genuinely started caring about.

Till this day,I still remember what you told me...

That I made a girl who loves being alone
want to have someone around all the time.

And honestly?
You've done the same thing to me. ❤️

Somewhere along the way I started looking forward
to talking to you and simply having you around....you remember I told you you were my favourite notification....well that's a FACT ml

Ei....but you have licked my brain well oo babe😂 
No be small brain licking ngl🤣🤣...I'm saying all these jokes just to let you know that these words were carefully constructed and typed from the depth of my heart, not some Ai fabricated fake ass text cos yeahh ya boy has fallen😂😂

Anyways...what started as us talking slowly became something
I didn't want to just leave undefined.

So I decided to do this MY way 😂❤️

There's just one thing left to ask...
`;


// =========================
// GET ELEMENTS
// =========================

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");

const typewriterElement = document.getElementById("typewriter");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const heartContainer =
    document.getElementById("heart-container");


// =========================
// FLOATING HEARTS
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);
}

setInterval(createHeart, 400);


// =========================
// STEP 1 → STEP 2
// =========================

openBtn.addEventListener("click", () => {

    step1.classList.remove("active");

    step2.classList.add("active");

    startTyping();

});


// =========================
// TYPEWRITER
// =========================

let index = 0;

function startTyping() {

    typewriterElement.innerHTML = "";

    index = 0;

    typeCharacter();

}


function typeCharacter() {

    if (index < messageText.length) {

        let character =
            messageText.charAt(index);

        // Convert line breaks into HTML breaks
        if (character === "\n") {

            typewriterElement.innerHTML += "<br>";

        } else {

            typewriterElement.innerHTML += character;

        }

        index++;

        setTimeout(typeCharacter, 60);

    } else {

        continueBtn.style.display = "inline-block";

    }

}


// =========================
// STEP 2 → STEP 3
// =========================

continueBtn.addEventListener("click", () => {

    step2.classList.remove("active");

    step3.classList.add("active");

});


// =========================
// NO BUTTON
// =========================

let noClickCount = 0;

noBtn.addEventListener("click", () => {

    noClickCount++;

    // Make YES slightly bigger
    const newSize =
        1 + (noClickCount * 0.12);

    yesBtn.style.transform =
        `scale(${newSize})`;


    // Change the NO message

    if (noClickCount === 1) {

        noBtn.innerText =
            "kwerhhh....HELEI!!!😂";

    }

    else if (noClickCount === 2) {

        noBtn.innerText =
            "hell nawwww😭";

    }

    else if (noClickCount === 3) {

        noBtn.innerText =
            "Maureenn!!...BABEEEEEE!!!😂💀";

    }

    else if (noClickCount === 4) {

        noBtn.innerText =
            "Just say YES alreadyy😂❤️";

    }

    else if (noClickCount >= 5) {

        noBtn.innerText =
            "Technically you can't say NO....so just click YES😂🤣";
    }


    // Move NO button slightly

    const x =
        Math.random() * 80 - 40;

    const y =
        Math.random() * 40 - 20;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});


// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click", () => {

    yesBtn.disabled = true;

    yesBtn.innerText =
        "SHE SAID YES!!! ❤️🥳";


    // Send notification to your email

    if (typeof emailjs !== "undefined") {

        emailjs.send(
            "service_fe2y4gd",
            "template_ifj06rr",
            {
                message:
                    "Maureen accepted your proposal! ❤️🥳"
            }
        ).finally(() => {

            window.location.href =
                "success.html";

        });

    } else {

        window.location.href =
            "success.html";

    }

});