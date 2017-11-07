import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './services/http-service';
import Product from './product/product';

const http = new HttpService();

class App extends Component {
		
	constructor(props) {
      super(props);
      // bind function.
      this.loadData = this.loadData.bind(this);
      // and call the function.
      this.loadData();
  }
  
  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Shop</h1>
        </header>
        <div className="container App-main">
          <div className="row">
            <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
            <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
            <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
          </div>    
        </div>
      </div>
    );
  }
}

export default App;
