import React from 'react';
import '../styles/MainMeal.css';

const MainMeal = () => {
    return(
        <div className="mainMeal">
            <div class="container">
                <div class="mainMeal_info">
                    <h2 class="mainMeal_info-heading space">Meal of the day</h2>
                    <a href="#" class="mainMeal_info-meal_name space">Mince Pies</a>
                    <p class="mainMeal_info-category space">Vegetarian <span>British</span></p>
                </div>
                <div class="mainMealImage">
                    <img src="https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg" alt="Main meal image!"/>
                </div>
            </div>
            <div class="searchBar_block">
                <h2 class="search_bar__block-heading">Find your Meal</h2>
                <div class="search_bar">
                   <form>
                        <input type="text" name="search_text" id="search_text" placeholder="Find your meal"/>
                        <button type="submit" class="search_btn">Search</button>
                   </form>
            </div>
    </div>
        </div>    
    );
}

export default MainMeal;