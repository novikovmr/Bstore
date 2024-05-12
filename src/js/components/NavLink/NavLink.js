

export function getNavLink(path, title = "") {
    const link = document.createElement("a");
    link.href = path;
    link.classList.add("navigation__link");
    link.textContent = title;

    return link;
}