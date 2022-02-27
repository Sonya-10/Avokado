const regButton = document.querySelector('#register');

regButton.addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstname = event.target.firstname.value;
  const lastname = event.target.lastname.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    }),
  });

  const responseJson = await response.json();

  switch (response.status) {
    case 401:
      alert(`${responseJson.error}`);
      break;
    case 500:
      alert(`${responseJson.error}`);
      break;
    case !200:
      alert(`Какая-то ошибка: ${responseJson.error}`);
      break;
    default:
      window.location = '/';
  }
});
