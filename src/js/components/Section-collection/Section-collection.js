import "./Section-collection.css";
import childImage from "/src/assets/img/child2.jpg";
import manImage from "/src/assets/img/man2.jpg";
import womanImage from "/src/assets/img/woman2.jpg";

export function getSectionCollection() {
    const section = document.createElement("section");
    section.classList.add("section", "hero");

    const topPart = document.createElement("div");
    topPart.classList.add("hero__top");

    const bottomPart = document.createElement("div");
    bottomPart.classList.add("hero__bottom");

    const heroCard = document.createElement("div");
    heroCard.classList.add("hero__card");

    const heroCard2 = document.createElement("div");
    heroCard2.classList.add("hero__card");

    const heroCard3 = document.createElement("div");
    heroCard3.classList.add("hero__card");

    const childImg = document.createElement("img");
    childImg.classList.add("hero-card__image");
    childImg.src = childImage;

    const manImg = document.createElement("img");
    manImg.classList.add("hero-card__image");
    manImg.src = manImage;

    const womanImg = document.createElement("img");
    womanImg.classList.add("hero-card__image");
    womanImg.src = womanImage;

    const cardTitleLink = document.createElement("a");
    cardTitleLink.classList.add("hero-card__link");
    cardTitleLink.href = "/";

    const cardTitleLink2 = document.createElement("a");
    cardTitleLink2.classList.add("hero-card__link");
    cardTitleLink2.href = "/";

    const cardTitleLink3 = document.createElement("a");
    cardTitleLink3.classList.add("hero-card__link");
    cardTitleLink3.href = "/";

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("hero-card__title");
    cardTitle.textContent = "Новая коллекция";

    const cardText = document.createElement("p");
    cardText.classList.add("hero-card__text");
    cardText.textContent = "Для детей";

    const cardTitle2 = document.createElement("h4");
    cardTitle2.classList.add("hero-card__title");
    cardTitle2.textContent = "Новая коллекция";

    const cardText2 = document.createElement("p");
    cardText2.classList.add("hero-card__text");
    cardText2.textContent = "Для мужчин";

    const cardTitle3 = document.createElement("h4");
    cardTitle3.classList.add("hero-card__title");
    cardTitle3.textContent = "Новая коллекция";

    const cardText3 = document.createElement("p");
    cardText3.classList.add("hero-card__text");
    cardText3.textContent = "Для женщин";

    cardTitleLink.append(cardText, cardTitle);
    cardTitleLink2.append(cardText2, cardTitle2);
    cardTitleLink3.append(cardText3, cardTitle3);

    heroCard.append(childImg, cardTitleLink);
    heroCard2.append(manImg, cardTitleLink2);
    heroCard3.append(womanImg, cardTitleLink3);

    topPart.append(heroCard, heroCard2, heroCard3);

    section.append(topPart, bottomPart)
    return section;
}