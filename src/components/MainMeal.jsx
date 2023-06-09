import React, { useState } from 'react';
import '../styles/MainMeal.css';





const MainMeal = () => {

    const[image, setImage] = useState('');


    

    return(
        <div className="mainMeal">
            <div className="container">
                <div className="mainMeal_info">
                    <h2 className="mainMeal_info-heading space">Meal of the day</h2>
                    <a href="index.html" className="mainMeal_info-meal_name space">Mince Pies</a>
                    <p className="mainMeal_info-category space">Vegetarian <span>British</span></p>
                </div>
                <div className="mainMealImage">
                    <img src={image} alt="Main meal"/>
                </div>
            </div>
            <div className="searchBar_block">
                <h2 className="search_bar__block-heading">Find your Meal</h2>
                <div className="search_bar">
                   <form>
                        <input type="text" name="search_text" id="search_text" placeholder="Find your meal"/>
                        <button type="submit" className="search_btn">Search</button>
                   </form>
            </div>
    </div>
        </div>    
    );
}

export default MainMeal;