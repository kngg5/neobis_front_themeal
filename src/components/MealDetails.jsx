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
    let r=Object.keys(mealDetails);
    
 
    let i = 1;
    let entries = Object.entries(mealDetails)
    let data = entries.map( (index) => {
        if(mealDetails[`strIngredient${i}`]) {
            console.log(mealDetails[`strIngredient${i}`]);             
            console.log(mealDetails[`strMeasure${i}`]);
        }      
        i++;    
    });
    
    
    return(
        <>
            <Header />
            <div className="meal_details">
                <div className="meal_details-info">
                    <div className="meal_details-info__text">
                        <p className="meal_details-info__heading">{mealDetails.strMeal}</p>
                        <p className="meal_details-info__category">{mealDetails.strCategory} | {mealDetails.strArea}</p>
                        <div className="meal_details-info__ingredients">
                            { entries.map( (index) => {
                                if(mealDetails[`strIngredient${i}`]) {
                                    console.log(mealDetails[`strIngredient${i}`]);             
                                    console.log(mealDetails[`strMeasure${i}`]);
                                    return (<p>{mealDetails[`strIngredient${i}`]} <strong>{mealDetails[`strMeasure${i}`]}</strong></p>);
                                }      
                                i++;    
                            })}                          
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