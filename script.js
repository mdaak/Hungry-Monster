function button() {
    var input = document.getElementById("inputId").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}` )
    .then(res => res.json())
    .then(data =>displayFood(data.meals))
}




    const displayFood = foodItems => {
    const foodItemsDiv = document.getElementById("foodItems"  );
    
    foodItems.forEach(food => {
        const foodItem = document.createElement('div');

      foodItem.className="foodItem";
        const foodInfo =`
            <img src=${food.strMealThumb}>
            <h5>${food.strCategory}</h5>
            <button onclick="displayFoodDetail('${food.idMeal}')"> Click me </button>

        `
        foodItem.innerHTML = foodInfo;
        foodItemsDiv.appendChild(foodItem);              
    });
};

    const displayFoodDetail = foodItemCapture => {
    console.log(foodItemCapture);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodItemCapture}`  
    console.log(url);   
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]))
}  

const renderFoodInfo = foodIngredient=>{
    console.log(foodIngredient);
    const IngredientDiv = document.getElementById('foodDetails');
    IngredientDiv.innerHTML=`
        <ul>
       <img src=${foodIngredient.strMealThumb}>
       <li><h1>Category: ${foodIngredient.strCategory}</h1> </li> 
       <li><h3>Area:${foodIngredient.strArea } </h3> </li> 
       <li><p>Instructions:${foodIngredient.strInstructions}</p> </li>    
        </ul>
    
    `
}




   