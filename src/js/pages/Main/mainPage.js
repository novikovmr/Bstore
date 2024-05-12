import { getTitle } from "/src/js/components/PageTitle/PageTitle.js";

export function getMainPage() {
    const mainPage = document.createElement("div");
    mainPage.classList.add("page", "main");

    const container = document.createElement("div");
    container.classList.add("container", "main__container");

    const mainTitle = getTitle("Главное меню", "main__title");
    

    container.append(mainTitle);

    mainPage.append(container);

    return mainPage;

}