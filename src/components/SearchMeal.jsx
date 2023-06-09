import React from 'react';
import '../styles/SearchMeal.css';

const SearchMeal = () => {
    return(
        <div className="meal_list-block">
            <img src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="Meal"/>
            <div className="meal_list-info__block">
                <h3 className="meal_list-info_heading">Pancakes</h3>
                <p className="meal_list-info_category">Chicken | American</p>
            </div>
        </div>
    );
}

export default SearchMeal;