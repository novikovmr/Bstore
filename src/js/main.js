import Navigo from "navigo";

import { getHeader } from "/src/js/components/header/Header.js";
import { getPageContainer } from "/src/js/components/pageContainer/PageContainer.js";


const app = document.getElementById("app");

export const router = new Navigo('/');

const header = getHeader(router);
const pageContainer = getPageContainer();

router.on('/', async () => {
    pageContainer.innerHTML = "";
    const pageModuleMain = await import('/src/js/pages/Main/mainPage.js');
    const mainPage = pageModuleMain.getMainPage();
    pageContainer.append(mainPage);
})

router.on('/catalog', async () => {
    pageContainer.innerHTML = "";
    const pageModuleCatalog = await import('/src/js/pages/Catalog/catalogPage.js');
    const catalogPage = pageModuleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
})

router.on('/about', async () => {
    pageContainer.innerHTML = "";
    const pageModuleAbout = await import('/src/js/pages/About/AboutPage.js');
    const aboutPage = pageModuleAbout.getAboutPage();
    pageContainer.append(aboutPage);
})

router.on('/pay', async () => {
    pageContainer.innerHTML = "";
    const pageModulePay = await import('/src/js/pages/Pay/payPage.js');
    const payPage = pageModulePay.getPayPage();
    pageContainer.append(payPage);
})

router.on('/delivery', async () => {
    pageContainer.innerHTML = "";
    const pageModuleDelivery = await import('/src/js/pages/Delivery/deliveryPage.js');
    const deliveryPage = pageModuleDelivery.getDeliveryPage();
    pageContainer.append(deliveryPage);
})

router.on('/basket', async () => {
    pageContainer.innerHTML = "";
    const pageModuleBasket = await import('/src/js/pages/Bakset/basketPage.js');
    const basketPage = pageModuleBasket.getBasketPage();
    pageContainer.append(basketPage);
})

router.resolve();

app.append(header, pageContainer);