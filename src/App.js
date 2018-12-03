import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeProfile from './EmployeeProfile'

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
    return {...state, salary: state.salary + 40000}
  }

  changeButtonHandler = () => {
    this.setState(this.upgradeSalary(this.state))
  }

  changeImageButtonHandler = () => {
    this.setState({...this.state, img: 'https://m-i9.fnp.com/images/pr/uae/l/i-love-you-flower-arrangement_1.jpg'})
  }

  render() {
    const coolSnippet = (
      <div>
        <h1>Hello Ironhacker! {1+1000}</h1>
        <h2>Good to see you here. My nice color is {this.myNiceColor}</h2>
      </div>
    );

    return (
      <div className="App">
        {coolSnippet}

        <EmployeeProfile nombre="javi" age={10}></EmployeeProfile>
        <EmployeeProfile nombre="luis" age={40}></EmployeeProfile>
        <EmployeeProfile nombre="devesa" age={35}></EmployeeProfile>

        <header className="App-header">
          <h1>Hola a todos! {this.state.salary}</h1>
          <button onClick={this.changeButtonHandler}>Change my state!</button>
          <button onClick={this.changeImageButtonHandler}>Change my image!</button>
          <img src={this.state.img} alt=""/>
        </header>
      </div>
    );
  }
}

export default App;
