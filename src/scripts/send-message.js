export default function sendMessage() {
  const messagePopup = document.getElementById("message-popup");
  document
    .getElementById("message-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      document.getElementById("message-form").reset();
      messagePopup.classList.toggle("invisible");
      await new Promise((r) => setTimeout(r, 2000));
      messagePopup.classList.toggle("invisible");
    });
}
