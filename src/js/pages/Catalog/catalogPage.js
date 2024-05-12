import "./catalogPage.css";
import { getTitle } from "/src/js/components/PageTitle/PageTitle";

export function getCatalogPage() {
    const catalogPage = document.createElement("div");
    catalogPage.classList.add("page", "catalog");

    const container = document.createElement("div");
    container.classList.add("container", "catalog__container");

    const catalogTitle = getTitle("Каталог", "catalog__title");
    

    container.append(catalogTitle);

    catalogPage.append(container);

    return catalogPage;
}