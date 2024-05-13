import "./slider.css";
import airmax from "/src/assets/img/airmax.png";
import arrowLeft from "../../../assets/icons/arrow-left.svg";

export function getSlider() {
    const slider = document.createElement("div");
    slider.classList.add("slider");

    const image1 = document.createElement("img");
    image1.classList.add("slider__image");
    image1.src = airmax;

    const image2 = document.createElement("img");
    image2.classList.add("slider__image");
    image2.src = airmax;

    const image3 = document.createElement("img");
    image3.classList.add("slider__image");
    image3.src = airmax;

    const prevButton = document.createElement("button");
    prevButton.classList.add("prev-button");
    prevButton.setAttribute('label', 'Посмотреть предыдущий слайд');
    
    prevButton.innerHTML = arrowLeft;

    slider.append(image1, image2, image3, prevButton);

    return slider;
}