const recipeList = document.querySelector('#recipeList');
const inputForm = document.querySelector('#inputForm');

inputForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = event.target.inputText.value;
  event.target.inputText.value = '';
  // const newData = data.split(' ').join('%20').split(',').join('%2C');
  // console.log(newData);
  const app_id = 'c0b348a3';
  const api_key = '6afc50d24c7760c9f55d9966bfb7fafc';

  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${data}&app_id=${app_id}&app_key=%20${api_key}`, {
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({ data }),
  });

  const responseJson = await response.json();
  console.log(responseJson);

  recipeList.innerHTML = '';
  for (let i = 0; i < responseJson.hits.length; i++) {
    // картинка, название, ссылка, порции, калории
    const img = responseJson.hits[i].recipe.image;
    const title = responseJson.hits[i].recipe.label;
    const link = responseJson.hits[i].recipe.url;
    const servings = responseJson.hits[i].recipe.yield;
    const energy = (responseJson.hits[i].recipe.calories / servings).toFixed(0);

    // Жиры, углеводы, белки
    const fatQuantity = responseJson.hits[i].recipe.totalNutrients.FAT.quantity.toFixed(1);
    const CarbQuantity = responseJson.hits[i].recipe.totalNutrients.CHOCDF.quantity.toFixed(1);
    const ProtQuantity = responseJson.hits[i].recipe.totalNutrients.PROCNT.quantity.toFixed(1);

    recipeList.innerHTML += `<div id="justCard" class="row">
    <div id="cardRecipe" class="col s12">
      <div class="card hoverable">
        <div class="card-image">
          <img src="${img}" width="50px">
        </div>
        <div class="card-content" id="card-content">
          <span class="card-title"><h6><b>${servings} serving, ${energy} kcal</b></h6></span>
          <p>PROTEIN: ${ProtQuantity} g</p>
          <p>FAT: ${fatQuantity} g</p>
          <p>CARB: ${CarbQuantity} g</p>
        </div>
        <div class="card-action">
          <a href="${link}">${title}</a>
        </div>
      </div>
    </div>
  </div>`;
  }
});
