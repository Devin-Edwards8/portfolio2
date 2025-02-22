export default function openCloseNav() {
    navLinks = document.getElementById("section-links");
    menu = document.getElementById("menu-icon");
    exit = document.getElementById("exit-icon");

    function showMenu() {
        if(navLinks.classList.contains('hidden')) {
            navLinks.classList.toggle('hidden');
        }
        navLinks.classList.add('flex');
    }

    function closeMenu() {
        navLinks.classList.add('hidden');
        if(navLinks.classList.contains('flex')) {
            navLinks.classList.toggle('flex');
        }
    }

    menu.addEventListener("click", showMenu());
    menu.addEventListener("touchstart", showMenu());
    exit.addEventListener("click", closeMenu());
    exit.addEventListener("touchstart", showMenu());
}
