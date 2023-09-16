export default function copyEmail() {
    const emailLight = document.getElementById('email-icon-light-accent');
    const emailLightFull = document.getElementById('email-icon-light-accent-full');
    const emailDark = document.getElementById('email-icon-dark-accent');
    const emailDarkFull = document.getElementById('email-icon-dark-accent-full');
    const copyPopup = document.getElementById('copy-popup');

    document.getElementById('dark-email-social').addEventListener('mouseenter', function() {
        emailDark.classList.toggle('invisible');
    })

    document.getElementById('dark-email-social').addEventListener('mouseleave', function() {
        emailDark.classList.toggle('invisible');
    })

    document.getElementById('dark-email-social').addEventListener('click', async function() {
        document.getElementById('dark-email-social').style.pointerEvents = 'none';
        navigator.clipboard.writeText('edwards.1779@osu.edu');
        copyPopup.classList.toggle('invisible');
        await new Promise(r => setTimeout(r, 2000));
        copyPopup.classList.toggle('invisible');
        document.getElementById('dark-email-social').style.pointerEvents = 'auto';
    })

    document.getElementById('light-email-social').addEventListener('mouseenter', function() {
        emailLight.classList.toggle('invisible');
    })

    document.getElementById('light-email-social').addEventListener('mouseleave', function() {
        emailLight.classList.toggle('invisible');
    })
    
    document.getElementById('light-email-social').addEventListener('click', async function() {
        document.getElementById('light-email-social').style.pointerEvents = 'none';
        navigator.clipboard.writeText('edwards.1779@osu.edu');
        copyPopup.classList.toggle('invisible');
        await new Promise(r => setTimeout(r, 2000));
        copyPopup.classList.toggle('invisible');
        document.getElementById('light-email-social').style.pointerEvents = 'auto';
    })
}
