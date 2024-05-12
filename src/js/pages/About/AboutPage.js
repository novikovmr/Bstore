import "./AboutPage.css";

import { getTitle } from "/src/js/components/PageTitle/PageTitle.js";

export function getAboutPage() {
    const aboutPage = document.createElement("div");
    aboutPage.classList.add("page", "catalog");

    const container = document.createElement("div");
    container.classList.add("container", "catalog__container");

    const aboutTitle = getTitle("О нас", "about__title");
    

    container.append(aboutTitle);

    aboutPage.append(container);

    return aboutPage;
}