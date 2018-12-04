import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeProfile from './EmployeeProfile'
import Toggable from './components/Toggable/Toggable'
import CheckoutBillingForm from './components/CheckoutBillingForm/CheckoutBillingForm'

class App extends React.Component {
  constructor() {
    super()

    this.myNiceColor = "red"

    //component's state init
    this.state = {
      name: 'albert',
      age: 28,
      salary: 10000,
      img: 'https://res.cloudinary.com/prestige-gifting/image/fetch/fl_progressive,q_95,e_sharpen:50,w_480/e_saturation:05/https://www.prestigeflowers.co.uk/images/NF1018.jpg'
    }
  }

  //realistic reducer
  upgradeSalary = (state) => {
    return { ...state, salary: state.salary + 40000 }
  }

  changeButtonHandler = () => {
    this.setState(this.upgradeSalary(this.state))
  }

  changeImageButtonHandler = () => {
    this.setState({ ...this.state, img: 'https://m-i9.fnp.com/images/pr/uae/l/i-love-you-flower-arrangement_1.jpg' })
  }

  submitHandler = (state) => {
    console.log('here goes your axios call!')
    console.log('passed state is')
    console.log(state)
  }

  render() {
    const coolSnippet = (
      <div>
        <h1>Hello Ironhacker! {1 + 1000}</h1>
        <h2>Good to see you here. My nice color is {this.myNiceColor}</h2>
      </div>
    );

    

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

    const ingredientsList = ingredients.map((ingredient, index) => <option key={ingredient.id}>{ingredient.name}</option> );

    return (
      <div className="App">
        <Toggable>
          <h1>This is my checkout (billing) form</h1>
          <CheckoutBillingForm submitHandler={this.submitHandler}></CheckoutBillingForm>
        </Toggable>
      </div>
    );
  }
}

export default App;
