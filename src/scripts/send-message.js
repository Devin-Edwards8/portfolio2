export default function sendMessage() {
  const messagePopup = document.getElementById("message-popup");
  document
    .getElementById("message-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      document.getElementById("message-form").reset();
      messagePopup.classList.toggle("invisible");
      messageRequest(name, email, message);
      await new Promise((r) => setTimeout(r, 2000));
      messagePopup.classList.toggle("invisible");
    });
}

function messageRequest(name, email, message) {
  fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + btoa('15d720c161f9d457164591914eee7957:a3d1db702975f72d600a760e1fd5028b'),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      'Messages': [
          {
              'From': {
                  'Email': 'edwards.1779@osu.edu',
                  'Name': 'Mailjet Pilot'
              },
              'To': [
                  {
                      'Email': 'edwards.1779@osu.edu',
                      'Name': 'passenger 1'
                  }
              ],
              'Subject': 'Your email flight plan!',
              'TextPart': 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
              'HTMLPart': 'Dear passenger 1, welcome to Mailjet!May the delivery force be with you!'
          }
      ]
  })
});
}
