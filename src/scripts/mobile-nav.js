export default function openCloseNav() {
    navLinks = document.getElementById("section-links");
    menu = document.getElementById("menu-icon");
    exit = document.getElementById("exit-icon");

    menu.addEventListener("click", function() {
        if(navLinks.classList.contains('hidden')) {
            navLinks.classList.toggle('hidden');
        }
        navLinks.classList.add('flex');
    });

    exit.addEventListener("click", function() {
        navLinks.classList.add('hidden');
        if(navLinks.classList.contains('flex')) {
            navLinks.classList.toggle('flex');
        }
    });
}
