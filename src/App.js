import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FoodHoc } from './components/Foods/Foods';
import './App.css';

import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path="/foods" component={FoodHoc}/>
      </Switch>
    </div>
  );
}

export default App;
