const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const alert = document.querySelector('#email-sent');

loading.style.display = 'none';
alert.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    email: formData.get('email'),
    message: formData.get('message')
  };

  form.style.display = 'none';
  loading.style.display = '';
  sendEmail(data)
    .then(showResponse);
});

function sendEmail(data) {
  return fetch('/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function showResponse() {
  form.style.display = '';
  loading.style.display = 'none';
  alert.style.display = '';
}
