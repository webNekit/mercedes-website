import { toggleNavbar } from "./modules/toggler-navbar.js";
import { initSlider } from "./modules/reviews-slider.js";

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    toggleNavbar();
    initSlider();
})