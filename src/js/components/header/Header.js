import { getHeaderMenu } from "/src/js/components/Header__menu/Header__menu";
import "./Header.css"
import { getLogo } from "/src/js/components/logo/Logo.js";
import { getProgressBar } from "../Scrollbar/Scrollbar";

export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const headerMenu = getHeaderMenu();

    const progressBar = getProgressBar();

    

    container.append(logo, headerMenu);

    header.append(progressBar, container);

    return header;
}