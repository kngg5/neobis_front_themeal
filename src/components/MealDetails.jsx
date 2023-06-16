import React, { useState } from 'react';
import '../styles/MealDetails.css';
import { useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';


const MealDetails = ({mealNumber}) => {
    const[mealDetails, setMealDetails] = useState([]);
    const { id } = useParams();
    const mealIngredients = {};
    
    useEffect(() => {
        const fetchData = async () => {
           
          try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setMealDetails(response.data.meals[0]);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }, [id]);


    let entries = Object.entries(mealDetails)
    entries.forEach( (entry,index) => {
        let i = index + 1; 
        if(mealDetails[`strIngredient${i}`]) {
            mealIngredients[mealDetails[`strIngredient${i}`]] = mealDetails[`strMeasure${i}`];                      
       }          
    })
    
    return(
        <>
            <Header />
            <div className="meal_details">
                <div className="meal_details-info">
                    <div className="meal_details-info__text">
                        <p className="meal_details-info__heading">{mealDetails.strMeal}</p>
                        <p className="meal_details-info__category">{mealDetails.strCategory} | {mealDetails.strArea}</p>
                        <div className="meal_details-info__ingredients">
                            {Object.entries(mealIngredients).map(([ingredient, measure],index) => {
                                console.log(index+ingredient+measure);  
                                return (
                                    <p key={index}>{ingredient}{"  "}<strong>{"  "}{measure}</strong></p>                             
                                );                                 
                                })
                            }                          
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
        </>
    );
}

export default MealDetails;