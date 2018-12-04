import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeProfile from './EmployeeProfile'
import Card from './Card'
import Header from './Header'

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

  render() {
    const coolSnippet = (
      <div>
        <h1>Hello Ironhacker! {1 + 1000}</h1>
        <h2>Good to see you here. My nice color is {this.myNiceColor}</h2>
      </div>
    );



    const movies = [
      {
        title: "ghostbusters",
        director: "abc",
        id: 1234
      },
      {
        title: "the goonies",
        director: "cda",
        id: 2345
      },
      {
        title: "la princesa prometida",
        director: "xxx",
        id: 7777
      }
    ]

    return (
      <div className="App">
        <Header username="Dani"></Header>
        <ul>
          {movies.map((oneMovie, index) =>
            <Card key={index} title={oneMovie.title} director={oneMovie.director} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
