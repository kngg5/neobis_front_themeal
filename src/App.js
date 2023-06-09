import React from 'react';
import './App.css';
import Header from './components/Header';
import MainMeal from './components/MainMeal';
import SearchMeal from './components/SearchMeal';
import MealDetails from './components/MealDetails';
import {BrowserRouter as Router, Switch, Route } from'react-router-dom';




function App() {
  const a = 0;
  
  return (
      <div className="App">
        <Header />
        <MainMeal />
        
      </div>
    
  );
}

export default App;
