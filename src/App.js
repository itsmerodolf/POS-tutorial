import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class POS extends Component {
  render() {
    return (
      <div className='my-own-pos' >
        <DrinksList/>
      </div>
    );
  }
}

class DrinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0,
      drinks: [
      {name:"Iced Caramel Macchiato",description:"coffee beverage. The name literally means stained milk", price: 120},
      {name:"Cafe Latte",description:"coffee drink made with espreso and steamed milk",  price: 120},
      {name:"Cafe Mocha",description:"coffee drink with chocolate mixed into it",  price: 120}
      ]
    }
    this.calculate = this.calculate.bind(this);
  }

  calculate(price) {
    this.setState({total: this.state.total+price});
  }

  showDetails(name) {
    alert("ordered "+name+"");
  }

  render() {
    var theThis = this;
    var drinks = this.state.drinks.map(function(drink) {
      return(
        <Drink name={drink.name} description={drink.description} price={drink.price}
        handleShow={theThis.showDetails}
        handleTotal={theThis.calculate}
         />
        );
    });
    return(
      <div>
        {drinks}
        <Total total={this.state.total}/>
      </div>
      );
    }
  }


class Total extends Component {
  render() {
    return (
      <div>
        <h3>Total: {this.props.total}</h3>
      </div>
    )
  }
}

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {amount:0};
    this.add = this.add.bind(this);
    this.show = this.show.bind(this);
    this.subtract = this.subtract.bind(this);
  }

show() {
  this.props.handleShow(this.props.name);
}

add() {
  this.setState({amount: this.state.amount +1});
  this.props.handleTotal(this.props.price);
}

subtract() {
  this.setState({amount: this.state.amount -1});
  this.props.handleTotal(-this.props.price);
}

  render() {
    return (
    <div>
      <h4> {this.props.name} </h4>

      <p>{this.props.description}</p>
      <button onClick={this.add}> + </button>
      <button onClick={this.show}> show </button>
      <button onClick={this.subtract}> - </button>
      <span> {this.props.price}</span>
      <span> (Qty: {this.state.amount} drinks) </span>
      <hr/>
    </div>
    );
  }
}

export default POS;
