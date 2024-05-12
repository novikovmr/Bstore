import "./basket.css";
import basketLogo from "bundle-text:/src/assets/img/basket2.svg"


export function getBasketBtn() {
    const basketBtn = document.createElement("a");
    basketBtn.classList.add("basket-btn");
    basketBtn.href = "/";
    basketBtn.innerHTML = basketLogo;

    return basketBtn;

}