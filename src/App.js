import React from 'react';
import './App.css';
import MainMeal from './components/MainMeal';
import MealDetails from './components/MealDetails';
import {Routes, Link, Route } from'react-router-dom';
import Header from './components/Header';




function App() {

  
  return (
      <div className="App">
        
        <Routes>
           
          <Route path='/mainmeal' element={<MainMeal />}/> 
          <Route path='/details/:id' element={<MealDetails />}/>
        </Routes>
        
      </div>
    
  );
}

export default App;
