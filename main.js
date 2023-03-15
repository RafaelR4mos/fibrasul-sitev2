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

const partnersSection = document.querySelector("#partners-section");
const dataSection = document.querySelector("#data-section");
const teamsSection = document.querySelector("#team-section");

const portfolioSection = document.querySelector("#portfolio-section");
const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioBulletNavParents = document.querySelector(".controls ul");
const porfolioContainer = document.querySelector(".slider");
const portfolioServices = document.querySelector(".slider section");

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
        title: "Laminação",
        subtitle: "Algum subtitulo",
        content:
            "Realizamos revestimentos anti-corrosivos, soldas em tubulações de CPVC, PP, PEAD, além de fabricações e instalações em PRFV. Temos anos de experiência com serviços envolvendo compósitos",
    },
    {
        id: 2,
        title: "Montagem de andaimes",
        subtitle: "Algum subtitulo 2",
        content:
            "Iniciamos com a realização do projeto, memorial de cálculo e ART para que, somente então, seja realizada a montagem de andaimes com tubo roll, logo após, seguimos com procedimentos de validações de projeto com os clientes",
    },
    {
        id: 3,
        title: "Montagem de equipametos",
        subtitle: "Algum subtitulo 3",
        content:
            "Iniciamos  com a realização de um projeto para a instalação de novos equipamentos. Iniciamos o procedimento de instalação juntamente com o procedimento de qualidade e constantes validações com os clientes.",
    },
    {
        id: 4,
        title: "Montagem Eletromecânica",
        subtitle: "Algum subtitulo 4",
        content:
            "Realizamos o projeto como um todo, envolvendo todas as equipes da Fibrasul e nossos parceiros. Primeiramente realizamos o projeto, logo após a fabricação, instalação dos equipamentos e durante o procedimento realizamos validações",
    },
];

const portfolioInfo = [
    {
        id: 1,
        projectTitle: "Teste 1",
        projectPeriod: "20/12/2023 à 21/12/2023",
        description:
            "1-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur.",
        beforeImgSrc: "./assets/gear-icon.svg",
        afterImgSrc: "./assets/medal-icon.svg",
        objectives: {
            objective1:
                "Uma descricao Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.",
            objective2:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            objective3:
                "2aaaaaaaLorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        hirers: {
            hirer1: "./assets/images/logos/cmpc.png",
        },
        partners: {
            partner1: "./assets/images/logos/eletromont.png",
            partner2: "./assets/images/logos/estrutural.png",
        },
    },
    {
        id: 2,
        projectTitle: "Teste 2",
        projectPeriod: "20/12/2023 à 21/12/2023",
        description:
            "2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur.",
        beforeImgSrc: "./assets/gear-icon.svg",
        afterImgSrc: "./assets/medal-icon.svg",
        objectives: {
            objective1:
                "Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.2",
            objective2:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            objective3:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        hirers: {
            hirer1: "./assets/images/logos/cmpc.png",
        },
        partners: {
            partner1: "./assets/images/logos/eletromont.png",
            partner2: "./assets/images/logos/estrutural.png",
        },
    },
    {
        id: 3,
        projectTitle: "Teste 3",
        projectPeriod: "20/12/2023 à 21/12/2023",
        description:
            "1-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur.",
        beforeImgSrc: "./assets/gear-icon.svg",
        afterImgSrc: "./assets/medal-icon.svg",
        objectives: {
            objective1:
                "aaaaaaaaaaLorem Ipsum has been the industry s standard dummy text ever since the 1500s.",
            objective2:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            objective3:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        hirers: {
            hirer1: "./assets/images/logos/cmpc.png",
        },
        partners: {
            partner1: "./assets/images/logos/eletromont.png",
            partner2: "./assets/images/logos/estrutural.png",
        },
    },
    {
        id: 4,
        projectTitle: "Teste 3",
        projectPeriod: "20/12/2023 à 30/12/2023",
        description:
            "1-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, temporibus provident ab distinctio vitae nemo omnis dignissim os maiores dolores enim magni. Quos molestiae itaque corporis autem recusandae. Eius, laborum tenetur.",
        beforeImgSrc: "./assets/gear-icon.svg",
        afterImgSrc: "./assets/medal-icon.svg",
        objectives: {
            objective1:
                "Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.",
            objective2:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            objective3:
                "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        hirers: {
            hirer1: "./assets/images/logos/cmpc.png",
        },
        partners: {
            partner1: "./assets/images/logos/eletromont.png",
            partner2: "./assets/images/logos/estrutural.png",
        },
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

function createServices(i) {
    if (i < cardInfo.length - 1) {
        let portfolioClone = portfolioServices.cloneNode(true);
        porfolioContainer.appendChild(portfolioClone);
    }
}

function insertCardContent() {
    document.querySelectorAll(".card").forEach((elem, i) => {
        const cardTitle = cardInfo[i].title;
        elem.querySelector(".card-title").innerText = cardTitle;
        const cardContent = cardInfo[i].content;
        elem.querySelector("p").innerText = cardContent;
    });
}

function insertPortfolioServicesContent() {
    document.querySelectorAll(".slider section").forEach((service, i) => {
        const serviceTitle = portfolioInfo[i].projectTitle;
        const projectPeriod = portfolioInfo[i].projectPeriod;
        const description = portfolioInfo[i].description;
        const projectObjetives = [
            portfolioInfo[i].objectives.objective1,
            portfolioInfo[i].objectives.objective2,
            portfolioInfo[i].objectives.objective3,
        ];
        const serviceImages = [
            portfolioInfo[i].afterImgSrc,
            portfolioInfo[i].beforeImgSrc,
        ];
        const hirers = [portfolioInfo[i].hirers.hirer1];
        const partners = [
            portfolioInfo[i].partners.partner1,
            portfolioInfo[i].partners.partner2,
        ];

        service.querySelector(".service-header h2").innerText = serviceTitle;
        service.querySelector(".service-header span").innerText = projectPeriod;
        service.querySelector(".service-info-container p").innerText =
            description;

        service
            .querySelectorAll(".scope-objectives ul li")
            .forEach((item, i) => {
                item.innerText = projectObjetives[i];
            });

        service
            .querySelectorAll(".after-before-pic img")
            .forEach((serviceImg, i) => {
                serviceImg.setAttribute("src", serviceImages[i]);
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

    portfolioInfo.forEach((service, i) => {
        createServices(i);
    });
    insertCardContent();
    insertPortfolioServicesContent();

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
