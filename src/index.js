import openCloseNav from "./scripts/mobile-nav";
import spotlightSwitcher from "./scripts/spotlight-switcher";
import themeHandler from "./scripts/light-dark-toggle";

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => preloader.classList.add("fade-out"), 250);
        document.body.style.display = "block";
    }
});

openCloseNav();
if(window.location.href == "writing.html") {
    spotlightSwitcher();
}
themeHandler();
