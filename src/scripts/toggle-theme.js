export default function toggleTheme() {
    let currentTheme = "dark";

    document.getElementById('toggle-color-scheme').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        currentTheme === "dark" ? currentTheme = "light" : currentTheme = "dark";
    });
}
