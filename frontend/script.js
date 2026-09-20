"use strict";

/* ===== Auth / Profile ===== */
const API_URL = "https://balo-5.onrender.com";
const token = sessionStorage.getItem("token");

function redirectToLogin() {
    sessionStorage.removeItem("token");
    window.location.href = "login.html";
}
function initAuth() {
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const welcome = document.getElementById("welcome");
    const logoutBtn = document.getElementById("logout");

    fetch(`${API_URL}/api/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            if (!response.ok) throw new Error("Unauthorized");
            return response.json();
        })
        .then((data) => {
    if (welcome) {
        welcome.textContent = `Welcome, ${data.user.name} (${data.user.email})`;
    }
    // show the user's name in the login intro
    const introName = document.getElementById("introName");
    if (introName && data.user && data.user.name) {
        introName.textContent = data.user.name;
    }
})
        .catch(() => {
            redirectToLogin();
        });

    if (logoutBtn) {
        logoutBtn.addEventListener("click", redirectToLogin);
    }
}

initAuth();


const mainAgentImage = document.getElementById("main-agent");
const mainAgentImageOverlayShort = document.getElementById("main-agent-s");
const mainAgentImageOverlayBig = document.getElementById("main-agent-b");
const agentRole = document.getElementById("hero-role");
const agentDescription = document.getElementById("hero-desc");
const agentOrder = {
    1: "Maratas",
    2: "Garin",
    3: "SanJuan",
    4: "Pat",
    5: "Manansala"
};
const rolesDescription = {
    sentinel: "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
    controller: "Controllers are experts in slicing up dangerous territory to set their team up for success."
};
const agentInformations = {
    Maratas: {
        role: "Documentation",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio accusamus laborum libero facere sapiente error ducimus cum nemo ipsum quo illo aliquam corporis in. Illo repellendus fuga odio quia.",
        // fullBody: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/cypher-fb.webp",
        // fullBody_s: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/cypher-fb-S.png",
        // fullBody_b: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/cypher-fb-B.png",
        fullBody: "images/Maratas2.png",
        fullBody_s: "images/Maratas2.png",
        fullBody_b: "images/Maratas2.png",
        portrait: "images/Maratas.png",
        gradientName: "default-state",
        gradientDirection: "diagonal",
        stats: { intel: 90, stealth: 75, control: 40, utility: 65 }
    },
    Garin: {
        role: "Backend",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio accusamus laborum libero facere sapiente error ducimus cum nemo ipsum quo illo aliquam corporis in. Illo repellendus fuga odio quia.",
        // fullBody: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/omen-fb.png",
        // fullBody_s: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/omen-fb-S.png",
        // fullBody_b: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/c30c0062bd731ada4a0555503a8cf768988c2b07/omen-fb-B.png",
        fullBody: "images/Garin4.png",
        fullBody_s: "images/Garin4.png",
        fullBody_b: "images/Garin4.png",
        portrait: "images/Garin.png",
        gradientName: "omen-state",
        gradientDirection: "diagonal",
        stats: { intel: 60, stealth: 95, control: 80, utility: 50 }
    },
    SanJuan: {
        role: "Frontend UX/UI",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio accusamus laborum libero facere sapiente error ducimus cum nemo ipsum quo illo aliquam corporis in. Illo repellendus fuga odio quia.",
        // fullBody: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/eb16463e6cf4e0f2b091c0dbc9d94f3cbfffcadb/clove-fb.png",
        // fullBody_s: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/eb16463e6cf4e0f2b091c0dbc9d94f3cbfffcadb/clove-fb-S.png",
        // fullBody_b: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/eb16463e6cf4e0f2b091c0dbc9d94f3cbfffcadb/clove-fb-B.png",
        fullBody: "images/SanJuan4.png",
        fullBody_s: "images/SanJuan4.png",
        fullBody_b: "images/SanJuan4.png",
        portrait: "images/SanJuan.png",
        gradientName: "clove-state",
        gradientDirection: "custom",
        stats: { intel: 70, stealth: 60, control: 55, utility: 85 }
    },
    Pat: {
        role: "Backend",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio accusamus laborum libero facere sapiente error ducimus cum nemo ipsum quo illo aliquam corporis in. Illo repellendus fuga odio quia..",
        fullBody: "images/Pat3.png",
        fullBody_s: "images/Pat3.png",
        fullBody_b: "images/Pat3.png",
        portrait: "images/Pat.png",
        gradientName: "gekko-state",
        gradientDirection: "diagonal",
        stats: { intel: 90, stealth: 75, control: 40, utility: 65 }
    },
    Manansala: {
        role: "Documentation",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio accusamus laborum libero facere sapiente error ducimus cum nemo ipsum quo illo aliquam corporis in. Illo repellendus fuga odio quia.",
        // fullBody: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/b06cdcbc82165eb2fd35c9278239c56d2c7dc29e/gekko-fb.png",
        // fullBody_s: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/b06cdcbc82165eb2fd35c9278239c56d2c7dc29e/gekko-fb-S.png",
        // fullBody_b: "https://gist.githubusercontent.com/ga-fleury/7116052c3ca3295a206571d8bd42769f/raw/b06cdcbc82165eb2fd35c9278239c56d2c7dc29e/gekko-fb-B.png",
        fullBody: "images/Manansala2.png",
        fullBody_s: "images/Manansala2.png",
        fullBody_b: "images/Manansala2.png",
        portrait: "images/Manansala.png",
        gradientName: "gekko-state",
        gradientDirection: "diagonal",
        stats: { intel: 90, stealth: 75, control: 40, utility: 65 }
    }
};

/* ===== Mobile burger menu ===== */
const topNav = document.querySelector(".top-nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
    topNav.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", () => {
    setMenu(!topNav.classList.contains("is-open"));
});

// Close the menu after tapping a link or the logout button
navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) setMenu(false);
});

// Esc closes it
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
});

// If the window is resized back to desktop width, reset the menu
window.matchMedia("(min-width: 769px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
});

var currentAgentNumber = 1;
function updateHero() {
    mainAgentImage.src = agentInformations[agentOrder[currentAgentNumber]].fullBody;
    mainAgentImageOverlayShort.src =
        agentInformations[agentOrder[currentAgentNumber]].fullBody_s;
    mainAgentImageOverlayBig.src =
        agentInformations[agentOrder[currentAgentNumber]].fullBody_b;
    agentRole.textContent =
        agentInformations[agentOrder[currentAgentNumber]].role;
    document.querySelectorAll(".hero-name").forEach((element) => {
        element.textContent = agentOrder[currentAgentNumber];
    });
    agentDescription.textContent =
        agentInformations[agentOrder[currentAgentNumber]].description;
    document.querySelectorAll("[data-agent]").forEach((el) => {
        el.classList.remove("active-agent");
    });
    document.querySelector(`[data-agent="${agentOrder[currentAgentNumber]}"]`).classList.add("active-agent");
    granimInstance.changeState(agentInformations[agentOrder[currentAgentNumber]].gradientName);
    if (agentInformations[agentOrder[currentAgentNumber]].gradientDirection === "custom") {
        granimInstance.direction = "custom";
        granimInstance.customDirection = {
            x0: "0px",
            y0: "100%",
            x1: "100%",
            y1: "0px"
        };
    }
    else {
        granimInstance.direction = "diagonal";
    }
    updateStats();
}
const statLabels = ["intel", "stealth", "control", "utility"];

function updateStats() {
    const stats = agentInformations[agentOrder[currentAgentNumber]].stats;
    statLabels.forEach((stat) => {
        const fill = document.querySelector(`.stat-bar-fill[data-stat="${stat}"]`);
        const value = document.querySelector(`.stat-value[data-stat="${stat}"]`);
        if (fill) fill.style.width = `${stats[stat]}%`;
        if (value) value.textContent = stats[stat];
    });
}

function init() {
    for (const key in agentInformations) {
        if (agentInformations.hasOwnProperty(key)) {
            const agentPortrait = document.querySelector(`[data-agent="${key}"]`);
            agentPortrait.src = agentInformations[key].portrait;
            agentPortrait.addEventListener("click", function (event) {
                createRipple(event);
                const clickedHeroNumber = Number(getKeyByValue(agentOrder, key));
                if (clickedHeroNumber < currentAgentNumber) {
                    currentAgentNumber = clickedHeroNumber;
                    updateHero();
                    animationLeft();
                }
                if (clickedHeroNumber > currentAgentNumber) {
                    currentAgentNumber = clickedHeroNumber;
                    updateHero();
                    animationRight();
                }
            });
        }
    }
    updateHero();
}
var granimInstance = new Granim({
    element: "#gradient",
    direction: "diagonal",
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 200,
    states: {
        "default-state": {
            gradients: [["#a67963", "#171d3b"]]
        },
        "omen-state": {
            gradients: [["#0a8f91", "#142852"]]
        },
        "clove-state": {
            gradients: [["#e6d591", "#641b6b"]]
        },
        "gekko-state": {
            gradients: [["#7a943e", "#5e3839"]]
        }
    }
});
init();
function changeHeroImage(direction) {
    if (direction === "ArrowRight") {
        if (currentAgentNumber == Object.keys(agentOrder).length) {
            currentAgentNumber = 0;
        }
        currentAgentNumber++;
    }
    if (direction === "ArrowLeft") {
        if (currentAgentNumber == 1) {
            currentAgentNumber = Object.keys(agentOrder).length + 1;
        }
        currentAgentNumber--;
    }
    updateHero();
}
document.addEventListener("keydown", function (event) {
    if (document.body.classList.contains("lightbox-open")) return; // <-- add this line
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        changeHeroImage(event.key);
        if (event.key === "ArrowRight") {
            animationRight();
        }
        else if (event.key === "ArrowLeft") {
            animationLeft();
        }
    }
});
function animationLeft() {
    //targets the image behind the agent that will "jump forward"
    anime({
        targets: ".agent-fb-S",
        translateX: [
            "-54%",
            "-50%" // Final state
        ],
        easing: "spring(.5, 100, 7, 20)",
        duration: 150
    });
    //targets the image behind the agent that will create a big trail
    anime({
        targets: ".agent-fb-B",
        translateX: [
            "-68%",
            "-50%" // Final state
        ],
        easing: "spring(1, 100, 40, 0)",
        duration: 100
    });
    // targets the entire container, moving the three images at once
    anime({
        targets: ".agent-container",
        translateX: [
            "-250px",
            "0px" // Final state
        ],
        easing: "easeOutCubic",
        duration: 250
    });
}
function animationRight() {
    //targets the image behind the agent that will "jump forward"
    anime({
        targets: ".agent-fb-S",
        translateX: [
            "-46%",
            "-50%" // Final state
        ],
        easing: "spring(1, 100, 10, 20)",
        duration: 150
    });
    //targets the image behind the agent that will create a big trail
    anime({
        targets: ".agent-fb-B",
        translateX: [
            "-32%",
            "-50%" // Final state
        ],
        easing: "spring(1, 100, 40, 0)",
        duration: 100
    });
    // targets the entire container, moving the three images at once
    anime({
        targets: ".agent-container",
        translateX: [
            "250px",
            "0px" // Final state
        ],
        easing: "easeOutCubic",
        duration: 250
    });
}

// Preload every local agent image so switching agents feels instant.
// If a file can't be found, the browser console (F12) tells you exactly which path is wrong.
function preloadImages(urls) {
    urls.forEach((url) => {
        const img = new Image();
        img.onerror = () => {
            console.warn(`[Balorant] Could not load image: "${url}". Check the file name (capital letters matter) and that it is inside the images folder.`);
        };
        img.src = url;
    });
}

const imageUrls = new Set();
Object.values(agentInformations).forEach((agent) => {
    imageUrls.add(agent.fullBody);
    imageUrls.add(agent.fullBody_s);
    imageUrls.add(agent.fullBody_b);
    imageUrls.add(agent.portrait);
});
preloadImages([...imageUrls]);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function createRipple(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = rect.width * 1.4;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${rect.left + rect.width / 2 - size / 2}px`;
    ripple.style.top = `${rect.top + rect.height / 2 - size / 2}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
}


const aboutData = [
    {
        name: "Denmark Maratas",
        role: "Documentation",
        desc: "I can sleep deeply and get quality rest. I wake up feeling refreshed, focused, and ready to take on the day.",
        image: "images/Maratas3.png"
    },
    {
        name: "Edrian Garin",
        role: "Backend",
        desc: "Handles the backend logic that powers the site, focusing on structure and reliability behind the scenes.",
        image: "images/Garin4.png"
    },
    {
        name: "Romejay SanJuan",
        role: "Frontend UX/UI",
        desc: "Designs and refines the look and feel of the site, shaping how every interaction and layout comes together.",
        image: "images/SanJuan2.png"
    },
    {
        name: "Kyle Justin Pat",
        role: "Backend",
        desc: "I can do calisthenics and enjoy challenging myself physically. It helps me build strength, discipline, and endurance",
        image: "images/Pat4.png"
    },
    {
        name: "Elbert Manansala",
        role: "Documentation",
        desc: "Contributes to documentation and project notes, helping keep the whole team aligned.",
        image: "images/Manansala2.png"
    }
];

let currentAboutIndex = 0;
const aboutBg = document.getElementById("aboutBg");
const aboutName = document.getElementById("aboutName");
const aboutRole = document.getElementById("aboutRole");
const aboutDesc = document.getElementById("aboutDesc");
const aboutDots = document.getElementById("aboutDots");

function renderAbout(index, animate = true) {
    const member = aboutData[index];
    if (animate) {
        aboutBg.style.opacity = 0;
        setTimeout(() => {
            aboutBg.style.backgroundImage = `url("${member.image}")`;
            aboutBg.style.opacity = 1;
        }, 200);
    } else {
        aboutBg.style.backgroundImage = `url("${member.image}")`;
    }
    aboutName.textContent = member.name;
    aboutRole.textContent = member.role;
    aboutDesc.textContent = member.desc;

    document.querySelectorAll(".about__dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function buildAboutDots() {
    aboutData.forEach((member, i) => {
        const dot = document.createElement("button");
        dot.className = "about__dot";
        dot.textContent = i + 1;
        dot.addEventListener("click", () => {
            currentAboutIndex = i;
            renderAbout(currentAboutIndex);
        });
        aboutDots.appendChild(dot);
    });
}

document.getElementById("aboutPrev").addEventListener("click", () => {
    currentAboutIndex = (currentAboutIndex - 1 + aboutData.length) % aboutData.length;
    renderAbout(currentAboutIndex);
});

document.getElementById("aboutNext").addEventListener("click", () => {
    currentAboutIndex = (currentAboutIndex + 1) % aboutData.length;
    renderAbout(currentAboutIndex);
});

buildAboutDots();
renderAbout(currentAboutIndex, false);


/* ===== Footer ===== */
const footerYear = document.getElementById("footerYear");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Build the squad list from aboutData so names and roles only live in one place.
const footerSquad = document.getElementById("footerSquad");
if (footerSquad) {
    aboutData.forEach((member, i) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        const name = document.createElement("span");
        const role = document.createElement("span");

        link.href = "#about";
        link.dataset.role = member.role; // styles.css colors the marker by role
        name.className = "footer__member-name";
        name.textContent = member.name;
        role.className = "footer__member-role";
        role.textContent = member.role;

        // The link scrolls to About; this also switches the carousel to that member.
        link.addEventListener("click", () => {
            currentAboutIndex = i;
            renderAbout(currentAboutIndex);
        });

        link.append(name, role);
        item.appendChild(link);
        footerSquad.appendChild(item);
    });
}

/* ===== Gallery + Lightbox ===== */
// Edit this list to change the gallery. size: "big" (2x2), "tall" (1x2) or leave out for a square.
const galleryData = [
    { src: "images/Gallery1.png",   size: "big"  },
    { src: "images/Gallery5.png",         size: "big" },
    { src: "images/Gallery6.png" },
    { src: "images/Gallery2.png",       name: "Kyle Justin Pat",  role: "Backend" },
    { src: "images/Gallery3.png", size: "tall" },
    { src: "images/Gallery4.png", size: "big"  },
    { src: "images/About_Us1.png",  },
    { src: "images/Gallery7.png",   },
    { src: "images/Gallery8.png",   },
    { src: "images/Gallery9.png",   },
        { src: "images/Gallery10.png",   size: "big"  },
    { src: "images/Gallery12.png",         size: "big" },
    { src: "images/Gallery11.png" },
    { src: "images/Pat4.png",       name: "Kyle Justin Pat",  role: "Backend" },
    { src: "images/Gallery15.png",   name: "Kyle Justin Pat",  role: "Backend", size: "tall" },
    { src: "images/Gallery14.png", size: "big"  },
    { src: "images/Gallery16.png",  },
    { src: "images/Gallery13.png",   },
    { src: "images/Gallery17.png",   },
    { src: "images/Gallery18.png",   }
];

const roleColors = {
    "Documentation": "#FFA0FD",
    "Backend": "#7AE582",
    "Frontend UX/UI": "#788BFF"
};

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbName = document.getElementById("lbName");
const lbRole = document.getElementById("lbRole");
const lbCount = document.getElementById("lbCount");
let galleryIndex = 0;
let lastFocusedTile = null;

function buildGallery() {
    const observer = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 })
        : null;

    galleryData.forEach((item, i) => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "gallery__item" + (item.size ? ` gallery__item--${item.size}` : "");
        tile.style.setProperty("--accent", roleColors[item.role] || "#eaeeb2");
        tile.style.setProperty("--delay", `${(i % 4) * 0.08}s`);
        tile.setAttribute("aria-label", `View ${item.name} full size`);

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.name;
        img.loading = "lazy";

        const index = document.createElement("span");
        index.className = "gallery__index";
        index.textContent = String(i + 1).padStart(2, "0");

        const zoom = document.createElement("span");
        zoom.className = "gallery__zoom";
        zoom.setAttribute("aria-hidden", "true");
        zoom.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M8 1h5v5M6 13H1V8M13 1 8.500 5.500M1 13l4.500-4.500" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

        const caption = document.createElement("div");
        caption.className = "gallery__caption";
        const capRole = document.createElement("span");
        capRole.className = "gallery__caption-role";
        capRole.textContent = item.role;
        const capName = document.createElement("span");
        capName.className = "gallery__caption-name";
        capName.textContent = item.name;
        caption.append(capRole, capName);

        tile.append(img, index, zoom, caption);
        tile.addEventListener("click", () => openLightbox(i, tile));
        galleryGrid.appendChild(tile);

        if (observer) observer.observe(tile);
        else tile.classList.add("is-visible");
    });
}

function renderLightbox(swap = true) {
    const item = galleryData[galleryIndex];
    const apply = () => {
        lbImg.src = item.src;
        lbImg.alt = item.name;
    };
    lbName.textContent = item.name;
    lbRole.textContent = item.role;
    lbCount.textContent = `${galleryIndex + 1} / ${galleryData.length}`;

    if (swap) {
        lbImg.classList.add("is-changing");
        lbImg.onload = () => lbImg.classList.remove("is-changing");
    }
    apply();
}

function openLightbox(index, tile) {
    galleryIndex = index;
    lastFocusedTile = tile || null;
    renderLightbox(false);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    document.getElementById("lbClose").focus();
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lastFocusedTile) lastFocusedTile.focus();
}

function stepLightbox(direction) {
    galleryIndex = (galleryIndex + direction + galleryData.length) % galleryData.length;
    renderLightbox();
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lbNext").addEventListener("click", () => stepLightbox(1));

// click on the dark backdrop closes the viewer
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") stepLightbox(1);
    if (event.key === "ArrowLeft") stepLightbox(-1);
});

buildGallery();

/* ===== Login intro animation ===== */
(function playLoginIntro() {
    const root = document.documentElement;
    const intro = document.getElementById("intro");
    const fromLogin = sessionStorage.getItem("justLoggedIn") === "1";
    sessionStorage.removeItem("justLoggedIn"); // only plays once per login

     if (!intro || !fromLogin || !token) {
        root.classList.remove("intro-pending");
        return;
    }

    let done = false;
    const timers = [];
    const counters = [];

    // split the wordmark into letters so they slide up one by one
    const logo = document.getElementById("introLogo");
    const word = logo.textContent.trim();
    logo.textContent = "";
    [...word].forEach((ch) => {
        const wrap = document.createElement("span");
        wrap.className = "intro__letter-wrap";
        const letter = document.createElement("span");
        letter.className = "intro__letter";
        letter.textContent = ch;
        wrap.appendChild(letter);
        logo.appendChild(wrap);
    });

    // stat bars start empty and fill up (with a number count-up) during the reveal
    const statRows = [...document.querySelectorAll(".stat-row")].map((row) => {
        const fill = row.querySelector(".stat-bar-fill");
        const value = row.querySelector(".stat-value");
        return {
            fill,
            value,
            width: fill.style.width,
            target: parseInt(value.textContent, 10) || 0
        };
    });
    statRows.forEach((s) => {
        s.fill.style.transition = "none";
        s.fill.style.width = "0%";
        s.value.textContent = "0";
    });

    function playStats() {
        statRows.forEach((s, i) => {
            timers.push(setTimeout(() => {
                if (done) return;
                s.fill.style.transition = "width 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)";
                s.fill.style.width = s.width;
                const counter = { n: 0 };
                counters.push(anime({
                    targets: counter,
                    n: s.target,
                    round: 1,
                    duration: 900,
                    easing: "easeOutExpo",
                    update: () => { s.value.textContent = counter.n; }
                }));
            }, i * 120));
        });
    }

    function finish() {
        if (done) return;
        done = true;
        tl.pause();
        timers.forEach(clearTimeout);
        counters.forEach((c) => c.pause());
        root.classList.remove("intro-pending");
        intro.classList.add("is-done");
        // clear the inline styles the animation left behind
        document.querySelectorAll(
            ".top-nav, .agent-container, .text-wrap > *, .stats-panel .stat-row, .portrait-container"
        ).forEach((el) => {
            el.style.opacity = "";
            el.style.transform = "";
        });
        statRows.forEach((s) => { s.fill.style.transition = ""; });
        updateStats(); // make sure the bars match the current agent
    }

    const tl = anime.timeline({ easing: "easeOutExpo", complete: finish });

    tl
        // --- intro screen ---
        .add({ targets: ".intro__sweep", translateX: ["0%", "800%"], duration: 1300, easing: "easeInOutQuad" }, 0)
        .add({ targets: ".intro__kicker", opacity: [0, 1], translateY: [10, 0], duration: 600 }, 100)
        .add({ targets: ".intro__letter", translateY: ["110%", "0%"], duration: 900, delay: anime.stagger(70) }, 200)
        .add({ targets: ".intro__bar span", scaleX: [0, 1], duration: 700, delay: anime.stagger(90), easing: "easeInOutQuart" }, 800)
        .add({ targets: ".intro__welcome", opacity: [0, 1], translateY: [14, 0], duration: 700 }, 1200)
        .add({ targets: ".intro__center", opacity: [1, 0], scale: [1, 1.06], duration: 500, easing: "easeInQuad" }, 2600)

        // --- the screen splits open ---
        .add({ targets: ".intro__panel--top", translateY: ["0%", "-100%"], duration: 1000, easing: "easeInOutQuart" }, 2900)
        .add({
            targets: ".intro__panel--bottom",
            translateY: ["0%", "100%"],
            duration: 10000,
            easing: "easeInOutQuart",
            complete: () => intro.classList.add("is-done")
        }, 2900)

        // --- the hero builds in underneath ---
        .add({ targets: ".top-nav", opacity: [0, 1], duration: 800, easing: "easeOutQuad" }, 3050)
        .add({
            targets: ".agent-container",
            opacity: [0, 1],
            translateY: [80, 0],
            duration: 1100,
            begin: playStats
        }, 3000)
        .add({ targets: ".text-wrap > *", opacity: [0, 1], translateX: [60, 0], duration: 900, delay: anime.stagger(120) }, 3200)
        .add({ targets: ".stats-panel .stat-row", opacity: [0, 1], translateX: [-40, 0], duration: 800, delay: anime.stagger(100) }, 3300)
        .add({ targets: ".portrait-container", opacity: [0, 1], translateY: [40, 0], duration: 900 }, 3500);

    // Skip button and Esc jump straight to the site
    document.getElementById("introSkip").addEventListener("click", finish);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") finish();
    });
})();