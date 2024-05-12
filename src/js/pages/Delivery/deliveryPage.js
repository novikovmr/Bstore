import "./deliveryPage.css";


import { getTitle } from "/src/js/components/PageTitle/PageTitle";

export function getDeliveryPage() {
    const page = document.createElement("div");
    page.classList.add("page", "pay");

    const container = document.createElement("div");
    container.classList.add("container", "delivery__container");

    const title = getTitle("Доставка", "delivery__title");
    

    container.append(title);

    page.append(container);

    return page;
}