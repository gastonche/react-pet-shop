import React, {Component} from 'react';
import cartService from './cart.service';
import './checkout.css'

class checkout extends Component{
    constructor(props){
        super(props);
        this.cartService = new cartService();
        this.state = {
            cart: this.cartService.getCart()
        }
    }
    removeItem(index){
        this.setState({cart: this.cartService.removeItem(index)});
    }
    render(){
        return (
            <div>
                <div className="grow">
                    <div className="container">
                        <h2>Checkout</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="check">	 
                        <h1>My Shopping Bag ({this.state.cart.items.length})</h1>
                        <div className="col-md-9 cart-items">
                            {this.state.cart.items.map((item, index) => (
                                <div className="cart-header" key={index}>
                                    <div className={"close item-"+index} onClick={() => this.removeItem(index)}> </div>
                                    <div className="cart-sec simpleCart_shelfItem">
                                        <div className="cart-item cyc">
                                            <img src={item.image} className="img-responsive checkout-img" alt=""/>
                                        </div>
                                        <div className="cart-item-info">
                                            <h3>{item.name}</h3>
                                            <ul className="qty">
                                                <li><p>Qty : {item.quantity}</p></li>
                                            </ul>
                                            <div className="clearfix"></div>
                                            <div>{item.description}</div>
                                        </div>	
                                    </div>
                                    <div className="clearfix"></div>
                                                                
                                </div>
                            ))}
                        </div>
                        <div className="col-md-3 cart-total">
                            <a className="continue" href="pets">Continue Shopping</a>
                            <div className="price-details">
                                <h3>Price Details</h3>
                                <span>Total</span>
                                <span className="total1">{this.state.cart.total}</span>
                                <span>Discount</span>
                                <span className="total1">---</span>
                                <span>Delivery Charges</span>
                                <span className="total1">0.00</span>
                                <div className="clearfix"></div>				 
                            </div>	
                            <ul className="total_price">
                            <li className="last_price"> <h4>TOTAL</h4></li>	
                            <li className="last_price"><span>{this.state.cart.total}</span></li>
                            <div className="clearfix"> </div>
                            </ul>
                            
                            
                            <div className="clearfix"></div>
                            <a className="order" href="#">Place Order</a>
                            <div className="total-item">
                                <h3>OPTIONS</h3>
                                <h4>COUPONS</h4>
                                <a className="cpns" href="#">Apply Coupons</a>
                                <p><a href="#">Log In</a> to use accounts - linked coupons</p>
                            </div>
                            </div>
                        
                            <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default checkout;