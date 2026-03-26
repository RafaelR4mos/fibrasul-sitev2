import "./styles/index.css";

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavToggleBtnIcon = document.querySelector(
    "#mobile-only-toggle-btn-icon"
);

//Main carousel elements
const mainCarouselBtn = document.querySelector(".carousel-btn");

//Page sections
const cardsSection = document.querySelector("#cards-section");
const cardsContainer = document.querySelector(".cards-container");

const portfolioSection = document.querySelector("#portfolio-section");
const partnersSection = document.querySelector("#partners-section");
const dataSection = document.querySelector("#data-section");
const teamsSection = document.querySelector("#team-section");

const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioBulletNavParents = document.querySelector(".controls ul");
const mainCarouselBulletNavParents = document.querySelector(
    ".main-carousel-controls ul"
);

const header = document.querySelector(".primary-header");
const headerHeight = header.offsetHeight + 32;
console.log(headerHeight);

let resizeTimer;
var portfolioSectionIndex = 0;
var mainCarouselSectionIndex = 0;

const cardInfo = [
    {
        id: 1,
        title: "Andaime",
        lead: "Serviços de andaimes como:",
        items: [
            "Montagem e desmontagem",
            "Locação de andaime",
            "Diferentes tipos de estrutura",
        ],
    },
    {
        id: 2,
        title: "Caldeiraria",
        lead: "Serviços de caldeiraria como:",
        items: [
            "Estruturas metálicas",
            "Tubulações em geral",
            "Equipamentos (NR13)",
        ],
    },
    {
        id: 3,
        title: "Laminação",
        lead: "Serviços de fibra como:",
        items: [
            "Soldagem de tubulações termoplásticas",
            "Laminações de fibra de vidro",
        ],
    },
    {
        id: 4,
        title: "Isolamento Térmico",
        lead: "Serviços de isolamento como:",
        items: ["Tubulações", "Tanques e vasos"],
    },
    {
        id: 5,
        title: "Pintura",
        lead: "Serviços de pintura como:",
        items: ["Tubulações", "Estruturas metálicas", "Tanques e vasos"],
    },
    {
        id: 6,
        title: "Civil",
        lead: "Serviços de civil como:",
        items: ["Bases civis", "Reparos e construções"],
    },
    {
        id: 7,
        title: "Elétrica",
        lead: "Serviços de elétrica como:",
        items: [
            "Painéis elétricos",
            "Luminárias",
            "Ligamentos elétricos e infraestrutura",
        ],
    },
];

function createCards(i) {
    const cards = document.querySelector(".cards-container .card");

    if (i < cardInfo.length - 1) {
        let cardsClone = cards.cloneNode(true);
        cardsContainer.appendChild(cardsClone);
    } else {
        return;
    }
}

function insertCardContent() {
    document.querySelectorAll(".card").forEach((elem, i) => {
        const cardTitle = cardInfo[i].title;
        elem.querySelector(".card-title h3").innerText = cardTitle;

        elem.querySelector(".card-lead").innerText = cardInfo[i].lead;

        const cardList = elem.querySelector(".card-list");
        cardList.innerHTML = "";
        cardInfo[i].items.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item;
            cardList.appendChild(li);
        });
    });
}

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        mobileNavToggleBtnIcon.src = "./assets/mobile-menu-close.svg";
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        mobileNavToggleBtnIcon.src = "./assets/mobile-menu.svg";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    cardInfo.forEach((card, i) => {
        createCards(i);
    });
    insertCardContent();

    cardsSection.style.paddingTop = headerHeight + "px";
    portfolioSection.style.paddingTop = headerHeight + "px";
    partnersSection.style.paddingTop = headerHeight + "px";
    dataSection.style.paddingTop = headerHeight + "px";
    teamsSection.style.paddingTop = headerHeight + "px";
});

mainCarouselBtn.addEventListener("click", moveCarouselSection);
portfolioBtn.addEventListener("click", moveCarouselSection);

document
    .querySelectorAll(".main-carousel-controls li")
    .forEach(function (indicator, ind) {
        indicator.addEventListener("click", () => {
            const slider = document.querySelector(".main-carousel-slider");
            mainCarouselSectionIndex = ind;
            document
                .querySelector(".main-carousel-controls .selected")
                .classList.remove("selected");
            indicator.classList.add("selected");
            slider.style.transform =
                "translate(" + mainCarouselSectionIndex * -25 + "%)";
        });
    });

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", () => {
        const slider = document.querySelector(".slider");
        portfolioSectionIndex = ind;
        document
            .querySelector(".controls .selected")
            .classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform =
            "translate(" + portfolioSectionIndex * -25 + "%)";
    });
});

function moveCarouselSection(event) {
    const buttonParentElementClass = event.target.parentNode.classList;
    if (buttonParentElementClass.contains("carousel-btn")) {
        console.log("alo");
        const slider = document.querySelector(".main-carousel-slider");
        mainCarouselSectionIndex =
            mainCarouselSectionIndex < 3 ? mainCarouselSectionIndex + 1 : 0;
        document
            .querySelector(".main-carousel-controls .selected")
            .classList.remove("selected");
        mainCarouselBulletNavParents.children[
            mainCarouselSectionIndex
        ].classList.add("selected");
        slider.style.transform =
            "translate(" + mainCarouselSectionIndex * -25 + "%)";
    } else {
        const slider = document.querySelector(".slider");
        portfolioSectionIndex =
            portfolioSectionIndex < 3 ? portfolioSectionIndex + 1 : 0;
        document
            .querySelector(".controls .selected")
            .classList.remove("selected");
        portfolioBulletNavParents.children[portfolioSectionIndex].classList.add(
            "selected"
        );
        slider.style.transform =
            "translate(" + portfolioSectionIndex * -25 + "%)";
    }
}

window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
