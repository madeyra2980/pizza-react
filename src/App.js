import React from 'react';
import './scss/app.scss'
import PizzaBlock from './components/PizzaBlock';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
  return (
    <div className="App">
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
          <Categories/>
           <Sort/> 
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <PizzaBlock 
          price = {100}
          title = "Маргарита" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
