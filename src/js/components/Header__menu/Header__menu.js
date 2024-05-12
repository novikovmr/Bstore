import "./Header__menu.css";
import { getBasketBtn } from "/src/js/components/Basket/Basket.js";
import { getNavLink } from "/src/js/components/NavLink/NavLink";
import { router } from "../../main";

export function getHeaderMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu", "header__menu");

    const navigation = document.createElement("nav");
    navigation.classList.add("navigation", "header__navigation");

    const basketBtn = getBasketBtn();

    const links = {
        "catalog" : getNavLink("/catalog", "Каталог"),
        "about" : getNavLink("/about", "О нас"),
        "pay" : getNavLink("/pay", "Оплата"),
        "delivery" : getNavLink("/delivery", "Доставка"),
    }

    for (const elem in links) {
        navigation.append(links[elem]);
    }

    menu.append(navigation, basketBtn);

    return menu;
}