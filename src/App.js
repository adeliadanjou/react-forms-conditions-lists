import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeProfile from './EmployeeProfile'

class App extends React.Component {
  render() {
    const ingredients = [
      {
        name: "tomato",
        id: 1234
      },
      {
        name: "letuce",
        id: 2345
      },
      {
        name: "egg",
        id: 3456
      },
      {
        name: "peppers",
        id: 4567
      }
    ]

    const ingredientsList = ingredients.map((ingredient, index) => <option key={ingredient.id}>{ingredient.name}</option>);

    return (
      <div className="App">
        <select>{ingredientsList}</select>
      </div>
    );
  }
}

export default App;
