import { toggleNavbar } from "./modules/toggler-navbar.js";
import { initSlider } from "./modules/reviews-slider.js";
import { initPhoneMask } from "./modules/phone-mask.js";

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initPhoneMask();
    toggleNavbar();
    initSlider();
})