import React, { Component } from 'react';
import _ from 'lodash';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTable from './components/CardTable';
import InputForm from './components/InputForm';
import Taxes from './components/Taxes';

class Card extends Component {
  state = {
    data: [],
    isVisible: false,
    name: '',
    comment: '',
    price: 0,
    tax: 0,
  }

  showForm = () => {
    const { data, isVisible, name, comment, price, tax } = this.state;
    if (isVisible) {
      this.setState({ data: data.concat([
        { id: data.length + 1, name, comment, price, tax }])
      });
    } else {
      this.setState({ name: '', comment: '', price: 0, tax: 0 });
    }
    this.setState({ isVisible: !this.state.isVisible });
  }

  setTax = (tax) => {
    this.setState({ tax: parseInt(tax.target.value) });
  }

  setName = (name) => {
    this.setState({ name: name.target.value });
  }

  setComment = (comment) => {
    this.setState({ comment: comment.target.value });
  }

  setPrice = (price) => {
    this.setState({ price: parseInt(price.target.value) });
  }

  fetchData = () => {
    return [
      { id: 1, comment: 'good', name: 'Product1', price: 10.00, tax: 19 },
      { id: 2, comment: '', name: 'Product2', price: 11.00, tax: 7 },
      { id: 3, comment: '', name: 'Product3', price: 14.35, tax: 19 }
    ];
  }

  deleteItem = (id) => {
    this.setState({ data: this.state.data.filter(item => item.id !== id) });
  }

  componentWillMount() {
    this.setState({ data: this.fetchData() });
  }


  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="card-title">Welcome</h1>
        </header>
          <div class="card-container">
            <div class="card" style={{backgroundColor: "#5bc0de"}} > CARD </div>
              <CardTable data={this.state.data} deleteItem={this.deleteItem}/>
              <div class="row">
                <div class="col-md-8">
                  {this.state.isVisible &&
                    <InputForm
                      setPrice={this.setPrice}
                      setComment={this.setComment}
                      setTax={this.setTax}
                      setName={this.setName}
                    />}
                </div>
                <div class="col-md-4">
                   <button type="button" class="btn btn-info button"
                    onClick={() => this.showForm()}> Add New Product</button>
                   <Taxes data={data} />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Card;
