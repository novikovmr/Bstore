import "./PageTitle.css";

export function getTitle(text, titleClass = "") {
    const title = document.createElement("h1");
    title.classList.add("title", titleClass);
    title.textContent = text;
    return title;
}