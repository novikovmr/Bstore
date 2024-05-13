import "./logo.css";
import logo from "/src/assets/img/logo.svg"



export function getLogo() {
    const logoLink = document.createElement("a");
    logoLink.classList.add("logo-link");
    logoLink.href = "/";

    const logoImg = document.createElement("img");
    logoImg.classList.add("logo");

    logoImg.src = logo;
    
    logoLink.append(logoImg);
    return logoLink;
}