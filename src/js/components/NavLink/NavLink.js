import { router } from "/src/js/main.js";
import "./NavLink.css"

export function getNavLink(path, title = "") {
    const link = document.createElement("a");
    link.href = path;
    link.classList.add("navigation__link");
    link.textContent = title;

    link.addEventListener("click", function(event) {
        event.preventDefault();
        router.navigate(path);
    })

    return link;
}