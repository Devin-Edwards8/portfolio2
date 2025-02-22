function showMenu(navLinks) {
    if(navLinks.classList.contains('hidden')) {
        navLinks.classList.toggle('hidden');
    }
    navLinks.classList.add('flex');
}

function closeMenu(navLinks) {
    navLinks.classList.add('hidden');
    if(navLinks.classList.contains('flex')) {
        navLinks.classList.toggle('flex');
    }
}

export default function openCloseNav() {
    const navLinks = document.getElementById("section-links");
    const menu = document.getElementById("menu-icon");
    const exit = document.getElementById("exit-icon");

    menu.addEventListener("click", function() {
        if(navLinks.classList.contains('hidden')) {
            navLinks.classList.toggle('hidden');
        }
        navLinks.classList.add('flex');
    });
    menu.addEventListener("touchstart", function() {
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
    exit.addEventListener("touchstart", function() {
        navLinks.classList.add('hidden');
        if(navLinks.classList.contains('flex')) {
            navLinks.classList.toggle('flex');
        }
    });
}
