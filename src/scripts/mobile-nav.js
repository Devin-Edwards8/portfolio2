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

    menu.addEventListener("pointerdown", function() {
        if(navLinks.classList.contains('hidden')) {
            navLinks.classList.toggle('hidden');
        }
        navLinks.classList.add('flex');
    });
    exit.addEventListener("pointerdown", function() {
        navLinks.classList.add('hidden');
        if(navLinks.classList.contains('flex')) {
            navLinks.classList.toggle('flex');
        }
    });
}
