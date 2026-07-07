const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxvGNsM31C1bC750yPF9woX2s9brOa7cBu3jRHKQMf135TBodb-I9a0aKJqPT8RkwCKIQ/exec";

const form = document.getElementById("rsvpForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: form.name.value,
      guests: form.guests.value,
      presence: form.presence.value
    };

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    alert("Спасибо! Ваш ответ отправлен.");
    form.reset();
  });
}
