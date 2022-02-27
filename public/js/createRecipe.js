const createButton = document.querySelector('#createRecipeForm');
console.log(createButton);

createButton.addEventListener('submit', async (event) => {
  console.log('hi');
  const title = event.target.title.value;
  const img = event.target.img.value;
  const servings = event.target.servings.value;
  const energy = event.target.energy.value;
  const ingredients = event.target.ingredients.value;
  const fat = event.target.fat.value;
  const prot = event.target.prot.value;
  const carb = event.target.carb.value;
  const description = event.target.description.value;

  const response = await fetch('/createRecipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      img,
      servings,
      energy,
      ingredients,
      fat,
      prot,
      carb,
      description,
    }),
  });
  console.log(response.body);
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
    // window.location = '/myProfile';
  }
});
