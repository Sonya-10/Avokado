const logButton = document.querySelector('#login');
const logOutButton = document.querySelector('#logout');
console.log(logOutButton);

if (logButton) {
  logButton.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();
    console.log('responseJson====================\n', responseJson);

    switch (response.status) {
      case 401:
        alert(responseJson.error);
        break;
      case 500:
        alert(`${responseJson.error}: Какая-то ошибка`);
        break;
      case !200:
        alert('Непонятная ошибка');
        break;
      default:
        window.location = '/';
        break;
    }
  });
}

if (logOutButton) {
  logOutButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch('/login/logout', {
      method: 'DELETE',
    });

    if (response.status !== 200) {
      alert('Что-то пошло не так');
      return;
    }

    window.location = '/';
  });
}
