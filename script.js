const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby76RvD5_bBrh-sse3DruKMMle5Nt4sPr5psJBt6MoCcDNck6c3MOaKKGJCIworT4Xvug/exec";

const form = document.getElementById("rsvpForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: form.name.value,
      guests: form.guests.value,
      presence: form.presence.value
    };

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("Спасибо! Ваш ответ отправлен.");
        form.reset();
      } else {
        alert("Ошибка отправки.");
      }
    } catch (err) {
      alert("Ошибка соединения.");
      console.error(err);
    }
  });
}
