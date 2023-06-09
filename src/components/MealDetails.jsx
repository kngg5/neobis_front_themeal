import React from 'react';
import '../styles/MealDetails.css';

const MealDetails = () => {
    return(
        <div class="meal_details">
            <div class="meal_details-info">
                <div class="meal_details-info__text">
                    <p class="meal_details-info__heading">Spicy North African Potato Salad</p>
                    <p class="meal_details-info__category">Vegetarian | Moroccan</p>
                    <div class="meal_details-info__ingredients">
                        <p>Small Potatoes <strong>650g/1lb 8 oz</strong></p>
                        <p>Harissa Spice <strong>1 tsp</strong></p>
                        <p>olive oil <strong>2 tsp</strong></p>
                        <p>Lemon <strong>juice of half </strong></p>
                        <p>Spring onions <strong>4</strong></p>
                        <p>Rocket <strong>150g/6oz</strong></p>
                        <p>Feta <strong>80g/3oz</strong></p>
                    </div>
                </div>
                <div class="meal_details-info__img">
                    <img src="https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg" alt="Meal"/>
                </div>
            </div>
            <div class="meal_details-instruction">
                <h2 class="meal_details-instruction__heading">Instruction</h2>
                <p class="meal_details-instruction__paragraph">Heat the oil in a large pot. Add the onion and cook until translucent. Drain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes. In the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste. Add the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes. Season to taste with salt, pepper and lemon juice and serve hot.</p>
            </div>
            <a class="meal_details-youtube-btn" href="index.html">Watch on Youtube</a>
        </div>
    );
}

export default MealDetails;