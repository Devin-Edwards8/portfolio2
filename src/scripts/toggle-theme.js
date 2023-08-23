export default function toggleTheme() {
    let currentTheme = "dark";
    var toggle = document.getElementById('toggle-knob');
    var githubIconLight = document.getElementById('github-icon-light');
    var githubIconDark = document.getElementById('github-icon-dark');
    var linkedinIconLight = document.getElementById('linkedin-icon-light');
    var linkedinIconDark = document.getElementById('linkedin-icon-dark');
    var emailIconLight = document.getElementById('email-icon-light');
    var emailIconDark = document.getElementById('email-icon-dark');
    var programmerImageLight = document.getElementById('programmer-image-light');
    var programmerImageDark = document.getElementById('programmer-image-dark');

    document.getElementById('toggle-color-scheme').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        toggle.classList.toggle('toggle-knob-forward');
        programmerImageLight.classList.toggle('invisible');
        programmerImageDark.classList.toggle('invisible');
        emailIconDark.classList.toggle('invisible');
        emailIconLight.classList.toggle('invisible');
        githubIconDark.classList.toggle('invisible');
        githubIconLight.classList.toggle('invisible');
        linkedinIconDark.classList.toggle('invisible');
        linkedinIconLight.classList.toggle('invisible');
        currentTheme === "dark" ? currentTheme = "light" : currentTheme = "dark";
    });
}
