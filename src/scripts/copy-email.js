export default function copyEmail() {
    document.getElementById('dark-email-social').addEventListener('click', function() {
        navigator.clipboard.writeText('edwards.1779@osu.edu')
    })
    
    document.getElementById('light-email-social').addEventListener('click', function() {
        navigator.clipboard.writeText('edwards.1779@osu.edu')
    })
}
