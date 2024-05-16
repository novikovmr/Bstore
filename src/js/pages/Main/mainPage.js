import { getTitle } from "/src/js/components/PageTitle/PageTitle.js";
import { getSlider } from "/src/js/components/Slider/slider";
import { getSectionCollection } from "/src/js/components/Section-collection/Section-collection";
import { getProgressBar } from "../../components/Scrollbar/Scrollbar";

export function getMainPage() {
    const mainPage = document.createElement("div");
    mainPage.classList.add("page", "main");

    const container = document.createElement("div");
    container.classList.add("container", "main__container");

    // const mainTitle = getTitle("Главное меню", "main__title");
    
    const slider = getSlider();

    const collectionSect = getSectionCollection();   
    

    container.append(slider, collectionSect);

    mainPage.append(container);

    return mainPage;

}