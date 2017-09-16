import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.component';
import petList from './pets/pets-list.component';
import Checkout from './checkout/checkout.component';
import PetProfile from "./pets/pets-profile.component";
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import cartService from './checkout/cart.service';
import adminIndex from './admin/index.admin.component';
import adminItems from "./admin/items.admin.component";
import editPet from "./admin/edit.admin.component";

import Login from './auth/login.component';
import Register from './auth/register.component';
import authService from './auth/auth.service';

class App extends Component {

  constructor(props){
    super(props);
    this.cartService = new cartService();
    this.authService = new authService();
    this.state = {
      cart: this.cartService.getCart()
    }
  }

  addToCart(item) {
    this.setState({
      cart: this.cartService.addToCart(item)
    });
  }
  
  componentDidMount(){
    new window.UISearch( document.getElementById( 'sb-search' ) );
  }

  router(){
    return (
      <BrowserRouter>
        <div className='router'>
          <Route path='/home' component={Home} />
          <Route path='/pets' component={petList} />
          <Route path='/single/:id' render={ props => <PetProfile {...props} addToCart={item => this.addToCart(item) } />}  />
          <Route path='/checkout' component={Checkout} />
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/register' component={Register} />
          <Route path='/admin' component={adminIndex} />
          <Route path='/catalogue' component={adminItems} />
          <Route path='/products/:id/edit' component={editPet} />
          </div>
      </BrowserRouter>
    )
  }
  emptyCart(){
    this.setState({cart: this.cartService.clearCart()});    
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header-top">
            <div className="container">
              <div className="social">
                <ul>
                  <li><a href="#"><i className="facebok"> </i></a></li>
                  <li><a href="#"><i className="twiter"> </i></a></li>
                  <li><a href="#"><i className="inst"> </i></a></li>
                  <li><a href="#"><i className="goog"> </i></a></li>
                    <div className="clearfix"></div>	
                </ul>
              </div>
              <div className="header-left">
              
                <div className="search-box">
                  <div id="sb-search" className="sb-search">
                    <form action="#" method="post">
                      <input className="sb-search-input" placeholder="Enter your search term..." type="search"  id="search" />
                      <input className="sb-search-submit" type="submit" value="" />
                      <span className="sb-icon-search"> </span>
                    </form>
                  </div>
                </div>
        
                <div className="ca-r">
                  <div className="cart box_1">
                    <a href="/checkout">
                    <h3> 
                      <div className="total">
                        <span className="">$ {this.state.cart.total}</span> 
                      </div>
                      <img src="/images/cart.png" alt=""/></h3>
                    </a>
                    <p><a href="javascript:;" onClick={() => this.emptyCart()} className="simpleCart_empty">
                      Empty Cart</a>
                    </p>
        
                  </div>
                </div>
                  <div className="clearfix"> </div>
              </div>
                
            </div>
            </div>
            <div className="container">
              <div className="head-top">
                <div className="logo">
                  <h1><a href="index.html">Pet Shop</a></h1>
                </div>
              <div className=" h_menu4">
                <ul className="memenu skyblue">
                <li><a className="color8" href="/home">Home</a></li>	
                <li><a className="color8" href="/pets">Shop</a></li>	
                    <li className="grid"><a className="color2" href="#">Canines</a>
                      <div className="mepanel">
                    <div className="row">
                      <div className="col1">
                        <div className="h_nav">
                          <ul>
                            <li><a href="products.html">Bedskirt</a></li>
                            <li><a href="products.html">Blanket/Throw</a></li>
                            <li><a href="products.html">Collection/Duvet</a></li>
                            <li><a href="products.html">Comforter</a></li>
                            <li><a href="products.html">Comforter Set</a></li>
                            <li><a href="products.html">Decorative Pillow</a></li>
                            <li><a href="products.html">Mattress Pad </a></li>
                            <li><a href="products.html">Mattress Topper</a></li>
                            <li><a href="products.html">Pillow</a></li>
                            <li><a href="products.html">Pillow Protector</a></li>
                            
                          </ul>	
                        </div>								
                      </div>
                      <div className="col1">
                        <div className="h_nav">
                          <ul>
                            <li><a href="products.html">Alpaca</a></li>
                            <li><a href="products.html">Cashmere</a></li>
                            <li><a href="products.html">Cotton</a></li>
                            <li><a href="products.html">Cotton Blend</a></li>
                            <li><a href="products.html">Down</a></li>
                            <li><a href="products.html">Down Alternative</a></li>
                            <li><a href="products.html">Egyptian Cotton</a></li>
                            <li><a href="products.html">Modal</a></li>
                            <li><a href="products.html">Pima Cotton</a></li>
                            <li><a href="products.html">Silk </a></li>
                            
                          </ul>		
                        </div>							
                      </div>
                      <div className="col1">
                        <div className="h_nav">
                          
                          <ul>
                            <li><a href="products.html">Bedskirt</a></li>
                            <li><a href="products.html">Blanket/Throw</a></li>
                            <li><a href="products.html">Collection/Duvet</a></li>
                            <li><a href="products.html">Comforter</a></li>
                            <li><a href="products.html">Comforter Set</a></li>
                            <li><a href="products.html">Decorative Pillow</a></li>
                            <li><a href="products.html">Mattress Pad </a></li>
                            <li><a href="products.html">Mattress Topper</a></li>
                            <li><a href="products.html">Pillow</a></li>
                            <li><a href="products.html">Pillow Protector</a></li>
                          </ul>	
                        </div>												
                      </div>
                      </div>
                    </div>
                  </li>
                <li>{( !this.authService.isLoggedIn() )?(
                            <a className="color4" href="/auth/login" >Login</a>
                            ):(
                            <a className="color4" onClick={()=>this.authService.logout()}>Log Out</a>
                            )
                    }
                  </li>				
                <li><a className="color6" href="contact.html">Contact</a></li>
                </ul> 
              </div>
                



              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {this.router()}
          <div className="footer w3layouts">
            <div className="container">
              <div className="footer-top-at w3">
          
                <div className="col-md-3 amet-sed w3l">
                  <h4>MORE INFO</h4>
                  <ul className="nav-bottom">
                      <li><a href="#">How to order</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="contact.html">Location</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Membership</a></li>	
                    </ul>	
                  </div>
                  <div className="col-md-3 amet-sed w3ls">
                    <h4>CATEGORIES</h4>
                    <ul className="nav-bottom">
                      <li><a href="#">Bed linen</a></li>
                      <li><a href="#">Cushions</a></li>
                      <li><a href="#">Duvets</a></li>
                      <li><a href="#">Pillows</a></li>
                      <li><a href="#">Protectors</a></li>	
                    </ul>
                  </div>
                  <div className="col-md-3 amet-sed agileits">
                    <h4>NEWSLETTER</h4>
                    <div className="stay agileinfo">
                      <div className="stay-left wthree">
                        <form action="#" method="post">
                          <input type="text" placeholder="Enter your email " required="" />
                        </form>
                      </div>
                      <div className="btn-1 w3-agileits">
                        <form action="#" method="post">
                          <input type="submit" value="Subscribe" />
                        </form>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                  <div className="col-md-3 amet-sed agileits-w3layouts">
                  <h4>CONTACT US</h4>
                    <p>Contrary to popular belief</p>
                    <p>The standard chunk</p>
                    <p>office :  +12 34 995 0792</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            <div className="footer-class w3-agile">
              <p>© 2017 FET 2017, Designers </p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
