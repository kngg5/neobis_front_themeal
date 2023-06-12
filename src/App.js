import React from 'react';
import './App.css';
import Header from './components/Header';
import MainMeal from './components/MainMeal';
import SearchMeal from './components/SearchMeal';
import MealDetails from './components/MealDetails';
import {Routes, Link, Route } from'react-router-dom';




function App() {
  const a = 0;
  
  return (
      <div className="App">
        <Header />
        <MainMeal />
        
        {/* <Routes>
          <Route path='/' element={<Header />}/> */}
          {/* <Route path='/mainMeal' element={<MainMeal />}/> */}
          {/* <Route path='/:id' element={<MealDetails />}/> */}
        {/* </Routes> */}
        
      </div>
    
  );
}

export default App;
