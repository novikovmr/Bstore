import "./basketPage.css";

import { getTitle } from "/src/js/components/PageTitle/PageTitle";

export function getBasketPage() {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page");

    const container = document.createElement("div");
    container.classList.add("container", "basket__container");

    const title = getTitle("Корзина", "basket__title");
    

    container.append(title);

    page.append(container);

    return page;
}