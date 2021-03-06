import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './services/http-service';
import Product from './product/product';
import WishList from './wishlist/wishlist';

const http = new HttpService();

class App extends Component {
		
	constructor(props) {
      super(props);

      // initial state
      this.state = {products: []};
      // bind function.
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);
      // and call the function.
      this.loadData();
  }
  
  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      //console.log(products);
      self.setState({products: data})
    }, err => {
    });
  }

  // create function product list
  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    );

    return(list);
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Shop</h1>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
              	{this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div> 
          </div>    
        </div>
      </div>
    );
  }
}

export default App;
