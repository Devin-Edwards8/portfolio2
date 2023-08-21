export default function toggleTheme() {
    let currentTheme = "dark";
    const toggle = document.getElementById('toggle-knob');

    document.getElementById('toggle-color-scheme').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        toggle.classList.toggle('toggle-knob-forward');
        currentTheme === "dark" ? currentTheme = "light" : currentTheme = "dark";
    });
}
