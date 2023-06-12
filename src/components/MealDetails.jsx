import React, { useState } from 'react';
import '../styles/MealDetails.css';
import { useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MealDetails = ({mealNumber}) => {
    const[mealDetails, setMealDetails] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealNumber}`);
            
            setMealDetails(response.data.meals[0]);
            
            
          } catch (error) {
            console.error(error);
          }
        };
        
        fetchData();
        
    }, []);


    return(
        <div className="meal_details">
            <div className="meal_details-info">
                <div className="meal_details-info__text">
                    <p className="meal_details-info__heading">{mealDetails.strMeal}</p>
                    <p className="meal_details-info__category">{mealDetails.strCategory} | {mealDetails.strArea}</p>
                    <div className="meal_details-info__ingredients">
                        
                        <p>Small Potatoes <strong>650g/1lb 8 oz</strong></p>
                        <p>Harissa Spice <strong>1 tsp</strong></p>
                        <p>olive oil <strong>2 tsp</strong></p>
                        <p>Lemon <strong>juice of half </strong></p>
                        <p>Spring onions <strong>4</strong></p>
                        <p>Rocket <strong>150g/6oz</strong></p>
                        <p>Feta <strong>80g/3oz</strong></p>
                    </div>
                </div>
                <div className="meal_details-info__img">
                    <img src={mealDetails.strMealThumb} alt="Meal"/>
                </div>
            </div>
            <div className="meal_details-instruction">
                <h2 className="meal_details-instruction__heading">Instruction</h2>
                <p className="meal_details-instruction__paragraph">{mealDetails.strInstructions}</p>
            </div>
            <a className="meal_details-youtube-btn" target='_blank' href={mealDetails.strYoutube}>Watch on Youtube</a>
        </div>
    );
}

export default MealDetails;