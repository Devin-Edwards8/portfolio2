export default function highlighter() {
    var gitSocialLink = document.getElementById('github-social-link');
    var githubDarkIcon = document.getElementById('github-icon-dark');
    var githubDarkIconAccent = document.getElementById('github-icon-dark-accent');
    var githubLightIcon = document.getElementById('github-icon-light');
    var githubLightIconAccent = document.getElementById('github-icon-light-accent');
    if(document.body.classList.contains("light-theme") && gitSocialLink.matches(":hover")) {
        githubLightIcon.classList.add('invisible');
        githubLightIconAccent.classList.remove('invisible');
        githubDarkIcon.classList.add('invisible');
        githubDarkIconAccent.classList.add('invisible');
    } else if(document.body.classList.contains("light-theme")) {
        githubLightIcon.classList.remove('invisible');
        githubLightIconAccent.classList.add('invisible');
        githubDarkIcon.classList.add('invisible');
        githubDarkIconAccent.classList.add('invisible');
    } else if(document.body.classList.contains("dark-theme") && gitSocialLink.matches(":hover")) {
        githubLightIcon.classList.add('invisible');
        githubLightIconAccent.classList.add('invisible');
        githubDarkIcon.classList.add('invisible');
        githubDarkIconAccent.classList.remove('invisible');
    } else {
        githubLightIcon.classList.add('invisible');
        githubLightIconAccent.classList.add('invisible');
        githubDarkIcon.classList.remove('invisible');
        githubDarkIconAccent.classList.add('invisible');
    }
}