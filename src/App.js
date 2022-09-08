import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import RecipeDetais from './RecipeDetails';
import Update from './Update';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/details/:id">
              <RecipeDetais />
            </Route>
            <Route path="/edit/:id">
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
