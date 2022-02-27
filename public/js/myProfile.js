// const { redirect } = require('express/lib/response');

// const createButton = document.querySelector('#create');
// const conteiner = document.querySelector('#createDiv');

// createButton.addEventListener('click', (event) => {
//   redirect('/createRecipe');
// });

// // считываем данные из формы и отправляем fetch
// if (formRecipe) {
//   formRecipe.addEventListener('click', async (e) => {
//     console.log('hi');
//     const title = e.target.title.value;
//     const img = e.target.img.value;
//     const servings = e.target.servings.value;
//     const energy = e.target.energy.value;
//     const ingredients = e.target.ingredients.value;
//     const fat = e.target.fat.value;
//     const prot = e.target.prot.value;
//     const carb = e.target.carb.value;
//     const description = e.target.description.value;

//     const response = await fetch('/myProfile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title,
//         img,
//         servings,
//         energy,
//         ingredients,
//         fat,
//         prot,
//         carb,
//         description,
//       }),
//     });
//     console.log(response.body);
//     const responseJson = await response.json();

//     switch (response.status) {
//       case 401:
//         alert(`${responseJson.error}`);
//         break;
//       case 500:
//         alert(`${responseJson.error}`);
//         break;
//       case !200:
//         alert(`Какая-то ошибка: ${responseJson.error}`);
//         break;
//       default:
//       // window.location = '/myProfile';
//     }
//   });
// }
