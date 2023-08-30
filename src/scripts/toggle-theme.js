export default function toggleTheme() {
    let currentTheme = "dark";
    var toggle = document.getElementById('toggle-knob');
    var githubSocialLight = document.getElementById('light-github-social');
    var githubSocialDark = document.getElementById('dark-github-social');
    var linkedinSocialLight = document.getElementById('light-linkedin-social');
    var linkedinSocialDark = document.getElementById('dark-linkedin-social');
    var emailSocialLight = document.getElementById('light-email-social');
    var emailSocialDark = document.getElementById('dark-email-social');
    var programmerImageLight = document.getElementById('programmer-image-light');
    var programmerImageDark = document.getElementById('programmer-image-dark');
    var waveGap1 = document.getElementById('wave-gap-1');
    var waveGap2 = document.getElementById('wave-gap-2');
    var waveGap3 = document.getElementById('wave-gap-3');
    var waveGap4 = document.getElementById('wave-gap-4');
    var waveGap5 = document.getElementById('wave-gap-5');
    var bottomWaves = document.getElementById('bottom-waves');
    var projectButtons = document.getElementsByClassName('project-button');
    var lightPortrait = document.getElementById('light-portrait');
    var darkPortrait = document.getElementById('dark-portrait');

    document.getElementById('toggle-color-scheme').addEventListener('click', function() {
        // track current theme
        currentTheme === "dark" ? currentTheme = "light" : currentTheme = "dark";
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        // update UI
        toggle.classList.toggle('toggle-knob-forward');

        programmerImageLight.classList.toggle('invisible');
        programmerImageDark.classList.toggle('invisible');

        githubSocialDark.classList.toggle('invisible');
        githubSocialLight.classList.toggle('invisible');
        githubSocialDark.classList.toggle('social-link');
        githubSocialLight.classList.toggle('social-link');

        linkedinSocialDark.classList.toggle('invisible');
        linkedinSocialLight.classList.toggle('invisible');
        linkedinSocialDark.classList.toggle('social-link');
        linkedinSocialLight.classList.toggle('social-link');

        emailSocialDark.classList.toggle('invisible');
        emailSocialLight.classList.toggle('invisible');
        emailSocialDark.classList.toggle('social-link');
        emailSocialLight.classList.toggle('social-link');

        waveGap1.classList.toggle('light-wave-1');
        waveGap1.classList.toggle('dark-wave-1');

        waveGap2.classList.toggle('light-wave-2');
        waveGap2.classList.toggle('dark-wave-2');

        waveGap3.classList.toggle('light-wave-1');
        waveGap3.classList.toggle('dark-wave-1');

        waveGap4.classList.toggle('light-wave-1');
        waveGap4.classList.toggle('dark-wave-1');

        waveGap5.classList.toggle('light-wave-2');
        waveGap5.classList.toggle('dark-wave-2');

        bottomWaves.classList.toggle('light-page-bottom');
        bottomWaves.classList.toggle('dark-page-bottom');

        lightPortrait.classList.toggle('invisible');
        darkPortrait.classList.toggle('invisible');

        for (var i = 0; i < projectButtons.length; i++) {
            projectButtons[i].classList.toggle('dark-project-button');
        }
    });
}
