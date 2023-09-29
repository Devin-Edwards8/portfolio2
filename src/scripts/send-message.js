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
  fetch("https://enuts.devinedwards.xyz/mail/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'message': message 
  })
});
}
