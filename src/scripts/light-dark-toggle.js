function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const themedImages = document.getElementsByClassName("themed-image")

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    for(let i=0; i<themedImages.length; i++) {
        themedImages[i].classList.toggle("hidden");
    }
}

export default function themeHandler() {
    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        // set images for dark theme
        const themedImages = document.getElementsByClassName("themed-image")
        if(savedTheme == "dark") {
            for(let i=0; i<themedImages.length; i++) {
                themedImages[i].classList.toggle("hidden");
            }
        }
    });

    document.getElementById("light-toggle").addEventListener("click", toggleTheme);
    document.getElementById("dark-toggle").addEventListener("click", toggleTheme);
}
