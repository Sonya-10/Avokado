const putHere = document.querySelector('#putHere');
const inputForm = document.querySelector('#inputForm');

inputForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = event.target.inputText.value;
  const newData = data.split(' ').join('%20').split(',').join('%2C');
  console.log(newData);
  const app_id = '2f88bf75';
  const api_key = 'dfb21a225c801fb64233aad97e3296e9';

  const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${api_key}&nutrition-type=logging&ingr=${newData}`, {
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({ data }),
  });

  const responseJson = await response.json();
  console.log(responseJson);

  // Жиры, углеводы, белки
  const fatQuantity = responseJson.totalNutrients.FAT.quantity.toFixed(1);
  const fatDaily = responseJson.totalDaily.FAT.quantity.toFixed(1);
  const CarbQuantity = responseJson.totalNutrients.CHOCDF.quantity.toFixed(1);
  const CarbDaily = responseJson.totalDaily.CHOCDF.quantity.toFixed(1);
  const ProtQuantity = responseJson.totalNutrients.PROCNT.quantity.toFixed(1);
  const ProtDaily = responseJson.totalDaily.PROCNT.quantity.toFixed(1);

  // Холестерин, клетчатка, общий сахар
  const Cholesterol = responseJson.totalNutrients.CHOLE.quantity.toFixed(1);
  const CholesterolDaily = responseJson.totalDaily.CHOLE.quantity.toFixed(1);
  const Fiber = responseJson.totalNutrients.FIBTG.quantity.toFixed(1);
  const FiberDaily = responseJson.totalDaily.FIBTG.quantity.toFixed(1);
  const Sugar = responseJson.totalNutrients.SUGAR.quantity.toFixed(1);

  // Витамины D,Ca,Fe,K
  const vitD = responseJson.totalNutrients.VITD.quantity.toFixed(1);
  const vitDDaily = responseJson.totalDaily.VITD.quantity.toFixed(1);
  const calcium = responseJson.totalNutrients.CA.quantity.toFixed(1);
  const calciumDaily = responseJson.totalDaily.CA.quantity.toFixed(1);
  const fe = responseJson.totalNutrients.FE.quantity.toFixed(1);
  const feDaily = responseJson.totalDaily.FE.quantity.toFixed(1);
  const k = responseJson.totalNutrients.K.quantity.toFixed(1);
  const kDaily = responseJson.totalDaily.K.quantity.toFixed(1);

  putHere.innerHTML += `<div class="recipe">
  <div class="calories">
    <h5 class="h5" >Nutrition Facts</h5>
    <hr class="hr1">
    <div class="h4"><h4><b>Calories</b></h4><h4> ${responseJson.calories}</h4></div>
    <hr class="h3">
    <p class="p" >% Daily Value*</p>
    <hr class="hr">
    <div class="h4"><h6><b>Total Fat</b> ${fatQuantity}g</h6><h6><b>${fatDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6><b>Cholesterol</b> ${Cholesterol}mg</h6><h6><b>${CholesterolDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6><b>Carbohydrate</b> ${CarbQuantity}g</h6><h6><b>${CarbDaily}%</b></h6></div>
    <div class="smallhr">
      <hr class="hr">
      <div class="h4"><h6>Dietary Fiber ${Fiber}g</h6><h6><b>${FiberDaily}%</b></h6></div>
      <hr class="hr">
      <div class="h4"><h6>Total Sugars  ${Sugar}g</h6></div>
    </div>
    <hr class="hr">
    <div class="h4"><h6><b>Protein</b> ${ProtQuantity}g</h6><h6><b>${ProtDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6>Vitamin D ${vitD}g</h6><h6><b>${vitDDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6>Calcium ${calcium}g</h6><h6><b>${calciumDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6>Iron ${fe}g</h6><h6><b>${feDaily}%</b></h6></div>
    <hr class="hr">
    <div class="h4"><h6>Potassium ${k}g</h6><h6><b>${kDaily}%</b></h6></div>
    <hr class="hr">
    <div id="recipeBook"><img src="https://cdn-icons-png.flaticon.com/512/5606/5606305.png" width="40%"></div>
  </div>
</div>`;
});
