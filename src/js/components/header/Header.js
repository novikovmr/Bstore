import { getBasketBtn } from "/src/js/components/Basket/Basket.js";
import { getLogo } from "/src/js/components/logo/Logo.js";
import { getNavLink } from "/src/js/components/NavLink/NavLink.js";

export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const nav = document.createElement("nav");
    nav.classList.add("navigation", "header__navigation");

    const basketBtn = getBasketBtn();

    const links = {
        "catalog" : getNavLink("/", "Каталог"),
        "about" : getNavLink("/", "О нас"),
        "pay" : getNavLink("/", "Оплата"),
        "delivery" : getNavLink("/", "Доставка"),
        "basket" : basketBtn,
    }

    for (const oneLink in links) {
        nav.append(links[oneLink]);
    }

    container.append(logo, nav);

    header.append(container);

    return header;
}