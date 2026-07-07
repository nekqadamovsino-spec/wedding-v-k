const weddingDate = new Date('2026-09-26T10:00:00+03:00');

const form = document.getElementById('rsvpForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name') || '';
    const guests = data.get('guests') || '';
    const presence = data.get('presence') || '';

    const text = `Здравствуйте! Ответ на приглашение V и K:%0A%0AФИО: ${encodeURIComponent(name)}%0AКоличество человек: ${encodeURIComponent(guests)}%0AПрисутствие: ${encodeURIComponent(presence)}`;

    window.open(`https://t.me/share/url?url=&text=${text}`, '_blank');
  });
}
