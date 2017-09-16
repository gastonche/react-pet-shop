import React, {Component} from "react";
import './admin.css';

export default class adminIndex extends Component{
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
                                <div className="row containered">
                                    <a href="/orders" className="col-md-6 col-sm-6 big-btn pink"> Orders </a>
                                    <a href="/catalogue" className="col-md-6 col-sm-6 big-btn orange"> catalogue </a>
                                    <a href="/categories" className="col-md-6 col-sm-6 big-btn sky"> Categories </a>
                                    <a href="/categories" className="col-md-6 col-sm-6 big-btn beige"> Users </a>
                                </div>
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