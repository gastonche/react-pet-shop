import React, {Component} from 'react';
import './pet.css';
import petService from './pets.service';

class petProfile extends Component{
    constructor(props){
        super(props);
        this.petService = new petService();
        this.state = {
            pet: {},
            related: []
        };
        this.getPet(this.props.match.params.id);
        this.addToCart = this.props.addToCart;
        console.log(this);
    }
    getPet(id){
        this.petService.getThisPet(id).then((data) => {
            this.setState({
                pet: data.pet,
                related: data.related
            }, () => {
                console.log(this.state);
            });
        });
    }

    renderPet(pet){
        if(pet){
            return(
            <div className="top-sing">
                <div className="col-md-7 single-top">	
                    <img src={pet.image} data-imagezoom="true" className="img-responsive full-image" />
                    <div className="clearfix"> </div>
                    {/* <!-- slide --> */}
                    {/* <!-- FlexSlider --> */}
                </div>	
                <div className="col-md-5 single-top-in simpleCart_shelfItem">
                    <div className="single-para ">
                        <h4>{pet.name}</h4>
                        <div className="star-on">
                            <div className="review">
                                <a href="#">product category</a>
                                
                            </div>
                        <div className="clearfix"> </div>
                        </div>
                        
                        <h5 className="item_price">$ {pet.price}</h5>
                        <p>{pet.description}</p>
                        <button className="btn" onClick={() => this.addToCart(this.state.pet)}>ADD TO CART</button>
                        
                    </div>
                </div>
                <div className="clearfix"> </div>
                        </div> )
        }
    }

    renderRelated(related){
        return (
            <div className=" bottom-product">
                {
                    related.map((item, index) => {
                        return (
                                <div className="col-md-4 bottom-cd simpleCart_shelfItem" key={index}>
                                    <div className="product-at ">
                                        <a href={"/single/"+item.id}>
                                            <img className="img-responsive related-img" src={item.image} alt=""/>
                                        <div className="pro-grid">
                                            <span className="buy-in">Buy Now</span>
                                        </div>
                                    </a>	
                                    </div>
                                    <p className="tun">{item.name}</p>
                                    <div className="ca-rt">
                                        <a href={"/single/"+item.id} className="item_add"><p className="number item_price"><i> </i>${item.price}</p></a>						
                                    </div>						
                                </div>
                        )
                    })
                }
                <div className="clearfix"> </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                <div className="grow">
                    <div className="container">
                        <h2>{this.state.pet?this.state.pet.name:""}</h2>
                    </div>
                </div>
                <div className="product">
                    <div className="container">
                        <div className="product-price1">
                            {this.renderPet(this.state.pet)}    
                            {this.renderRelated(this.state.related)}
                        </div>
                        <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        )
    }
    componentDidMount(){
        window.$(window).load(function() {
            window.$('.flexslider').flexslider({
              animation: "slide",
              controlNav: "thumbnails"
            });
        });
    }
}

export default petProfile;