import "./payPage.css";

import { getTitle } from "/src/js/components/PageTitle/PageTitle";

export function getPayPage() {
    const page = document.createElement("div");
    page.classList.add("page", "pay");

    const container = document.createElement("div");
    container.classList.add("container", "pay__container");

    const title = getTitle("Оплата", "pay__title");
    

    container.append(title);

    page.append(container);

    return page;
}