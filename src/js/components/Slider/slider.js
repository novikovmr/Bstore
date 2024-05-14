import "./slider.css";
import airmax from "/src/assets/img/airmax.png";
import snap from "/src/assets/img/snap.jpeg"
import bomber from "/src/assets/img/bomber.png"


export function getSlider() {
    const slider = document.createElement("div");
    slider.classList.add("slider");

    const sliderMask = document.createElement("div");
    sliderMask.classList.add("slider__mask");

    const image1 = document.createElement("img");
    image1.classList.add("slider__image");
    image1.src = airmax;

    const image2 = document.createElement("img");
    image2.classList.add("slider__image");
    image2.src = snap;

    const image3 = document.createElement("img");
    image3.classList.add("slider__image");
    image3.src = bomber;

    const prevButton = document.createElement("button");
    prevButton.classList.add("prev-button");
    prevButton.setAttribute('label', 'Посмотреть предыдущий слайд');

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-button");
    nextButton.setAttribute('label', 'Посмотреть следующий слайд');

    const leftArrow = document.createElement("i");
    leftArrow.classList.add("fa-solid", "fa-chevron-left");

    const rightArrow = document.createElement("i");;
    rightArrow.classList.add("fa-solid", "fa-chevron-right");

    const titleMask = document.createElement("div");
    titleMask.classList.add("slider__title-mask");

    const sliderTitle = document.createElement("h2");
    sliderTitle.classList.add("slider__title");
    sliderTitle.textContent = "New collection";


    const slides = [image1, image2, image3];
    const slideCount =  slides.length;
    let slideIndex = 0;

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        })
    }

    updateSlider();

    prevButton.append(leftArrow);
    nextButton.append(rightArrow);
    // sliderMask.append(image1, image2, image3,)
    slider.append(sliderMask, image1, image2, image3, prevButton, nextButton,  sliderTitle);

    return slider;
}