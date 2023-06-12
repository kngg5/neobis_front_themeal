import React, { useEffect, useState } from 'react';
import '../styles/MainMeal.css';
import axios from 'axios';
import SearchMeal from './SearchMeal';




const MainMeal = () => {
    const[result, setResult]= useState([]);
    const[searchedData, setSearchedData] = useState([]);
    const[searchMeal, setSearchMeal] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
            setResult(response.data.meals[0]);
            
            
          } catch (error) {
            console.error(error);
          }
        };
        
        fetchData();
    }, []);

    
      const fetchMeal = async (e) => {
          e.preventDefault();
          try {
            const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
           
            setSearchedData(resp.data.meals);
            
          } catch (error) {
            console.error(error);
          }
      };
        
        
   
  

    return(
        <div className="mainMeal">
            <div className="container">
                <div className="mainMeal_info">
                    <h2 className="mainMeal_info-heading space">Meal of the day</h2>
                    <a href="index.html" className="mainMeal_info-meal_name space">{result.strMeal}</a>
                    <p className="mainMeal_info-category space">{result.strArea} <span>{result.strCategory}</span></p>
                </div>
                <div className="mainMealImage">
                    <img src={result.strMealThumb} alt="Main meal"/>
                </div>
            </div>  
            <div className="searchBar_block">
                <h2 className="search_bar__block-heading">Find your Meal</h2>
                <div className="search_bar">
                   <form>
                        <input type="text" name="search_text" id="search_text" value={searchMeal} onChange={(event)=> setSearchMeal(event.target.value)} placeholder="Find your meal"/>
                        <input type="submit" onClick={fetchMeal} value={'Search'} className="search_btn"/>
                   </form>
                </div>
            </div>
            {searchedData.map((searched,index) => 
                <SearchMeal search={searched} key={searchedData[index].idMeal}/>
            )}
            
        </div>    
    );
}

export default MainMeal;