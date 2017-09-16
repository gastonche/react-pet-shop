import React, { Component } from 'react';
import petService from './pets.service';
import './pet.css';

class petList extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
        this.petService = new petService();
        this.getPets();
    }
    
    getPets(){
        this.petService.getPets().then(res => {
            this.setState({
                products: res.data
            }, () => {
                console.log(this.state);
            });
        }).catch(err => {
            console.log(err);
        });
    }
    
    renderProducts(products){
        if(products.length>0){
            return (
                products.map((item, index) => {
                    return (<div className="col-md-6 bottom-cd simpleCart_shelfItem" key={"prod-"+index}>
                        <div className="product-at ">
                            <a href={"/single/"+item.id}>
                                    <img className="img-responsive image"  src={item.image} alt="" />
                                <div className="pro-grid">
                                    <span className="buy-in">Buy Now</span>
                                </div>
                            </a>	
                        </div>
                        <p className="tun">{item.name}</p>
                        <div className="ca-rt">
                            <a href="#" className="item_add"><p className="number item_price"><i> </i>${item.price}</p></a>						
                        </div>
                        <div className="clearfix"></div>
                    </div>)
                })
            )
        }
    }

    render(){
        return (
            <div>
                <div className="grow">
                    <div className="container">
                        <h2>Products</h2>
                    </div>
                </div>
                <div className="pro-du">
                    <div className="container">
                        <div className="col-md-9 product1">
                            <div className=" bottom-product">
                                {this.renderProducts(this.state.products)}
                            </div>
                        </div>
                        <div className="col-md-3 prod-rgt">
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/l2.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/l3.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/l1.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="pr-btm">
                            <h4>What Our Client Say</h4>
                                <img className="img-responsive" src="images/pi.jpg" alt="" />
                                <h6>John</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default petList;