import React from 'react';
import '../styles/SearchMeal.css';
import { Link } from'react-router-dom';

const SearchMeal = ({search}) => {
   
    return(
      
            <Link to={`/details/${search.idMeal}`}>
                <div className="meal_list-block">
                    <img src={search.strMealThumb} alt="Meal"/>
                    <div className="meal_list-info__block">
                        <h3 className="meal_list-info_heading">{search.strMeal}</h3>
                        <p className="meal_list-info_category">{search.strCategory} | {search.strArea}</p>
                    </div>
                
                </div>
            </Link>
            
       
    );
}

export default SearchMeal;