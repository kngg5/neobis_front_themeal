import React from 'react';
import '../styles/SearchMeal.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MealDetails from './MealDetails';

const SearchMeal = ({search}) => {

    function getId() {
        console.log(search.idMeal);
    }
   
    return(
        <div className="meal_list-block" onClick={getId}>
            <img src={search.strMealThumb} alt="Meal"/>
            <div className="meal_list-info__block">
                <h3 className="meal_list-info_heading">{search.strMeal}</h3>
                <p className="meal_list-info_category">{search.strCategory} | {search.strArea}</p>
            </div>
            <MealDetails mealNumber={search.idMeal}/>
        </div>
    );
}

export default SearchMeal;